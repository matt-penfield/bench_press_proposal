# Propel - Your Account Team Helper

Propel is a static browser-based suite for Slalom account teams. It includes a Proposal Generator that finds relevant past proposals and creates a structured first draft, a Work Order Check, and a sample lead dashboard. The current implementation is a client-side prototype: there is no backend, authentication, telemetry, or persistent search history.

## Proposal Generator workflow

The Proposal Generator is a five-step wizard:

1. Describe the client challenge. A problem statement is required to continue.
2. Add match context: service areas, deliverables, business outcomes, and industry.
3. Refine the search with engagement phase, sponsor, technologies, timeline, and constraints.
4. Optionally upload supporting files such as RFPs, briefs, office documents, spreadsheets, presentations, PDFs, and text files. Browser-readable text is included in the search query; binary formats are supported by the client-side parsers where available.
5. Review and edit the collected information before searching.

The match-quality score updates as information is provided. Search returns up to ten ranked proposals with match explanations and differences to review. Select exactly three matches to create a proposal draft. The generated draft can be exported as a `.docx` file that retains the styles and page setup in `solutions/proposal_template.dotx`.

## How matching works

Proposal content is embedded as 384-dimensional vectors using `Xenova/all-MiniLM-L6-v2` (a sentence transformer). At search time, the user's query is embedded the same way and compared against every proposal vector using cosine similarity. No server required — the model runs entirely in the browser via WebAssembly.

To avoid downloading the 30 MB model on page load, corpus embeddings are **pre-computed at build time** and committed as `embeddings.json`. The model is only downloaded when the user searches for matching proposals for the first time, then cached by the browser.

## Runtime dependencies

The browser loads `transformers.js`, `JSZip`, `docx-preview`, and `mammoth.js` from jsDelivr. An internet connection is required for those CDN resources and for the first download of the embedding model. The committed `embeddings.json`, `proposals.js`, and Word templates are local repository assets.

The only npm dependency is `@xenova/transformers`, used by the optional embedding-generation script. It is not required to run the browser app.

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

## Documentation and archived files

- `docs/requirements/` describes the current product and feature behavior.
- `docs/architecture/` documents the current prototype and a separate future enterprise target architecture.
- `docs/SAFE_AI_USAGE.md`, `docs/SLALOM_AI_COMPLIANCE.md`, and `docs/SLALOM_IMPLEMENTATION_GUIDE.md` contain policy and delivery guidance; they are guidance documents, not runtime configuration.
- Obsolete planning notes and unused sample artifacts are retained under `archive/` and are not loaded by the app.
