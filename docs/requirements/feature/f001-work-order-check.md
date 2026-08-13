# F-001: Work Order Check

## Overview

The Work Order Check feature allows users to upload a proposal/solution document (a "work order") and automatically validate it against a configurable set of compliance rules. Validation covers document structure (required sections), formatting quality (font, spacing, spelling/grammar), and content completeness (solution overview, AI benefits, risk assessment). Results are surfaced to the user as a live running checklist immediately after the document is selected.

---

## Goals

1. Enable Slalom proposal writers to self-validate a solution document before submission.
2. Provide admins a configuration panel to define which sections are mandatory.
3. Surface clear, actionable pass/fail feedback per check in a single view.

---

## Users

- **Proposal writers** — upload their work order document and review the validation checklist.
- **Admins** — configure required sections and thresholds in the admin panel.

---

## Scope

### In Scope

- Work Order Check page (`work-order-check.html`)
- "Work Order Check" navigation entry point in `index.html`
- Admin configuration panel (section names list; configurable by admin)
- Document upload (`.docx` format; prototype accepts Word documents)
- `solutions/` folder at the project root for uploaded/sample documents
- Running validation checklist displayed after document selection
- All checks listed in the [Validation Rules](#validation-rules) section

### Out of Scope

- Authentication or role-based access (admin vs. writer distinction is UI-only for prototype)
- Backend persistence of admin config (config stored in `localStorage` for prototype)
- PDF or non-`.docx` format support (future consideration)
- AI-powered grammar/spell correction (check only, no auto-fix)
- Batch validation of multiple documents

---

## Entry Point

A **"Work Order Check"** button is added to the header of `index.html`. It navigates to `work-order-check.html`. Styled with `background: #5e6ad2`, `border-radius: 8px`, `font-weight: 600` — consistent with existing primary actions.

---

## Pages

### `work-order-check.html`

Single-page experience with three sections stacked vertically inside an `860px` max-width container, consistent with `index.html` layout:

1. **Document Upload Panel** — file picker accepting `.docx` files. Reuses the existing `.file-upload-area` / `.file-upload-btn` visual pattern. After a file is selected, validation begins immediately (no separate submit button).
2. **Validation Checklist Panel** — displays a running list of checks as they complete (see [Validation Rules](#validation-rules)). Each check row shows: icon (pass ✓ / fail ✗ / pending spinner), check label, and a brief detail message.
3. **Admin Configuration Panel** — collapsible section (collapsed by default, toggled by an "Admin Settings" button). Contains a managed list of required section names. Changes are saved to `localStorage`.

---

## Admin Configuration

| Setting | Type | Default |
|---|---|---|
| Required Sections | Ordered list of strings | See [Default Required Sections](#default-required-sections) |

### Default Required Sections

1. Executive Summary
2. Problem Statement
3. Proposed Solution
4. Solution Architecture
5. AI Benefits
6. Risks and Assessments
7. Timeline and Milestones
8. Pricing / Investment
9. Team and Qualifications
10. References / Appendix

Admins can add, remove, or reorder entries. The list drives both the **Section Presence** check and the checklist display order for section-related rows.

---

## Validation Rules

Validation runs client-side after the user selects a document. Checks execute and render results progressively (each check renders as soon as it resolves). All parsing uses the `mammoth.js` library (CDN, no build step) to extract raw text and basic style metadata from `.docx` files.

### Formatting Checks

| ID | Check | Pass Condition |
| --- | --- | --- |
| FMT-01 | Font Size | Body text is predominantly 10–12 pt. Flags paragraphs outside this range. |
| FMT-02 | Line Spacing | Body paragraphs use 1.0–1.5 line spacing. |
| FMT-03 | Spelling & Grammar | No spelling errors detected (browser spellcheck heuristic + dictionary word-list cross-check). Grammar: sentence length heuristic (no sentence > 60 words). |

> **Implementation note:** Mammoth exposes limited style metadata. Font-size and spacing checks use best-effort extraction from the raw XML within the `.docx` zip. If metadata is unavailable, the row renders as "Unable to verify — check manually" (warning state, not failure).

### Content Checks

| ID | Check | Pass Condition |
| --- | --- | --- |
| SEC-01 | Required Sections Present | Every section name in the admin config list is found as a heading in the document (case-insensitive match). |
| CON-01 | Solution Overview / Architecture Diagram | Document contains at least one embedded image **or** a heading matching "Solution Architecture", "Architecture Diagram", or "Solution Overview". |
| CON-02 | AI Benefits | A heading or prominent paragraph containing "AI benefit" / "artificial intelligence benefit" / "AI advantage" is present. |
| CON-03 | Risks and Assessment | A heading or paragraph matching "risk" and ("assessment" or "mitigation") is present. |

---

## Validation Checklist UX

- Checklist appears immediately when a file is selected; rows render as pending (spinner) then resolve to pass/fail.
- Each row: `[icon] [check label] — [detail message]`
  - **Pass**: green check icon, `#059669`
  - **Fail**: red X icon, `#dc2626`
  - **Warning**: amber warning icon, `#d97706`
  - **Pending**: spinner (reuse existing `.spinner` CSS class)
- A summary badge at the top of the checklist shows overall status: `N of M checks passed`.
- Failed and warning rows include a short actionable detail (e.g., "Section 'AI Benefits' not found as a heading.").
- A **"Re-check"** button re-runs all validations against the currently loaded document (useful after admin config changes).

---

## Solutions Folder

A `solutions/` directory is created at the project root. It serves as the drop location for sample/prototype `.docx` documents. A `README.md` inside the folder describes the expected document format. The file-picker default path will suggest this folder (browser permitting).

---

## UX & Design Constraints

All UI must follow the existing visual language of `index.html`:

| Token | Value |
| --- | --- |
| Primary colour | `#5e6ad2` |
| Page background | `#f8f9fb` |
| Card background | `#fff` |
| Card border | `1px solid #e8eaed` |
| Card border-radius | `12px` |
| Body font | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Max content width | `860px`, centred, `padding: 0 24px` |
| Primary button | `background: #5e6ad2`, `border-radius: 8px`, `font-weight: 600` |
| Success colour | `#059669` |
| Error colour | `#dc2626` |
| Warning colour | `#d97706` |

Reuse existing CSS class patterns: `.input-section`, `.result-card`, `.file-upload-btn`, `.file-chip`, `.spinner`, `.empty-state`, `.keyword-tag`.

No external CSS frameworks. No build step. Vanilla HTML/CSS/JS only.

---

## Technical Approach

| Concern | Approach |
| --- | --- |
| `.docx` parsing | `mammoth.js` via CDN (`https://cdn.jsdelivr.net/npm/mammoth/mammoth.browser.min.js`) — converts `.docx` to HTML + extracts messages |
| Section detection | Parse `<h1>`–`<h3>` tags in mammoth HTML output; match against admin config list |
| Image detection | Check mammoth messages for embedded images; fallback to `<img>` tags in output HTML |
| Font/spacing metadata | Access raw XML via `JSZip` (CDN) to read `w:sz` and `w:spacing` values in `word/document.xml` |
| Spell check | Split text into tokens; cross-reference against a bundled common-words allowlist; flag unknowns |
| Admin config persistence | `localStorage` key `wo-check-config-v1`; JSON-serialised array of section names |

---

## Acceptance Criteria

1. Navigating from `index.html` via the "Work Order Check" button opens `work-order-check.html`.
2. Uploading a `.docx` file triggers validation without any additional user action.
3. Each of the 7 validation checks (FMT-01, FMT-02, FMT-03, SEC-01, CON-01, CON-02, CON-03) renders a row in the checklist.
4. Checks resolve progressively; pending rows show a spinner until resolved.
5. The admin panel lists the 10 default sections on first load and persists changes across page refreshes.
6. Adding a section name in admin config causes SEC-01 to include it in the next Re-check.
7. The page is visually consistent with `index.html` (colour, typography, card layout).
8. No console errors on load or during a validation run against a valid `.docx` file.

---

## Future Considerations

- PDF support via `pdf.js`.
- Server-side grammar check using LanguageTool API.
- Export validation report as PDF.
- Win-rate correlation: flag sections present in high-scoring past proposals (integrates with Proposal Similarity Matcher).
