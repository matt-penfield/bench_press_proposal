# Integration Architecture

## 1) Purpose

Define integration patterns for internal systems and future external connectors (for example, Salesforce/MCP tools).

## 2) Integration Principles

- API-first and contract-driven
- Least-privilege access and auditable calls
- Idempotent operations for retries
- Versioned interfaces and backward compatibility

## 3) Integration Inventory

- Proposal data sources: [TBD]
- CRM integration (future Salesforce): [TBD]
- Template/content repository: [TBD]
- Notification/event systems: [TBD]

## 4) Connectivity Pattern

- Ingress integration: [API Gateway endpoints]
- Egress integration: [Gateway-managed tools | direct APIs]
- Async integration: [Event-driven | queue-based]

## 5) MCP and Tooling Strategy

- MCP server candidates: [TBD]
- Tool registry and discovery pattern: [TBD]
- Tool authentication method: [OAuth | API key | workload identity]
- Tool-level policy enforcement: [TBD]

## 6) Data Contracts

- Request/response schema location: [TBD]
- Validation rules: [TBD]
- Error contract and retries: [TBD]
- Rate limits and quotas: [TBD]

## 7) Security Controls

- AuthN/AuthZ boundary per integration
- Secrets and credential rotation process
- PII/data minimization per call
- Integration audit logging requirements

## 8) Operational Considerations

- Timeout and circuit breaker settings
- Retry and dead-letter strategy
- SLOs by integration dependency
- Runbooks for integration outages

## 9) Open Decisions

- First wave integrations and priority order
- Build vs buy for connector strategy
