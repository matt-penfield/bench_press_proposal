# Safe AI Usage Checklist - Bench Press Proposal Tool

**Last Updated**: 2026-08-13  
**Status**: Prototype (Client-Side Only) ⚠️ Action Required Before Production

> **Current implementation note:** The app now includes input length limits, a local-processing privacy notice, and an AI-assisted draft disclosure. File size/type validation, client-consent tracking, retention workflows, and enterprise access controls are still not implemented in the prototype; the gap descriptions below remain relevant for production delivery.

---

## 1. Input Validation & Constraints

### Current State ❌
- **No file size limits** - Users can upload arbitrarily large files, causing memory exhaustion
- **No file type validation** - Any file type accepted (security & performance risk)
- **No input length limits** - Text fields (`<textarea>`, `<input>`) have no `maxlength` constraints
- **No rate limiting** - Users can submit unlimited search requests
- **Duplicate file handling** - Only checks by name, not by content or hash

### Recommendations 🔧

Add these input constraints to `index.html`:

1. **File Upload Constraints** (before line 2177):
   - Max file size: 10 MB per file, 50 MB total
   - Allowed types: `.txt`, `.md`, `.pdf` (parse text only)
   - Max files: 5 per session
   - Warn/reject if text extraction fails

2. **Text Input Limits**:
   - Problem statement: max 2000 characters
   - Constraints field: max 1500 characters  
   - Sponsor/timeline: max 500 characters each
   - Add `maxlength` attributes to all `<textarea>` and `<input type="text">`

3. **Add Client-Side Validation Function**:

   ```javascript
   const INPUT_CONSTRAINTS = {
     problem: { maxLength: 2000, minLength: 50 },
     constraints: { maxLength: 1500 },
     sponsor: { maxLength: 500 },
     timeline: { maxLength: 500 },
     fileSize: 10 * 1024 * 1024,  // 10 MB
     fileSizeTotal: 50 * 1024 * 1024,  // 50 MB
     maxFiles: 5,
     allowedFileTypes: ['.txt', '.md', '.pdf']
   };
   
   function validateInput(field, value) {
     const constraint = INPUT_CONSTRAINTS[field];
     if (!constraint) return true;
     if (value.length > constraint.maxLength) {
       throw new Error(`${field} exceeds max length of ${constraint.maxLength}`);
     }
     if (constraint.minLength && value.length < constraint.minLength) {
       throw new Error(`${field} must be at least ${constraint.minLength} characters`);
     }
     return true;
   }
   ```

---

## 2. Output Safety & Display

### Current State ✅
- HTML escaping implemented correctly via `esc()` function
- Most user content displayed via `textContent`
- AI-generated summaries are templated, not user-generated

### Recommendations 🟢
- No changes needed; continue using `esc()` for all dynamic HTML content
- Keep using `textContent` for non-HTML content (default safe approach)

---

## 3. File Upload Handling

### Current State ❌
- Line 2675: `const text = await file.text().catch(() => '')` loads entire file into memory
- No validation of file contents before processing
- No scanning for malicious payloads or binary data in text files
- No cleanup/memory release after processing

### Recommendations 🔧

1. **Add File Type & Size Validation** (in `addFiles` function):

   ```javascript
   async function addFiles(files) {
     let totalSize = uploadedFiles.reduce((sum, f) => sum + f.size, 0);
     
     for (const file of files) {
       // Check file count limit
       if (uploadedFiles.length >= INPUT_CONSTRAINTS.maxFiles) {
         alert(`Maximum ${INPUT_CONSTRAINTS.maxFiles} files allowed`);
         break;
       }
       
       // Check individual file size
       if (file.size > INPUT_CONSTRAINTS.fileSize) {
         console.warn(`File "${file.name}" exceeds 10 MB limit, skipping`);
         continue;
       }
       
       // Check total size
       if (totalSize + file.size > INPUT_CONSTRAINTS.fileSizeTotal) {
         alert(`Total file size would exceed 50 MB limit`);
         break;
       }
       
       // Check file type
       const ext = file.name.split('.').pop().toLowerCase();
       if (!INPUT_CONSTRAINTS.allowedFileTypes.includes('.' + ext)) {
         console.warn(`File type .${ext} not allowed, skipping`);
         continue;
       }
       
       // Duplicate check (by name for now; consider SHA-256 hash later)
       if (uploadedFiles.find(f => f.name === file.name)) {
         console.warn(`File "${file.name}" already uploaded, skipping`);
         continue;
       }
       
       // Read file with timeout & size limit
       try {
         const text = await Promise.race([
           file.text(),
           new Promise((_, reject) => 
             setTimeout(() => reject(new Error('File read timeout')), 5000)
           )
         ]);
         
         // Basic validation: ensure text content (reject binary)
         if (text.length === 0) {
           console.warn(`File "${file.name}" is empty, skipping`);
           continue;
         }
         
         uploadedFiles.push({ name: file.name, size: file.size, content: text });
         totalSize += file.size;
       } catch (err) {
         console.error(`Failed to read file "${file.name}": ${err.message}`);
       }
     }
     
     renderUploadedFiles();
     updateFormState();
   }
   ```

2. **Add Memory Cleanup on Session Reset**:
   - Clear `uploadedFiles` and `formState` when navigating away or starting new search
   - Explicitly set `uploadedFiles = []` when resetting the form (line 2800+)

---

## 4. Semantic Search & Scoring

### Current State ✅
- Model inference happens client-side (no external API calls in prototype)
- Cosine similarity scoring is deterministic
- No user-influenced prompting of the model

### Recommendations 🟡
- **Before moving to backend**: Document guardrail policies for:
  - Output filtering (reject harmful content)
  - Citation accuracy checks
  - Confidentiality level enforcement (proposal data classification)

---

## 5. Draft Generation

### Current State ⚠️
- Line 3345+: Drafts are templated text assembled from selected proposals
- No AI model generates new text in the prototype
- Word export uses templated structure

### Recommendations 🔧
- When implementing LLM-based draft generation:
  - Add Bedrock Guardrails (or equivalent) to filter outputs
  - Require human review for all generated content before export
  - Add citations/source tracking for all claimed facts
  - Log all generation attempts for audit trail

---

## 6. Authentication & Authorization

### Current State ❌
- **No authentication** - Anyone with access to the app can search and export
- **No authorization checks** - No proposal-level access controls
- **No audit logging** - No record of who searched for what

### Recommendations 🔧 (For Production)

1. Add Cognito authentication (per target architecture):

   ```html
   <!-- Add auth check on page load -->
   <script>
     async function checkAuth() {
       const token = await getAuthToken(); // Cognito or Azure AD
       if (!token) window.location.href = '/login';
       // Fetch authorized proposals only
       const proposals = await fetch('/api/proposals', {
         headers: { 'Authorization': `Bearer ${token}` }
       });
     }
     checkAuth();
   </script>
   ```

2. Add role-based proposal filtering:
   - Hide/filter proposals by confidentiality level
   - Track user-proposal access in logs
   - Implement "view only" vs "export" permissions

---

## 7. Rate Limiting & Abuse Prevention

### Current State ❌
- No rate limiting on search requests
- No throttling on file uploads
- No CAPTCHA or abuse detection

### Recommendations 🔧

1. **Client-Side Rate Limiting** (until backend deployed):

   ```javascript
   const RATE_LIMITS = {
     searchRequestsPerMinute: 10,
     fileUploadsPerMinute: 5,
     exportsPerHour: 20
   };
   
   let requestCounts = {};
   
   function checkRateLimit(action) {
     const now = Date.now();
     const key = `${action}_${Math.floor(now / 60000)}`;
     requestCounts[key] = (requestCounts[key] || 0) + 1;
     
     if (requestCounts[key] > RATE_LIMITS[action + 'PerMinute']) {
       throw new Error(`Too many ${action} requests. Please wait.`);
     }
   }
   ```

2. **Server-Side Enforcement** (post-backend):
   - API Gateway rate limiting: 100 req/min per user
   - WAF rules for request size/pattern anomalies
   - CloudWatch alarms for abuse patterns

---

## 8. Data Privacy & Confidentiality

### Current State ⚠️
- No encryption of proposal data (local JSON)
- No PII detection/masking
- No data retention policy

### Recommendations 🔧

1. **Before Production**:
   - Scan proposal corpus for PII (emails, phone numbers, SSNs)
   - Implement masking or removal of detected PII
   - Add confidentiality level tags (Public, Internal, Confidential)

2. **Add to Generated Drafts**:
   - Footer: "Generated by Propel, review before sharing"
   - Add data classification disclaimer based on source proposals
   - Warn if draft contains high-confidentiality references

3. **Data Retention**:
   - Delete search logs after 90 days
   - Clear uploaded files after session ends
   - Archive exported drafts with audit trail for 2 years

---

## 9. Dependency & Model Safety

### Current State ⚠️
- Xenova model loaded from Hugging Face CDN
- No verification of model integrity (HTTPS only, no hash check)
- No fallback if model fails to load

### Recommendations 🔧

1. **Model Integrity** (line 2895):

   ```javascript
   async function loadModel() {
     if (embedder) return;
     try {
       setStatus('Loading semantic model (~30 MB)…');
       embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', { 
         dtype: 'fp32',
         // Add timeout and retry logic
       });
       
       // Verify model loaded correctly (optional: run test inference)
       const testEmbedding = await embedder(['test'], { pooling: 'mean', normalize: true });
       if (!testEmbedding.data || testEmbedding.data.length === 0) {
         throw new Error('Model loaded but produced no output');
       }
     } catch (err) {
       console.error('Model load failed:', err);
       setStatus('Failed to load model. Please refresh the page.', 'error');
       throw err;
     }
   }
   ```

2. **Fallback Strategy**:
   - If model fails to load, offer "keyword search only" mode
   - Cache model locally after first successful load
   - Implement retry with exponential backoff

---

## 10. Logging & Observability

### Current State ❌
- Only client-side console logging
- No persistent audit trail
- No monitoring of usage patterns

### Recommendations 🔧

1. **Client-Side Event Logging** (for development):

   ```javascript
   const eventLog = [];
   
   function logEvent(action, details) {
     eventLog.push({
       timestamp: new Date().toISOString(),
       action,
       details,
       userAgent: navigator.userAgent
     });
     console.log(`[${action}]`, details);
     
     // In production: send to server
     // fetch('/api/events', { method: 'POST', body: JSON.stringify({ action, details }) });
   }
   
   // Log key events:
   // - Search requests (what fields filled)
   // - File uploads (name, size)
   // - Export requests
   // - Errors
   ```

2. **Server-Side Logging** (post-backend):
   - Log all search queries + results to CloudWatch
   - Track proposal accesses by user + timestamp
   - Monitor embedding/inference latency
   - Alert on anomalies (>100 searches/hour, repeated 0-result queries, etc.)

---

## 11. Error Handling & User Feedback

### Current State ✅
- Basic error messages shown to users
- Exception details logged to console

### Recommendations 🟢

1. **Add Specific Error Messages**:

   ```javascript
   const ERROR_MESSAGES = {
     fileTooLarge: 'File exceeds 10 MB limit. Please select a smaller file.',
     tooManyFiles: 'Maximum 5 files allowed. Please remove some files.',
     modelLoadFailed: 'Search model failed to load. Try refreshing the page.',
     searchTimeout: 'Search took too long. Please try a simpler query.',
     serverError: 'Unexpected error. Please try again later.'
   };
   ```

2. **Never expose**:
   - Internal file paths
   - Model weights or model names (generic "AI model" is fine)
   - Database connection strings
   - Full stack traces to users

---

## 12. Security Headers & CSP (When Deployed)

### Recommendations 🔧
Add to server response headers:

```
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' https://cdn-release.huggingface.co; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data:; 
  font-src 'self';

X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

---

## 13. Testing & Validation

### Recommendations 🔧

1. **Unit Tests for Safety Functions**:

   ```javascript
   function testEscaping() {
     assert(esc('<script>alert("xss")</script>') === '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
     assert(esc('<img src=x onerror="alert(1)">') === '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
   }
   
   function testInputValidation() {
     assert(validateInput('problem', 'x'.repeat(2001)) throws);
     assert(validateInput('problem', 'x'.repeat(100)) passes);
   }
   ```

2. **Manual Security Review**:
   - [ ] Test with XSS payloads in search query
   - [ ] Test with oversized file uploads
   - [ ] Test with malformed/binary files
   - [ ] Test with special characters in names
   - [ ] Verify no sensitive data in console logs

---

## Checklist for Production Deployment

- [ ] All input fields have `maxlength` attributes
- [ ] File upload validation implemented (size, type, count)
- [ ] Authentication integrated (Cognito/SSO)
- [ ] Rate limiting enabled (server-side)
- [ ] Audit logging configured
- [ ] CSP and security headers deployed
- [ ] PII detection/masking implemented
- [ ] Error messages reviewed (no leaks)
- [ ] Backup/recovery plan documented
- [ ] Security incident response plan created
- [ ] Staff trained on responsible AI usage
- [ ] Legal reviewed terms of use/privacy policy

---

## References

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [Bedrock Guardrails Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')](https://cwe.mitre.org/data/definitions/79.html)
- [NIST AI Risk Management Framework](https://nvlp.mit.edu/publications/2023-erm-ai-risk-management-framework)

---

**Next Review Date**: 2026-09-13  
**Owner**: Security & AI Safety Team
