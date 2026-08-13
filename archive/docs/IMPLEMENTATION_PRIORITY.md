# Implementation Priority Guide - Safe AI Fixes

**For Bench Press Proposal Tool**

---

## Priority Levels Explained

- 🔴 **CRITICAL** - Security vulnerability or data loss risk; implement before production
- 🟠 **HIGH** - Important safeguard; implement before sharing widely
- 🟡 **MEDIUM** - Nice-to-have for robustness; implement in next sprint
- 🟢 **LOW** - Quality improvement; backlog item

---

## Immediate Actions (This Sprint)

### 🔴 CRITICAL: Input Length Limits

**File**: `index.html`  
**Effort**: 15 minutes  
**Risk if skipped**: Users can submit megabytes of text, causing crashes/DoS

**Quick fix**:

```html
<!-- Line 1970 - Add maxlength to problem field -->
<textarea id="problem" name="problem" rows="6" maxlength="2000"
  placeholder="Describe the client's core challenge…" required></textarea>

<!-- Line 2144 - Add maxlength to constraints field -->
<textarea id="constraints" name="constraints" rows="3" maxlength="1500"
  placeholder="Budget limitations, regulatory requirements…"></textarea>

<!-- Line 2105 - Add maxlength to sponsor field -->
<input type="text" id="sponsor" name="sponsor" maxlength="500"
  placeholder="e.g., VP of Product, CTO, CFO">
```

**Test**: Try pasting large text blocks; verify cutoff at limit

---

### 🔴 CRITICAL: File Size & Type Validation

**File**: `index.html` (lines 2670-2685)  
**Effort**: 30 minutes  
**Risk if skipped**: Large file uploads can exhaust browser memory; any file type accepted (malware risk)

**What to add**:
- Reject files >10 MB
- Reject files that aren't `.txt`, `.md`, or `.pdf`
- Limit to 5 files max, 50 MB total
- Add user-friendly error messages

**Suggested code block to insert** (after line 2669):

```javascript
const UPLOAD_CONSTRAINTS = {
  maxFileSize: 10 * 1024 * 1024,      // 10 MB
  maxTotalSize: 50 * 1024 * 1024,     // 50 MB
  maxFiles: 5,
  allowedTypes: ['.txt', '.md', '.pdf']
};

async function addFiles(files) {
  let currentTotal = uploadedFiles.reduce((sum, f) => sum + f.size, 0);
  
  for (const file of files) {
    // Check file count
    if (uploadedFiles.length >= UPLOAD_CONSTRAINTS.maxFiles) {
      alert(`Maximum ${UPLOAD_CONSTRAINTS.maxFiles} files allowed. Please remove some before adding more.`);
      break;
    }
    
    // Check individual file size
    if (file.size > UPLOAD_CONSTRAINTS.maxFileSize) {
      console.warn(`"${esc(file.name)}" is too large (${formatBytes(file.size)}, max 10 MB). Skipping.`);
      continue;
    }
    
    // Check total size
    if (currentTotal + file.size > UPLOAD_CONSTRAINTS.maxTotalSize) {
      alert(`Adding this file would exceed the 50 MB total limit. Please remove files or try a smaller one.`);
      break;
    }
    
    // Check file type
    const ext = '.' + file.name.split('.').pop().toLowerCase();
    if (!UPLOAD_CONSTRAINTS.allowedTypes.includes(ext)) {
      console.warn(`File type "${ext}" not supported. Only .txt, .md, .pdf allowed. Skipping "${esc(file.name)}".`);
      continue;
    }
    
    // Duplicate check
    if (uploadedFiles.find(f => f.name === file.name)) {
      console.warn(`"${esc(file.name)}" already uploaded. Skipping.`);
      continue;
    }
    
    // Safe file read with timeout
    try {
      const text = await Promise.race([
        file.text(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
      ]);
      
      if (!text || text.trim().length === 0) {
        console.warn(`"${esc(file.name)}" appears to be empty or unreadable. Skipping.`);
        continue;
      }
      
      uploadedFiles.push({ name: file.name, size: file.size, content: text });
      currentTotal += file.size;
    } catch (err) {
      console.error(`Failed to read "${esc(file.name)}": ${err.message}`);
    }
  }
  
  renderUploadedFiles();
  updateFormState();
}
```

**Test**:
- Upload 15 MB file → should reject
- Upload 6 files → should reject 6th
- Upload `.exe` file → should reject
- Upload empty `.txt` → should reject

---

### 🟠 HIGH: Error Message Safety

**File**: `index.html`  
**Effort**: 20 minutes  
**Risk if skipped**: Error messages could leak internal details to users

**What to check**:
1. Search for all error displays (lines with `setStatus('...error')`
2. Ensure error messages don't include:
   - File system paths
   - Model names/versions (generic "AI model" is OK)
   - Stack traces
   - API URLs

**Example fix** (line 3596):

```javascript
// BEFORE (too specific):
document.getElementById('results-list').innerHTML = 
  `<div style="...">Search failed: ${esc(err.message)}</div>`;

// AFTER (generic):
document.getElementById('results-list').innerHTML = 
  `<div style="...">Search failed. Please try again or refine your query.</div>`;
console.error('[DEBUG] Search error:', err); // Only in console
```

---

## Next Sprint (HIGH Priority)

### 🟠 HIGH: Add Session Cleanup

**File**: `index.html`  
**Effort**: 15 minutes  
**Risk if skipped**: Uploaded files stay in memory even after user leaves page

**What to add**:
- Clear `uploadedFiles` array when user navigates away
- Add "Clear All" button to manually clear files
- Add session timeout (auto-clear after 30 min idle)

```javascript
// Clear on page unload
window.addEventListener('beforeunload', () => {
  uploadedFiles = [];
});

// Add clear button near upload zone
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear Uploaded Files';
clearBtn.onclick = () => {
  uploadedFiles = [];
  renderUploadedFiles();
};
```

---

### 🟠 HIGH: Add Data Retention Notice

**File**: `index.html` (top of page)  
**Effort**: 10 minutes  
**Risk if skipped**: Users don't know uploaded files are stored in memory

**What to add**:

```html
<div style="background: #fef3c7; border: 1px solid #fcd34d; padding: 12px; border-radius: 6px; margin-bottom: 20px;">
  <strong>⚠️ Privacy Notice:</strong> Uploaded files and search queries are processed entirely in your browser. 
  No data is sent to any server. Files are cleared when you close this page.
</div>
```

---

### 🟡 MEDIUM: Add Rate Limiting

**File**: `index.html`  
**Effort**: 25 minutes  
**Risk if skipped**: User could spam search requests; not a major issue for prototype but important for production

**What to add**:

```javascript
const RATE_LIMITS = {
  searchPerMinute: 15,
  exportsPerHour: 20
};

let lastSearchTime = null;
let searchCount = 0;

function checkSearchRateLimit() {
  const now = Date.now();
  
  // Reset counter every minute
  if (lastSearchTime && (now - lastSearchTime) > 60000) {
    searchCount = 0;
  }
  
  if (searchCount >= RATE_LIMITS.searchPerMinute) {
    throw new Error('Please wait before searching again.');
  }
  
  searchCount++;
  lastSearchTime = now;
}
```

---

## Later This Quarter (MEDIUM Priority)

### 🟡 MEDIUM: Audit Logging

**File**: Create new file `docs/audit-logging.md` or add to code  
**Effort**: 45 minutes  
**Risk if skipped**: No record of who searched for what (important for compliance)

**What to track**:
- Search queries (anonymized)
- Files uploaded (name, size, type)
- Proposals exported
- Errors/failures
- Timestamps

---

### 🟡 MEDIUM: PII Detection

**File**: Add validation function  
**Effort**: 1-2 hours  
**Risk if skipped**: Proposals might contain sensitive data (SSNs, emails, etc.)

**What to detect**:
- Email addresses
- Phone numbers
- US SSN pattern
- Credit card patterns
- IP addresses

---

## Not Urgent (LOW Priority)

### 🟢 LOW: Security Headers

**When**: Post-deployment to production  
**What**: Add HTTP security headers (CSP, X-Frame-Options, etc.)

### 🟢 LOW: Model Integrity Checks

**When**: If model is ever hosted self-managed  
**What**: Add hash verification of downloaded model

### 🟢 LOW: Compliance Documentation

**When**: Before enterprise rollout  
**What**: GDPR DPA, SOC 2, security audit results

---

## Recommended Implementation Timeline

| Phase | Duration | Work |
| ------- | ---------- | ------ |
| **Phase 1: Security Fixes** | 1 day | Input limits, file validation, error messages |
| **Phase 2: Data Hygiene** | 1 day | Session cleanup, privacy notice, audit logging foundation |
| **Phase 3: Rate Limiting** | 1 day | Anti-abuse controls |
| **Phase 4: Testing** | 1 day | Security test suite, manual penetration testing |
| **Phase 5: Compliance** | 3 days | Documentation, audit readiness, privacy review |

**Total**: ~2 weeks for full safe AI compliance

---

## How to Prioritize If Short on Time

**Must Have (Minimum for sharing):**
1. Input length limits (10 min)
2. File size/type validation (30 min)
3. Error message safety (20 min)
4. Privacy notice (10 min)

→ **Total: ~70 minutes**

**Should Have (Before production):**
- Session cleanup (15 min)
- Rate limiting (25 min)
- Audit logging (45 min)

→ **Total: ~85 minutes**

---

## Next Steps

1. ✅ **You are here**: Reviewed safe AI practices (this document)
2. 📋 **Pick fixes**: Review list above; decide which to implement
3. 🔧 **Implement**: Use code snippets provided
4. ✔️ **Test**: Manual testing checklist for each fix
5. 📝 **Document**: Update README with security note
6. 🚀 **Deploy**: Follow deployment security checklist

---

**Questions?** Review `SAFE_AI_USAGE.md` for detailed explanations.
