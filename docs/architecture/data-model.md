# Data Model

## 1) Purpose

Define conceptual and logical data model for proposals, retrieval artifacts, and generated outputs.

## 2) Core Entities

### Proposal
- proposal_id
- title
- source_uri
- format
- raw_text
- created_at
- updated_at

### ProposalChunk
- chunk_id
- proposal_id
- chunk_text
- chunk_index
- embedding_ref
- metadata

### SearchRequest
- request_id
- user_id
- problem_statement
- supplemental_info
- created_at

### SearchResult
- request_id
- proposal_id
- score
- evidence_excerpt
- rank

### DraftOutput
- draft_id
- request_id
- selected_proposals
- output_text
- citation_map
- created_at

### Feedback
- feedback_id
- draft_id
- user_id
- rating
- comment
- created_at

## 3) Relationships

- Proposal 1..N ProposalChunk
- SearchRequest 1..N SearchResult
- SearchRequest 0..N DraftOutput
- DraftOutput 0..N Feedback

## 4) Metadata Schema

Suggested metadata fields:
- industry
- capability
- technology
- geo
- confidentiality_level
- last_reviewed_epoch

## 5) Storage Mapping

- Raw documents: object storage
- Metadata and workflow state: key-value/document store
- Retrieval index: vector/keyword store

## 6) Data Quality Rules

- Required fields cannot be null
- Proposal title uniqueness policy: [TBD]
- Metadata validation rules: [TBD]

## 7) Open Decisions

- Canonical IDs and naming standard
- Citation schema for generated drafts
