# PRD: Propel - Proposal Generator

## Problem

When responding to new client RFPs or problem statements, Slalom consultants and BD/sales teams spend significant time searching for relevant past proposals. There's no quick way to find similar work that's been proposed before, leading to duplicated effort and missed opportunities to reuse proven approaches.

## Users

- **Slalom consultants / proposal writers** — looking for similar past proposals to inform new responses
- **Sales / BD team** — quickly identifying relevant past work to reference in client conversations

## Current Scope

A browser-based five-step wizard that captures client context, returns a ranked list of similar proposals from a local corpus, and produces a structured first draft from three selected references.

### Input

- **Client Challenge** — required problem statement describing the client's core challenge or ask
- **Match Context** — service areas, deliverables, business outcomes, and industry
- **Refinement** — engagement phase, sponsor, technologies, timeline, and constraints
- **Supporting Documents** — optional files, including office documents, PDFs, spreadsheets, presentations, and text files; readable text is incorporated into the search query
- **Review** — an editable summary before the search begins

The interface shows a live proposal-match quality score so users can see when more context is recommended.

### Output

- Ranked list of similar proposals, each showing:
  - **Similarity score** (0–100)
  - **Proposal title / identifier**
  - **AI match summary**, relevant excerpts, and reasons for the match
  - **Differences to review** for industry, scope, or timeline
  - **Source reference** — which proposal document the match came from
- Draft action available when exactly three proposals are selected
- Structured proposal draft that can be exported as a `.docx` file using the bundled Word template

## Interface

- Standalone HTML/CSS/JS — no frameworks, no build step
- Proposal Generator with a responsive, five-step form and review step
- Results page with ranked matches and three-proposal selection
- Client-side Word export based on `solutions/proposal_template.dotx`

## Matching Logic

- **Semantic similarity with contextual scoring**
- Process:
  1. Embed the collected form values and readable supporting-document text using the same browser-hosted model as the corpus.
  2. Calculate cosine similarity against each precomputed proposal embedding.
  3. Combine the semantic result with contextual input matching.
  4. Rank qualifying results and return up to ten matches with relevant excerpts.

## Data Model

### Proposal Corpus

The current prototype stores a curated proposal corpus as JavaScript data in `proposals.js` and stores matching vectors in `embeddings.json`. Adding or changing proposals is a source-data operation followed by regeneration of the embeddings; there is no runtime ingestion UI.

Each entry maintains:
- A stable ID, title, business unit, and source reference
- Normalized proposal content used for token matching and draft context
- A precomputed 384-dimensional embedding generated with `Xenova/all-MiniLM-L6-v2`

### Schema (conceptual)

```
Proposal {
  id: string
  title: string
  source: string        // original filename/path
  content: string       // full text content
  format: string        // source format or corpus classification
}
```

## Out of Scope (MVP)

- Success-based ranking (win/loss weighting)
- Pre-tagged metadata or manual categorization
- Authentication or user accounts
- Persistent search history
- Backend server (MVP is client-side only with local data)
- Proposal ingestion pipeline (manual for now)

## Future Considerations

- **Success weighting** — once proposals have win/loss outcomes attached, bias ranking toward successful proposals
- **Feedback loop** — let users mark which results were actually useful, refine scoring
- **Ingestion pipeline** — automated extraction from PDFs/DOCX with OCR support; not part of the current prototype
- **Tagging layer** — derive and persist tags (industry, technology, problem type) for faster retrieval

## Technical Notes

- Runs entirely client-side, with proposals loaded from local JavaScript and embeddings loaded from `embeddings.json`
- Uses `Xenova/all-MiniLM-L6-v2` in the browser for semantic matching
- Requires a local HTTP server because the browser fetches the embeddings and Word template
