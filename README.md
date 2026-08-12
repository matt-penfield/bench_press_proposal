# Propel - Your Account Team Helper

Propel is a static browser-based suite for Slalom account teams. It includes a Proposal Generator that finds relevant past proposals and creates a structured first draft, a Work Order Check, and a sample lead dashboard.

## Proposal Generator workflow

The Proposal Generator is a five-step wizard:

1. Describe the client challenge. A problem statement is required to continue.
2. Add match context: service areas, deliverables, business outcomes, and industry.
3. Refine the search with engagement phase, sponsor, technologies, timeline, and constraints.
4. Optionally upload supporting files such as RFPs, briefs, office documents, spreadsheets, or presentations. The text that the browser can read is included in the search query.
5. Review and edit the collected information before searching.

The match-quality score updates as information is provided. Search returns up to ten ranked proposals with match explanations and differences to review. Select exactly three matches to create a proposal draft. The generated draft can be exported as a `.docx` file that retains the styles and page setup in `solutions/proposal_template.dotx`.

## How matching works

Proposal content is embedded as 384-dimensional vectors using `Xenova/all-MiniLM-L6-v2` (a sentence transformer). At search time, the user's query is embedded the same way and compared against every proposal vector using cosine similarity. No server required — the model runs entirely in the browser via WebAssembly.

To avoid downloading the 30 MB model on page load, corpus embeddings are **pre-computed at build time** and committed as `embeddings.json`. The model is only downloaded when the user searches for matching proposals for the first time, then cached by the browser.

## Regenerating embeddings

Run this whenever `proposals.js` changes:

```bash
npm install
node scripts/precompute-embeddings.mjs
```

Commit the updated `embeddings.json`. The script prints the entry count and vector dimension on completion so you can sanity-check the output.

## Running locally

No build step is required. Serve the repository through a local HTTP server; direct `file://` access blocks the `embeddings.json` and Word-template fetches due to CORS.

```bash
npx serve .
# or
python3 -m http.server 8080
```

Open `http://localhost:8080/src/frontend/home.html` for the Propel home page or `http://localhost:8080/index.html` for the Proposal Generator.
