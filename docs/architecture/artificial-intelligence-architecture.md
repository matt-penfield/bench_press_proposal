# AI Architecture

## 1) Purpose

Define the AI architecture for proposal similarity search and draft proposal generation.

## 2) Scope

In scope:
- Query understanding and retrieval orchestration
- Similarity scoring and evidence extraction
- Draft generation with citations
- Safety controls and policy boundaries

Out of scope:
- Model fine-tuning
- Non-proposal AI use cases

## 3) Core AI Capabilities

- Semantic retrieval over proposal corpus
- Evidence extraction from source chunks
- Structured draft generation
- Optional multi-agent task decomposition

## 4) Model Strategy

- Embeddings model: [TBD]
- Generation model: [TBD]
- Reranker model: [TBD]
- Model fallback strategy: [TBD]

## 5) Retrieval Architecture

- Retrieval pattern: [Semantic | Hybrid]
- Source chunking strategy: [TBD]
- Metadata filters: [TBD]
- Top-k retrieval policy: [TBD]

## 6) Prompt and Orchestration Design

- System prompt policy: [TBD]
- Prompt templates by task:
  - Similarity explanation template
  - Draft generation template
  - Quality review template
- Citation format standard: [TBD]

## 7) Agent and Tool Pattern

- Agent runtime pattern: [Single agent | Supervisor + collaborators]
- Tool invocation policy: [TBD]
- Human-in-the-loop checkpoints: [TBD]

## 8) AI Safety and Controls

- Prompt injection defenses: [TBD]
- Guardrails policy: [TBD]
- Sensitive data handling: [TBD]
- Output policy checks: [TBD]

## 9) Evaluation and Quality

- Offline eval dataset: [TBD]
- Online quality metrics:
  - Relevance@k
  - Citation coverage
  - Hallucination rate
  - Draft acceptance rate
- Regression test gates: [TBD]

## 10) Open Decisions

- Model/region selection
- Latency and token budget targets
- Ground truth curation process
