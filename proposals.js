// Proposal corpus — dummy data for demonstration
// Each proposal: { id, title, source, content, format }
const PROPOSALS = [

  // ── CLOUD & INFRASTRUCTURE ──────────────────────────────────────

  {
    id: "prop-001",
    title: "AWS Cloud Migration for Regional Bank",
    source: "acme-bank-cloud-migration.pdf",
    content: "This proposal outlines a comprehensive cloud migration strategy for a mid-size regional bank with 120 branches. The client operates entirely on-premise today across two aging data centers with mainframe-dependent core banking systems. Key challenges include PCI-DSS and SOX compliance requirements, near-zero downtime tolerance for customer-facing systems, and a workforce with limited cloud skills. Our approach is a phased migration over 18 months. Phase 1 focuses on non-critical workloads such as internal portals, HR systems, and dev/test environments, migrated to AWS using a lift-and-shift model. Phase 2 tackles core banking middleware, re-platforming to containerized services on EKS. Phase 3 addresses the mainframe, using AWS Mainframe Modernization for incremental strangling of COBOL workloads. We recommend establishing a Cloud Center of Excellence with 8 engineers, a multi-account landing zone governed by AWS Control Tower, and CI/CD pipelines built on CodePipeline and Terraform. Estimated investment: $4.2M over 18 months.",
    format: "pdf"
  },
  {
    id: "prop-002",
    title: "Multi-Cloud Governance Framework for Insurance Enterprise",
    source: "national-insurance-multicloud.docx",
    content: "A Fortune 500 insurance company operates workloads across AWS, Azure, and GCP following years of decentralized cloud adoption by individual business units. The result is inconsistent security policies, redundant tooling, uncontrolled cloud spend exceeding $18M annually, and audit findings around data residency non-compliance. This proposal recommends a unified multi-cloud governance framework. We will implement a centralized Cloud Management Platform using ServiceNow ITOM integrated with each provider's native policy engines (AWS Organizations, Azure Policy, GCP Organization Policy). FinOps practices will be established with Apptio Cloudability for cost allocation, showback, and anomaly detection. A cross-cloud identity federation layer using Okta will enforce consistent RBAC across all three providers. We will also deliver a reference architecture library and cloud-native training program for 200+ engineers.",
    format: "docx"
  },
  {
    id: "prop-003",
    title: "Kubernetes Platform Engineering for Logistics Company",
    source: "globalship-k8s-platform.pdf",
    content: "A global logistics company with operations in 40 countries needs to standardize their application deployment model. Today, teams deploy to a mix of VMs, bare metal, and ad-hoc Docker hosts with no consistency. Deployments take 2-3 weeks and rollback is manual. We propose building an internal developer platform on Kubernetes. The platform will run on AWS EKS across three regions with Istio service mesh for traffic management and mTLS. Backstage will serve as the developer portal, providing self-service project scaffolding, service catalog, and documentation. ArgoCD handles GitOps-based continuous deployment. Platform observability uses Datadog for metrics, Grafana for dashboards, and OpenTelemetry for distributed tracing. Golden paths will be defined for Java Spring Boot, Node.js, and Python FastAPI services. Target: reduce deployment time from weeks to under 30 minutes.",
    format: "pdf"
  },

  // ── DATA & ANALYTICS ────────────────────────────────────────────

  {
    id: "prop-004",
    title: "Modern Data Platform for Healthcare Payer",
    source: "healthfirst-data-platform.docx",
    content: "A large healthcare payer processing 50M claims annually is struggling with fragmented data across 12 operational systems. Business analysts wait 3-5 days for reports, data science teams cannot access production data for model training, and regulatory reporting is a quarterly fire drill. We propose a modern lakehouse architecture on Azure. Azure Data Lake Storage Gen2 serves as the unified storage layer with medallion architecture (bronze/silver/gold). Azure Databricks provides the compute engine for ETL, data science, and ML model training. Unity Catalog delivers centralized governance with column-level access control and data lineage. Power BI connects to the gold layer for self-service analytics. Real-time claims streaming is handled through Azure Event Hubs and Spark Structured Streaming. We estimate the platform will reduce reporting latency from days to minutes and enable the data science team to iterate 5x faster.",
    format: "docx"
  },
  {
    id: "prop-005",
    title: "Customer 360 and CDP Implementation for Retailer",
    source: "megamart-cdp.pdf",
    content: "A national retailer with 600 stores and a growing e-commerce channel has no unified view of their customers. Data lives in separate systems: POS transactions in Oracle, e-commerce in Shopify, loyalty program in a SaaS tool, email engagement in Salesforce Marketing Cloud, and customer service in Zendesk. Marketing campaigns are generic because segmentation is impossible. We propose implementing a Customer Data Platform using Segment as the real-time event collection layer and Snowflake as the analytical warehouse. Identity resolution will stitch together anonymous and known profiles using probabilistic and deterministic matching. The unified customer profiles will power personalized marketing through Braze, dynamic website experiences via Optimizely, and predictive churn models built in Databricks. Expected outcome: 15-20% lift in campaign conversion rates and a 360-degree customer view accessible to all business teams.",
    format: "pdf"
  },
  {
    id: "prop-006",
    title: "Real-Time Fraud Detection Pipeline for Fintech",
    source: "payquick-fraud-detection.pdf",
    content: "A fast-growing fintech processing 2M transactions daily is experiencing a 0.8% fraud rate, well above the industry average of 0.3%. Current fraud detection relies on batch rules evaluated overnight, meaning fraudulent transactions are only caught the next business day. Chargebacks cost the company $4M annually. We propose a real-time fraud detection pipeline using Apache Kafka for transaction event streaming, Apache Flink for stream processing and feature computation, and a gradient boosting model served via AWS SageMaker endpoints for real-time scoring. Feature engineering includes velocity checks, device fingerprinting, geolocation anomalies, and behavioral biometrics. The system will score each transaction in under 100ms and flag suspicious activity for human review in a custom operations dashboard. Model retraining runs weekly on new labeled data. Target: reduce fraud rate to 0.25% within 6 months.",
    format: "pdf"
  },

  // ── CUSTOMER EXPERIENCE & DIGITAL ───────────────────────────────

  {
    id: "prop-007",
    title: "Patient Portal Redesign for Health System",
    source: "meridian-health-portal.pdf",
    content: "A regional health system with 15 hospitals and 200 clinics has a patient portal with only 18% adoption. Patients complain about difficulty scheduling appointments, inability to message providers, and a confusing interface that differs between the web and mobile app. Patient satisfaction (NPS) has dropped to 22. We propose a ground-up redesign of the patient portal as a responsive web application with a companion native mobile app. Key features include: AI-assisted appointment scheduling that suggests optimal times based on provider availability and patient preferences, secure asynchronous messaging with care teams, prescription refill management, visit summary and test result viewing with plain-language explanations, and a health timeline consolidating all patient interactions. The design process begins with patient journey mapping across 5 key personas, followed by a 6-week design sprint producing a validated prototype. Development follows 2-week agile sprints with monthly releases. Technology stack: React frontend, Node.js BFF layer, FHIR-compliant APIs connecting to Epic EHR.",
    format: "pdf"
  },
  {
    id: "prop-008",
    title: "Omnichannel Commerce Platform for Fashion Brand",
    source: "luxestyle-omnichannel.docx",
    content: "A premium fashion brand with 80 boutique stores and a Magento-based e-commerce site is losing market share to digitally native competitors. The in-store and online experiences are completely disconnected: inventory is not shared, loyalty points earned online cannot be redeemed in-store, and store associates have no visibility into a customer's online browsing history. We propose a unified omnichannel commerce platform built on Salesforce Commerce Cloud. The solution includes a distributed order management system enabling buy-online-pick-up-in-store (BOPIS), ship-from-store, and endless aisle capabilities. A clienteling app for store associates surfaces customer purchase history, wish lists, and AI-generated product recommendations. The loyalty program is unified across channels with a headless architecture allowing flexible frontend experiences. We will also implement a real-time inventory visibility layer using RFID and integration with the client's existing SAP ERP.",
    format: "docx"
  },
  {
    id: "prop-009",
    title: "Digital Front Door for Municipal Government",
    source: "city-of-lakewood-digital.pdf",
    content: "The City of Lakewood serves 160,000 residents but most city services still require in-person visits or phone calls. The city website is a static CMS with poor search, no transactional capability, and is not mobile friendly. Residents express frustration at not being able to pay utility bills, submit permit applications, or report issues online. We propose a Digital Front Door initiative creating a modern, accessible, mobile-first web experience for residents. Core capabilities include: online permitting and licensing with document upload and status tracking, utility bill payment and account management, 311 service request submission with photo upload and GPS location, a city services search engine powered by natural language understanding, and a resident notifications hub for alerts about outages, road closures, and events. Built on a headless CMS (Contentful) with a React frontend. Accessibility compliance to WCAG 2.1 AA is non-negotiable. Integration with the city's existing Tyler Technologies ERP for financial transactions.",
    format: "pdf"
  },

  // ── AI & MACHINE LEARNING ───────────────────────────────────────

  {
    id: "prop-010",
    title: "Generative AI Knowledge Assistant for Law Firm",
    source: "sterling-law-ai-assistant.pdf",
    content: "A 500-attorney law firm spends an estimated 30% of associate time on legal research and document review. Associates manually search through precedent databases, internal case files, and regulatory documents. Knowledge is siloed by practice group and institutional knowledge leaves when partners retire. We propose building an internal Generative AI Knowledge Assistant. The system uses a Retrieval-Augmented Generation (RAG) architecture: firm documents, case files, memos, and external legal databases are chunked, embedded using OpenAI's text-embedding-3-large model, and stored in Pinecone vector database. At query time, relevant chunks are retrieved and fed to GPT-4o with firm-specific system prompts to generate accurate, cited responses. Key features include: natural language legal research, automated contract clause comparison, case summarization, and draft memo generation. Guardrails prevent hallucination through citation verification and confidence scoring. SOC 2 compliance and data residency within the continental US are required.",
    format: "pdf"
  },
  {
    id: "prop-011",
    title: "Predictive Maintenance for Manufacturing Plant",
    source: "steelworks-predictive-maintenance.docx",
    content: "A steel manufacturing plant operates 340 pieces of heavy equipment with an average age of 12 years. Unplanned downtime costs $50,000 per hour and the plant experienced 47 unplanned outages last year. Current maintenance is calendar-based, meaning equipment is serviced on a fixed schedule regardless of actual condition. We propose an IoT-enabled predictive maintenance solution. Vibration sensors, temperature sensors, and acoustic monitors will be installed on the 50 most critical assets. Sensor data streams to AWS IoT Core and is processed through Amazon Kinesis. Machine learning models trained on historical failure data (Random Forest and LSTM neural networks) predict remaining useful life and flag anomalies. Maintenance work orders are automatically generated in SAP PM when predicted failure probability exceeds configurable thresholds. A plant floor dashboard provides real-time equipment health visibility. Expected ROI: 35% reduction in unplanned downtime and 20% reduction in maintenance costs within the first year.",
    format: "docx"
  },
  {
    id: "prop-012",
    title: "Computer Vision Quality Inspection for Pharma",
    source: "biopharma-cv-inspection.pdf",
    content: "A pharmaceutical manufacturer produces 2M units daily across 4 packaging lines. Manual visual inspection catches only 92% of defects (label misalignment, fill level variation, seal integrity issues) and requires 24 inspectors across three shifts. FDA compliance demands 99.5%+ defect detection rates. We propose an automated computer vision quality inspection system. High-resolution cameras and structured lighting are installed at key inspection points on each packaging line. A custom convolutional neural network (CNN) model, fine-tuned on the client's labeled defect dataset, classifies each unit as pass/fail in under 50ms. Edge computing hardware (NVIDIA Jetson) processes images locally to meet real-time throughput requirements. Defective units trigger automatic rejection mechanisms. A web-based quality dashboard provides real-time yield metrics, defect categorization trends, and shift-over-shift comparisons. The system integrates with the existing MES for batch record documentation. Target: 99.7% defect detection rate with full FDA 21 CFR Part 11 compliance.",
    format: "pdf"
  },

  // ── ORG DESIGN & OPERATING MODEL ────────────────────────────────

  {
    id: "prop-013",
    title: "Agile Transformation for Energy Company",
    source: "energycorp-agile-transformation.pdf",
    content: "A major energy company with 8,000 IT staff delivers projects through a traditional waterfall PMO. Average project delivery takes 14 months, requirements change frequently mid-project, and business satisfaction with IT delivery is at 34%. Leadership wants to shift to agile ways of working but previous attempts stalled due to middle management resistance and unclear governance. We propose a 24-month agile transformation program. The approach starts with leadership alignment workshops for VP+ executives, establishing a transformation vision and success metrics. We then launch 5 pilot agile teams in high-visibility product areas, each supported by embedded Slalom agile coaches. A new product operating model replaces project-based funding with persistent product teams aligned to business capabilities. We establish agile governance through quarterly business reviews replacing stage-gate approvals. Change management includes a network of 40 change champions, a custom learning academy with role-based curricula, and a community of practice for scrum masters and product owners. Metrics framework tracks lead time, deployment frequency, team health, and business value delivered.",
    format: "pdf"
  },
  {
    id: "prop-014",
    title: "Target Operating Model for Post-Merger Integration",
    source: "acq-target-operating-model.docx",
    content: "Following the acquisition of a $2B competitor, a consumer goods company needs to integrate two overlapping IT organizations totaling 1,200 staff. Both companies have separate ERP systems (SAP and Oracle), redundant vendor contracts, and conflicting technology standards. Cultural differences between the two organizations are creating friction and attrition is rising. We propose designing and implementing a target operating model for the combined IT organization. Phase 1 (8 weeks) is a current-state assessment mapping all roles, capabilities, vendor contracts, and technology assets across both organizations. Phase 2 (6 weeks) designs the target operating model including a capability-based org structure, consolidated vendor strategy, unified technology standards, and a single IT governance framework. Phase 3 (12 months) executes the integration through organizational restructuring, role mapping and selection, vendor rationalization, and cultural integration activities. We staff with 6 Slalom consultants plus a dedicated change management workstream addressing communication, workforce transitions, and cultural alignment.",
    format: "docx"
  },

  // ── CYBERSECURITY ───────────────────────────────────────────────

  {
    id: "prop-015",
    title: "Zero Trust Security Architecture for Hospital Network",
    source: "regional-hospital-zerotrust.pdf",
    content: "A regional hospital network with 12 facilities experienced a ransomware incident that disrupted clinical operations for 72 hours. The post-incident review revealed flat network architecture, excessive privileged access, unpatched medical devices, and no network segmentation between clinical and administrative systems. The board has mandated a security overhaul. We propose implementing a Zero Trust security architecture. The program includes: micro-segmentation of the clinical network using Illumio to isolate medical devices and critical systems, privileged access management through CyberArk with just-in-time access provisioning, endpoint detection and response (EDR) deployment via CrowdStrike across all endpoints including clinical workstations, identity-centric access controls using Azure AD Conditional Access with MFA for all users, and a 24/7 security operations center (SOC) staffed by Slalom's managed security team during the 12-month transition. Medical device inventory and risk assessment covers all 8,000+ connected devices. HIPAA compliance validation is included throughout.",
    format: "pdf"
  },

  // ── SUPPLY CHAIN ────────────────────────────────────────────────

  {
    id: "prop-016",
    title: "Supply Chain Control Tower for CPG Company",
    source: "freshfoods-supply-chain.docx",
    content: "A consumer packaged goods company with $3B in annual revenue and 6 manufacturing plants experiences chronic supply chain disruption. Demand forecasting accuracy is only 62%, inventory carrying costs are $180M annually, and the company frequently faces both stockouts and excess inventory simultaneously across different regions. Supply chain visibility is limited to internal systems with no real-time tracking of inbound materials or outbound shipments. We propose building a Supply Chain Control Tower providing end-to-end visibility and intelligent decision support. The platform integrates data from the client's SAP ERP, transportation management system, warehouse management systems, and external sources including weather data, port congestion feeds, and supplier scorecards. A demand sensing engine using gradient boosting models improves forecast accuracy by incorporating POS data, promotional calendars, and external signals. A digital twin of the supply network enables scenario modeling for disruption response. The control tower dashboard provides real-time alerts, recommended actions, and what-if analysis capabilities. Target: improve forecast accuracy to 80%+ and reduce inventory carrying costs by 15%.",
    format: "docx"
  },

  // ── SALESFORCE / CRM ────────────────────────────────────────────

  {
    id: "prop-017",
    title: "Salesforce Implementation for Nonprofit",
    source: "hopebridge-salesforce.pdf",
    content: "A national nonprofit with 50 regional chapters manages donor relationships through spreadsheets, Mailchimp, and a legacy Access database. There is no unified donor record, gift acknowledgments are manually generated, and the development team cannot produce reliable fundraising reports. Major donor cultivation is ad hoc with no systematic tracking of moves management activities. We propose implementing Salesforce Nonprofit Cloud as the unified CRM and fundraising platform. The solution includes: constituent management with household and organizational relationship tracking, gift processing and acknowledgment automation, moves management pipeline for major gifts, campaign management for direct mail and digital fundraising, volunteer management integration, and a grant tracking module for institutional giving. Data migration from the Access database and Mailchimp includes deduplication and data quality remediation. We deliver training for 120 users across all chapters and a runbook for ongoing administration. The implementation follows a 16-week timeline with a phased rollout starting with the central development team.",
    format: "pdf"
  },

  // ── PROCESS AUTOMATION ──────────────────────────────────────────

  {
    id: "prop-018",
    title: "Intelligent Document Processing for Insurance Claims",
    source: "safecover-idp-claims.docx",
    content: "An insurance carrier processes 15,000 claims per month, each requiring manual review of submitted documents including accident reports, police reports, medical records, repair estimates, and policy declarations. Claims adjusters spend 40% of their time on document intake, data extraction, and data entry into the claims management system. Average claims processing time is 12 days and accuracy errors cause 8% rework. We propose an Intelligent Document Processing (IDP) solution using Azure AI Document Intelligence for OCR and document classification, combined with custom extraction models for insurance-specific document types. The pipeline automatically classifies incoming documents, extracts structured data (claim numbers, dates of loss, amounts, policy details), validates against business rules, and populates the Guidewire ClaimCenter system via API. A human-in-the-loop review queue handles low-confidence extractions. The solution processes documents in under 30 seconds with 95%+ extraction accuracy. Expected outcome: reduce claims processing time to 5 days and free up 60% of adjuster time for complex claim investigation.",
    format: "docx"
  },

  // ── NICHE / UNLIKELY MATCHES ────────────────────────────────────

  {
    id: "prop-019",
    title: "Sustainability Reporting Platform for Mining Company",
    source: "deeprock-esg-reporting.pdf",
    content: "A global mining company with operations in 8 countries faces increasing pressure from investors, regulators, and communities to demonstrate ESG performance. Current sustainability reporting is a manual annual exercise involving spreadsheets collected from site environmental managers, with data quality issues and no auditability. New EU CSRD regulations require machine-readable, auditable sustainability disclosures starting next fiscal year. We propose building a Sustainability Reporting Platform on Microsoft Fabric. The platform automates collection of environmental data (emissions, water usage, waste, biodiversity metrics) from IoT sensors at mine sites and manual entry for social and governance metrics. A calculation engine applies GHG Protocol standards for Scope 1, 2, and 3 emissions. The reporting module generates disclosures aligned to GRI, SASB, TCFD, and EU CSRD frameworks. An executive dashboard tracks progress against science-based targets with drill-down to site-level detail. Data lineage and audit trails satisfy third-party assurance requirements.",
    format: "pdf"
  },
  {
    id: "prop-020",
    title: "Fleet Electrification Planning for Delivery Company",
    source: "quickdeliver-ev-fleet.pdf",
    content: "A last-mile delivery company operating 3,000 diesel vans across 25 metro areas has committed to full fleet electrification by 2030. The company has no experience with electric vehicles, charging infrastructure, or the operational changes required. Route distances, payload weights, and depot configurations vary significantly across markets. Utility rate structures and local incentive programs differ in every operating area. We propose a comprehensive fleet electrification planning engagement. Phase 1 analyzes current fleet operations using telematics data to model daily route distances, energy requirements, and payload demands. Phase 2 evaluates EV options (make, model, battery capacity) matched to route profiles and develops a market-by-market transition sequence prioritized by TCO savings and incentive availability. Phase 3 designs charging infrastructure for each depot including charger placement, electrical capacity upgrades, demand management strategies, and utility rate optimization. Phase 4 addresses operational changes: driver training, maintenance program redesign, dispatch system modifications for range management, and mobile charging contingency plans. Deliverables include a 5-year transition roadmap with capital plan and projected savings.",
    format: "pdf"
  }
];
