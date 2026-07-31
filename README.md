# Bench Press — Proposal Similarity Matcher

Static single-page app that matches a problem statement against a corpus of 60 proposals using semantic (cosine) similarity, then generates a draft proposal from the best matches.

## How it works

Proposal content is embedded as 384-dimensional vectors using `Xenova/all-MiniLM-L6-v2` (a sentence transformer). At search time, the user's query is embedded the same way and compared against every proposal vector using cosine similarity. No server required — the model runs entirely in the browser via WebAssembly.

To avoid downloading the 30 MB model on page load, corpus embeddings are **pre-computed at build time** and committed as `embeddings.json`. The model is only downloaded when the user clicks **Find Similar** for the first time (then cached by the browser).

## Regenerating embeddings

Run this whenever `proposals.js` changes:

```bash
npm install
node scripts/precompute-embeddings.mjs
```

Commit the updated `embeddings.json`. The script prints the entry count and vector dimension on completion so you can sanity-check the output.

## Running locally

No build step. Open `index.html` via a local server (direct `file://` open will block the `embeddings.json` fetch due to CORS):

```bash
npx serve .
# or
python3 -m http.server 8080
```
