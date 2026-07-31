# F-002: Account Team Helper — Home Page

## Overview

A central landing page (`src/frontend/home.html`) that acts as the entry point for the Account Team Helper suite. It surfaces an at-a-glance leads dashboard and provides navigation cards to each tool in the system.

---

## Goals

1. Give account team members a single URL to bookmark for all tools.
2. Provide an immediate overview of open leads and their stages without navigating elsewhere.
3. Make it easy to launch Proposal Generator or Work Order Check in one click.

---

## Users

- **Account Executives / BD team** — reviewing lead status and launching tools.
- **Proposal writers** — quick access to Proposal Generator and Work Order Check.

---

## Scope

### In Scope

- Home page (`src/frontend/home.html`)
- Persistent header with app wordmark and profile link
- Left-hand sidebar navigation linking to all three sections
- Lead Dashboard section with summary stat cards and a leads table
- Feature navigation cards for Proposal Generator and Work Order Check
- Footer with app name and version
- Feature requirement doc (`docs/requirements/feature/f002-home-page.md`)

### Out of Scope

- Live data / backend integration (static sample data only for MVP)
- Authentication (profile link is cosmetic for prototype)
- Editable lead records (read-only table)
- Mobile/responsive breakpoints (desktop-first for MVP)

---

## Layout

```
┌─────────────────────────────────────────────────────┐
│  Header: wordmark · · · · · · · · · · · · profile   │
├──────────┬──────────────────────────────────────────┤
│          │  Summary stat cards (4)                  │
│  Sidebar │  Leads table                             │
│   nav    │  ──────────────────────────────────────  │
│          │  Feature cards (2): Proposal · WO Check  │
├──────────┴──────────────────────────────────────────┤
│  Footer                                             │
└─────────────────────────────────────────────────────┘
```

---

## Dashboard Section

### Stat Cards

Four summary cards above the table, one per key lead state:

| Card | Metric |
|---|---|
| Open Leads | Total leads not Won or Lost |
| In Proposal | Leads at "Proposal Sent" stage |
| Negotiation | Leads at "Negotiation" stage |
| Won This Month | Leads marked Won in current month |

### Leads Table

Columns: Lead / Company · Account Executive · Est. Value · Stage · Last Activity

Sample data: 10 mock leads spread across Discovery, Proposal Sent, Negotiation, Won, and Lost stages.

Stage pill colours:
- Discovery → neutral gray (`#6b7280`)
- Proposal Sent → indigo (`#5e6ad2`)
- Negotiation → amber (`#d97706`)
- Won → green (`#059669`)
- Lost → red (`#dc2626`)

---

## Feature Cards

Two cards below the dashboard, side by side:

| Card | Title | Description | Link |
|---|---|---|---|
| Proposal Generator | Find similar past proposals and generate a draft | Uses semantic similarity across 60 proposals | `../../index.html` |
| Work Order Check | Validate a work order against compliance rules | Upload a .docx and get instant pass/fail feedback | `./work-order-check.html` |

---

## Navigation (Sidebar)

Items:
- Home (active on this page)
- Dashboard (anchors to `#dashboard`)
- Proposal Generator (links to `../../index.html`)
- Work Order Check (links to `./work-order-check.html`)

---

## Design Tokens (consistent with existing pages)

| Token | Value |
|---|---|
| Primary | `#5e6ad2` |
| Primary hover | `#4f5bc0` |
| Background | `#f8f9fb` |
| Card bg | `#ffffff` |
| Border | `#e8eaed` |
| Text primary | `#1a1a2e` |
| Text secondary | `#6b7280` |
| Text muted | `#9ca3af` |
| Accent light | `#eef0fb` |
| Font | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
