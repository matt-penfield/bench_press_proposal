// Proposal corpus — replace with real data
// Each proposal: { id, title, source, content, format }
const PROPOSALS = [
  {
    id: "sample-1",
    title: "Sample Proposal — Cloud Migration Strategy",
    source: "sample-cloud-migration.pdf",
    content: "This proposal outlines a comprehensive cloud migration strategy for a mid-size financial services firm. The client is seeking to modernize their on-premise infrastructure by migrating workloads to AWS. Key challenges include legacy system dependencies, data compliance requirements, and minimal downtime tolerance. Our approach leverages a phased migration plan beginning with non-critical workloads, followed by core banking systems. We recommend a landing zone architecture with multi-account governance, CI/CD pipelines for infrastructure as code, and a cloud center of excellence to upskill internal teams.",
    format: "pdf"
  },
  {
    id: "sample-2",
    title: "Sample Proposal — Data Platform Modernization",
    source: "sample-data-platform.docx",
    content: "This proposal addresses the client's need to modernize their data platform to support real-time analytics and machine learning initiatives. The current state involves siloed data warehouses with batch ETL processes that cannot meet growing business demands. We propose building a modern lakehouse architecture on Azure Synapse and Databricks, enabling both batch and streaming data pipelines. The solution includes a unified data governance layer, self-service analytics for business users, and an ML feature store for data science teams.",
    format: "docx"
  },
  {
    id: "sample-3",
    title: "Sample Proposal — Customer Experience Transformation",
    source: "sample-cx-transformation.pdf",
    content: "The client, a national healthcare provider, is looking to transform their patient experience across digital touchpoints. Current patient satisfaction scores are declining due to fragmented digital experiences, long wait times for scheduling, and lack of personalized communication. We propose a phased CX transformation including a redesigned patient portal, AI-powered scheduling optimization, omnichannel communication platform, and a patient data platform to enable personalized outreach. Our approach includes journey mapping workshops, rapid prototyping, and iterative delivery.",
    format: "pdf"
  }
];
