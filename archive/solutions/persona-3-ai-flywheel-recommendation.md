# Recommendation: Supporting Persona 3 (AI / "AI Flywheel" Considerations)

## Persona

"I know what problem I need to solve, but I need to know how we can incorporate AI into our proposal, and how we ensure we're considering the 'AI Flywheel' in everything we do."

## Finding

The current Proposal Generator wizard (`index.html`) has no field, prompt, or checklist that surfaces AI-specific considerations. Users can type "AI" into free-text fields (Problem Statement, Technologies), but nothing proactively guides them toward framing AI in the proposal or reviewing how AI was framed in past proposals.

## Recommended Changes

### 1. Add an "AI Approach" field to Step 3 (Refinement)

Reuse the existing `MultiSelect` component (same pattern as Service Area / Deliverables) to add an **AI Approach** field with options such as:
- Generative AI / LLM
- Predictive Analytics
- Personalization Engine
- Automation & Agents
- Computer Vision
- Data Flywheel / Feedback Loop

Wire it into `formState` and `computeInputMatchScore` the same way other Step 3 fields already contribute to match scoring.

### 2. Add an "AI Flywheel Checklist" prompt

Once an AI Approach is selected, show a small, non-blocking checklist (similar in spirit to the `doc-recommendations` chips in Step 4) prompting the user to confirm the engagement addresses:
- **Data** — what data will be captured/used
- **Model/Insight** — what the AI generates (predictions, recommendations, content)
- **Feedback Loop** — how outputs get evaluated and corrected
- **Continuous Improvement** — how the loop compounds value over time

This should be informational only and not block search.

### 3. Surface "AI Fit" on each result card

Add a section similar to `Use This Proposal For`, but derived by scanning `result.content` for AI-related keywords (model, algorithm, prediction, automation, etc.) to show which AI patterns that specific past proposal actually used — so reviewers can see how AI was framed in prior work, not just that a keyword matched.

### 4. Feed AI considerations into the generated draft

Add an **"AI Approach & Flywheel Considerations"** section to `generateDraftFromSelection`, populated from the selected AI Approach + checklist answers, phased across Discovery / Design / Implementation the same way `Timeline` and `Slalom Roles & Responsibilities` are already phased in the draft template.

## Why This Approach

All four recommendations reuse existing UI and data patterns already in the app (multi-select fields, quality scoring, doc recommendations, phased draft sections) rather than introducing a new paradigm, keeping the addition consistent with the rest of the wizard.

## Suggested Implementation Order

1. AI Approach field (Step 3) + match-quality scoring wiring
2. AI Flywheel Checklist prompt
3. AI Fit section on result cards
4. Draft section integration
