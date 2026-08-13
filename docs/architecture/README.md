# Architecture

This folder contains system architecture and design artifacts for the Bench Press Proposal Tool.

The shipped application is a browser-only prototype. `system-architecture.md` describes that current state first, then maps it to a future enterprise architecture. The remaining architecture documents describe target-state controls and should not be read as features currently deployed in this repository.

## Files

- `system-architecture.md`: High-level system architecture and design notes.
- `security-architecture.md`: High-level security architecture, controls, and trust boundaries.
- `artificial-intelligence-architecture.md`: Model, retrieval, prompting, and guardrail strategy.
- `integration-architecture.md`: External integrations and MCP/API integration patterns (for example, Salesforce).
- `identity-and-access-architecture.md`: Authentication, authorization, roles, and policy boundaries.
- `data-model.md`: Core entities, metadata schema, and storage mapping.
- `data-governance.md`: Classification, retention, lineage, and privacy controls.
- `network-architecture.md`: VPC, private connectivity, egress/ingress controls, and segmentation.
- `observability-architecture.md`: Logging, tracing, metrics, alerting, and operational dashboards.
- `disaster-recovery-architecture.md`: Backup, disaster recovery objectives (RPO/RTO), and failover design.

## Assets

- `assets/agentic-workflow.jpg`: Supporting workflow diagram used by `system-architecture.md`.
