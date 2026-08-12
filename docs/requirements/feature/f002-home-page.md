# F-002: Account Team Helper — Home Page

## Overview

A central landing page (`src/frontend/home.html`) that acts as the entry point for the Propel account-team suite. It surfaces an at-a-glance leads dashboard; shared shell navigation provides access to the other tools.

---

## Goals

1. Give account team members a single URL to bookmark for all tools.
2. Provide an immediate overview of open leads and their stages without navigating elsewhere.
3. Make it easy to navigate to Proposal Generator or Work Order Check from the shared shell.

---

## Users

- **Account Executives / BD team** — reviewing lead status and launching tools.
- **Proposal writers** — quick navigation to Proposal Generator and Work Order Check.

---

## Scope

### In Scope

- Home page (`src/frontend/home.html`)
- Persistent shared header with a sidebar toggle and Propel wordmark
- Left-hand sidebar navigation linking to all three sections
- Lead Dashboard section with summary stat cards and a leads table
- Footer with Propel name, version, and GitHub link
- Feature requirement doc (`docs/requirements/feature/f002-home-page.md`)

### Out of Scope

- Live data / backend integration (static sample data only for MVP)
- Editable lead records (read-only table)

---

## Layout

```
┌─────────────────────────────────────────────────────┐
│  Header: wordmark · · · · · · · · · · · · profile   │
├──────────┬──────────────────────────────────────────┤
│          │  Summary stat cards (4)                  │
│  Sidebar │  Leads table                             │
│   nav    │                                          │
├──────────┴──────────────────────────────────────────┤
│  Footer                                             │
└─────────────────────────────────────────────────────┘
```

---

## Dashboard Section

### Stat Cards

Four summary cards above the table, one per key lead state:

| Card | Metric |
| --- | --- |
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

## Navigation (Sidebar)

Items:
- Home (active on this page)
- Proposal Generator (links to `../../index.html`)
- Work Order Check (links to `./work-order-check.html`)

The header includes a toggle that collapses or expands the sidebar. The Propel wordmark links to the home page.

---

## Design Tokens (consistent with existing pages)

| Token | Value |
| --- | --- |
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
