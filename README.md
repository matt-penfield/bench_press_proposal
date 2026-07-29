## An AI-first solutioning workflow for the Amazon account - Team #4

Project Name: Solutioning Workflow and Proposal Tool

Solutioning Workflow and Proposal Tool is a client-side prototype for finding similar past proposals from a local corpus and drafting a starting proposal response from the top matches.

## Live Demo

- Deployed on Vercel (static site)
- Demo app: https://bench-press-proposal.vercel.app/

## What This Prototype Does

Based on the product requirements in `docs/requirements/product-requirements.md` and the current implementation:

- Accepts two inputs:
  - Problem Statement
  - Supplemental Info (industry, constraints, technologies, timeline, etc.)
- Searches a local proposal corpus and returns ranked matches
- Shows, for each match:
  - Similarity score (0-100)
  - Proposal title and source file reference
  - Most relevant excerpt sentences
  - "Why it matched" sentence-level evidence with similarity values
- Lets users select up to 3 matches
- Generates a structured drafted proposal from selected references

## Current Tech Stack

- Single-page app using:
  - HTML + CSS + vanilla JavaScript
  - No framework
  - No backend
- Data source:
  - Local in-browser corpus (`proposals.js`)
- Semantic matching:
  - Hugging Face Transformers JS via CDN
  - Model: `Xenova/all-MiniLM-L6-v2`
  - Cosine similarity for ranking query-to-proposal and query-to-sentence relevance

## How Matching Works (Current Implementation)

1. User input combines Problem Statement + Supplemental Info.
2. The app embeds all proposals and proposal sentences in-browser during initialization.
3. The query is embedded at search time.
4. Cosine similarity ranks proposals by relevance.
5. Top sentence-level matches are surfaced as excerpts and match explanations.
6. Top results are shown (up to 10), with high-confidence items auto-selected for drafting.

## Draft Generation

After selecting proposals, the app creates a draft with these sections:

- Problem Statement
- Recommended Approach
- Key Components
- Expected Outcomes
- Based On (reference tags with score)

This draft is generated from relevant proposal excerpts and heuristic sentence extraction from selected source content.

## Local Development

Because this uses ES modules and browser imports, run with a local web server.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: Node (serve)

```bash
npx serve .
```

## Project Structure

- `index.html` - UI, styling, client logic, semantic search, and draft generation
- `proposals.js` - local proposal corpus (dummy/sample data)
- `docs/requirements/product-requirements.md` - product requirements document

## Notes

- First load downloads the embedding model (~30 MB) and then caches it in the browser.
- This is an MVP-style prototype with local data and no persistence/authentication.
- PRD mentions keyword/tag matching for MVP; current prototype uses semantic embedding-based matching, which generally yields better conceptual similarity.
