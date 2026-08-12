# solutions/

This folder holds sample and prototype Word documents for the Work Order Check feature and the Proposal Generator.

## Proposal template

`proposal_template.dotx` is the source template for Proposal Generator Word exports. When a user exports a draft, the browser replaces the template body with the generated content and downloads a `.docx` file. Keep the template in this folder and serve the app through HTTP so the export can fetch it.

## Expected Document Format

Documents should be standard Word (`.docx`) files containing the following sections as headings (H1–H3):

1. Executive Summary
2. Problem Statement
3. Proposed Solution
4. Solution Architecture *(include at least one embedded diagram or image)*
5. AI Benefits
6. Risks and Assessments
7. Timeline and Milestones
8. Pricing / Investment
9. Team and Qualifications
10. References / Appendix

## Formatting Guidelines

| Requirement | Expected Value |
| --- | --- |
| Body font size | 10–12 pt |
| Line spacing | 1.0–1.5 |
| Sentences | No sentence longer than 60 words |

## Usage

1. Open `src/frontend/work-order-check.html` (or navigate via the **Work Order Check** button on the main page).
2. Click **Choose .docx file** and select a document from this folder.
3. Validation starts automatically.
