# PRD: Bench Press — Proposal Similarity Matcher

## Problem

When responding to new client RFPs or problem statements, Slalom consultants and BD/sales teams spend significant time searching for relevant past proposals. There's no quick way to find similar work that's been proposed before, leading to duplicated effort and missed opportunities to reuse proven approaches.

## Users

- **Slalom consultants / proposal writers** — looking for similar past proposals to inform new responses
- **Sales / BD team** — quickly identifying relevant past work to reference in client conversations

## MVP Scope

A simple web interface that accepts a client problem statement and supplemental context, then returns a ranked list of similar proposals from a local corpus.

### Input

- **Problem Statement** — freeform text describing the client's core challenge or ask
- **Supplemental Info** — freeform text with any additional context (industry details, constraints, technologies mentioned, timeline, etc.)

### Output

- Ranked list of similar proposals, each showing:
  - **Similarity score** (0–100)
  - **Proposal title / identifier**
  - **Relevant excerpts** — the passages from the proposal that matched most strongly
  - **Source reference** — which proposal document the match came from

## Interface

- Standalone HTML/CSS/JS — no frameworks, no build step
- Single page with:
  - Text area for problem statement
  - Text area for supplemental info
  - "Find Similar" button
  - Results area showing ranked matches

## Matching Logic

- **Keyword/tag-based matching**, extracted at query time (no pre-tagging of proposals)
- Process:
  1. Extract meaningful keywords/phrases from user input (problem statement + supplemental info)
  2. For each proposal in the corpus, extract keywords/phrases from its content
  3. Score similarity based on keyword overlap, weighted by term relevance (e.g., TF-IDF style scoring)
  4. Rank proposals by score, return top results with excerpts highlighting matched terms

## Data Model

### Proposal Corpus

Proposals will be provided in mixed formats (PDFs, Word docs, plain text). The system needs to:
- Store proposal content in a searchable format (likely normalized to plain text)
- Maintain metadata: title/identifier, source file reference
- Support adding new proposals to the corpus

### Schema (conceptual)

```
Proposal {
  id: string
  title: string
  source: string        // original filename/path
  content: string       // full text content
  format: string        // original format (pdf, docx, txt, etc.)
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
- **Semantic similarity** — upgrade from keyword matching to embeddings/vector search for better conceptual matching
- **Ingestion pipeline** — automated extraction from PDFs/DOCX with OCR support
- **Tagging layer** — derive and persist tags (industry, technology, problem type) for faster retrieval

## Technical Notes

- MVP runs entirely client-side (proposals loaded as JSON)
- No external dependencies beyond vanilla JS
- Proposal corpus will be provided as sample data in a subsequent step
