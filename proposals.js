// Proposal corpus — 60 mock proposals across 14 business units for a digital retailer
// Each proposal: { id, title, source, bu, content, format }
const PROPOSALS = [

  // ── ADVERTISING ─────────────────────────────────────────────────

  {
    id: "prop-001",
    title: "Advertising Measurement Dashboard",
    source: "advertising-measurement-dashboard-2026.docx",
    bu: "Advertising",
    content: `Purpose: This document outlines Slalom's proposed approach, team structure, and engagement model to design and deliver a unified advertising measurement dashboard for the Advertising Analytics team. The engagement will consolidate fragmented campaign performance data into a single self-service analytics experience.

Our Understanding: The Advertising team currently relies on 7 separate reporting tools and manual spreadsheet aggregation to assess campaign performance across Sponsored Products, Sponsored Brands, Display, and Streaming TV ad formats. Campaign managers spend approximately 12 hours per week compiling cross-channel performance reports. Attribution data is siloed between first-party retail signals and third-party measurement partners, making holistic return-on-ad-spend analysis nearly impossible. Key challenges include inconsistent metric definitions across ad products, latency in third-party attribution data ingestion, and no standardized alerting for campaign anomalies.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement divided into three phases. Phase 1 (Weeks 1-4) focuses on discovery and data modeling, conducting stakeholder interviews and designing a unified semantic data model on Redshift. Phase 2 (Weeks 5-10) covers dashboard development using QuickSight with cross-channel campaign views, creative-level performance breakdowns, and automated ROAS calculations. Phase 3 (Weeks 11-14) addresses UAT, training with 30 campaign managers, and transition documentation.

Slalom Roles and Responsibilities: Engagement Lead — overall delivery oversight and stakeholder alignment. Data Engineer (Full Time) — unified data model in Redshift, ETL pipelines, data quality validation. BI Developer (Full Time) — QuickSight dashboard design, calculated fields, row-level security, alerting. UX Designer (Part Time) — dashboard layout, information hierarchy, usability testing. Accountable Executive (Part Time) — senior escalation point.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $485,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to Redshift data warehouse and QuickSight enterprise license. Third-party attribution partners will provide API access. Client will review deliverables within 5 business days.

Next Steps: Incorporate feedback. Generate formal Work Order. Initiate Legal, Tax and Finance processes. Identify team and begin onboarding. Conduct kickoff.`,
    format: "docx"
  },

  {
    id: "prop-015",
    title: "Programmatic Ad Creative Optimization Engine",
    source: "advertising-creative-optimization-2026.pdf",
    bu: "Advertising",
    content: `Purpose: This document outlines Slalom's proposed approach to build a creative optimization engine that automatically tests ad creative variations and allocates impressions to top-performing combinations, improving average click-through rates by 25%.

Our Understanding: The Advertising creative team currently runs manual A/B tests on ad creatives, testing 2-3 variations per campaign over 7-day test periods. With over 4,000 active campaigns, only 12% receive any creative testing. Campaign managers report that the testing workflow requires too many manual steps and results are often inconclusive due to insufficient sample sizes. Initial analysis of 500 campaigns suggests that the best-performing creative variation outperforms the worst by an average of 340%, indicating substantial optimization opportunity.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) analyzes historical campaign performance data to identify creative attributes most correlated with performance and designs the multi-armed bandit allocation algorithm. Phase 2 (Weeks 5-10) builds the optimization engine with automated creative variation generation, Thompson Sampling allocation that dynamically shifts impressions to winning combinations, statistical significance detection, and a reporting dashboard showing performance lift by creative attribute. Phase 3 (Weeks 11-14) pilots with 200 campaigns across multiple ad formats and measures aggregate CTR improvement.

Slalom Roles and Responsibilities: Engagement Lead — delivery oversight and advertising product coordination. ML Engineer (Full Time) — multi-armed bandit algorithm, statistical modeling, performance attribution. Software Engineer x2 (Full Time) — optimization engine, creative variation pipeline, API integration. Data Analyst (Full Time) — historical analysis, measurement framework, pilot reporting. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $610,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to campaign performance data, creative asset management system, and ad serving APIs. The ad platform supports API-based impression allocation control.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── RETAIL ──────────────────────────────────────────────────────

  {
    id: "prop-002",
    title: "Search Relevance Optimization for Product Discovery",
    source: "retail-search-relevance-2026.pdf",
    bu: "Retail",
    content: `Purpose: This document outlines Slalom's proposed approach to improve product search relevance and discovery across the retail catalog, reducing zero-result searches and increasing conversion from search to purchase.

Our Understanding: The Retail Search team is experiencing a 9.4% zero-result rate on customer product searches, up from 6.1% a year ago as the catalog has expanded to over 350 million active SKUs. Customers frequently abandon sessions after encountering irrelevant results, contributing to an estimated $180M in annual lost revenue. The current search ranking algorithm relies heavily on text matching with limited semantic understanding, resulting in poor performance for natural language queries, misspellings, and synonym variations. Search performance degrades significantly for long-tail and niche product categories where training data is sparse.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-3) conducts a search relevance audit analyzing query logs, click-through data, and zero-result patterns. Phase 2 (Weeks 4-10) implements a semantic search layer using transformer-based embeddings for query understanding, synonym expansion, and category inference. Phase 3 (Weeks 11-14) builds a personalized re-ranking model incorporating customer browsing history and purchase patterns. Phase 4 (Weeks 15-16) runs A/B tests measuring impact on key metrics.

Slalom Roles and Responsibilities: Engagement Lead — delivery coordination. ML Engineer x2 (Full Time) — model development, embedding pipeline, A/B test framework. Data Scientist (Full Time) — query log analysis, relevance scoring. Search Engineer (Full Time) — integration with existing search infrastructure. Accountable Executive (Part Time) — quality oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $720,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to search query logs, click-through data, and catalog APIs. Existing search infrastructure supports plugin-based re-ranking.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  {
    id: "prop-017",
    title: "Product Review Authenticity and Quality Platform",
    source: "retail-review-authenticity-2026.pdf",
    bu: "Retail",
    content: `Purpose: This document outlines Slalom's proposed approach to build a review authenticity and quality platform that identifies and suppresses fraudulent reviews while surfacing the most helpful genuine reviews to customers.

Our Understanding: The Retail customer reviews team manages over 1.5 billion product reviews. Fraudulent and incentivized reviews undermine customer trust and distort product rankings. The current detection system catches approximately 68% of fraudulent reviews, but new manipulation tactics including AI-generated review text and coordinated review rings are evolving faster than rule-based detection can adapt. Customer surveys indicate that 34% of shoppers distrust review ratings, up from 19% two years ago, and this distrust is driving purchases to competitor platforms.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes labeled fraudulent review datasets and designs the multi-signal detection architecture. Phase 2 (Weeks 5-10) builds the detection platform with NLP-based linguistic authenticity scoring, behavioral analysis tracking reviewer account patterns, and graph-based network analysis identifying coordinated review rings. Phase 3 (Weeks 11-14) runs detection against live traffic measuring precision and recall. Phase 4 (Weeks 15-16) integrates with the review publishing pipeline.

Slalom Roles and Responsibilities: Engagement Lead — delivery and trust/safety coordination. ML Engineer x2 (Full Time) — NLP models, graph analysis, detection pipeline. Data Engineer (Full Time) — data pipelines, real-time scoring infrastructure. Data Scientist (Full Time) — pattern analysis, model evaluation. Accountable Executive (Part Time) — oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $710,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to labeled review datasets and reviewer behavior data. Legal team will validate detection policies. Model decisions will be auditable for seller appeals.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── WEB SERVICES ────────────────────────────────────────────────

  {
    id: "prop-003",
    title: "Multi-Region Disaster Recovery for Core Platform Services",
    source: "ws-disaster-recovery-2026.pdf",
    bu: "Web Services",
    content: `Purpose: This document outlines Slalom's proposed approach to design and implement a multi-region disaster recovery strategy for core platform services, ensuring business continuity with an RTO of under 15 minutes and RPO of under 1 minute.

Our Understanding: The Web Services platform team operates 14 critical microservices that support downstream customer-facing applications. Currently, these services run in a single primary region with manual failover procedures that have not been tested in over 18 months. A recent partial outage resulted in 47 minutes of degraded service. Key challenges include stateful services with regional database dependencies, inconsistent health check implementations, and no automated traffic rerouting capability.

Slalom Proposed Delivery Approach: Slalom proposes a 20-week engagement. Phase 1 (Weeks 1-4) performs a resilience assessment of all 14 services. Phase 2 (Weeks 5-12) implements active-passive multi-region architecture using Route 53, Aurora Global Database, and DynamoDB Global Tables. Phase 3 (Weeks 13-18) builds automated failover orchestration with Step Functions and chaos engineering tests using Fault Injection Simulator. Phase 4 (Weeks 19-20) conducts a full-scale failover drill.

Slalom Roles and Responsibilities: Engagement Lead — program coordination. Principal Engineer (Full Time) — architecture design. Cloud Engineer x2 (Full Time) — infrastructure implementation with CDK. SRE Engineer (Full Time) — chaos engineering, monitoring, runbook automation. Accountable Executive (Part Time) — oversight.

Timeline: 20 weeks (August 2026 – December 2026).

Total Estimated Cost: $890,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to all service repositories, infrastructure accounts, and monitoring systems. No major service architecture changes during the engagement.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── DEVICES ─────────────────────────────────────────────────────

  {
    id: "prop-004",
    title: "Voice Assistant Accessibility Features for Smart Home Devices",
    source: "devices-accessibility-voice-2026.docx",
    bu: "Devices",
    content: `Purpose: This document outlines Slalom's proposed approach to design and implement enhanced accessibility features for the smart home voice assistant ecosystem, expanding usability for customers with hearing, vision, and mobility impairments.

Our Understanding: Approximately 8% of active device users have disclosed accessibility needs, yet current voice assistant interactions are optimized primarily for able-bodied users. Customers with hearing impairments cannot effectively use voice-only response modes. Users with motor disabilities struggle with wake-word activation timing. Vision-impaired users report difficulty with companion app navigation. Customer feedback scores for accessibility are 23 points below the overall device satisfaction average, and the European Accessibility Act requires compliance improvements.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) conducts accessibility user research with 40 participants, producing journey maps and a prioritized backlog. Phase 2 (Weeks 4-9) implements adaptive response modes including visual captions, haptic feedback, adjustable wake-word sensitivity, and switch-access compatibility. Phase 3 (Weeks 10-12) performs WCAG 2.2 compliance validation and assistive technology testing.

Slalom Roles and Responsibilities: Engagement Lead — coordination. UX Researcher (Full Time) — accessibility research, user testing. UX Designer x2 (Full Time) — interaction design for adaptive modes. Software Engineer (Full Time) — accessibility feature implementation. Accountable Executive (Part Time) — oversight.

Timeline: 12 weeks (October 2026 – December 2026).

Total Estimated Cost: $540,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to research participants through existing accessibility panels. Device firmware development environments and test hardware will be provided.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  {
    id: "prop-019",
    title: "Smart Home Device Setup Experience Simplification",
    source: "devices-setup-simplification-2026.pdf",
    bu: "Devices",
    content: `Purpose: This document outlines Slalom's proposed approach to simplify the smart home device setup experience, reducing average setup time from 12 minutes to under 3 minutes and decreasing setup-related support contacts by 45%.

Our Understanding: The Devices team ships 8 million smart home devices annually across 6 product lines. Post-purchase setup accounts for 38% of all device-related support contacts. Setup failure rate is 14%, caused by WiFi connectivity issues (42%), account linking errors (28%), and confusion over device-specific setup variations (30%). Customers who fail setup on first attempt are 3x more likely to return the device.

Slalom Proposed Delivery Approach: Slalom proposes a 10-week engagement. Phase 1 (Weeks 1-3) analyzes setup telemetry and conducts contextual inquiry with 20 customers during actual setup. Phase 2 (Weeks 4-7) designs a simplified unified setup flow with proximity-based device detection, streamlined WiFi provisioning, progressive account creation, and proactive error recovery. Phase 3 (Weeks 8-10) delivers a validated prototype tested with 25 customers and engineering specifications.

Slalom Roles and Responsibilities: Engagement Lead — coordination. UX Researcher (Full Time) — customer research, setup observation studies. UX Designer x2 (Full Time) — setup flow design, prototyping. Software Engineer (Full Time) — proximity detection and WiFi provisioning POC. Accountable Executive (Part Time) — oversight.

Timeline: 10 weeks (October 2026 – December 2026).

Total Estimated Cost: $440,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide test devices across all product lines. Device firmware teams will validate technical feasibility.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── ENTERTAINMENT ───────────────────────────────────────────────

  {
    id: "prop-005",
    title: "Live Sports Streaming Latency Reduction",
    source: "entertainment-live-sports-latency-2026.pdf",
    bu: "Entertainment",
    content: `Purpose: This document outlines Slalom's proposed approach to reduce end-to-end streaming latency for live sports broadcasts, targeting sub-3-second glass-to-glass latency to enable real-time interactive viewer experiences.

Our Understanding: The Live Sports Streaming team currently delivers live events with 8-12 seconds of latency, which prevents the launch of interactive features such as live predictive play, synchronized watch parties, and real-time stats overlays. The current architecture uses HLS segmented delivery with 6-second segments and CDN caching that adds additional delay. The encoding pipeline introduces 2-3 seconds through ABR ladder generation. Competitor platforms have achieved sub-5-second latency.

Slalom Proposed Delivery Approach: Slalom proposes an 18-week engagement. Phase 1 (Weeks 1-4) profiles the current latency stack. Phase 2 (Weeks 5-12) implements LL-HLS with CMAF chunked transfer, reduces segment duration, deploys edge compute, and tunes the ABR algorithm. Phase 3 (Weeks 13-16) conducts load testing at 2M concurrent viewers across 15 device types. Phase 4 (Weeks 17-18) runs a production pilot during 3 live events.

Slalom Roles and Responsibilities: Engagement Lead — program management. Principal Engineer (Full Time) — streaming architecture. Video Engineer x2 (Full Time) — encoding optimization, LL-HLS, player tuning. Cloud Engineer (Full Time) — CDN configuration, edge compute. QA Engineer (Full Time) — cross-device testing. Accountable Executive (Part Time) — oversight.

Timeline: 18 weeks (September 2026 – January 2027).

Total Estimated Cost: $950,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to encoding pipeline, CDN configuration, and player SDK. Live test events will be scheduled during the engagement.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── FINANCE AND BUSINESS SERVICES ───────────────────────────────

  {
    id: "prop-006",
    title: "Automated Invoice Reconciliation Platform",
    source: "fbs-invoice-reconciliation-2026.docx",
    bu: "Finance and Business Services",
    content: `Purpose: This document outlines Slalom's proposed approach to design and implement an automated invoice reconciliation platform, reducing manual reconciliation effort by 70% and improving accuracy from 94% to 99.5%.

Our Understanding: Finance Operations processes approximately 120,000 vendor invoices per month across 8 business units. Currently, 60% require manual reconciliation due to discrepancies between purchase orders, goods receipts, and invoiced amounts. A team of 45 AP specialists spends an average of 18 minutes per exception, creating a 12-day backlog. Late payment penalties cost $2.4M annually. The existing ERP's three-way matching generates excessive false positives.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes 6 months of exception data and designs the solution architecture. Phase 2 (Weeks 5-12) builds the automated reconciliation engine with configurable tolerance rules, ML-based pattern matching, and vendor-specific matching profiles. Phase 3 (Weeks 13-16) conducts parallel processing against live invoices and transitions to production.

Slalom Roles and Responsibilities: Engagement Lead — delivery and finance stakeholder alignment. Data Engineer (Full Time) — data pipelines, ERP integration, matching engine. ML Engineer (Full Time) — pattern recognition, confidence scoring. Business Analyst (Full Time) — exception analysis, matching rules, UAT. Accountable Executive (Part Time) — escalation.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $580,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide ERP APIs and 6 months of historical data. AP team will be available for requirements and UAT. No major ERP upgrades during the engagement.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── HEALTH SERVICES ─────────────────────────────────────────────

  {
    id: "prop-007",
    title: "Telehealth Platform UX Redesign",
    source: "health-telehealth-ux-2026.pdf",
    bu: "Health Services",
    content: `Purpose: This document outlines Slalom's proposed approach to redesign the telehealth platform experience, improving patient visit completion rates from 72% to 90% and reducing average time-to-provider from 8 minutes to under 3 minutes.

Our Understanding: The telehealth platform serves 2.1 million monthly active patients but 28% abandon before connecting with a provider. Top frustrations are confusing pre-visit intake forms (34%), unclear wait times (27%), technical video difficulties (22%), and inability to switch between chat and video mid-visit (17%). The platform was built rapidly and has accumulated UX debt with navigation patterns differing between web and mobile.

Slalom Proposed Delivery Approach: Slalom proposes a 10-week engagement. Phase 1 (Weeks 1-3) conducts usability research with 25 patients and 10 providers and analyzes abandonment funnels. Phase 2 (Weeks 4-7) redesigns the visit flow with streamlined intake, real-time queue position, one-click video connection, seamless modality switching, and a post-visit action hub. Phase 3 (Weeks 8-10) delivers a validated prototype tested with 20 patients, a component library, and accessibility audit.

Slalom Roles and Responsibilities: Engagement Lead — coordination. UX Researcher (Full Time) — patient and provider research. UX Designer x2 (Full Time) — interaction and visual design. Content Designer (Part Time) — intake language, messaging. Accountable Executive (Part Time) — oversight.

Timeline: 10 weeks (November 2026 – January 2027).

Total Estimated Cost: $420,000.00 Do-Not-Exceed Amount.

Assumptions: Client will recruit research participants through existing panels. All designs will be validated for HIPAA compliance by client security.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  {
    id: "prop-018",
    title: "Pharmacy Prescription Fulfillment Process Automation",
    source: "health-pharmacy-automation-2026.docx",
    bu: "Health Services",
    content: `Purpose: This document outlines Slalom's proposed approach to automate the pharmacy prescription fulfillment process, reducing average fulfillment time from 48 hours to 12 hours and eliminating 85% of manual data entry through intelligent document processing.

Our Understanding: The pharmacy operation processes 280,000 prescriptions monthly. 40% arrive via fax requiring manual transcription with a 3.2% error rate. Insurance eligibility verification is largely manual. Prior authorization creates the largest bottleneck with 72-hour average resolution time, and 60% of denials are overturned on appeal with standardized clinical documentation.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) profiles the prescription intake pipeline and maps insurance and prior auth workflows. Phase 2 (Weeks 5-10) implements OCR-based prescription processing, automated insurance eligibility verification via payer APIs, and a prior authorization engine that generates clinical documentation automatically. Phase 3 (Weeks 11-14) conducts 30-day parallel processing and transitions to production.

Slalom Roles and Responsibilities: Engagement Lead — pharmacy operations coordination. ML Engineer (Full Time) — OCR model training, prescription extraction. Software Engineer x2 (Full Time) — payer integration, prior auth workflow, pharmacy system integration. Business Analyst (Full Time) — workflow mapping, prescriber analysis, UAT. Accountable Executive (Part Time) — oversight.

Timeline: 14 weeks (November 2026 – February 2027).

Total Estimated Cost: $580,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide pharmacy management system APIs and de-identified prescription samples. Pharmacist staff will participate in validation.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── LOW EARTH ORBIT SATELLITES ──────────────────────────────────

  {
    id: "prop-008",
    title: "Satellite Constellation Capacity Planning Tool",
    source: "leo-capacity-planning-2026.pdf",
    bu: "Low Earth Orbit Satellites",
    content: `Purpose: This document outlines Slalom's proposed approach to build a geospatial capacity planning tool for the satellite constellation, enabling the network operations team to optimize bandwidth allocation across orbital planes and ground station coverage areas.

Our Understanding: The LEO Satellites team operates a growing constellation providing broadband connectivity. Capacity planning uses spreadsheets and ad-hoc Python scripts to model coverage areas, beam allocation, and capacity reservations. This takes 3-5 days per planning cycle and cannot account for real-time demand fluctuations, weather-related signal degradation, or dynamic orbital adjustments. The team needs a tool integrating satellite telemetry, ground station throughput, subscriber demand forecasts, and orbital trajectory models.

Slalom Proposed Delivery Approach: Slalom proposes a 20-week engagement. Phase 1 (Weeks 1-5) defines the geospatial data model and solution architecture. Phase 2 (Weeks 6-14) builds the capacity planning engine with geospatial aggregation, demand forecasting, capacity reservation workflow, and scenario modeling. A map-based dashboard provides visual coverage analysis. Phase 3 (Weeks 15-18) integrates real-time telemetry feeds. Phase 4 (Weeks 19-20) conducts UAT and transition.

Slalom Roles and Responsibilities: Engagement Lead — program coordination. Geospatial BIE (Full Time) — geospatial modeling, aggregation, analytics. Data Engineer (Full Time) — telemetry pipelines, demand forecasting. Software Engineer (Full Time) — planning tool UI, scenario modeling. GIS SME (Part Time) — geospatial domain expertise. Accountable Executive (Part Time) — oversight.

Timeline: 20 weeks (September 2026 – January 2027).

Total Estimated Cost: $780,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide satellite telemetry data, ground station APIs, and subscriber demand data. Orbital trajectory data will be available through existing systems.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── OPERATIONS ──────────────────────────────────────────────────

  {
    id: "prop-009",
    title: "Last-Mile Delivery Route Optimization",
    source: "ops-delivery-route-optimization-2026.docx",
    bu: "Operations",
    content: `Purpose: This document outlines Slalom's proposed approach to optimize last-mile delivery routing, targeting a 12% reduction in cost-per-package and a 15% improvement in on-time delivery rates.

Our Understanding: The last-mile delivery network serves 22 metro areas with 8,500 vehicles completing 340,000 deliveries per day. Routes are generated in batch at 4:00 AM and remain static, not accounting for real-time traffic, same-day package additions, or driver constraints. Failed first-attempt deliveries cost $4.20 per package in re-delivery expenses. The team has piloted manual route adjustments in two markets but needs a scalable automated solution.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) analyzes 90 days of historical delivery data. Phase 2 (Weeks 4-10) implements dynamic routing with real-time traffic feeds, continuous re-optimization, time-window sequencing, and vehicle capacity constraints. Phase 3 (Weeks 11-12) pilots in 3 metro areas. Phase 4 (Weeks 13-14) measures results and delivers a rollout plan.

Slalom Roles and Responsibilities: Engagement Lead — operations coordination. Data Scientist (Full Time) — route optimization model. Software Engineer x2 (Full Time) — routing engine, traffic integration. Operations Analyst (Full Time) — delivery data analysis, pilot coordination. Accountable Executive (Part Time) — oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $620,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide delivery data, GPS telemetry, and traffic API subscriptions. Dispatch systems support API-based route injection.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  {
    id: "prop-016",
    title: "Fulfillment Center Workforce Planning Analytics",
    source: "ops-workforce-planning-2026.docx",
    bu: "Operations",
    content: `Purpose: This document outlines Slalom's proposed approach to build a workforce planning analytics platform for fulfillment centers, improving labor forecasting accuracy from 78% to 92% and reducing overtime spend by 20%.

Our Understanding: Workforce management plans staffing for 45 fulfillment centers with 180,000 associates. Current forecasting uses simple moving averages that fail to account for promotions, weather, and regional demand shifts. Forecasting inaccuracy costs $85M annually in overtime and missed delivery promises. Shift scheduling is managed in spreadsheets with no network-wide optimization, and cross-FC labor sharing is ad hoc.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) integrates historical volume, staffing, and external signal data. Phase 2 (Weeks 5-10) builds a demand-driven forecasting model using gradient boosting with an optimization layer for shift scheduling. Phase 3 (Weeks 11-14) deploys a network-level dashboard with cross-FC labor sharing recommendations. Phase 4 (Weeks 15-16) runs a 4-week parallel pilot in 5 FCs.

Slalom Roles and Responsibilities: Engagement Lead — operations leadership coordination. Data Scientist x2 (Full Time) — forecasting, feature engineering. Data Engineer (Full Time) — data integration, dashboard infrastructure. Operations Analyst (Full Time) — domain expertise, pilot measurement. Accountable Executive (Part Time) — oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $660,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide historical data for all 45 FCs. Promotional calendar and weather APIs available. FC general managers will support the pilot.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── PHYSICAL STORES ─────────────────────────────────────────────

  {
    id: "prop-010",
    title: "Cashierless Checkout Technology Expansion",
    source: "stores-cashierless-expansion-2026.pdf",
    bu: "Physical Stores",
    content: `Purpose: This document outlines Slalom's proposed approach to expand cashierless checkout technology to 25 additional store locations, adapting the existing computer vision system for larger format stores with expanded product catalogs.

Our Understanding: Cashierless technology has been deployed in 12 small-format locations. Expansion to 25 larger grocery stores faces challenges: 15x the SKU count (45,000 vs 3,000), wider aisles reducing camera density, produce requiring weight-based pricing, and higher concurrent customer counts. The product recognition model accuracy drops from 97.2% to 89.1% against the expanded catalog, particularly for visually similar produce and store-brand packaging. The CV pipeline compute cost scales at 4x for larger stores.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) audits the CV pipeline and designs architecture modifications. Phase 2 (Weeks 5-10) retrains the product recognition model, implements produce identification using shape/color analysis with scale integration, and optimizes the inference pipeline. Phase 3 (Weeks 11-14) tests in a pilot store with 500 walk-through scenarios. Phase 4 (Weeks 15-16) delivers deployment playbooks for the remaining 24 stores.

Slalom Roles and Responsibilities: Engagement Lead — store operations coordination. ML Engineer x2 (Full Time) — model retraining, produce recognition. Computer Vision Engineer (Full Time) — camera layout, tracking, edge compute. Solutions Architect (Full Time) — infrastructure scaling, cost optimization. Accountable Executive (Part Time) — escalation.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $740,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide existing CV codebase and training data. A pilot store will be available for testing. Store operations will support product catalog validation.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── ROBOTICS ────────────────────────────────────────────────────

  {
    id: "prop-011",
    title: "Warehouse Robotic Pick Path Optimization",
    source: "robotics-pick-path-optimization-2026.pdf",
    bu: "Robotics",
    content: `Purpose: This document outlines Slalom's proposed approach to optimize robotic pick path algorithms in fulfillment centers, targeting a 20% improvement in picks-per-hour and a 30% reduction in robot travel distance.

Our Understanding: Autonomous mobile robots operate across 18 fulfillment centers. Current path planning uses a nearest-neighbor heuristic that ignores aisle congestion, robot battery levels, and pod retrieval dependencies. During peak periods, robots encounter traffic jams at intersections, reducing throughput by 25%. Pod storage does not adjust based on demand velocity, placing high-demand items in distant locations.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) instruments robots with telemetry to profile travel patterns and congestion. Phase 2 (Weeks 4-8) develops multi-agent path planning with congestion avoidance, battery-aware routing, and intersection coordination, plus demand-velocity pod placement. Phase 3 (Weeks 9-10) simulates against 30 days of historical orders. Phase 4 (Weeks 11-12) deploys live pilot in a single FC.

Slalom Roles and Responsibilities: Engagement Lead — FC operations coordination. Robotics Engineer (Full Time) — path planning, multi-agent coordination. Data Scientist (Full Time) — demand velocity analysis, pod placement. Software Engineer (Full Time) — telemetry, simulation, fleet management integration. Accountable Executive (Part Time) — oversight.

Timeline: 12 weeks (October 2026 – December 2026).

Total Estimated Cost: $520,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide fleet management APIs, FC floor plans, and historical order data. Robot firmware supports over-the-air path planning updates.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── SHARED SERVICES ─────────────────────────────────────────────

  {
    id: "prop-012",
    title: "Enterprise Identity and Access Management Modernization",
    source: "shared-iam-modernization-2026.docx",
    bu: "Shared Services",
    content: `Purpose: This document outlines Slalom's proposed approach to modernize the enterprise identity and access management platform, consolidating 4 legacy identity systems into a unified zero-trust access framework.

Our Understanding: Shared Services operates 4 separate identity providers: on-premise Active Directory, cloud IAM, a B2B partner identity system, and a contractor access tool. This results in inconsistent policies, 14-day employee provisioning time, 340 orphaned accounts from the last audit, and excessive standing privileges for 23% of accounts. The team needs a unified platform with automated lifecycle management and just-in-time access provisioning.

Slalom Proposed Delivery Approach: Slalom proposes a 20-week engagement. Phase 1 (Weeks 1-4) maps all identity sources and integration points. Phase 2 (Weeks 5-12) implements consolidated identity with automated provisioning, RBAC rationalization, just-in-time PAM, and self-service access requests. Phase 3 (Weeks 13-18) migrates users in phased waves. Phase 4 (Weeks 19-20) decommissions legacy systems and conducts access certification.

Slalom Roles and Responsibilities: Engagement Lead — IT and security coordination. Identity Architect (Full Time) — architecture, policy framework. Security Engineer x2 (Full Time) — platform implementation, PAM, integration. Business Analyst (Full Time) — role mining, RBAC, migration coordination. Accountable Executive (Part Time) — oversight.

Timeline: 20 weeks (September 2026 – January 2027).

Total Estimated Cost: $820,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to all identity systems. Security team will validate policy designs. Migration coordinated with HR for lifecycle alignment.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── TV/FILM STUDIOS ─────────────────────────────────────────────

  {
    id: "prop-013",
    title: "Content Production Pipeline Workflow Automation",
    source: "studios-production-pipeline-2026.pdf",
    bu: "TV/Film Studios",
    content: `Purpose: This document outlines Slalom's proposed approach to automate the content production pipeline, reducing time from final cut to global distribution-ready assets from 14 days to 3 days.

Our Understanding: Post-production manages asset preparation for 240+ global distribution territories. Each title requires territory-specific subtitles, dubbed audio, ratings bumpers, and encoding profiles. Production coordinators track 47 handoff steps in spreadsheets and email. Asset spec errors cause 18% distribution rejections requiring 2-3 days rework. Volume is projected to increase 40% in 2027.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) maps the pipeline and identifies automation opportunities. Phase 2 (Weeks 4-10) builds automated pipeline orchestration with territory spec generation, QC checks for subtitle timing and audio sync, parallel encoding, and status tracking with notifications. Phase 3 (Weeks 11-14) conducts parallel processing of 10 titles against the manual process.

Slalom Roles and Responsibilities: Engagement Lead — studios operations coordination. Software Engineer x2 (Full Time) — pipeline orchestration, encoding automation. Business Analyst (Full Time) — territory spec mapping, workflow documentation. DevOps Engineer (Full Time) — infrastructure, CI/CD, monitoring. Accountable Executive (Part Time) — oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $620,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to encoding infrastructure and territory specification databases. Post-production team available for UAT.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  {
    id: "prop-020",
    title: "Virtual Production Stage Real-Time Rendering Pipeline",
    source: "studios-virtual-production-2026.pdf",
    bu: "TV/Film Studios",
    content: `Purpose: This document outlines Slalom's proposed approach to build a real-time rendering pipeline for virtual production stages, enabling in-camera visual effects that reduce post-production costs by 35%.

Our Understanding: The Studios team is investing in LED volume virtual production stages displaying photorealistic 3D environments behind actors in real-time. The current rendering prototype cannot maintain 60 FPS at 8K resolution during complex scenes. Frame drops cause visible tearing requiring costly re-shoots. The pipeline lacks asset management integration, and lighting changes require a 45-minute re-render cycle halting production.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) profiles rendering bottlenecks and designs the optimized architecture. Phase 2 (Weeks 5-10) implements GPU cluster rendering with level-of-detail management, distributed rendering with frame sync, real-time lighting controls for cinematographers, and asset pipeline integration. Phase 3 (Weeks 11-14) conducts on-stage testing during a 2-week test shoot. Phase 4 (Weeks 15-16) delivers optimization and training.

Slalom Roles and Responsibilities: Engagement Lead — studios production coordination. Principal Engineer (Full Time) — rendering architecture, GPU optimization. Graphics Engineer x2 (Full Time) — real-time rendering, shader optimization. Software Engineer (Full Time) — asset pipeline, cinematographer interface. Accountable Executive (Part Time) — oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $840,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to virtual production stage. GPU cluster hardware available by Week 4. Production crew will participate in testing.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── BUSINESS ────────────────────────────────────────────────────

  {
    id: "prop-014",
    title: "Seller Onboarding Experience Redesign",
    source: "business-seller-onboarding-2026.docx",
    bu: "Business",
    content: `Purpose: This document outlines Slalom's proposed approach to redesign the third-party seller onboarding experience, reducing time-to-first-listing from 21 days to 5 days and improving seller activation rates from 64% to 85%.

Our Understanding: The marketplace onboards 12,000 new sellers per month across 9 registration steps on 3 separate portals. Identity verification takes 7 business days for manual review. The catalog matching tool has a 41% error rate. 36% of approved sellers never complete their first listing. Seller support receives 8,400 onboarding tickets monthly, with document rejection and catalog matching issues comprising 62%.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) conducts seller research with 30 recently onboarded and 15 who abandoned, analyzes support tickets, and maps the experience. Phase 2 (Weeks 4-8) redesigns onboarding as a unified single-portal experience with progressive registration, AI-assisted document verification, guided first-listing wizard, and contextual help addressing top support categories. Phase 3 (Weeks 9-12) delivers a validated prototype and measurement framework.

Slalom Roles and Responsibilities: Engagement Lead — marketplace coordination. UX Researcher (Full Time) — seller research, journey mapping. UX Designer x2 (Full Time) — experience design, prototyping. Product Manager (Full Time) — requirements, backlog, engineering coordination. Accountable Executive (Part Time) — oversight.

Timeline: 12 weeks (September 2026 – November 2026).

Total Estimated Cost: $510,000.00 Do-Not-Exceed Amount.

Assumptions: Client will recruit seller participants through existing channels. Client will provide onboarding analytics and support ticket data.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── BATCH 2: 20 ADDITIONAL PROPOSALS ────────────────────────────

  // ── WEB SERVICES (second) ───────────────────────────────────────

  {
    id: "prop-021",
    title: "Serverless Migration for Legacy Monolith APIs",
    source: "ws-serverless-migration-2026.pdf",
    bu: "Web Services",
    content: `Purpose: This document outlines Slalom's proposed approach to decompose and migrate a legacy monolithic API platform to a serverless architecture, reducing infrastructure costs by 40% and improving deployment velocity from monthly to multiple times per day.

Our Understanding: The Web Services API team maintains a monolithic Java application serving 850 internal and external API endpoints processing 2.3 billion requests daily. The application runs on a fleet of 120 EC2 instances that must be scaled for peak traffic, resulting in significant over-provisioning during off-peak hours. Deployments require full application redeployment, take 4 hours with a 2-hour rollback window, and are limited to monthly release cycles to manage risk. Feature teams wait an average of 6 weeks from code complete to production deployment. The monolith's shared database creates coupling between API domains, and a failure in one endpoint can cascade to affect unrelated services. The team has attempted incremental decomposition but lacks a systematic migration strategy.

Slalom Proposed Delivery Approach: Slalom proposes a 20-week engagement. Phase 1 (Weeks 1-4) maps the monolith's API dependency graph, identifies domain boundaries using static and dynamic analysis, and designs the target serverless architecture on Lambda with API Gateway. Phase 2 (Weeks 5-14) migrates APIs in priority order using the strangler fig pattern, starting with the 15 highest-traffic, lowest-dependency endpoints. Each migration includes database decomposition, event-driven integration patterns with EventBridge, and automated testing. Phase 3 (Weeks 15-18) implements CI/CD pipelines for independent deployment of each serverless API domain. Phase 4 (Weeks 19-20) conducts performance validation, cost analysis, and knowledge transfer.

Slalom Roles and Responsibilities: Engagement Lead — program management across API domain teams. Principal Engineer (Full Time) — architecture design, decomposition strategy. Software Engineer x3 (Full Time) — API migration, Lambda implementation, database decomposition. DevOps Engineer (Full Time) — CI/CD pipelines, infrastructure as code, monitoring. Accountable Executive (Part Time) — executive oversight.

Timeline: 20 weeks (October 2026 – February 2027).

Total Estimated Cost: $1,050,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to monolith source code, API traffic logs, and infrastructure accounts. Feature teams will pause non-critical changes to migrating APIs during their migration window. Database team will support schema decomposition planning.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── ENTERTAINMENT (second) ──────────────────────────────────────

  {
    id: "prop-022",
    title: "Personalized Content Recommendation Engine",
    source: "entertainment-recommendations-2026.docx",
    bu: "Entertainment",
    content: `Purpose: This document outlines Slalom's proposed approach to build a next-generation personalized content recommendation engine for the streaming platform, targeting a 15% increase in content engagement and a 10% reduction in subscriber churn.

Our Understanding: The Entertainment streaming platform serves 180 million subscribers with a library of 45,000 titles. The current recommendation system uses collaborative filtering based on viewing history, which performs well for mainstream content but struggles with cold-start problems for new titles, niche genres, and recently onboarded subscribers. 62% of new releases receive less than 10% of their projected first-week views, partly due to poor recommendation placement. Subscriber surveys indicate that 29% of churning customers cite "can't find anything to watch" as a primary reason. The content team invests $8B annually in original programming but lacks data-driven feedback loops to inform greenlight decisions based on predicted audience demand.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes viewing patterns, browse behavior, and churn signals to define the recommendation model architecture combining collaborative filtering with content-based features extracted from metadata, trailers, and subtitle text. Phase 2 (Weeks 5-10) builds the recommendation engine with multi-modal embeddings capturing visual style, narrative themes, and cast affinity, contextual awareness for time-of-day and device type, exploration-exploitation balancing to promote new content discovery, and a content demand forecasting module for programming decisions. Phase 3 (Weeks 11-14) runs online A/B tests measuring engagement, discovery breadth, and churn impact. Phase 4 (Weeks 15-16) delivers model documentation and integration with the content programming team's planning tools.

Slalom Roles and Responsibilities: Engagement Lead — streaming product team coordination. ML Engineer x2 (Full Time) — recommendation models, multi-modal embeddings, A/B testing. Data Engineer (Full Time) — feature pipelines, real-time serving infrastructure. Data Scientist (Full Time) — viewing pattern analysis, churn modeling, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $720,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide viewing history, subscriber data, and content metadata APIs. A/B testing infrastructure is available. Content team will participate in demand forecasting model validation.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── FINANCE AND BUSINESS SERVICES (second) ──────────────────────

  {
    id: "prop-023",
    title: "Vendor Payment Fraud Detection System",
    source: "fbs-payment-fraud-detection-2026.pdf",
    bu: "Finance and Business Services",
    content: `Purpose: This document outlines Slalom's proposed approach to build a real-time vendor payment fraud detection system, targeting a 90% reduction in fraudulent payment losses and sub-2-second transaction scoring.

Our Understanding: Finance and Business Services processes $42B in annual vendor payments across 180,000 active vendor accounts. The team has identified $14M in confirmed fraudulent payments over the past 12 months, primarily from business email compromise schemes, unauthorized bank account changes, and duplicate invoice submissions. Current fraud controls are rule-based, checking against a static list of 23 conditions evaluated in batch overnight. Fraudulent payments are typically detected 3-5 days after disbursement, by which time recovery is successful in only 18% of cases. The team estimates that real-time detection at the point of payment approval could prevent 85% of losses. Key gaps include no velocity checking on bank account changes, no cross-vendor duplicate detection, and no behavioral profiling of payment patterns by vendor.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) analyzes historical fraud cases, profiles vendor payment patterns, and designs the detection model architecture. Phase 2 (Weeks 4-10) builds the real-time scoring engine with vendor behavioral profiling that detects anomalous payment amounts, frequencies, and bank account changes, cross-vendor duplicate invoice detection using fuzzy matching, business email compromise indicators from payment request metadata, and risk scoring with configurable thresholds for automatic hold, review, and pass-through. Phase 3 (Weeks 11-14) integrates with the payment processing pipeline, conducts backtesting against 12 months of transactions, and deploys with a parallel monitoring period.

Slalom Roles and Responsibilities: Engagement Lead — finance operations and treasury coordination. ML Engineer (Full Time) — fraud detection models, behavioral profiling, anomaly detection. Software Engineer x2 (Full Time) — real-time scoring engine, payment system integration, review queue UI. Data Analyst (Full Time) — historical fraud analysis, backtesting, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (November 2026 – February 2027).

Total Estimated Cost: $590,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to payment processing APIs and 12 months of historical transaction data including confirmed fraud cases. Treasury team will validate detection rules. Payment holds will follow existing approval workflows.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── LOW EARTH ORBIT SATELLITES (second) ─────────────────────────

  {
    id: "prop-024",
    title: "Ground Station Network Monitoring and Anomaly Detection",
    source: "leo-ground-station-monitoring-2026.docx",
    bu: "Low Earth Orbit Satellites",
    content: `Purpose: This document outlines Slalom's proposed approach to build a unified ground station network monitoring and anomaly detection platform, reducing mean-time-to-detection of ground station issues from 45 minutes to under 3 minutes and preventing satellite pass failures.

Our Understanding: The LEO Satellites ground station network operates 35 antenna sites across 12 countries, each supporting satellite passes with precise timing windows. Ground station failures during a scheduled pass result in lost data collection windows that cannot be recovered until the next orbital pass, typically 90 minutes later. The current monitoring setup consists of siloed per-site dashboards with no unified network view. The operations team relies on manual alerting thresholds that generate excessive false positives during weather events and miss subtle degradation patterns in antenna tracking systems. Last quarter, 127 satellite passes failed due to ground station issues that could have been detected and mitigated with earlier warning. Equipment aging is accelerating failure rates, and the team needs predictive maintenance capabilities to schedule repairs during planned downtime windows.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) integrates telemetry from all 35 ground stations into a unified data platform, normalizing equipment metrics, environmental sensors, and pass performance data. Phase 2 (Weeks 5-10) builds the monitoring platform with a network operations center dashboard providing real-time health across all sites, ML-based anomaly detection trained on historical failure patterns that distinguishes equipment degradation from weather-related transients, predictive maintenance models estimating remaining useful life for critical antenna components, and automated pass rescheduling recommendations when a station is predicted to be degraded. Phase 3 (Weeks 11-14) deploys to production and runs in parallel with existing monitoring for validation. Phase 4 (Weeks 15-16) transitions to operations with training and runbooks.

Slalom Roles and Responsibilities: Engagement Lead — ground station operations coordination. Data Engineer (Full Time) — telemetry integration, data normalization, streaming pipeline. ML Engineer (Full Time) — anomaly detection, predictive maintenance models. Software Engineer (Full Time) — NOC dashboard, alerting, pass rescheduling integration. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $620,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to ground station telemetry systems and historical pass performance data. Site technicians will validate anomaly classifications during parallel monitoring. Existing pass scheduling system supports API-based modifications.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── PHYSICAL STORES (second) ────────────────────────────────────

  {
    id: "prop-025",
    title: "In-Store Customer Journey Analytics Platform",
    source: "stores-journey-analytics-2026.pdf",
    bu: "Physical Stores",
    content: `Purpose: This document outlines Slalom's proposed approach to build an in-store customer journey analytics platform using existing camera and sensor infrastructure, providing store operations with traffic flow insights, dwell time analysis, and conversion funnel metrics.

Our Understanding: The Physical Stores team operates 95 locations but has limited visibility into in-store customer behavior. Online retail provides detailed funnel analytics from browse to purchase, but physical stores can only measure transactions at the point of sale with no understanding of how customers navigate the store, which departments they visit, where they dwell, or where they abandon without purchasing. Store layout changes and promotional display placements are based on intuition rather than data. The team estimates that optimizing store layouts and product placement based on actual traffic patterns could increase per-store revenue by 5-8%. Existing in-store camera systems for security could be repurposed for anonymous traffic analysis without capturing personally identifiable information.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) audits existing camera coverage and sensor infrastructure across 5 pilot stores, defines the analytics taxonomy including traffic flow, dwell zones, department visit sequences, and conversion funnels, and designs the privacy-preserving data architecture. Phase 2 (Weeks 5-10) implements anonymous person detection and tracking using existing cameras with on-device edge processing, zone-based dwell time and path analysis, department conversion funnel metrics correlating foot traffic with POS transactions, and a store operations dashboard with heat maps, flow visualizations, and A/B test support for layout changes. Phase 3 (Weeks 11-14) deploys across 5 pilot stores, validates metrics against manual counts, and delivers insights for the first round of layout optimization recommendations.

Slalom Roles and Responsibilities: Engagement Lead — store operations coordination. Computer Vision Engineer (Full Time) — anonymous tracking, edge processing, camera integration. Data Engineer (Full Time) — analytics pipeline, POS correlation, dashboard infrastructure. Data Scientist (Full Time) — journey analysis, conversion modeling, layout optimization. Privacy Engineer (Part Time) — privacy-by-design review, data retention policies. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $580,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to existing security camera systems in pilot stores. Legal/privacy team will approve the anonymous tracking approach. POS transaction data will be available for correlation analysis.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── ROBOTICS (second) ───────────────────────────────────────────

  {
    id: "prop-026",
    title: "Autonomous Delivery Robot Fleet Management Platform",
    source: "robotics-delivery-fleet-2026.docx",
    bu: "Robotics",
    content: `Purpose: This document outlines Slalom's proposed approach to build a fleet management platform for autonomous sidewalk delivery robots, enabling centralized operations across 8 metro areas with real-time monitoring, remote intervention, and performance analytics.

Our Understanding: The Robotics delivery team operates 450 autonomous sidewalk delivery robots across 8 metro areas, with plans to scale to 2,000 units by end of 2027. Currently, each metro area manages its fleet independently with separate operations tools, making network-wide visibility impossible. Remote operators monitoring robot camera feeds for intervention requests work from a basic video streaming interface with no contextual information about the robot's planned route, delivery status, or historical performance. Intervention rates average 4.2% of deliveries, primarily for navigation challenges at construction zones, crowded sidewalks, and building access points. The team needs a unified fleet management platform that scales with the planned expansion while reducing per-robot operational overhead.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) maps current fleet operations across all 8 metros, documents intervention scenarios, and designs the unified platform architecture. Phase 2 (Weeks 5-10) builds the fleet management platform with a real-time map view of all robots across all metros with status, route, and delivery information, an enhanced remote intervention interface with contextual overlays showing route plan, delivery details, and nearby obstacle history, automated intervention classification and pattern detection to identify systematic navigation improvements, and fleet health monitoring with predictive maintenance alerts. Phase 3 (Weeks 11-14) migrates metro operations to the unified platform in waves. Phase 4 (Weeks 15-16) delivers performance analytics and training for operations teams.

Slalom Roles and Responsibilities: Engagement Lead — robotics operations coordination. Software Engineer x2 (Full Time) — fleet management platform, real-time mapping, intervention interface. Data Engineer (Full Time) — telemetry aggregation, intervention analytics, predictive maintenance. UX Designer (Full Time) — operations interface design, intervention workflow optimization. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $680,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide robot telemetry APIs, camera feed access, and delivery management system integration points. Metro operations teams will support phased migration and UAT.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── SHARED SERVICES (second) ────────────────────────────────────

  {
    id: "prop-027",
    title: "Internal Developer Portal and Service Catalog",
    source: "shared-developer-portal-2026.pdf",
    bu: "Shared Services",
    content: `Purpose: This document outlines Slalom's proposed approach to build an internal developer portal and service catalog, reducing new engineer onboarding time from 6 weeks to 2 weeks and providing self-service discovery of 1,200+ internal services and APIs.

Our Understanding: Shared Services supports 14,000 software engineers across 380 development teams. Engineers report that discovering existing internal services, understanding their APIs, and determining ownership is the top productivity barrier, cited by 47% of respondents in the annual developer survey. Documentation is scattered across wikis, READMEs, Confluence spaces, and team-specific tools with no central index. New engineers spend an average of 4 weeks during onboarding just learning what services exist and who owns them. Duplicate service development is common, with an internal audit finding 34 instances of teams building capabilities that already existed elsewhere in the organization. The platform engineering team wants to establish a self-service developer portal that serves as the single entry point for service discovery, API documentation, and team ownership.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) inventories existing services by scanning code repositories, infrastructure manifests, and API gateways to auto-populate the service catalog, and conducts interviews with 20 engineering teams to define the portal's information architecture. Phase 2 (Weeks 5-10) implements the developer portal using Backstage with automated service registration from CI/CD pipelines, API documentation aggregation with live endpoint testing, team ownership and on-call information with escalation paths, golden path project templates for common service patterns, and search across all services, APIs, and documentation. Phase 3 (Weeks 11-14) onboards 50 pilot teams, measures adoption metrics, and iterates on the portal based on feedback.

Slalom Roles and Responsibilities: Engagement Lead — platform engineering coordination. Software Engineer x2 (Full Time) — Backstage implementation, plugin development, CI/CD integration. Technical Writer (Full Time) — information architecture, documentation standards, template creation. DevOps Engineer (Full Time) — automated service discovery, infrastructure integration. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $590,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to code repositories, CI/CD systems, and API gateways for automated service discovery. Platform engineering team will support Backstage hosting and ongoing maintenance. Pilot teams will commit to registering their services and providing feedback.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── BUSINESS (second) ───────────────────────────────────────────

  {
    id: "prop-028",
    title: "B2B Procurement Platform Customer Experience",
    source: "business-b2b-procurement-cx-2026.docx",
    bu: "Business",
    content: `Purpose: This document outlines Slalom's proposed approach to redesign the B2B procurement platform customer experience, increasing business buyer repeat purchase rate from 52% to 70% and reducing average purchase completion time from 23 minutes to 8 minutes.

Our Understanding: The Business marketplace serves 5 million registered business buyers, but the purchasing experience is largely adapted from the consumer platform without addressing B2B-specific workflows. Business buyers need capabilities that do not exist or are difficult to find: multi-user accounts with role-based purchasing permissions, approval workflows for purchases above spending thresholds, PO-based ordering with invoice billing, bulk ordering with volume pricing visibility, and integration with corporate procurement systems via punchout catalogs. Currently, 31% of business buyers abandon during checkout due to inability to use their preferred payment method (PO/invoice), and 44% report difficulty managing purchases across multiple team members on a shared account. Competing B2B platforms offer these capabilities natively.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-4) conducts research with 40 business buyers across 4 segments (small business, mid-market, enterprise, public sector), maps current pain points against competitor capabilities, and defines the prioritized improvement roadmap. Phase 2 (Weeks 5-10) designs the enhanced B2B experience with multi-user account management with organization hierarchy and role-based permissions, configurable approval workflows triggered by spend amount, category, or supplier, PO-based ordering with automated invoice generation and NET terms, guided bulk ordering with quantity-based pricing and reorder lists, and a procurement dashboard with spend analytics and budget tracking. Phase 3 (Weeks 11-14) delivers validated prototypes for each capability, engineering specifications, and an implementation priority matrix based on revenue impact analysis.

Slalom Roles and Responsibilities: Engagement Lead — B2B product team coordination. UX Researcher (Full Time) — business buyer research, competitive analysis. UX Designer x2 (Full Time) — experience design, prototyping, specification. Product Manager (Full Time) — requirements, prioritization, revenue impact analysis. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $560,000.00 Do-Not-Exceed Amount.

Assumptions: Client will recruit business buyer research participants across target segments. Client will provide purchase analytics and checkout abandonment data. Engineering leads will participate in feasibility reviews.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── ADVERTISING (third) ─────────────────────────────────────────

  {
    id: "prop-029",
    title: "Retail Media Network Self-Service Campaign Builder",
    source: "advertising-self-service-campaigns-2026.pdf",
    bu: "Advertising",
    content: `Purpose: This document outlines Slalom's proposed approach to build a self-service campaign builder for the retail media network, enabling small and mid-size advertisers to create, launch, and manage campaigns without account manager assistance, targeting a 60% increase in active advertiser count.

Our Understanding: The Advertising retail media network generates $38B in annual revenue but 80% comes from the top 2,000 advertisers who receive dedicated account management. There are 45,000 registered advertisers who do not meet the spending threshold for managed service, but only 8,000 are actively running campaigns. The existing campaign creation interface was designed for power users and requires 14 steps to launch a basic sponsored product campaign. Small advertisers report that targeting configuration, budget optimization, and performance reporting are too complex without support. Competitor retail media networks have launched simplified self-service tools and are capturing spend from these advertisers. The team estimates that a streamlined self-service experience could activate 15,000 additional advertisers, representing $2.1B in incremental annual revenue.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) conducts research with 30 small/mid-size advertisers, analyzes campaign creation drop-off data, and benchmarks against competitor self-service platforms. Phase 2 (Weeks 5-10) designs and builds the self-service campaign builder with a guided 4-step campaign creation flow (goal, products, budget, launch), AI-powered targeting recommendations based on product category and budget, automated budget optimization with performance-based bid adjustments, simplified performance dashboard with plain-language insights and actionable recommendations, and in-context education explaining advertising concepts to first-time advertisers. Phase 3 (Weeks 11-14) conducts a beta test with 500 advertisers measuring campaign creation completion rate and time-to-launch. Phase 4 (Weeks 15-16) iterates on beta feedback and delivers the rollout plan.

Slalom Roles and Responsibilities: Engagement Lead — advertising product coordination. UX Designer x2 (Full Time) — campaign builder design, self-service flow, dashboard. Software Engineer x2 (Full Time) — campaign builder implementation, targeting recommendations, budget optimization. UX Researcher (Full Time) — advertiser research, beta testing, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $780,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to campaign creation analytics and advertiser segmentation data. Advertising platform APIs support programmatic campaign creation. Beta advertisers will be recruited through existing advertiser communications.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── OPERATIONS (third) ──────────────────────────────────────────

  {
    id: "prop-030",
    title: "Returns Processing Automation and Fraud Reduction",
    source: "ops-returns-automation-2026.docx",
    bu: "Operations",
    content: `Purpose: This document outlines Slalom's proposed approach to automate the returns processing workflow and implement a returns fraud detection system, reducing processing cost per return by 35% and preventing $120M in annual returns abuse.

Our Understanding: Operations processes 1.2 million returns per day across 25 returns processing centers. Current processing requires manual inspection of each returned item to determine disposition (restock, liquidate, recycle, or destroy), which takes an average of 4.5 minutes per item. Returns fraud and abuse account for an estimated 8% of all returns, including wardrobing (wearing and returning), empty box returns, receipt fraud, and serial returners who exploit the return policy. The current rule-based fraud detection flags only 2.3% of returns for review, missing the majority of abuse patterns. Additionally, the disposition decision process is inconsistent across facilities, with restock rates varying from 42% to 68% for identical product categories, representing a significant value recovery opportunity.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes 6 months of returns data, profiles fraud patterns, and maps disposition decision variability across facilities. Phase 2 (Weeks 5-10) implements computer vision-assisted item inspection that automates condition grading and disposition routing, a returns fraud detection model incorporating customer return history, item-level risk scoring, return timing patterns, and cross-account behavioral analysis, and standardized disposition decision logic that maximizes value recovery. Phase 3 (Weeks 11-14) deploys in 3 pilot facilities with parallel manual processing for validation. Phase 4 (Weeks 15-16) measures cost savings, fraud prevention, and restock rate improvements.

Slalom Roles and Responsibilities: Engagement Lead — returns operations coordination. ML Engineer (Full Time) — fraud detection models, customer behavioral profiling. Computer Vision Engineer (Full Time) — item inspection automation, condition grading. Software Engineer (Full Time) — disposition workflow, returns system integration. Data Analyst (Full Time) — returns data analysis, pilot measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $680,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide returns processing data, customer return history, and access to returns management systems. Pilot facilities will support parallel processing. Fraud model decisions will be reviewable for customer appeals.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── HEALTH SERVICES (third) ─────────────────────────────────────

  {
    id: "prop-031",
    title: "Clinical Data Interoperability Platform",
    source: "health-clinical-interoperability-2026.pdf",
    bu: "Health Services",
    content: `Purpose: This document outlines Slalom's proposed approach to build a clinical data interoperability platform enabling seamless health record exchange between the health services ecosystem and 200+ external healthcare providers using FHIR standards.

Our Understanding: Health Services manages clinical data for 4.8 million patients across primary care, pharmacy, and virtual care services. Currently, patient records are siloed within each service line, and external provider data (specialist referrals, hospital admissions, lab results) is received via fax or non-standard HL7v2 messages requiring manual reconciliation. Patients report frustration at repeating medical history across providers, and clinicians lack a complete patient view when making treatment decisions. The 21st Century Cures Act mandates interoperability via FHIR APIs, with compliance deadlines approaching. The team needs to build a FHIR-compliant data exchange platform that unifies internal clinical data and enables bidirectional sharing with external healthcare organizations through TEFCA and CommonWell Health Alliance.

Slalom Proposed Delivery Approach: Slalom proposes an 18-week engagement. Phase 1 (Weeks 1-4) maps clinical data sources across internal service lines, profiles external data exchange partners, and designs the FHIR resource model covering patient demographics, conditions, medications, allergies, procedures, and lab results. Phase 2 (Weeks 5-12) implements the interoperability platform with a FHIR R4 API server supporting read, search, and subscription operations, internal data normalization from proprietary formats to FHIR resources, external provider connectivity through TEFCA Qualified Health Information Network, patient matching and identity resolution across data sources, and consent management ensuring patients control data sharing preferences. Phase 3 (Weeks 13-16) conducts integration testing with 10 external provider organizations. Phase 4 (Weeks 17-18) validates regulatory compliance and transitions to operations.

Slalom Roles and Responsibilities: Engagement Lead — health IT and clinical operations coordination. Integration Architect (Full Time) — FHIR architecture, interoperability design, TEFCA connectivity. Software Engineer x2 (Full Time) — FHIR server implementation, data normalization, identity resolution. Clinical Informaticist (Part Time) — clinical data modeling, provider workflow validation. Accountable Executive (Part Time) — executive oversight.

Timeline: 18 weeks (September 2026 – January 2027).

Total Estimated Cost: $760,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to internal clinical data systems and patient consent frameworks. External provider organizations will participate in integration testing. Legal team will validate HIPAA and 21st Century Cures Act compliance.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── DEVICES (third) ─────────────────────────────────────────────

  {
    id: "prop-032",
    title: "Smart Home Energy Management Dashboard",
    source: "devices-energy-management-2026.docx",
    bu: "Devices",
    content: `Purpose: This document outlines Slalom's proposed approach to design and build a smart home energy management dashboard integrated with the smart home device ecosystem, helping customers reduce home energy consumption by 15-20% through intelligent automation and actionable insights.

Our Understanding: The Devices team is expanding into home energy management as smart thermostat, smart plug, and smart lighting adoption grows. Customers with 5+ connected devices lack a unified view of their home energy consumption and have no way to understand which devices are the largest energy consumers or how their usage patterns compare to efficient benchmarks. Utility rate structures are increasingly complex with time-of-use pricing, demand charges, and solar net metering, but device automations do not account for rate schedules. Competitor ecosystems have launched energy dashboards that correlate device usage with utility bills. The team wants to differentiate by providing not just monitoring but intelligent automation recommendations that save customers money while maintaining comfort preferences.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) conducts research with 25 smart home device owners to understand energy awareness, utility rate structures, and comfort preferences, and designs the dashboard information architecture. Phase 2 (Weeks 4-8) designs and prototypes the energy management experience with real-time whole-home and per-device energy monitoring using smart plug power data and appliance disaggregation, utility rate integration showing cost-per-hour and projected monthly bills, automated energy-saving routines that shift flexible loads to off-peak rate periods, personalized recommendations based on usage patterns and efficiency benchmarks, and monthly energy reports with savings tracking. Phase 3 (Weeks 9-12) delivers validated high-fidelity prototypes, engineering specifications, and a roadmap for utility API partnerships.

Slalom Roles and Responsibilities: Engagement Lead — device product coordination. UX Researcher (Full Time) — customer research, energy behavior analysis. UX Designer x2 (Full Time) — dashboard design, automation interface, reporting. Data Scientist (Part Time) — appliance disaggregation algorithm, efficiency benchmarking. Accountable Executive (Part Time) — executive oversight.

Timeline: 12 weeks (October 2026 – December 2026).

Total Estimated Cost: $460,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide smart device telemetry APIs and energy consumption data. Utility rate data will be available through existing partnerships or public rate databases. Research participants will be recruited from existing device customer panels.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── ENTERTAINMENT (third) ───────────────────────────────────────

  {
    id: "prop-033",
    title: "Interactive Live Event Second Screen Experience",
    source: "entertainment-second-screen-2026.pdf",
    bu: "Entertainment",
    content: `Purpose: This document outlines Slalom's proposed approach to design and build an interactive second screen experience for live event broadcasts, enabling real-time audience participation that increases average viewing time by 25% and drives social engagement.

Our Understanding: The Entertainment live events team broadcasts 180+ live events annually including sports, concerts, and award shows. Viewer engagement drops significantly during natural breaks in content (halftime, commercial breaks, between-set transitions), with 32% of viewers switching away. Competitor platforms have launched companion experiences that maintain engagement during these windows. The team has experimented with basic polling and trivia features but they were bolted onto the existing player UI and received low participation rates (3.2%). Research indicates that viewers want deeper engagement such as predictive play, multi-angle camera selection, real-time stats, and social watch parties, but these features require sub-second synchronization between the primary stream and the interactive layer. The current player architecture does not support the low-latency event signaling needed for interactive features.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) researches viewer behavior during 5 live events using session recordings and surveys, defines the interactive feature set, and designs the synchronization architecture. Phase 2 (Weeks 5-10) builds the second screen platform with a real-time event signaling system using WebSocket for sub-second feature synchronization with the live stream, predictive play allowing viewers to guess upcoming outcomes with leaderboards, multi-angle camera selection synced to the primary broadcast, live stats overlays updated in real-time from event data feeds, and social watch party rooms with synchronized playback and reactions. Phase 3 (Weeks 11-14) conducts live production testing during 3 events, measuring participation rates, viewing time, and social engagement metrics.

Slalom Roles and Responsibilities: Engagement Lead — live events product coordination. Software Engineer x2 (Full Time) — second screen platform, real-time signaling, interactive features. UX Designer (Full Time) — interactive experience design, watch party interface. Video Engineer (Full Time) — stream synchronization, multi-angle implementation. QA Engineer (Full Time) — live event testing, cross-device validation. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $680,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to live event data feeds and player SDK. Three live events will be designated for production testing. Existing streaming infrastructure supports WebSocket alongside the primary stream.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── FINANCE AND BUSINESS SERVICES (third) ───────────────────────

  {
    id: "prop-034",
    title: "Financial Planning and Scenario Modeling Platform",
    source: "fbs-financial-planning-2026.docx",
    bu: "Finance and Business Services",
    content: `Purpose: This document outlines Slalom's proposed approach to build a financial planning and scenario modeling platform, replacing spreadsheet-based planning processes and reducing quarterly financial planning cycles from 8 weeks to 3 weeks.

Our Understanding: Finance and Business Services conducts quarterly financial planning across 14 business units with a combined operating budget of $65B. The current planning process relies on 200+ interconnected spreadsheets maintained by 85 FP&A analysts. Version control issues cause an average of 12 data reconciliation errors per planning cycle. Scenario modeling requires manual spreadsheet manipulation, limiting the team to analyzing 2-3 scenarios per planning cycle when leadership typically requests 5-8. The CFO's office has identified that 40% of analyst time is spent on data gathering and reconciliation rather than value-added analysis. Business unit leaders report that by the time planning outputs are ready, underlying assumptions have often changed, reducing the relevance of the analysis.

Slalom Proposed Delivery Approach: Slalom proposes an 18-week engagement. Phase 1 (Weeks 1-4) maps the current planning process, documents all data sources and calculation logic embedded in spreadsheets, and designs the platform data model. Phase 2 (Weeks 5-12) builds the financial planning platform with automated data ingestion from ERP, HR, and operational systems eliminating manual data gathering, a calculation engine replicating and centralizing all spreadsheet logic with full audit trail, a scenario modeling module enabling one-click scenario creation with adjustable driver assumptions, variance analysis comparing actuals to plan with automated commentary generation, and role-based dashboards for analysts, business unit leaders, and CFO review. Phase 3 (Weeks 13-16) runs the Q1 2027 planning cycle on the new platform in parallel with existing spreadsheets. Phase 4 (Weeks 17-18) validates outputs, addresses gaps, and transitions analysts.

Slalom Roles and Responsibilities: Engagement Lead — CFO office and FP&A coordination. Software Engineer x2 (Full Time) — planning platform, calculation engine, scenario modeling. Data Engineer (Full Time) — data integration from ERP and operational systems. Business Analyst (Full Time) — planning process mapping, calculation logic documentation, UAT. Accountable Executive (Part Time) — executive oversight.

Timeline: 18 weeks (September 2026 – January 2027).

Total Estimated Cost: $780,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to ERP and financial data systems. FP&A analysts will participate in requirements gathering and parallel planning validation. Current spreadsheet logic owners will be available to document calculation rules.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── PHYSICAL STORES (third) ─────────────────────────────────────

  {
    id: "prop-035",
    title: "Store Associate Mobile Task Management App",
    source: "stores-associate-task-app-2026.pdf",
    bu: "Physical Stores",
    content: `Purpose: This document outlines Slalom's proposed approach to design and build a mobile task management application for store associates, improving task completion rates from 71% to 92% and reducing manager overhead on task coordination by 50%.

Our Understanding: Physical Stores employs 45,000 store associates across 95 locations. Task assignment currently happens through a combination of printed task lists, radio communications, and verbal handoffs at shift start. Associates frequently miss tasks due to shifting priorities, unclear instructions, or tasks being assigned to the wrong department. Store managers spend an estimated 2.5 hours per shift coordinating and following up on task completion. Time-sensitive tasks such as online order staging, fresh product rotation, and price changes have strict SLA windows but no automated tracking. During peak periods, task prioritization breaks down as associates cannot distinguish between urgent and routine work. The team wants a mobile-first task management system that dynamically prioritizes work based on business impact and provides managers with real-time visibility.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) conducts field research in 4 stores observing associate workflows across departments, interviews 30 associates and 10 managers, and maps the task taxonomy and priority framework. Phase 2 (Weeks 4-8) designs and builds the mobile application with dynamic task queues personalized by associate role, department, and skills, automated priority scoring based on SLA windows, business impact, and customer visibility, location-aware task assignment using in-store positioning, real-time task status tracking with photo verification for completion, and manager dashboard showing store-wide task progress and associate utilization. Phase 3 (Weeks 9-12) pilots in 5 stores, measures task completion rates and manager time savings, and iterates based on associate and manager feedback.

Slalom Roles and Responsibilities: Engagement Lead — store operations coordination. UX Designer (Full Time) — mobile app design, associate workflow optimization. Software Engineer x2 (Full Time) — mobile app development, task engine, manager dashboard. UX Researcher (Full Time) — field research, usability testing, pilot measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 12 weeks (October 2026 – December 2026).

Total Estimated Cost: $510,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide mobile devices for associates in pilot stores. Store managers will support field research and pilot participation. Existing store systems (inventory, order management) support API integration for task generation.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── RETAIL (third) ──────────────────────────────────────────────

  {
    id: "prop-036",
    title: "Sustainable Product Discovery and Eco-Label Program",
    source: "retail-sustainability-discovery-2026.docx",
    bu: "Retail",
    content: `Purpose: This document outlines Slalom's proposed approach to design and implement a sustainable product discovery experience and eco-label certification program, enabling customers to identify and filter products by environmental impact attributes.

Our Understanding: Customer demand for sustainable products is growing rapidly, with 67% of surveyed customers indicating they prefer to purchase from environmentally responsible brands when price and quality are comparable. However, the Retail platform provides no standardized way to identify sustainable products. Seller-provided sustainability claims are inconsistent, unverified, and scattered across product descriptions with no structured data. Customers searching for "sustainable," "eco-friendly," or "organic" products receive results that mix genuinely certified products with unverified marketing claims, eroding trust. Competitor platforms have launched sustainability labeling programs that give certified products prominent badging and dedicated browse experiences. The Retail team wants to build a credible, scalable eco-label program that drives discovery while maintaining trust through verification.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-4) researches customer sustainability purchasing behavior with 35 participants, benchmarks competitor and third-party certification programs, and designs the eco-label taxonomy covering carbon footprint, packaging sustainability, material sourcing, and third-party certifications. Phase 2 (Weeks 5-10) designs and builds the sustainable product experience with an eco-label badge system with tiered certification levels, seller self-attestation workflow with documentation requirements, third-party certification verification integration with major eco-labels, a sustainable products browse and filter experience within search and category pages, and a product detail page sustainability section showing verified attributes. Phase 3 (Weeks 11-14) conducts customer validation with 25 participants, tests the seller certification workflow with 100 sellers, and delivers the rollout plan.

Slalom Roles and Responsibilities: Engagement Lead — retail product and sustainability team coordination. UX Researcher (Full Time) — customer research, seller workflow testing. UX Designer x2 (Full Time) — eco-label design, browse experience, PDP integration. Product Manager (Full Time) — taxonomy design, certification program rules, seller requirements. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $560,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to product catalog APIs and seller portal. Sustainability/ESG team will validate eco-label certification criteria. Third-party certification bodies will provide verification data feeds.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── LOW EARTH ORBIT SATELLITES (third) ──────────────────────────

  {
    id: "prop-037",
    title: "Satellite Customer Self-Service Portal",
    source: "leo-customer-portal-2026.pdf",
    bu: "Low Earth Orbit Satellites",
    content: `Purpose: This document outlines Slalom's proposed approach to design and build a customer self-service portal for the satellite broadband service, reducing customer support contacts by 40% and improving subscriber Net Promoter Score from 32 to 50.

Our Understanding: The LEO satellite broadband service has scaled to 2.8 million subscribers but customer support infrastructure has not kept pace. Average wait time for support contacts is 28 minutes, and 55% of contacts are for issues that could be self-served: account management, billing inquiries, service troubleshooting, and equipment status checks. The existing customer portal is limited to viewing invoices and updating payment methods. Subscribers cannot view their connection performance, troubleshoot common issues, schedule service appointments, or monitor their terminal equipment health. Subscriber churn is 4.2% monthly, and exit surveys indicate that 38% of churning customers cite poor support experience as a contributing factor.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) analyzes the top 50 support contact drivers, conducts research with 30 subscribers, and designs the self-service portal information architecture. Phase 2 (Weeks 4-8) designs and builds the portal with a real-time connection dashboard showing current speed, latency, and signal quality with historical trends, guided self-service troubleshooting flows for the top 20 issues with automated diagnostic tests, equipment health monitoring with proactive alerts for terminal degradation, service appointment scheduling with technician availability and tracking, and account management including plan changes, usage monitoring, and billing history. Phase 3 (Weeks 9-12) conducts beta testing with 500 subscribers, measures support deflection rate, and iterates on the experience.

Slalom Roles and Responsibilities: Engagement Lead — customer operations coordination. UX Designer x2 (Full Time) — portal design, troubleshooting flows, dashboard. Software Engineer x2 (Full Time) — portal development, terminal telemetry integration, diagnostic APIs. UX Researcher (Full Time) — subscriber research, beta testing, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 12 weeks (October 2026 – December 2026).

Total Estimated Cost: $580,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide terminal telemetry APIs, support ticket data, and subscriber recruitment for research. Network operations will validate troubleshooting diagnostic accuracy. Existing billing system supports API-based account management.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── BUSINESS (third) ────────────────────────────────────────────

  {
    id: "prop-038",
    title: "Marketplace Seller Analytics and Growth Insights",
    source: "business-seller-analytics-2026.pdf",
    bu: "Business",
    content: `Purpose: This document outlines Slalom's proposed approach to build a seller analytics and growth insights platform, enabling third-party sellers to optimize their business performance through data-driven recommendations and increasing average seller revenue by 18%.

Our Understanding: The Business marketplace hosts 2.1 million active third-party sellers who collectively represent 60% of platform unit sales. Most sellers have limited access to actionable analytics beyond basic sales and traffic reports. High-performing sellers use third-party analytics tools, but 78% of sellers operate without data-driven decision support. Sellers report that they lack visibility into competitive pricing positioning, keyword search performance for their listings, inventory health indicators, and customer satisfaction trends compared to category benchmarks. The marketplace team believes that providing better analytics to the long-tail of sellers would improve overall marketplace quality, product availability, and price competitiveness while increasing seller satisfaction and retention.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) interviews 25 sellers across revenue tiers, analyzes the correlation between data usage and seller performance, and defines the analytics product vision. Phase 2 (Weeks 5-10) builds the seller analytics platform with a business health dashboard showing sales trends, conversion rates, and traffic sources with category benchmarking, competitive pricing intelligence showing price positioning relative to similar products, listing quality scoring with actionable optimization recommendations for titles, images, and keywords, inventory health indicators predicting stockout risk and overstock waste, and growth opportunity identification highlighting untapped categories and seasonal demand patterns. Phase 3 (Weeks 11-14) rolls out to 5,000 beta sellers, measures platform adoption and correlation with seller performance improvements.

Slalom Roles and Responsibilities: Engagement Lead — marketplace seller tools coordination. Data Scientist (Full Time) — analytics models, competitive intelligence, growth recommendations. Software Engineer x2 (Full Time) — analytics platform, dashboard development, API integration. UX Designer (Full Time) — seller experience design, insight presentation. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $620,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide marketplace transaction data, catalog APIs, and seller performance metrics. Sellers will be recruited for research and beta through existing communication channels.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── SHARED SERVICES (third) ─────────────────────────────────────

  {
    id: "prop-039",
    title: "Enterprise Cost Allocation and Chargeback Platform",
    source: "shared-cost-allocation-2026.docx",
    bu: "Shared Services",
    content: `Purpose: This document outlines Slalom's proposed approach to build an enterprise cost allocation and chargeback platform for shared infrastructure services, providing business units with transparent cost visibility and reducing monthly cost allocation processing from 15 days to 2 days.

Our Understanding: Shared Services operates $2.4B in shared infrastructure including compute, storage, networking, and platform services consumed by 14 business units. The current cost allocation process is a monthly manual effort involving 6 finance analysts who extract usage data from 8 infrastructure platforms, apply allocation rules in spreadsheets, reconcile with GL accounts, and distribute chargeback reports to business unit finance teams. Disputes consume an additional 5 days per cycle, as business units challenge allocations they cannot validate. Cost visibility is limited to monthly retrospective reports with no ability for business units to monitor spending in near-real-time or forecast future costs. This lack of transparency drives over-provisioning behavior, with an estimated 30% of allocated compute resources sitting idle.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) maps all infrastructure cost sources, documents current allocation methodologies, and designs the unified cost model with business unit input. Phase 2 (Weeks 5-12) builds the cost allocation platform with automated usage data collection from all infrastructure platforms via APIs, configurable allocation rules engine supporting multiple methodologies (direct usage, weighted, fixed split), near-real-time cost dashboards allowing business units to monitor daily spending by service and team, anomaly detection alerting for unexpected cost spikes, and forecast models projecting future costs based on growth trends and planned capacity changes. Phase 3 (Weeks 13-16) runs parallel processing alongside the manual process for two allocation cycles, validates accuracy, and transitions finance analysts to the automated workflow.

Slalom Roles and Responsibilities: Engagement Lead — shared services finance coordination. Data Engineer (Full Time) — infrastructure platform integrations, usage data pipelines. Software Engineer x2 (Full Time) — allocation engine, dashboards, forecasting module. Business Analyst (Full Time) — allocation rule documentation, business unit requirements, validation. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $640,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide API access to all infrastructure cost and usage data sources. Business unit finance contacts will participate in allocation rule validation. GL account mapping will be provided by corporate finance.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── ROBOTICS (third) ────────────────────────────────────────────

  {
    id: "prop-040",
    title: "Robotic Arm Defect Detection for Packaging Lines",
    source: "robotics-defect-detection-packaging-2026.pdf",
    bu: "Robotics",
    content: `Purpose: This document outlines Slalom's proposed approach to implement a computer vision-based defect detection system on robotic packaging arms, reducing packaging defect rates from 1.8% to 0.3% and eliminating the need for downstream manual quality inspection.

Our Understanding: The Robotics team operates 680 robotic packaging arms across 12 fulfillment centers that pack an average of 4.2 million items per day. Current quality assurance relies on random manual inspection at the end of the packaging line, catching defects only after they occur. Common defects include incorrect item placement, damaged packaging material, improper seal closure, and label misalignment. The 1.8% defect rate results in customer complaints, returns, and re-shipments costing an estimated $32M annually. The manual inspection workforce of 240 quality associates can only sample 5% of packages, meaning most defects reach the customer. The team wants to add real-time computer vision to the robotic arms to detect and correct defects during the packaging process rather than after.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) catalogs defect types with frequency data, collects and labels training imagery from packaging lines, and designs the vision system architecture for integration with existing robotic arm controllers. Phase 2 (Weeks 5-10) develops the defect detection system with high-speed cameras mounted on packaging arms capturing images at each packaging step, a lightweight CNN model optimized for edge inference detecting the 8 most common defect types, real-time feedback loop triggering the robotic arm to pause and correct detected defects, and a quality analytics dashboard tracking defect rates by arm, shift, product type, and defect category. Phase 3 (Weeks 11-12) deploys to 20 robotic arms in a single FC for pilot validation. Phase 4 (Weeks 13-14) measures defect reduction, throughput impact, and delivers a deployment plan for the remaining 660 arms.

Slalom Roles and Responsibilities: Engagement Lead — fulfillment operations and robotics engineering coordination. Computer Vision Engineer (Full Time) — model development, camera integration, edge inference optimization. ML Engineer (Full Time) — training data pipeline, model accuracy validation, continuous learning framework. Software Engineer (Full Time) — robotic arm controller integration, quality dashboard, alerting. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $560,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to robotic arm controllers and mounting points for cameras. Labeled defect imagery will be jointly developed during Phase 1. Pilot FC will allocate 20 arms for testing without impacting throughput commitments.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── BATCH 3: 20 ADDITIONAL PROPOSALS ────────────────────────────

  // ── ADVERTISING ─────────────────────────────────────────────────

  {
    id: "prop-041",
    title: "Brand Safety and Content Adjacency Controls",
    source: "advertising-brand-safety-2026.docx",
    bu: "Advertising",
    content: `Purpose: This document outlines Slalom's proposed approach to build an automated brand safety and content adjacency control system for the advertising platform, giving advertisers granular control over where their ads appear and reducing brand safety incidents by 95%.

Our Understanding: The Advertising platform places ads across millions of product detail pages, search results, and streaming content placements. Advertisers increasingly demand assurance that their brands do not appear alongside controversial, counterfeit, or competitor products. The current brand safety controls are limited to broad category exclusions and manual keyword blocklists that advertisers must maintain themselves. Last quarter, 23 major advertisers paused campaigns totaling $48M in spend after brand safety incidents where premium brand ads appeared adjacent to counterfeit products or inappropriate content. The manual review process for brand safety complaints takes an average of 72 hours, and the platform lacks proactive detection. Competitor ad platforms offer AI-powered contextual analysis and real-time adjacency scoring that the team needs to match.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) catalogs historical brand safety incidents, interviews 15 major advertisers about their adjacency requirements, and designs the content classification taxonomy. Phase 2 (Weeks 5-10) builds the brand safety platform with automated content classification using NLP and image analysis to categorize product pages and streaming content by safety tier, advertiser-configurable adjacency rules with granular controls for product categories, competitor brands, content themes, and sentiment, real-time pre-placement scoring that evaluates brand safety before ad serving, and a transparency dashboard giving advertisers visibility into blocked placements and safety scores. Phase 3 (Weeks 11-14) integrates with the ad serving pipeline, conducts backtesting against historical placements, and onboards 50 pilot advertisers.

Slalom Roles and Responsibilities: Engagement Lead — advertising trust and safety coordination. ML Engineer x2 (Full Time) — content classification models, adjacency scoring. Software Engineer (Full Time) — ad serving integration, advertiser controls UI. Data Analyst (Full Time) — incident analysis, backtesting, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $610,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide historical brand safety incident data and ad placement logs. Ad serving pipeline supports pre-placement scoring hooks. Pilot advertisers will be recruited through account management teams.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── RETAIL ──────────────────────────────────────────────────────

  {
    id: "prop-042",
    title: "Voice Commerce Shopping Experience",
    source: "retail-voice-commerce-2026.pdf",
    bu: "Retail",
    content: `Purpose: This document outlines Slalom's proposed approach to redesign the voice commerce shopping experience, increasing voice-initiated purchase completion rates from 6% to 25% and expanding the range of products purchasable by voice.

Our Understanding: The Retail voice commerce channel processes 14 million voice shopping interactions daily but only 6% result in a completed purchase compared to 3.8% conversion on the visual shopping experience. The primary barriers are product disambiguation (customers cannot see options or compare), trust deficit (customers are reluctant to purchase items they cannot visually verify), limited product coverage (voice commerce only supports reorder of previously purchased items for most categories), and cumbersome cart management. The voice shopping flow forces a linear interaction that does not match how customers naturally shop. Competitor voice platforms have launched visual-assist modes on smart displays and companion app integration that address some of these limitations.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) analyzes voice shopping interaction logs to map abandonment patterns, conducts research with 25 voice shoppers, and benchmarks competitor voice commerce experiences. Phase 2 (Weeks 4-8) redesigns the voice commerce flow with intelligent product disambiguation using purchase history and preference signals to reduce options, visual confirmation cards pushed to companion app or smart display during purchase consideration, expanded voice-first product discovery for categories beyond reorders, simplified multi-item cart building with natural conversation patterns, and proactive reorder suggestions based on consumption patterns. Phase 3 (Weeks 9-12) delivers validated interaction prototypes, engineering specifications, and A/B test plans for measuring conversion improvements.

Slalom Roles and Responsibilities: Engagement Lead — voice product coordination. UX Designer x2 (Full Time) — conversation design, multi-modal interaction, prototyping. UX Researcher (Full Time) — voice shopper research, interaction testing. Content Designer (Full Time) — voice prompts, response scripting, error handling. Accountable Executive (Part Time) — executive oversight.

Timeline: 12 weeks (October 2026 – December 2026).

Total Estimated Cost: $480,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide voice interaction logs and voice commerce analytics. Voice platform SDK supports multi-modal response patterns. Research participants will be recruited from active voice device users.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── WEB SERVICES ────────────────────────────────────────────────

  {
    id: "prop-043",
    title: "API Rate Limiting and Throttling Governance Platform",
    source: "ws-api-rate-governance-2026.docx",
    bu: "Web Services",
    content: `Purpose: This document outlines Slalom's proposed approach to build a centralized API rate limiting and throttling governance platform, replacing per-service ad-hoc implementations with a consistent, policy-driven framework that prevents cascading failures while maintaining fair API consumption.

Our Understanding: Web Services exposes 2,400 APIs consumed by internal teams and external partners. Each API team independently implements rate limiting using different mechanisms (token buckets, sliding windows, fixed counters) with inconsistent configuration, making platform-wide traffic management impossible. During a recent flash sale event, a burst of legitimate traffic from 3 high-volume API consumers exhausted capacity for smaller consumers, causing SLA violations across 140 partner integrations. The platform lacks tenant-aware throttling, meaning a single consumer's traffic spike impacts all others sharing the infrastructure. There is no visibility into API consumption patterns relative to contracted limits, and partner teams report that rate limit errors provide insufficient information for debugging.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) inventories current rate limiting implementations across all APIs, profiles consumption patterns by tenant, and designs the governance framework. Phase 2 (Weeks 5-10) builds the centralized rate governance platform with a policy engine supporting per-tenant, per-API, and per-endpoint rate limits with burst allowances, tenant-isolated traffic management preventing noisy-neighbor impacts, real-time consumption dashboards for API consumers showing usage relative to limits, graduated throttling with informative error responses including retry-after headers and quota reset timing, and self-service limit management allowing consumers to request increases through an approval workflow. Phase 3 (Weeks 11-14) migrates the top 50 highest-traffic APIs to the governance platform and validates tenant isolation during simulated traffic bursts.

Slalom Roles and Responsibilities: Engagement Lead — platform engineering coordination. Principal Engineer (Full Time) — governance architecture, policy engine design. Software Engineer x2 (Full Time) — platform implementation, API gateway integration, consumer dashboard. SRE Engineer (Full Time) — traffic simulation, tenant isolation testing, monitoring. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (November 2026 – February 2027).

Total Estimated Cost: $620,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide API gateway access and consumption telemetry. API teams will support migration to the governance platform. Partner teams will participate in consumer dashboard feedback.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── DEVICES ─────────────────────────────────────────────────────

  {
    id: "prop-044",
    title: "Wearable Health Device Clinical Validation Program",
    source: "devices-wearable-clinical-validation-2026.pdf",
    bu: "Devices",
    content: `Purpose: This document outlines Slalom's proposed approach to design and execute a clinical validation program for the wearable health device's new continuous blood pressure monitoring feature, establishing the evidence base required for regulatory submission and healthcare provider trust.

Our Understanding: The Devices health wearable team has developed a sensor-based continuous blood pressure estimation algorithm using photoplethysmography (PPG) and accelerometer data. Internal bench testing shows promising accuracy, but the feature requires clinical validation against reference-grade blood pressure measurements to support FDA De Novo classification submission and credibility with healthcare providers. The team lacks experience designing clinical studies and navigating the regulatory evidence requirements. Key challenges include defining adequate study populations that represent diverse demographics, skin tones, and comorbidities, establishing clinically meaningful accuracy thresholds aligned with FDA guidance and AAMI/ISO standards, and designing a study protocol that will be accepted by institutional review boards and regulators. The competitive landscape is moving quickly with 3 competitors announcing similar features.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) defines the clinical validation strategy including target accuracy claims, study design options, regulatory pathway analysis, and study population requirements. Phase 2 (Weeks 5-10) develops the complete study protocol including participant enrollment criteria ensuring demographic diversity, measurement procedures comparing the wearable against FDA-cleared reference devices, statistical analysis plan with sample size justification, data collection infrastructure and electronic case report forms, and adverse event monitoring and reporting procedures. Phase 3 (Weeks 11-14) supports IRB submission, site selection and qualification, and study operations planning. Phase 4 (Weeks 15-16) delivers the regulatory submission evidence package template and pre-submission meeting preparation materials.

Slalom Roles and Responsibilities: Engagement Lead — health devices regulatory coordination. Clinical Research Associate (Full Time) — study design, protocol development, IRB submission. Biostatistician (Full Time) — statistical analysis plan, sample size calculation, data analysis framework. Regulatory Affairs Specialist (Part Time) — FDA pathway analysis, submission strategy. Data Engineer (Full Time) — clinical data collection infrastructure, validation data pipeline. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $680,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide the wearable device hardware and algorithm specifications. Clinical study sites will be selected and contracted by the client. Reference-grade blood pressure measurement devices will be provided. Client regulatory team will lead FDA interactions with Slalom support.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── ENTERTAINMENT ───────────────────────────────────────────────

  {
    id: "prop-045",
    title: "Content Localization Pipeline for Global Expansion",
    source: "entertainment-localization-pipeline-2026.docx",
    bu: "Entertainment",
    content: `Purpose: This document outlines Slalom's proposed approach to build an AI-assisted content localization pipeline, reducing per-title localization cost by 45% and accelerating time-to-market for new territories from 8 weeks to 2 weeks.

Our Understanding: The Entertainment streaming platform is expanding into 15 new markets requiring content localization into 22 languages. The current localization process is entirely outsourced to translation vendors, with each title requiring subtitle translation, subtitle timing adjustment for linguistic length differences, audio description creation, and metadata localization for marketing and discovery. Average per-title localization cost is $34,000 across all target languages, and vendor turnaround is 6-8 weeks, creating a long delay between content availability in primary markets versus new territories. Simultaneous global launches are impossible at current cost and speed. The team has identified that AI-assisted translation with human quality review could dramatically reduce both cost and turnaround while maintaining quality, particularly for subtitle translation which represents 60% of localization spend.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) audits the current localization workflow, profiles cost and quality metrics by language pair and content type, and evaluates AI translation model performance against human baselines. Phase 2 (Weeks 5-10) builds the AI-assisted localization pipeline with machine translation using fine-tuned models for entertainment content that preserve tone, humor, and cultural references, automated subtitle timing adjustment accounting for reading speed by language and text expansion, AI-generated audio descriptions with human voice talent review, a quality assurance scoring system flagging segments requiring human review, and a translator workbench interface for efficient human post-editing. Phase 3 (Weeks 11-14) processes 20 titles through the pipeline across 5 language pairs, measuring cost, speed, and quality against the vendor baseline.

Slalom Roles and Responsibilities: Engagement Lead — content operations coordination. ML Engineer (Full Time) — translation model fine-tuning, quality scoring. Software Engineer x2 (Full Time) — pipeline orchestration, translator workbench, subtitle timing engine. Localization Specialist (Part Time) — quality evaluation, cultural adaptation guidance. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $590,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide parallel corpora of previously localized content for model fine-tuning. Human translators will be available for quality benchmarking. Content rights clearance for new territories will be handled separately.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── FINANCE AND BUSINESS SERVICES ───────────────────────────────

  {
    id: "prop-046",
    title: "Tax Compliance Automation for Global Marketplace",
    source: "fbs-tax-compliance-automation-2026.pdf",
    bu: "Finance and Business Services",
    content: `Purpose: This document outlines Slalom's proposed approach to automate sales tax and VAT compliance across the global marketplace, reducing manual tax determination exceptions by 80% and ensuring compliance with rapidly evolving tax regulations in 42 jurisdictions.

Our Understanding: Finance and Business Services manages tax compliance for marketplace transactions across 42 countries with 12,000+ distinct tax jurisdictions. Tax determination is handled by a rules engine that was implemented 5 years ago and has not kept pace with regulatory changes. Monthly, the tax team manually reviews 85,000 transactions flagged as exceptions where the system could not determine the correct tax treatment. Common causes include new product categories without tax mapping, digital services tax rules that vary by buyer location, marketplace facilitator laws requiring different collection responsibilities, and cross-border B2B transactions with reverse charge requirements. Tax regulation changes across jurisdictions average 140 per year, and the team's 4-week implementation cycle for rule updates creates periods of non-compliance. Penalties and interest from late or incorrect filings totaled $8.2M last year.

Slalom Proposed Delivery Approach: Slalom proposes an 18-week engagement. Phase 1 (Weeks 1-4) maps the current tax determination architecture, catalogs exception patterns, and evaluates tax engine modernization options. Phase 2 (Weeks 5-12) implements the enhanced compliance platform with an upgraded tax engine with product taxability matrix covering all marketplace categories, automated regulatory monitoring that ingests tax law changes and generates draft rule updates, machine learning exception classification that auto-resolves predictable exception patterns, a B2B transaction handler with automated VAT ID validation and reverse charge determination, and a compliance dashboard tracking filing deadlines, exception volumes, and audit readiness by jurisdiction. Phase 3 (Weeks 13-16) conducts parallel processing against live transactions across 10 high-volume jurisdictions. Phase 4 (Weeks 17-18) transitions to production and trains the tax operations team.

Slalom Roles and Responsibilities: Engagement Lead — tax operations and legal coordination. Tax Technology Specialist (Full Time) — tax engine configuration, regulatory analysis, taxability mapping. Software Engineer x2 (Full Time) — compliance platform, regulatory monitoring integration, B2B handler. Data Analyst (Full Time) — exception analysis, accuracy measurement, compliance reporting. Accountable Executive (Part Time) — executive oversight.

Timeline: 18 weeks (September 2026 – January 2027).

Total Estimated Cost: $820,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to the current tax engine, transaction data, and exception logs. Legal/tax team will validate regulatory interpretations. Tax filing systems will support API-based data submission.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── HEALTH SERVICES ─────────────────────────────────────────────

  {
    id: "prop-047",
    title: "Mental Health Digital Therapeutics Platform",
    source: "health-mental-health-dtx-2026.docx",
    bu: "Health Services",
    content: `Purpose: This document outlines Slalom's proposed approach to design and build a digital therapeutics platform for mental health, delivering evidence-based cognitive behavioral therapy (CBT) programs through a mobile application integrated with the existing health services ecosystem.

Our Understanding: Health Services has identified that mental health is the fastest-growing service category, with a 340% increase in demand over three years. However, the provider network has a 6-week average wait time for initial therapy appointments due to therapist shortage. 44% of patients who request mental health services never complete an initial visit due to wait times, stigma, or scheduling difficulties. The health services team wants to offer a digital therapeutics program as a bridge for patients waiting for in-person therapy and as a standalone option for mild-to-moderate anxiety and depression. The platform must deliver clinically validated CBT protocols, integrate with the existing health record system, and provide therapist oversight dashboards for patients who are co-managed. Regulatory guidance under FDA's Digital Health framework requires the platform to follow predetermined change control plans for software updates.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) conducts clinical requirements gathering with the behavioral health team, reviews published CBT digital therapeutics evidence, and designs the therapeutic program structure with clinical advisory input. Phase 2 (Weeks 5-10) designs and prototypes the mobile application with structured CBT modules for anxiety and depression with daily interactive exercises, adaptive program pacing that adjusts intensity based on patient engagement and symptom scores, validated symptom assessment instruments (PHQ-9, GAD-7) with longitudinal tracking, crisis detection and safety planning with emergency resource escalation, and therapist oversight dashboard showing patient progress, risk indicators, and intervention triggers. Phase 3 (Weeks 11-14) conducts usability testing with 30 patients and 10 therapists. Phase 4 (Weeks 15-16) delivers clinical validation study design and regulatory strategy documentation.

Slalom Roles and Responsibilities: Engagement Lead — behavioral health and digital product coordination. UX Designer x2 (Full Time) — therapeutic interface design, mobile prototyping. UX Researcher (Full Time) — patient and therapist research, usability testing. Clinical Informaticist (Part Time) — CBT protocol design, clinical validation guidance. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $650,000.00 Do-Not-Exceed Amount.

Assumptions: Client clinical team will provide CBT protocol content and clinical oversight. Patient research participants will be recruited through existing behavioral health patient panels. Regulatory counsel will review FDA Digital Health applicability.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── LOW EARTH ORBIT SATELLITES ──────────────────────────────────

  {
    id: "prop-048",
    title: "Satellite Spectrum Interference Detection and Mitigation",
    source: "leo-spectrum-interference-2026.pdf",
    bu: "Low Earth Orbit Satellites",
    content: `Purpose: This document outlines Slalom's proposed approach to build a spectrum interference detection and mitigation system for the satellite constellation, reducing service degradation from interference events by 80% through automated detection and dynamic frequency management.

Our Understanding: The LEO satellite constellation operates in shared spectrum bands where interference from terrestrial sources, adjacent satellite systems, and atmospheric conditions degrades service quality for subscribers. The operations team currently detects interference through subscriber complaints and manual spectrum analysis, with an average detection time of 2.5 hours. Interference events impact an average of 15,000 subscribers per incident, with 12 significant events per month. The manual mitigation process involves identifying the interference source, calculating alternative frequency plans, and uploading new beam configurations to affected satellites, taking an additional 4-6 hours. During this window, affected subscribers experience degraded throughput or complete service loss. The team needs automated detection that identifies interference within seconds and autonomous frequency re-planning that mitigates impact without human intervention.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes historical interference data, characterizes interference signatures by source type, and designs the detection and mitigation architecture. Phase 2 (Weeks 5-10) builds the automated system with real-time spectrum monitoring using satellite and ground station sensor data, ML-based interference classification distinguishing terrestrial, satellite, and atmospheric sources, automated frequency re-planning engine that computes alternative beam configurations within constraints, autonomous mitigation execution with rollback capability for failed re-plans, and a spectrum operations dashboard showing interference events, mitigation actions, and subscriber impact metrics. Phase 3 (Weeks 11-14) deploys in monitored mode validating detection accuracy and mitigation effectiveness against manually confirmed events. Phase 4 (Weeks 15-16) transitions to autonomous mode for low-risk interference categories with operator approval for high-impact changes.

Slalom Roles and Responsibilities: Engagement Lead — spectrum operations coordination. RF Engineer (Full Time) — interference characterization, frequency planning algorithms. ML Engineer (Full Time) — detection models, classification, anomaly detection. Software Engineer (Full Time) — mitigation engine, satellite command integration, operations dashboard. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $690,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide spectrum monitoring data, satellite command APIs, and historical interference event logs. Satellite operations will support monitored-mode validation. Autonomous mitigation will be limited to pre-approved frequency re-planning scenarios.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── OPERATIONS ──────────────────────────────────────────────────

  {
    id: "prop-049",
    title: "Packaging Sustainability Optimization Platform",
    source: "ops-packaging-sustainability-2026.docx",
    bu: "Operations",
    content: `Purpose: This document outlines Slalom's proposed approach to build a packaging sustainability optimization platform that reduces packaging material waste by 25% and shipping volume by 15% through right-sized packaging selection for every order.

Our Understanding: Operations ships 2.8 million packages daily using a catalog of 14 standard box sizes. The current packaging selection algorithm matches items to the smallest available box but does not optimize for multi-item orders, resulting in significant void fill usage and oversized packaging. An internal audit found that 38% of shipped packages contain more than 50% air by volume. Excess packaging material costs $420M annually in corrugate, void fill, and dimensional weight shipping surcharges. Customer complaints about excessive packaging have increased 45% year-over-year, and sustainability commitments require measurable reduction in packaging waste. The team has explored custom right-sized packaging machines but deploying them across all fulfillment centers requires a $200M capital investment. A software-based optimization using existing box sizes and improved multi-item packing algorithms could deliver significant near-term gains.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) analyzes 90 days of packaging data correlating item dimensions, box selection, void fill usage, and dimensional weight charges to quantify the optimization opportunity by product category. Phase 2 (Weeks 5-10) builds the optimization platform with a 3D bin-packing algorithm that optimizes multi-item orders across available box sizes, item fragility and orientation constraints ensuring product protection, a box size catalog optimizer recommending additions or removals to the standard size set, real-time packaging recommendation API integrated with the fulfillment system, and sustainability metrics tracking material reduction, carbon impact, and dimensional weight savings. Phase 3 (Weeks 11-12) deploys in 3 pilot fulfillment centers for live validation. Phase 4 (Weeks 13-14) measures results and delivers a network-wide rollout plan.

Slalom Roles and Responsibilities: Engagement Lead — fulfillment operations and sustainability coordination. Data Scientist (Full Time) — bin-packing algorithm, box catalog optimization, impact analysis. Software Engineer x2 (Full Time) — optimization API, fulfillment system integration, metrics dashboard. Operations Analyst (Full Time) — packaging data analysis, pilot coordination, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $580,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide item dimension data, historical packaging selections, and shipping cost data. Fulfillment systems support API-based packaging recommendations. Pilot FCs will allocate stations for A/B comparison.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── PHYSICAL STORES ─────────────────────────────────────────────

  {
    id: "prop-050",
    title: "Smart Shopping Cart with Indoor Navigation",
    source: "stores-smart-cart-navigation-2026.pdf",
    bu: "Physical Stores",
    content: `Purpose: This document outlines Slalom's proposed approach to develop the software platform for a smart shopping cart with indoor navigation, enabling customers to build shopping lists, receive turn-by-turn navigation within the store, and check out directly from the cart.

Our Understanding: Physical Stores is piloting smart shopping carts equipped with touchscreens, barcode scanners, and weight sensors. The hardware has been procured but the software experience is undeveloped. Customer research shows that the top pain points in physical grocery shopping are finding items (cited by 58% of shoppers), checkout wait times (47%), and price uncertainty (36%). The smart cart hardware has the capability to address all three through indoor navigation, scan-as-you-go checkout, and real-time price display. However, the software needs to deliver an intuitive experience that customers of all ages can use without instruction. Early prototype testing revealed that indoor positioning accuracy using existing WiFi is insufficient for turn-by-turn directions, and the cart UI was too complex for quick adoption. The team wants a refined software experience validated through customer testing before scaling from 5 to 50 stores.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-4) conducts in-store observation research with 30 shoppers, evaluates indoor positioning technologies (BLE beacons, UWB, visual SLAM) against accuracy and cost requirements, and designs the cart software architecture. Phase 2 (Weeks 5-10) builds the cart software platform with a shopping list import from the mobile app with aisle-level item location mapping, indoor navigation with optimized route through the store minimizing backtracking, scan-as-you-go with real-time running total, weight verification, and age-restricted item flagging, personalized promotions and product suggestions based on shopping history and current cart contents, and express checkout completion from the cart without visiting a checkout lane. Phase 3 (Weeks 11-14) deploys on 20 carts in a single pilot store, conducts usability testing with 50 customers across age demographics, and measures adoption rate, trip completion time, and basket size impact.

Slalom Roles and Responsibilities: Engagement Lead — store technology and operations coordination. UX Designer x2 (Full Time) — cart UI design, navigation experience, checkout flow. Software Engineer x2 (Full Time) — cart platform, indoor positioning, POS integration. UX Researcher (Full Time) — in-store research, usability testing, pilot measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $720,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide smart cart hardware, pilot store access, and indoor positioning infrastructure. Store planogram data will be available for item location mapping. POS system supports API-based checkout completion.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── ROBOTICS ────────────────────────────────────────────────────

  {
    id: "prop-051",
    title: "Drone Delivery Last-Mile Operations Platform",
    source: "robotics-drone-delivery-ops-2026.docx",
    bu: "Robotics",
    content: `Purpose: This document outlines Slalom's proposed approach to build the operations management platform for the drone delivery last-mile program, enabling safe and efficient autonomous drone deliveries across 5 initial metro areas with centralized fleet coordination.

Our Understanding: The Robotics drone delivery program has completed FAA Part 135 certification and is preparing for commercial launch in 5 metro areas. Each metro will operate 50-100 delivery drones from distribution hubs. The team has developed the autonomous flight software but lacks the operations management layer needed for commercial scale. Key gaps include no centralized flight operations dashboard for monitoring multiple simultaneous flights, manual flight plan filing that cannot scale beyond a few daily flights, no dynamic airspace deconfliction for drones operating in overlapping zones, limited weather integration for real-time go/no-go decisions, and no customer-facing delivery tracking. The program needs an operations platform that enables a small team to safely manage hundreds of concurrent drone flights while providing the customer experience expected for package delivery.

Slalom Proposed Delivery Approach: Slalom proposes an 18-week engagement. Phase 1 (Weeks 1-4) maps operational requirements with the drone operations team and FAA liaison, defines the platform architecture, and designs integration points with existing delivery management systems. Phase 2 (Weeks 5-12) builds the drone operations platform with a real-time flight operations center dashboard showing all active drones, routes, and status across all metros, automated flight plan generation and filing integrated with LAANC airspace authorization, dynamic airspace deconfliction preventing drone-to-drone conflicts and managing temporary flight restrictions, weather decision support integrating hyperlocal forecasts for automated go/no-go recommendations, and customer delivery tracking with estimated arrival, live drone position, and delivery confirmation. Phase 3 (Weeks 13-16) conducts simulated operations testing using digital twin drone models. Phase 4 (Weeks 17-18) supports initial flight operations in the first metro launch.

Slalom Roles and Responsibilities: Engagement Lead — drone operations and regulatory coordination. Software Engineer x2 (Full Time) — operations platform, flight planning, airspace deconfliction. Data Engineer (Full Time) — telemetry pipeline, weather integration, analytics. UX Designer (Full Time) — operations center dashboard, customer tracking experience. Accountable Executive (Part Time) — executive oversight.

Timeline: 18 weeks (September 2026 – January 2027).

Total Estimated Cost: $830,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide drone telemetry APIs and autonomous flight system integration documentation. FAA LAANC system access will be established. Weather data provider contracts will be in place. Digital twin simulation environment will be available for testing.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── SHARED SERVICES ─────────────────────────────────────────────

  {
    id: "prop-052",
    title: "Employee Onboarding Experience Automation",
    source: "shared-employee-onboarding-2026.pdf",
    bu: "Shared Services",
    content: `Purpose: This document outlines Slalom's proposed approach to automate and streamline the employee onboarding experience, reducing time-to-productivity from 6 weeks to 2 weeks and improving new hire satisfaction scores from 3.2 to 4.5 out of 5.

Our Understanding: Shared Services onboards approximately 8,000 new employees per month across all business units. The current onboarding process involves 23 discrete tasks spanning 7 different systems: IT provisioning, badge access, benefits enrollment, equipment ordering, training assignment, team introductions, and compliance certifications. New hires report confusion about what to do and when, with 41% saying they felt "lost" during their first week. IT provisioning alone takes an average of 5 business days, during which new hires cannot access essential tools. Each onboarding involves an average of 14 emails from different departments with conflicting instructions. Managers spend 8 hours per new hire on onboarding coordination. The fragmented experience creates a poor first impression and delays time-to-productivity.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) maps the current onboarding journey from offer acceptance through 90-day review, interviews 30 recent hires and 15 hiring managers, and identifies automation and consolidation opportunities. Phase 2 (Weeks 5-10) builds the onboarding automation platform with a unified onboarding portal providing a personalized checklist that sequences tasks in the correct order, automated provisioning workflows triggering IT, facilities, and equipment orders from the HR system hire event, pre-start engagement delivering company information and team introductions before day one, day-one readiness orchestration ensuring all access and equipment is provisioned before the employee arrives, and a manager dashboard showing onboarding progress and flagging blocked tasks. Phase 3 (Weeks 11-14) pilots with 200 new hires across 3 business units, measures time-to-productivity and satisfaction scores.

Slalom Roles and Responsibilities: Engagement Lead — HR and IT coordination. Software Engineer x2 (Full Time) — onboarding portal, workflow automation, system integrations. UX Designer (Full Time) — onboarding experience design, manager dashboard. Business Analyst (Full Time) — process mapping, requirements, pilot measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $560,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to HR, IT provisioning, and facilities management system APIs. HR team will support process redesign decisions. Pilot business units will coordinate hiring manager participation.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── TV/FILM STUDIOS ─────────────────────────────────────────────

  {
    id: "prop-053",
    title: "AI-Powered Script Coverage and Greenlight Analytics",
    source: "studios-script-analytics-2026.docx",
    bu: "TV/Film Studios",
    content: `Purpose: This document outlines Slalom's proposed approach to build an AI-powered script coverage and greenlight analytics platform, accelerating script evaluation from 2 weeks to 48 hours and providing data-driven audience demand signals to inform programming decisions.

Our Understanding: The Studios development team receives 3,500 script submissions annually and must evaluate each for creative merit, production feasibility, and commercial potential. Currently, script coverage (synopsis and evaluation) is performed by a team of 12 readers who can process 15 scripts per week each, creating a persistent 3-week backlog. Coverage quality varies significantly between readers. Development executives make greenlight decisions based primarily on creative instinct and comparable title performance, with limited quantitative audience demand data. The team estimates that 30% of greenlit projects underperform audience projections, representing significant wasted production investment. Competitor studios are beginning to use AI-assisted evaluation tools to increase throughput and improve decision accuracy.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-4) analyzes 3 years of script coverage paired with actual performance outcomes, defines the evaluation taxonomy, and designs the AI coverage model architecture. Phase 2 (Weeks 5-10) builds the analytics platform with AI-generated script coverage producing structured synopses, genre classification, tone analysis, and comparable title identification, audience demand scoring using social media signals, search trends, and genre performance data, production complexity estimation based on location requirements, cast size, VFX needs, and period settings, a greenlight scorecard combining creative evaluation, demand signals, and production economics, and a development pipeline dashboard tracking all submissions from intake through decision. Phase 3 (Weeks 11-14) validates AI coverage against human reader evaluations on 200 scripts, calibrates scoring models, and delivers the platform to the development team.

Slalom Roles and Responsibilities: Engagement Lead — studios development team coordination. ML Engineer (Full Time) — NLP models for script analysis, audience demand modeling. Software Engineer x2 (Full Time) — analytics platform, greenlight scorecard, pipeline dashboard. Data Analyst (Full Time) — historical performance analysis, model validation, calibration. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $610,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide historical script coverage documents, production budgets, and performance data. Development executives will participate in scorecard design and model calibration. Script submissions will be provided in digital text format.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── BUSINESS ────────────────────────────────────────────────────

  {
    id: "prop-054",
    title: "Small Business Lending Underwriting Platform",
    source: "business-lending-underwriting-2026.pdf",
    bu: "Business",
    content: `Purpose: This document outlines Slalom's proposed approach to build an automated underwriting platform for the small business lending program, reducing loan decision time from 5 days to 4 hours while maintaining default rates below 2%.

Our Understanding: The Business marketplace offers working capital loans to third-party sellers to fund inventory purchases and business growth. The lending program currently serves 45,000 active borrowers with $6B in outstanding loans. The underwriting process requires manual review of seller financial data, marketplace sales history, customer feedback metrics, and external credit bureau reports. Each application takes an underwriter an average of 3.2 hours to evaluate, and the team of 60 underwriters cannot keep pace with growing demand. 28% of qualified applicants abandon after receiving a 5-day decision timeline. Competitor marketplace lending programs offer same-day approvals using automated underwriting. The team wants to automate decisioning for standard applications while routing complex cases to human underwriters.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes historical loan performance data correlating underwriting inputs with default outcomes, defines the automated decisioning model, and establishes the risk appetite framework with the credit risk team. Phase 2 (Weeks 5-10) builds the underwriting platform with automated data aggregation from marketplace sales, customer metrics, and credit bureau sources, a credit scoring model using gradient boosting trained on historical loan performance, risk-based pricing engine that calculates interest rates and loan terms based on risk tier, automated approval for applications meeting pre-defined criteria with instant offer generation, and human review routing for edge cases with a decision-support dashboard showing model inputs and recommendations. Phase 3 (Weeks 11-14) runs shadow mode against 2,000 live applications comparing automated decisions to human underwriter decisions. Phase 4 (Weeks 15-16) calibrates thresholds and transitions standard applications to automated processing.

Slalom Roles and Responsibilities: Engagement Lead — lending operations and credit risk coordination. Data Scientist (Full Time) — credit scoring model, risk analysis, shadow mode validation. Software Engineer x2 (Full Time) — underwriting platform, data aggregation, offer engine. Business Analyst (Full Time) — underwriting process mapping, risk framework, regulatory requirements. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $720,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide historical loan performance data and underwriting decision records. Credit bureau data feeds will be available through existing contracts. Legal and compliance team will validate automated decisioning against fair lending regulations.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── OPERATIONS ──────────────────────────────────────────────────

  {
    id: "prop-055",
    title: "Cold Chain Monitoring and Compliance Platform",
    source: "ops-cold-chain-monitoring-2026.pdf",
    bu: "Operations",
    content: `Purpose: This document outlines Slalom's proposed approach to build a cold chain monitoring and compliance platform for grocery and pharmaceutical fulfillment, reducing temperature excursion losses by 60% and automating regulatory compliance documentation.

Our Understanding: Operations manages temperature-controlled supply chains for grocery fresh/frozen products and pharmaceutical items across 8 cold chain fulfillment centers and 3,200 refrigerated delivery vehicles. Current temperature monitoring relies on periodic manual checks with handheld thermometers and data loggers downloaded weekly. Temperature excursions are discovered after the fact, by which time affected products have been shipped to customers or must be destroyed. Annual losses from temperature excursions total $67M in spoiled inventory, customer refunds, and regulatory fines. FDA and state pharmacy board regulations require continuous temperature documentation with defined thresholds, and the current paper-based compliance records are audit-vulnerable. The team needs real-time continuous monitoring with automated alerting and compliance documentation.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) maps cold chain touchpoints from supplier receipt through last-mile delivery, profiles excursion patterns, and designs the IoT sensor architecture. Phase 2 (Weeks 5-10) builds the monitoring platform with continuous temperature monitoring via IoT sensors in storage zones, packaging, and delivery vehicles, real-time alerting with escalation workflows when temperatures approach or breach thresholds, automated compliance documentation generating FDA and pharmacy board-ready audit reports, predictive analytics identifying equipment degradation before it causes excursions, and a cold chain operations dashboard showing real-time network temperature status with drill-down to individual shipments. Phase 3 (Weeks 11-12) deploys in 2 pilot fulfillment centers and 200 delivery vehicles. Phase 4 (Weeks 13-14) validates compliance documentation with regulatory requirements and delivers the rollout plan.

Slalom Roles and Responsibilities: Engagement Lead — cold chain operations coordination. IoT Engineer (Full Time) — sensor architecture, device management, data ingestion. Software Engineer x2 (Full Time) — monitoring platform, alerting, compliance documentation engine. Data Scientist (Part Time) — predictive analytics for equipment degradation. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (October 2026 – January 2027).

Total Estimated Cost: $580,000.00 Do-Not-Exceed Amount.

Assumptions: Client will procure and install IoT temperature sensors in pilot facilities and vehicles. Existing warehouse management and fleet management systems support API integration. Regulatory team will validate compliance report formats.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── DEVICES ─────────────────────────────────────────────────────

  {
    id: "prop-056",
    title: "Kids Device Experience Parental Controls Redesign",
    source: "devices-kids-parental-controls-2026.docx",
    bu: "Devices",
    content: `Purpose: This document outlines Slalom's proposed approach to redesign the parental controls experience across the kids' device ecosystem, simplifying setup from 35 minutes to under 5 minutes and reducing parental controls-related support contacts by 50%.

Our Understanding: The Devices kids' tablet and smart speaker lineup serves 4.2 million child profiles managed by parents. The current parental controls experience requires configuration across 3 separate settings interfaces: device-level controls, content subscription filters, and companion app time limits. Parents report that the setup process is confusing, with 62% of parents leaving controls at default settings rather than customizing them. The most requested features — bedtime enforcement, school-time content restrictions, and per-app time limits — exist but are buried in advanced settings that only 8% of parents discover. Content filtering accuracy is also a pain point, with 23% of parents reporting that age-inappropriate content slipped through filters, eroding trust. The competitive landscape has shifted, with competitor kids' devices offering simplified, one-screen parental control dashboards.

Slalom Proposed Delivery Approach: Slalom proposes a 10-week engagement. Phase 1 (Weeks 1-3) conducts research with 25 parents observing their actual parental controls setup and management, benchmarks competitor kids' device controls, and maps the current fragmented settings architecture. Phase 2 (Weeks 4-7) designs the unified parental controls experience with a single-screen setup wizard with age-appropriate presets that configure all content, time, and device controls simultaneously, a parent dashboard providing a daily activity summary, screen time reports, and content consumption by category, schedule-based controls for bedtime, school time, and weekend with different rule sets, simplified content filtering with transparency showing what was blocked and why, and child-requested access workflow allowing kids to ask permission for specific content or extra time through the device. Phase 3 (Weeks 8-10) validates with 30 parents through usability testing and delivers engineering specifications.

Slalom Roles and Responsibilities: Engagement Lead — kids' device product coordination. UX Researcher (Full Time) — parent research, competitive analysis, usability testing. UX Designer x2 (Full Time) — controls design, dashboard, setup wizard. Content Designer (Part Time) — parent-facing language, child request interface. Accountable Executive (Part Time) — executive oversight.

Timeline: 10 weeks (November 2026 – January 2027).

Total Estimated Cost: $410,000.00 Do-Not-Exceed Amount.

Assumptions: Client will recruit parent research participants through existing family account customer base. Client will provide content classification data and filtering accuracy metrics. Device and content engineering teams will review designs for feasibility.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── RETAIL ──────────────────────────────────────────────────────

  {
    id: "prop-057",
    title: "Visual Product Search and Style Matching",
    source: "retail-visual-search-2026.pdf",
    bu: "Retail",
    content: `Purpose: This document outlines Slalom's proposed approach to build a visual product search and style matching feature, enabling customers to photograph items and find visually similar products in the catalog, targeting a 12% increase in fashion and home category discovery.

Our Understanding: The Retail team has identified that 35% of shopping journeys in fashion, home decor, and furniture categories begin with visual inspiration from social media, magazines, or real-world sightings where the customer cannot articulate what they want in text search terms. The current text-based search fails these customers because they lack the vocabulary to describe specific patterns, textures, styles, or silhouettes. Competitor platforms have launched camera-based visual search, and social commerce platforms use visual similarity as a primary discovery mechanism. The existing product catalog contains high-quality images for 95% of products but no visual embedding or similarity index has been built. Customer research indicates that 41% of fashion shoppers would use a "find similar" feature if available.

Slalom Proposed Delivery Approach: Slalom proposes a 14-week engagement. Phase 1 (Weeks 1-3) evaluates visual embedding models, profiles the product image catalog quality, and designs the visual search architecture. Phase 2 (Weeks 5-10) builds the visual search platform with a camera-based search allowing customers to photograph items and find visually similar catalog products, a "find similar" button on product detail pages showing style-matched alternatives, visual attribute extraction identifying colors, patterns, materials, and styles from product images, an embedding pipeline processing the full catalog with incremental updates for new listings, and result ranking that combines visual similarity with availability, price, ratings, and personalization signals. Phase 3 (Weeks 11-14) conducts customer beta testing with 5,000 users in fashion and home categories, measures search-to-purchase conversion and category discovery metrics.

Slalom Roles and Responsibilities: Engagement Lead — retail search and discovery coordination. ML Engineer x2 (Full Time) — visual embedding model, similarity search, attribute extraction. Software Engineer (Full Time) — search integration, camera interface, catalog pipeline. Data Scientist (Full Time) — result ranking optimization, beta measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 14 weeks (September 2026 – December 2026).

Total Estimated Cost: $640,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide product image catalog access and search platform integration points. Beta users will be recruited through the mobile app. Existing search infrastructure supports vector similarity queries.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── TV/FILM STUDIOS ─────────────────────────────────────────────

  {
    id: "prop-058",
    title: "Audience Sentiment Real-Time Analytics for Live Premieres",
    source: "studios-audience-sentiment-2026.pdf",
    bu: "TV/Film Studios",
    content: `Purpose: This document outlines Slalom's proposed approach to build a real-time audience sentiment analytics platform for content premieres, giving marketing and programming teams immediate visibility into audience reception to drive same-day promotional adjustments.

Our Understanding: The Studios marketing team currently evaluates content premiere performance using next-day viewership numbers and social media report compilations assembled manually 24-48 hours after launch. This delay means that marketing campaign adjustments, social media engagement strategies, and programming schedule changes cannot respond to real-time audience reception. When a premiere underperforms, the window for corrective marketing action has often closed by the time data is available. Conversely, breakout performances are not amplified quickly enough to capitalize on organic momentum. The team wants real-time visibility into audience sentiment during and immediately after premieres to enable data-driven, same-day decisions.

Slalom Proposed Delivery Approach: Slalom proposes a 12-week engagement. Phase 1 (Weeks 1-3) identifies and integrates data sources including social media APIs, streaming viewership telemetry, review aggregation, and search trend data, and designs the real-time analytics architecture. Phase 2 (Weeks 4-8) builds the sentiment analytics platform with real-time social media sentiment analysis across platforms using NLP classification for positive, negative, and neutral reactions, viewership pacing dashboards comparing premiere performance to comparable title benchmarks with minute-by-minute resolution, trending topic detection identifying which scenes, characters, or plot points are driving conversation, audience demographic analysis profiling who is watching and reacting, and an automated alert system notifying marketing and programming teams of significant sentiment shifts. Phase 3 (Weeks 9-12) deploys during 5 content premieres, validates sentiment accuracy against post-premiere surveys, and iterates on dashboard utility with marketing team feedback.

Slalom Roles and Responsibilities: Engagement Lead — studios marketing and analytics coordination. ML Engineer (Full Time) — NLP sentiment models, topic detection, demographic analysis. Software Engineer x2 (Full Time) — real-time data pipeline, analytics dashboard, alerting system. Data Analyst (Full Time) — benchmark development, model validation, premiere measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 12 weeks (September 2026 – November 2026).

Total Estimated Cost: $520,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide streaming viewership telemetry APIs and social media API access. Five content premieres will be scheduled during the engagement for live testing. Marketing team will participate in dashboard design and post-premiere feedback sessions.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  },

  // ── BUSINESS ────────────────────────────────────────────────────

  {
    id: "prop-059",
    title: "Marketplace Counterfeit Detection and Brand Protection",
    source: "business-counterfeit-detection-2026.docx",
    bu: "Business",
    content: `Purpose: This document outlines Slalom's proposed approach to build an AI-powered counterfeit detection and brand protection system for the marketplace, reducing counterfeit listings by 75% and accelerating brand owner takedown requests from 72 hours to under 4 hours.

Our Understanding: The Business marketplace integrity team removes approximately 400,000 counterfeit listings per month, but brand owners estimate that for every listing removed, 2-3 new ones appear. The current detection system relies on brand owner reports, keyword-based rules, and a small team of manual investigators. Brand owners express frustration with the 72-hour average response time for takedown requests and the whack-a-mole nature of enforcement. 14 major brands have publicly threatened to leave the marketplace if counterfeit enforcement does not improve. The counterfeit problem is concentrated in electronics accessories, luxury goods, beauty products, and auto parts. Common counterfeit indicators include listing prices significantly below MAP, seller account patterns (new accounts with rapid listing volume), product image reuse from legitimate brands, and suspiciously uniform positive review patterns.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) analyzes confirmed counterfeit cases to profile detection signals, interviews 10 brand protection teams, and designs the multi-signal detection architecture. Phase 2 (Weeks 5-10) builds the detection platform with automated listing analysis using image fingerprinting to detect reused brand imagery, price anomaly detection comparing listing prices against MAP and category benchmarks, seller behavioral profiling identifying patterns consistent with counterfeit operations, product listing NLP analysis detecting copied descriptions and suspicious claims, and an automated brand owner portal for streamlined reporting with real-time case status. Phase 3 (Weeks 11-14) runs detection against live listings measuring precision and recall against known counterfeit ground truth. Phase 4 (Weeks 15-16) integrates with the listing enforcement pipeline and onboards 20 brand partners.

Slalom Roles and Responsibilities: Engagement Lead — marketplace integrity and brand relations coordination. ML Engineer x2 (Full Time) — image fingerprinting, price anomaly, seller profiling, NLP analysis. Software Engineer (Full Time) — brand portal, enforcement integration, case management. Data Analyst (Full Time) — counterfeit pattern analysis, detection validation, measurement. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (October 2026 – January 2027).

Total Estimated Cost: $710,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide confirmed counterfeit case data, listing images, and seller account information. Brand partners will participate in detection validation. Legal team will approve automated enforcement actions within defined confidence thresholds.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "docx"
  },

  // ── HEALTH SERVICES ─────────────────────────────────────────────

  {
    id: "prop-060",
    title: "Chronic Disease Remote Patient Monitoring Program",
    source: "health-remote-monitoring-2026.pdf",
    bu: "Health Services",
    content: `Purpose: This document outlines Slalom's proposed approach to design and implement a remote patient monitoring program for chronic disease management, targeting a 30% reduction in emergency department visits and 25% reduction in hospital readmissions for enrolled patients.

Our Understanding: Health Services manages care for 680,000 patients with chronic conditions including diabetes, hypertension, heart failure, and COPD. These patients account for 72% of total healthcare spend. Current chronic disease management relies on periodic office visits every 3-6 months, with no visibility into patient health between appointments. Patients often present to the emergency department with acute exacerbations that could have been prevented with earlier intervention. The clinical team has identified that continuous monitoring of key biometrics (blood glucose, blood pressure, weight, oxygen saturation) combined with symptom tracking could enable proactive clinical outreach before conditions deteriorate. However, previous remote monitoring pilots had less than 30% sustained patient engagement because the technology was too complex and clinical responses to alerts were inconsistent.

Slalom Proposed Delivery Approach: Slalom proposes a 16-week engagement. Phase 1 (Weeks 1-4) conducts research with 20 patients and 10 clinicians from previous monitoring pilots, identifies engagement barriers, and designs the monitoring program model with clinical workflow integration. Phase 2 (Weeks 5-10) designs the monitoring platform with a simplified patient experience for daily biometric capture using consumer-grade Bluetooth devices, intelligent alerting that reduces alert fatigue by contextualizing readings against patient-specific baselines rather than population norms, clinical triage dashboard prioritizing patients by acuity with automated care pathway recommendations, patient engagement features including medication reminders, educational content, and motivational messaging, and a population health analytics layer tracking cohort outcomes and identifying high-risk patients. Phase 3 (Weeks 11-14) conducts a clinical workflow simulation with care team members. Phase 4 (Weeks 15-16) delivers validated prototypes, the clinical program design, and outcome measurement framework.

Slalom Roles and Responsibilities: Engagement Lead — clinical operations and digital health coordination. UX Designer x2 (Full Time) — patient monitoring experience, clinical dashboard, engagement features. UX Researcher (Full Time) — patient and clinician research, workflow validation. Clinical Informaticist (Part Time) — care pathway design, alert logic, clinical workflow integration. Accountable Executive (Part Time) — executive oversight.

Timeline: 16 weeks (September 2026 – December 2026).

Total Estimated Cost: $640,000.00 Do-Not-Exceed Amount.

Assumptions: Client will provide access to clinical staff for research and workflow validation. Patient research participants will be recruited from existing chronic disease management programs. EHR integration requirements will be defined jointly with the health IT team.

Next Steps: Incorporate feedback. Generate Work Order. Legal and Finance approval. Team onboarding. Kickoff.`,
    format: "pdf"
  }
];
