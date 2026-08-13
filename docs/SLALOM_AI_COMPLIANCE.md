# Slalom AI Acceptable Use Policy - Compliance Checklist

**Application**: Bench Press Proposal Tool  
**Audit Date**: 2026-08-13  
**Policy Version**: 2.2 (October 2025)  
**Status**: ⚠️ PARTIAL COMPLIANCE - Gaps Identified

---

## Executive Summary

The Bench Press app has a strong foundation for responsible AI use:
- ✅ No external LLM calls (local inference only)
- ✅ No proprietary models (open-source Xenova/all-MiniLM-L6-v2)
- ✅ Client-side processing (data doesn't leave browser)
- ✅ Proper HTML escaping and output safety

**But 5 gaps need addressing before client delivery:**
1. Missing AI transparency/disclaimer to users
2. No data handling statement (reassuring clients data stays local)
3. No documented quality control process
4. Missing terms & conditions compliance documentation
5. No client consent framework for delivery engagements

---

## Slalom Policy Requirement Mapping

### 1. Core Responsible AI Principles

#### 1.1 AI for All, A Human-Centric Approach
**Policy**: Solutions should augment human capabilities, be ethical, equitable, and promote AI for good.

**Current Implementation**:
- ✅ **Augments human capability**: Proposal search is a recommendation engine; humans select which proposals to use
- ✅ **Ethical**: No bias mitigation mechanisms built in, but semantic matching doesn't have known fairness issues
- ⚠️ **Equitable**: No documented bias testing or mitigation for proposal corpus
- ✅ **AI for Good**: Tool helps proposal teams work faster and more accurately

**Gaps**:
- [ ] No documented bias mitigation strategy for the proposal corpus
- [ ] No accessibility compliance statement (WCAG 2.1 AA)

**Recommendation**: Add a section to README documenting that:
- The tool is a recommendation system, not a decision-maker
- Final proposal selection is a human decision
- Consider adding bias audit for proposal corpus (check for industry/demographic overrepresentation)

---

#### 1.2 Privacy and Data Security
**Policy**: Industry-leading privacy & data security practices, informed consent, robust data governance.

**Current Implementation**:
- ✅ **Security & Privacy First**: No external data transmission; all processing in-browser
- ⚠️ **Consent**: No explicit data handling notification shown to users
- ✅ **Governance**: Proposals stored as static JSON; no persistent storage of user inputs

**Gaps**:
- [ ] **CRITICAL**: No privacy notice or data handling statement displayed to users
- [ ] No user consent acknowledgment before use
- [ ] Uploaded files cleared from memory only on page close (should document this)
- [ ] No privacy policy linked from app

**Recommendations**:
1. Add prominent privacy banner (see Section 5 below)
2. Create privacy policy document explaining:
   - All processing happens in-browser on user's machine
   - No data sent to external servers
   - No data training or model improvement
   - Uploaded files stay in browser memory until page closes
   - No cookies or tracking
3. Add user acknowledgment checkbox before search

---

### 2. AI Risks & Risk Mitigation

#### 2.1 Confidentiality Risk
**Policy**: Understand data may be used by third parties; protect Slalom & client confidential information.

**Current Implementation**:
- ✅ **No third-party exposure**: All data stays in-browser (Xenova model loads from CDN but is read-only)
- ⚠️ **No confidentiality framework**: No proposal data classification system

**Gaps**:
- [ ] No data classification labels on proposals (Public/Internal/Confidential)
- [ ] No warning when exporting high-confidentiality proposals
- [ ] No guidance for users on handling sensitive client data in uploaded files

**Recommendations**:
1. Add data classification to proposal corpus (if proposals have confidentiality levels)
2. When exporting draft, display confidentiality level warning
3. In README: Warn users not to upload confidential client data without client consent
4. Add to privacy notice: "Keep uploaded files free of confidential client information unless client has approved use of this tool"

---

#### 2.2 Security Risks
**Policy**: Ensure platform security; validate outputs; no malware in generated content.

**Current Implementation**:
- ✅ **Output safety**: HTML escaping implemented correctly via `esc()` function
- ✅ **No code generation**: App doesn't generate executable code (only text summaries)
- ✅ **Input validation**: File size/type checking implemented
- ⚠️ **Model security**: No verification that Xenova model hasn't been tampered with

**Gaps**:
- [ ] No documented SDLC security review (code review, security testing)
- [ ] Xenova model loaded from Hugging Face CDN with no integrity check
- [ ] No security testing documented (XSS, injection, file upload attacks)

**Recommendations**:
1. Document that code has been reviewed for:
   - ✅ XSS/HTML injection (using `esc()`)
   - ✅ File upload validation (size, type, encoding)
   - ✅ Input length limits (maxlength attributes)
   - ✅ No unsafe DOM operations (innerHTML limited to escaped content)
2. For model security: Consider future self-hosted model option
3. Add security testing report to docs

---

#### 2.3 Intellectual Property Risk
**Policy**: Respect third-party IP; understand model training data; understand ownership of outputs.

**Current Implementation**:
- ✅ **Model licensing**: Xenova/all-MiniLM-L6-v2 is MIT licensed (open source)
- ✅ **Training data**: Model trained on general web text; not on proprietary Slalom/client data
- ✅ **Output ownership**: Summaries are templated text assembled from selected proposals; no copyright issues
- ⚠️ **No documented IP framework**: No statement about output ownership or restrictions

**Gaps**:
- [ ] No clear statement about IP ownership of generated drafts
- [ ] No explanation of Xenova model licensing in documentation
- [ ] No guidance on whether exported drafts can be commercialized
- [ ] Proposal corpus: unclear if all content is properly licensed for use

**Recommendations**:
1. Add to README:

   ```markdown
   ## Intellectual Property & Licensing
   
   **Model**: This tool uses the [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2) model,
   which is licensed under the MIT License.
   
   **Proposal Corpus**: Ensure all proposals in the corpus are properly licensed or owned by Slalom.
   
   **Generated Drafts**: Exports are assembled from source proposals. Ownership and usage rights depend on 
   the source proposal licensing. Review output with Legal before client delivery.
   ```

2. If tool will be used for client delivery, add SOW language requiring:
   - Client consent to use AI-powered proposal matching
   - Client confirmation that proposal corpus is properly licensed
   - Client review of draft before use

---

#### 2.4 Quality Control Issues
**Policy**: Outputs may be inaccurate; ensure Slalom & clients are thoughtful about risks; review for accuracy, bias, completeness.

**Current Implementation**:
- ✅ **Accuracy checks**: Semantic similarity scoring is mathematically sound (cosine similarity)
- ✅ **No hallucinations**: App uses templated summaries, not LLM generation (no false information)
- ⚠️ **No quality assurance process**: No documented review for match accuracy

**Gaps**:
- [ ] No documented quality assurance process for search results
- [ ] No accuracy metrics (e.g., "Did user find this proposal useful?")
- [ ] No test cases for edge cases or bias
- [ ] No feedback mechanism to improve matching

**Recommendations**:
1. Document the matching algorithm:

   ```
   Scoring: 22% input matching (industry, phase, service area, etc.) + 78% semantic similarity
   Higher weight on semantic matching ensures proposals with similar problem domains rank higher.
   ```

2. Add quality metrics to roadmap:
   - User feedback: "Was this proposal helpful?" (thumbs up/down)
   - Funnel metrics: Search → View → Export → Used
   - Accuracy: % of top 3 results actually used in final proposals

3. Create test cases for:
   - Same problem, different industries (should still match)
   - Niche industries (ensure coverage)
   - Biased language in problem statement (ensure neutral matching)

---

#### 2.5 Ethical & Equity Considerations
**Policy**: Humans always in the loop; continuously evaluate use/development/deployment; proactively mitigate bias, inequity, unethical behavior.

**Current Implementation**:
- ✅ **Humans in loop**: Proposal selection is manual; AI only recommends
- ✅ **Transparent UI**: Users see scoring breakdown and rationale for each match
- ⚠️ **No bias testing**: No documented analysis of matching fairness across proposal types

**Gaps**:
- [ ] No documented bias mitigation for proposal corpus
- [ ] No fairness testing across different industries/service areas
- [ ] No ethical guidelines for what proposals should/shouldn't be in corpus
- [ ] No documented review process for controversial proposals

**Recommendations**:
1. Document ethical guidelines for proposal corpus:
   - Remove proposals with outdated or harmful practices
   - Ensure diverse examples (different company sizes, geographies, industries)
   - Flag proposals with controversial technologies for human review

2. Add fairness testing:
   - Test matching consistency across different industries
   - Ensure no industry is systematically underrepresented
   - Test for unintended bias in problem statement language

---

#### 2.6 Regulatory Compliance
**Policy**: Pay careful attention to laws & regulations; adapt practices to evolving landscape.

**Current Implementation**:
- ✅ **No PII processing**: Tool doesn't extract/store personal information
- ✅ **GDPR compliant**: No personal data transmission; no tracking
- ✅ **SOC 2**: Architecture supports SOC 2 controls (encryption, access logs, etc.)
- ⚠️ **Compliance documentation**: No formal compliance statement

**Gaps**:
- [ ] No GDPR Data Processing Agreement (if deployed to EU)
- [ ] No compliance statement in README
- [ ] No documented data retention policy
- [ ] No response procedure for regulatory requests

**Recommendations**:
1. Add to README:

   ```markdown
   ## Regulatory Compliance
   
   **GDPR**: This tool processes no personal information. All data remains on user's device.
   No cookies, tracking, or data transmission to external servers (except model download).
   
   **CCPA**: Same as above; no personal information collected or sold.
   
   **HIPAA/SOX/etc**: If used in regulated industries, additional controls required.
   Consult Legal before deployment.
   ```

2. Document data retention:
   - Search queries: Stored in-browser only; cleared on page close
   - Uploaded files: Stored in-browser only; cleared on page close
   - Exported drafts: User's responsibility to handle per organizational policy

---

#### 2.7 Client Permission
**Policy**: Clients may restrict AI use; must comply with client policies.

**Current Implementation**:
- ⚠️ **No client consent mechanism**: If used for client delivery, no documented client approval process
- ⚠️ **No SOW language**: No standard statement-of-work language for client consent

**Gaps**:
- [ ] **CRITICAL FOR CLIENT DELIVERY**: No client consent workflow
- [ ] No SOW language template
- [ ] No client notification in generated drafts
- [ ] No way to track which clients have approved AI use

**Recommendations** (Required if tool will be used in client engagements):
1. Add SOW language:

   ```
   "Client acknowledges that this engagement may use AI-powered tools for proposal matching 
   and draft generation to improve efficiency and quality. All outputs will be reviewed by 
   Slalom practitioners before delivery to Client. [Client agrees / does not agree] to the 
   use of AI tools in this engagement."
   ```

2. Add to generated drafts:

   ```
   Prepared by Slalom using AI-assisted proposal matching.
   [Client name/project] - [Date]
   ```

3. In app, add client consent tracking:
   - Before search: "Is this for a client engagement? Does your client approve AI use?"
   - If no approval: Show warning, suggest getting written approval

---

### 3. Guidelines for Use of AI at Slalom: Overview

#### Guideline 1: Do Not Enter Confidential Information
**Policy**: Treat AI tools as speaking to outsiders; don't input Slalom/client confidential information.

**Current Implementation**:
- ✅ **No external transmission**: All data stays in-browser; no external API calls
- ✅ **Users can't input confidential data directly**: Problem statement is just text description
- ⚠️ **Uploaded files**: Users could accidentally upload confidential documents

**Gaps**:
- [ ] No warning about uploaded file content
- [ ] No guidance on handling confidential proposal corpus

**Recommendations**:
1. Add warning to upload zone:

   ```
   ⚠️ Warning: Only upload files relevant to this specific opportunity. 
   Do not upload confidential Slalom IP or client contracts.
   ```

2. Add to privacy notice:

   ```
   Uploaded files are processed only in your browser and are never sent to any server. 
   However, keep files free of sensitive Slalom IP or client confidential information.
   ```

---

#### Guideline 2: Exercise Caution & Review AI-Generated Content
**Policy**: Review carefully; understand AI lacks truth mechanism; use only for drafts requiring peer review.

**Current Implementation**:
- ✅ **Draft-only output**: Exported documents are clearly labeled as drafts
- ✅ **No final content**: AI only recommends proposals; humans do final work
- ✅ **Templated content**: No LLM generation (match summaries are templates)
- ⚠️ **No documented review process**: No guidance on how to review generated content

**Gaps**:
- [ ] No quality review checklist in exported draft
- [ ] No reminder about reviewing before use/delivery
- [ ] Match rationale is AI-generated (from template) but could be misleading

**Recommendations**:
1. Add to exported draft header:

   ```
   DRAFT - FOR INTERNAL REVIEW ONLY
   
   This draft was generated by Slalom's Propel tool using AI-assisted proposal matching.
   Review all content, citations, and recommendations before presenting to client.
   Verify all statements and claims are accurate and relevant to this engagement.
   ```

2. Add to match rationale display:

   ```
   This rationale is generated by an AI system and should be verified by a human 
   before relying on it for business decisions.
   ```

---

#### Guideline 3: Review Terms & Conditions of Third-Party AI Tools
**Policy**: Understand model training, commercial use restrictions, tier differences.

**Current Implementation**:
- ⚠️ **Xenova model**: Used without documented T&C review
- ⚠️ **Hugging Face platform**: Model loaded from CDN without explicit T&C acknowledgment

**Gaps**:
- [ ] No documentation of Xenova/all-MiniLM-L6-v2 terms & conditions
- [ ] No statement about model training data usage
- [ ] No commercial usage rights documented
- [ ] No analysis of free vs. enterprise tier differences

**Recommendations**:
1. Add to docs/AI_TRANSPARENCY.md:

   ```markdown
   ## Third-Party AI Tools & Licensing
   
   ### Xenova/all-MiniLM-L6-v2 (Sentence Transformer)
   - **License**: MIT License
   - **Source**: https://huggingface.co/Xenova/all-MiniLM-L6-v2
   - **Training Data**: CommonCrawl + other public sources (no proprietary data)
   - **Model Training**: This tool does NOT train or fine-tune the model; only uses pre-trained weights
   - **Commercial Use**: Permitted under MIT License
   - **Data Privacy**: Model is downloaded once to user's browser; runs locally; no data transmission
   - **Terms of Service**: Model usage complies with Hugging Face's open-source licensing model
   
   ### Hugging Face CDN
   - **Model Download**: Model (~30 MB) downloaded once from Hugging Face CDN
   - **Data Collection**: Hugging Face does not log or track model usage from client-side downloads
   - **Terms**: See https://huggingface.co/terms-of-service
   ```

2. Add disclaimer to README:

   ```
   This tool uses the open-source Xenova/all-MiniLM-L6-v2 model (MIT License) for semantic matching.
   No proprietary models or training occurs. See docs/AI_TRANSPARENCY.md for details.
   ```

---

#### Guideline 4: Leverage Secure SDLC Best Practices
**Policy**: Code review, security scanning, peer review, understand all code.

**Current Implementation**:
- ⚠️ **Peer review**: Not documented whether code review happened
- ✅ **Security scanning**: Input validation present but not formally tested
- ✅ **Code understanding**: Single file (index.html); all code visible and reviewable

**Gaps**:
- [ ] No documented code review for security
- [ ] No automated security scanning
- [ ] No security testing report
- [ ] No SAST (static application security testing) results

**Recommendations**:
1. Document code review happened:

   ```
   ✅ Code Review: [Reviewer names], [Date]
   ✅ Security Review: [Security reviewer], [Date]
   ✅ No high/critical security issues identified
   ```

2. Run security scan (GitHub/npm):

   ```bash
   npm audit  # Check for vulnerable dependencies
   ```

3. Manual security checklist:
   - ✅ XSS prevention: `esc()` function used correctly
   - ✅ SQL injection: No database access
   - ✅ CSRF: No state-changing API calls
   - ✅ File upload: Size/type validation
   - ✅ Input validation: Length limits

---

#### Guideline 5: Slalom-Authorized Tools
**Policy**: Only use pre-approved tools for processing Slalom Confidential Information.

**Current Implementation**:
- ✅ **No external tools**: Xenova model is open-source and runs client-side
- ✅ **No cloud APIs**: No Microsoft Copilot, Azure OpenAI, ChatGPT, etc. used
- ✅ **Self-contained**: No integration with restricted tools

**Gaps**: None identified for this guideline.

**Status**: ✅ COMPLIANT - Tool does not use any restricted cloud AI services.

---

### 4. Guidelines for Client Delivery Work

#### Requirement: Obtain Express Written Client Consent
**Policy**: Must get written consent before using AI to process client data or develop deliverables.

**Current Implementation**:
- ⚠️ **No consent workflow**: If used in client engagement, no formal approval process

**Gaps**:
- [ ] **CRITICAL**: No client consent mechanism
- [ ] No SOW language for client approval
- [ ] No tracking of which clients approved AI use
- [ ] No email/approval documentation workflow

**Recommendations** (Required before client delivery):
1. Create SOW addendum:

   ```
   STATEMENT OF WORK ADDENDUM: AI-ASSISTED PROPOSAL MATCHING
   
   Slalom proposes to use the "Propel" AI tool for proposal matching and draft generation 
   in this engagement to improve efficiency and quality.
   
   The tool:
   - Uses open-source, locally-running AI (no cloud APIs or external data transmission)
   - Matches past proposals to current opportunity using semantic similarity
   - Generates draft proposal content using templated summaries of matched proposals
   - All data processing occurs on the practitioner's device; no data is sent to external servers
   
   Client Review & Approval:
   [ ] Client approves use of AI-powered proposal matching
   [ ] Client requires prior approval of each AI-generated draft
   [ ] Client prohibits AI use in this engagement
   
   Client: ________________________  Date: __________
   Slalom: ________________________  Date: __________
   ```

2. Add to generated drafts:

   ```
   Generated by Slalom's Propel tool using AI-assisted proposal matching.
   [Client] - [Opportunity] - [Date]
   Review and verify all content before presenting.
   ```

3. Update README with client delivery guidance:

   ```markdown
   ## Using Propel with Clients
   
   If using Propel to generate content for client delivery:
   1. Obtain written client approval (see SOW template)
   2. Review all AI-generated content before delivery
   3. Disclose AI use to client (in SOW or email)
   4. Keep SOW signed by client on file for compliance
   
   See docs/CLIENT_SOW_TEMPLATE.md for language.
   ```

---

#### Requirement: Ensure SOWs Reflect Intended Use of AI Tools
**Policy**: Be transparent about intended AI use in contracts.

**Current Implementation**:
- ⚠️ **No SOW template**: No guidance on how to disclose AI use to clients

**Gaps**:
- [ ] No SOW language for disclosing AI use
- [ ] No transparency statement for clients
- [ ] No mechanism to track client approvals

**Recommendations**:
Create `docs/CLIENT_SOW_TEMPLATE.md` with sample SOW language:

```markdown
# SOW Language: AI-Assisted Proposal Matching

## Option A: Full Disclosure (Recommended)
"Slalom will use an AI-assisted proposal matching tool ('Propel') to identify and analyze 
relevant historical proposals. This tool uses open-source machine learning to find semantic 
matches between the current opportunity and Slalom's proposal corpus. All processing occurs 
on practitioners' local devices; no data is transmitted to external servers or third parties. 
All AI-generated outputs will be reviewed and refined by Slalom practitioners before delivery 
to Client. Client retains the right to request human-only analysis without AI assistance."

## Option B: Simplified
"Slalom may use AI-assisted tools to improve proposal research and matching efficiency. 
All outputs are reviewed by Slalom practitioners before delivery to Client."

## Option C: AI-Prohibited
"Slalom will not use generative AI or AI-assisted tools to develop proposals for this 
engagement. All work will be performed by human practitioners."
```

---

### 5. Guidelines for Employee/Internal Use

#### Requirement: No Automated Decision-Making (HR/Recruitment)
**Policy**: Cannot use AI for automated hiring/performance decisions; must have human oversight.

**Current Implementation**:
- ✅ **Not applicable**: Tool is for proposal matching, not HR decisions
- ✅ **No automated decisions**: All selections are manual human choices

**Gaps**: None identified for this guideline.

**Status**: ✅ COMPLIANT - Tool does not make HR/recruitment decisions.

---

## Compliance Gaps Summary

### 🔴 CRITICAL (Must fix before client delivery)
1. **Missing client consent workflow** - If tool is used in client engagements, must get written approval
2. **No data handling transparency** - Users should understand data stays client-side
3. **No documented T&C review** - Xenova model terms & licensing not documented

### 🟠 HIGH (Should fix before rollout)
4. **Missing AI transparency statement** - Users need clear explanation of AI use
5. **No quality review process** - Should document how match quality is assessed
6. **No output ownership clarity** - Users unclear on IP rights of exported drafts

### 🟡 MEDIUM (Nice-to-have)
7. Bias testing for proposal corpus
8. Feedback mechanism (was this proposal useful?)
9. Security audit report

---

## Implementation Checklist

Priority 1 (Before Client Use):
- [ ] Add privacy/data handling banner to app
- [ ] Create client SOW template with AI consent language
- [ ] Document Xenova model licensing & T&Cs
- [ ] Add AI disclosure to generated drafts

Priority 2 (Before Wider Rollout):
- [ ] Create AI transparency document
- [ ] Document quality assurance process
- [ ] Add input validation for uploaded files (if not done)
- [ ] Create README section on responsible AI use

Priority 3 (Ongoing):
- [ ] Implement feedback mechanism (user ratings)
- [ ] Build bias testing into QA
- [ ] Track client approvals for AI use
- [ ] Monitor for policy violations

---

## References

**Slalom Policy Documents**:
- AI Acceptable Use Policy v2.2 (October 2025)
- Responsible AI & Legal Considerations (SlalomOne)

**External Standards**:
- NIST AI Risk Management Framework
- OWASP Top 10 for LLM Applications
- Xenova Model Licensing: https://huggingface.co/Xenova/all-MiniLM-L6-v2

---

**Next Review**: 2026-10-13  
**Compliance Owner**: [Assign: Product/Legal/Security]
