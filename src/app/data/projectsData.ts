export const projectsData = [
  {
    id: 1,
    title: "Enterprise Vendor Platform",
    subtitle: "AKS Kubernetes Platform with GitOps",
    description: "Designed and implemented Kubernetes-based application platform on Azure Kubernetes Service for a large US IT solutions provider managing $1B+ ARR. Standardized deployments using GitOps with ArgoCD, Istio Ambient service mesh, and comprehensive policy enforcement.",
    image: "https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg5MzE3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Azure AKS", "Kubernetes", "ArgoCD", "Istio Ambient", "Terraform", "Kyverno", "SOPS", "Azure Key Vault", "Datadog"],
    highlights: [
      "Reduced manual changes through GitOps deployment model",
      "Improved reliability with Datadog observability",
      "Zero-trust networking with Istio Ambient",
      "Standardized policies and secrets management"
    ],
    overview: "Designed and implemented a Kubernetes-based application platform on Azure Kubernetes Service (AKS) for a large US IT solutions provider with multi‑billion‑dollar annual revenue and a nationwide enterprise customer base. The platform underpins the company's enterprise vendor commerce ecosystem, which manages roughly $1B+ in annual recurring revenue (ARR) and thousands of partner transactions. The solution standardizes how services for the vendor platform are deployed, secured, and observed, using Terraform for infrastructure as code, Argo CD for GitOps-driven continuous delivery, and Istio Ambient for zero‑trust service mesh capabilities. Policy enforcement is handled through Kyverno, secrets are managed with SOPS and Azure Key Vault, and cert-manager automates SSL/TLS. Containers are built with Docker and deployed to AKS, while Datadog provides end‑to‑end monitoring across applications and infrastructure, enabling proactive detection and rapid remediation of issues in a high‑revenue environment.",
    problems: [
      "The existing enterprise vendor platform suffered from inconsistent, manual deployment processes, leading to configuration drift, longer release cycles, and higher operational risk.",
      "Uptime and reliability were difficult to guarantee due to limited observability, fragmented monitoring, and reactive incident response.",
      "Secrets and configuration were managed in an ad‑hoc way across environments, increasing the risk of misconfigurations and security exposure.",
      "Scaling infrastructure and services to support a high‑revenue, mission‑critical platform required stronger standardization, guardrails, and automation to meet business continuity expectations."
    ],
    goals: [
      "Establish a repeatable, GitOps-based deployment model so all application and infrastructure changes flow through version control, review, and automated rollout to AKS, reducing manual intervention and drift.",
      "Improve reliability and uptime of the vendor platform by adopting Kubernetes, service mesh, and Datadog-based observability, enabling faster detection, alerting, and troubleshooting of issues that impact revenue.",
      "Implement policy as code and secure secrets management (Kyverno, SOPS, Azure Key Vault, cert-manager) to enforce security and compliance across clusters and environments.",
      "Create a scalable, cloud-native foundation that supports future growth in vendor integrations and transaction volume, while giving the engineering and operations teams a consistent, automated platform to build on."
    ],
    role: [
      "Led the design and implementation of the AKS-based platform, including Terraform IaC, Argo CD GitOps workflows, and cluster baseline configuration.",
      "Defined Kubernetes multi-environment strategy (dev/stage/prod), RBAC, and namespace layout to support multiple vendor-facing services.",
      "Implemented policy as code with Kyverno and secrets management with SOPS + Azure Key Vault, integrating them into the GitOps pipeline.",
      "Built Datadog dashboards and alerts to monitor cluster health, application SLIs, and deployment quality."
    ],
    architecture: [
      "Terraform provisions AKS, node pools, networking, Azure Key Vault, and Datadog integrations.",
      "Application and infrastructure definitions live in Git (Bitbucket) and are deployed via Argo CD using a GitOps 'app of apps' pattern.",
      "Istio Ambient secures and manages traffic between services; Kyverno enforces security and configuration policies at admission time.",
      "SOPS-encrypted Kubernetes manifests pull secrets from Azure Key Vault at deploy time, keeping Git history safe.",
      "Datadog ingests logs, metrics, and traces from AKS and workloads to power dashboards and alerts."
    ],
    keyDetails: [],
    results: [
      "Reduced manual changes to the vendor platform by moving deployments to a fully GitOps-driven model, cutting configuration drift and deployment errors.",
      "Improved reliability and incident response through Datadog dashboards and alerts, enabling faster detection of issues affecting high-value vendor transactions.",
      "Standardized policies and secrets management across environments, strengthening security posture and making compliance audits easier."
    ],
    techStack: [
      {
        category: "Cloud & Orchestration",
        items: ["Kubernetes", "Azure Kubernetes Service (AKS)"]
      },
      {
        category: "Service Mesh",
        items: ["Istio Ambient"]
      },
      {
        category: "Infrastructure & Policy",
        items: ["Terraform", "Kyverno"]
      },
      {
        category: "GitOps & Continuous Delivery",
        items: ["ArgoCD", "Bitbucket"]
      },
      {
        category: "Containers",
        items: ["Docker"]
      },
      {
        category: "Monitoring & Observability",
        items: ["Datadog"]
      },
      {
        category: "Secrets & Security",
        items: ["SOPS", "Azure Key Vault", "cert-manager"]
      }
    ]
  },
  {
    id: 2,
    title: "Multi-Cloud Security Posture Management",
    subtitle: "Microsoft Defender for Cloud at Scale",
    description: "Designed and implemented comprehensive multi-cloud security solution using Microsoft Defender for Cloud for a Latin American multinational retail conglomerate. Automated onboarding of 2,000+ GCP projects using custom Python automation to overcome Azure API limitations.",
    image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3Njg4OTk0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Microsoft Defender for Cloud", "Python", "Azure SDK", "Google Cloud Platform", "AWS", "Terraform", "Security Hub"],
    highlights: [
      "Successfully onboarded 2,000+ GCP projects programmatically",
      "Achieved 40-60% cost optimization through intelligent plan enablement",
      "Reduced onboarding time from weeks to days",
      "Enhanced compliance readiness with automated assessments"
    ],
    overview: "Designed and implemented a comprehensive multi-cloud security solution using Microsoft Defender for Cloud for a Latin American multinational retail conglomerate with operations spanning department stores, home improvement centers, supermarkets, banking, and e-commerce across seven countries. The organization operates a complex, multi-cloud infrastructure with over 2,000 Google Cloud Platform (GCP) projects, hundreds of Google Kubernetes Engine (GKE) clusters, extensive GCP-managed databases, and supplementary workloads on AWS and Azure. The engagement focused on establishing unified security posture management and threat protection across all three major cloud providers (GCP, AWS, Azure) through Microsoft Defender for Cloud, with a primary emphasis on the massive GCP estate. Due to the unprecedented scale of GCP projects and limitations in Azure's native API handling for large multi-cloud environments, custom Python automation was developed to programmatically manage Defender for Cloud configurations, onboard GCP projects at scale, apply intelligent tagging strategies, and dynamically enable or disable Defender plans based on workload types and business requirements.",
    problems: [
      "Fragmented security visibility across 2,000+ GCP projects, AWS accounts, and Azure subscriptions made it impossible to maintain a unified security posture or detect threats consistently.",
      "Manual onboarding at scale was infeasible: Connecting thousands of GCP projects to Microsoft Defender for Cloud through the Azure portal would have taken weeks or months and been error-prone.",
      "Azure API limitations for managing multi-cloud connectors at this scale resulted in frequent timeouts, throttling, and failures when attempting bulk operations through native tooling.",
      "No standardized security policies or compliance monitoring across cloud platforms, creating regulatory risk and inconsistent security controls.",
      "Cost inefficiency: Enabling all Defender plans (Servers, Containers, Databases, Storage, etc.) across all 2,000+ GCP projects would have resulted in excessive licensing costs for workloads that didn't require advanced protection.",
      "Lack of automation for tagging, grouping, and managing Defender plan enablement/disablement meant any configuration change would require manual intervention at massive scale.",
      "Operational overhead: Security and cloud operations teams lacked tools to manage Defender configurations programmatically, making ongoing maintenance unsustainable."
    ],
    goals: [
      "Establish unified multi-cloud security visibility across GCP (primary), AWS, and Azure through Microsoft Defender for Cloud, providing centralized threat detection, security recommendations, and compliance monitoring.",
      "Automate onboarding of 2,000+ GCP projects to Defender for Cloud programmatically, overcoming Azure API limitations through custom Python automation with retry logic and batch processing.",
      "Implement intelligent tagging and grouping of GCP projects based on workload types (GKE clusters, databases, compute instances, storage) to enable selective plan enablement and cost optimization.",
      "Dynamically enable/disable Defender plans at scale based on project groupings and business requirements, ensuring high-risk workloads (production GKE, databases) receive advanced protection while minimizing costs for dev/test environments.",
      "Ensure reliability and resilience of automation through error handling, state tracking, and idempotent operations to handle Azure API failures gracefully.",
      "Enable compliance monitoring against industry standards (CIS, ISO 27001, PCI-DSS) across all cloud platforms for regulatory reporting and audit readiness.",
      "Reduce operational overhead for security and cloud teams by providing self-service tools and automated workflows for Defender for Cloud lifecycle management."
    ],
    role: [
      "Led the end-to-end design and implementation of Microsoft Defender for Cloud across GCP (2,000+ projects), AWS, and Azure, including architecture design, connector setup, and policy configuration.",
      "Developed custom Python automation framework to programmatically onboard GCP projects to Defender for Cloud, manage connector lifecycle, apply tags, and enable/disable Defender plans at scale.",
      "Designed tagging and grouping strategy for GCP projects based on workload characteristics (GKE, databases, compute, storage) to enable cost-optimized, risk-based plan enablement.",
      "Implemented robust error handling and retry logic to overcome Azure API throttling, timeouts, and failures when managing thousands of multi-cloud connectors.",
      "Configured Defender plans (Servers, Containers/GKE, Databases, Storage, Key Vault, Resource Manager) selectively across project groups, balancing security requirements with cost constraints.",
      "Established compliance frameworks (CIS, ISO 27001) within Defender for Cloud and configured automated compliance assessments across all connected cloud environments.",
      "Collaborated with security, cloud operations, and engineering teams to define security requirements, plan enablement criteria, and operational workflows for ongoing Defender management.",
      "Provided training and documentation for internal teams on using Defender for Cloud dashboards, investigating security alerts, and leveraging automation tools for self-service operations."
    ],
    architecture: [
      "Microsoft Defender for Cloud serves as the centralized security command center for GCP (primary), AWS, and Azure environments.",
      "GCP Security Command Center Integration: Defender for Cloud integrates with Google Cloud's Security Command Center via connectors, ingesting findings, vulnerabilities, and misconfigurations from 2,000+ GCP projects.",
      "AWS Security Hub Integration: Defender for Cloud connects to AWS Security Hub for threat detection and compliance monitoring across AWS accounts.",
      "Azure-Native Integration: Defender for Cloud natively monitors Azure subscriptions for VMs, storage, databases, Kubernetes (AKS), and other resources.",
      "Custom Python automation queries Google Cloud Resource Manager API to retrieve all GCP projects, classifies them by workload type, and creates Defender connectors in batches using Azure SDK.",
      "Python script maintains state tracking (SQLite/PostgreSQL) for connector creation status with retry logic and exponential backoff for API failures.",
      "Tag-based Defender plan management: Python automation queries connectors by tags and enables/disables specific Defender plans based on workload classification and environment.",
      "Compliance standards (CIS, ISO 27001) configured in Defender for Cloud with automated assessments running continuously across all GCP projects.",
      "Security alerts forwarded to SIEM (Azure Sentinel) and ticketing systems (ServiceNow, Jira) for incident response workflows."
    ],
    keyDetails: [
      {
        title: "Python Automation Framework",
        content: "Built using Azure SDK for Python (azure-mgmt-security, azure-identity) for Defender management and Google Cloud SDK for GCP project discovery. Key capabilities include bulk connector onboarding with batch processing, tag management, plan lifecycle management with dry-run support, error handling with exponential backoff retry logic, and idempotent operations that can be safely re-run. The framework uses SQLite or PostgreSQL for state tracking and resume capability, with detailed logging and reporting for all operations."
      },
      {
        title: "Overcoming Azure API Limitations",
        content: "Azure's multi-cloud connector APIs have aggressive rate limits (~10-20 requests/second) and bulk operations caused timeouts and '429 Too Many Requests' errors. Solutions implemented include exponential backoff retry, batch processing of 50-100 connectors at a time, parallelization with throttling using concurrent threads with rate-limiting semaphore, state persistence to enable resume from last successful batch, and health checks to validate connector status after creation and detect silent failures."
      },
      {
        title: "Cost Optimization Through Selective Plan Enablement",
        content: "High-risk production workloads (GKE, production databases, production VMs) have all relevant Defender plans enabled. Staging environments have Containers and Databases plans enabled with Servers plan disabled to reduce costs. Dev/test environments only have basic CSPM (free) enabled with all paid plans disabled. Defender for Storage is enabled only for projects with sensitive data (PII, financial records). This strategy resulted in an estimated 40-60% reduction in Defender licensing costs compared to blanket enablement across all 2,000+ projects."
      },
      {
        title: "GKE and Database-Specific Configurations",
        content: "Defender for Containers protects GKE clusters with runtime threat detection, vulnerability scanning, and Kubernetes admission control, integrated with Google Container Analysis API for container image scanning and alerting on suspicious pod behavior, privilege escalation, and crypto-mining activity. Defender for Databases monitors Cloud SQL (MySQL, PostgreSQL, SQL Server), Spanner, and open-source databases, detecting SQL injection attempts, anomalous access patterns, and credential theft, with vulnerability assessments and compliance checks for encryption and access controls."
      }
    ],
    results: [
      "Successfully onboarded 2,000+ GCP projects to Microsoft Defender for Cloud programmatically, achieving full visibility and threat protection across the organization's primary cloud platform.",
      "Reduced onboarding time from weeks to days through custom Python automation, overcoming Azure API limitations and eliminating manual connector creation.",
      "Achieved 40-60% cost optimization by implementing intelligent, tag-based Defender plan enablement, ensuring high-risk workloads received advanced protection while minimizing costs for dev/test environments.",
      "Established unified multi-cloud security posture across GCP, AWS, and Azure, enabling centralized threat detection, compliance monitoring, and security recommendation management from a single platform.",
      "Improved operational efficiency by providing security and cloud operations teams with automated, self-service tools for managing Defender configurations at scale, reducing manual effort and operational overhead.",
      "Enhanced compliance readiness through automated assessments against CIS, ISO 27001, and custom regulatory frameworks, simplifying audit preparation and regulatory reporting.",
      "Built resilient, production-grade automation with robust error handling, retry logic, state tracking, and idempotent operations to reliably manage thousands of cloud resources despite API limitations."
    ],
    techStack: [
      {
        category: "Security Platform",
        items: ["Microsoft Defender for Cloud", "Google Cloud Security Command Center", "AWS Security Hub"]
      },
      {
        category: "Defender Plans Configured",
        items: ["Defender for Servers", "Defender for Containers", "Defender for Databases", "Defender for Storage", "Defender for Resource Manager"]
      },
      {
        category: "Automation & Orchestration",
        items: ["Python 3.9+", "Azure SDK for Python", "Google Cloud SDK for Python", "SQLite", "PostgreSQL"]
      },
      {
        category: "Cloud Platforms",
        items: ["Google Cloud Platform (2,000+ projects)", "GKE", "Cloud SQL", "Compute Engine", "Cloud Storage", "AWS", "Azure"]
      },
      {
        category: "Compliance & Reporting",
        items: ["CIS Google Cloud Platform Foundation Benchmark", "ISO 27001"]
      },
      {
        category: "Integration & Alerting",
        items: ["Azure Sentinel", "ServiceNow", "Jira"]
      }
    ]
  },
  {
    id: 3,
    title: "AI Social Media Marketing Platform",
    subtitle: "AWS Infrastructure & CI/CD for AI-Powered Platform",
    description: "Architected production-grade AWS infrastructure for an AI-powered social media marketing platform. Built on a multi-account architecture spanning seven accounts with AWS Control Tower, featuring ECS Fargate, GPU-accelerated video processing, and comprehensive observability.",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzY4ODk2NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["AWS", "ECS Fargate", "CodePipeline", "RDS PostgreSQL", "S3", "CloudFront", "Lambda", "GuardDuty", "CloudWatch"],
    highlights: [
      "Zero-downtime deployments with blue-green strategy",
      "Multi-account architecture with Control Tower governance",
      "GPU-accelerated video processing pipeline",
      "Comprehensive security monitoring with GuardDuty and Security Hub"
    ],
    overview: "Designed and deployed a production-grade AWS cloud infrastructure for an AI-powered social media marketing platform that helps founders and small businesses generate authentic, voice-consistent content. The platform processes video uploads through a sophisticated multi-stage pipeline—transcription, visual AI analysis, GPU-accelerated clipping, and generative AI asset creation—delivering marketing-ready quotes, social posts, and email copy. Built on a multi-account AWS architecture spanning seven dedicated accounts (Management, Development, Staging, Production, Shared Services, Audit, Log Archive), the solution implements enterprise-grade security, governance, and compliance controls through AWS Control Tower and Identity Center. The core application runs on ECS Fargate with a fully automated CI/CD pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy with blue-green deployment strategy for zero-downtime releases. The infrastructure supports compute-intensive video processing workloads on NVIDIA T4 GPU clusters in a dedicated Shared Services account, orchestrated through Elixir/Phoenix on ECS Fargate with Oban job queues.",
    problems: [
      "The platform needed a scalable, secure cloud foundation to support AI-driven video processing and content generation workflows capable of handling variable compute loads and GPU-intensive operations.",
      "The platform required automated, repeatable deployments across multiple environments (dev, staging, production) with zero-downtime releases and automatic rollback capabilities.",
      "Enterprise-grade security and governance were essential from day one, including centralized identity management, threat detection, compliance monitoring, and audit logging across all environments.",
      "Cost optimization during active development required selective enablement of monitoring services while maintaining production-ready security posture.",
      "The architecture needed to support cross-account GPU cluster access for video processing while maintaining strict security boundaries and least-privilege access controls."
    ],
    goals: [
      "Establish a multi-account AWS organization with Control Tower guardrails to enforce security, compliance, and operational best practices across all environments.",
      "Implement a fully automated CI/CD pipeline from GitHub through build, test, and blue-green deployment to ECS Fargate, respecting permission sets and deployment approval workflows.",
      "Build a resilient, high-availability application platform using ECS Fargate Multi-AZ deployments, RDS Multi-AZ failover, and CloudFront global distribution.",
      "Deploy centralized security monitoring and threat detection via GuardDuty, Security Hub, and CloudTrail with automated alerting through AWS Chatbot.",
      "Create a scalable video processing pipeline leveraging GPU acceleration for transcription (Whisper), visual analysis (Rekognition), semantic segmentation (Hugging Face), and multi-aspect-ratio transcoding (FFmpeg).",
      "Ensure production readiness with comprehensive observability (CloudWatch Logs, Metrics, Synthetics), secrets management (AWS Secrets Manager), and disaster recovery capabilities (cross-account backups, Multi-AZ failover)."
    ],
    role: [
      "Architected and implemented the entire AWS infrastructure spanning seven accounts with Control Tower, Identity Center, and Security Hub for centralized governance and security.",
      "Designed and deployed the ECS Fargate application platform including VPC networking (public/private subnets across multiple AZs), Application Load Balancer, and container orchestration.",
      "Built the complete CI/CD pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy with blue-green deployment strategy, integrating GitHub source control and ECR container registry.",
      "Implemented RDS PostgreSQL Multi-AZ database with automated backups, encrypted at rest and in transit, supporting the application's project, asset, and metadata persistence requirements.",
      "Configured S3 and CloudFront for video storage, asset delivery, and global content distribution with optimized caching policies.",
      "Established security monitoring and compliance through GuardDuty threat detection, Security Hub finding aggregation, CloudTrail audit logging, and IAM permission sets via Identity Center.",
      "Deployed CloudWatch observability stack including log aggregation, custom metrics, Synthetics endpoint monitoring, and Chatbot integration for incident alerting.",
      "Set up AWS Secrets Manager and Parameter Store for secure credential and configuration management across the pipeline.",
      "Coordinated cross-account GPU cluster integration in the Shared Services account for video processing workloads with secure IAM role-based access."
    ],
    architecture: [
      "AWS Control Tower and Identity Center in the Management account govern all child accounts (Dev, Staging, Prod, Shared Services, Audit, Log Archive) with centralized SSO, permission sets, and guardrails.",
      "GitHub hosts application code (Elixir/Phoenix) and infrastructure definitions, triggering CodePipeline on commit.",
      "CodeBuild compiles the Elixir application, runs tests, builds Docker images, and pushes to Amazon ECR.",
      "CodeDeploy orchestrates blue-green deployments to ECS Fargate in private subnets across multiple availability zones, with automatic rollback on failure.",
      "Application Load Balancer distributes traffic from the internet to ECS Fargate containers in private subnets.",
      "RDS PostgreSQL Multi-AZ provides active-passive database failover with automated backups and cross-account replication to the Audit account.",
      "Amazon S3 stores video uploads and generated assets; CloudFront accelerates global content delivery.",
      "GPU Cluster (Shared Services account) runs NVIDIA T4-accelerated workloads for Whisper transcription, Hugging Face semantic segmentation, and FFmpeg multi-aspect-ratio transcoding; orchestrated via ECS Fargate and Oban job queues.",
      "AWS Lambda coordinates transcription and Rekognition jobs, with results returned via webhook to ECS Fargate.",
      "CloudWatch ingests logs from ECS containers, Lambda functions, and RDS; custom metrics track job queue depth, processing latency, and resource utilization.",
      "CloudWatch Synthetics proactively monitors application endpoints with HTTP health checks; CloudWatch Alarms trigger alerts on failures, delivered via AWS Chatbot to Slack.",
      "GuardDuty continuously analyzes CloudTrail logs and VPC Flow Logs for threats; findings aggregated in Security Hub and forwarded to the Audit account."
    ],
    keyDetails: [
      {
        title: "Multi-Account AWS Organization",
        content: "Seven-account structure with Control Tower preventative and detective guardrails enforcing encryption, logging, and access policies across all environments. AWS Identity Center provides SSO and role-based permission sets, eliminating individual IAM users and enforcing least-privilege access."
      },
      {
        title: "ECS Fargate & Containerization",
        content: "Elixir/Phoenix application containerized with Docker, following multi-stage builds and security best practices. ECS tasks deployed across multiple availability zones with auto-scaling based on CloudWatch metrics and Oban job queue depth. Private subnets with NAT Gateway for outbound connectivity; no direct internet access to application containers."
      },
      {
        title: "CI/CD Pipeline",
        content: "GitHub webhook triggers CodePipeline on push to main branch. CodeBuild executes unit tests, integration tests, and builds versioned Docker images. CodeDeploy performs blue-green deployment to ECS Fargate with traffic shifting and automatic rollback on CloudWatch alarm thresholds. Separate pipelines for Dev, Staging, and Production with Identity Center permission sets restricting production deployments to authorized DevOps personnel."
      },
      {
        title: "Video Processing Pipeline",
        content: "Videos uploaded to S3, metadata stored in RDS, URLs distributed via CloudFront. Oban enqueues Lambda function → GPU cluster runs Whisper on T4 GPUs → results via webhook → ProjectAsset Transcription record created. Lambda invokes Rekognition once per project (cost-optimized) → ProjectAssetMeta Rekognition record stores labels, objects, scene metadata. ECS Fargate sends video to GPU cluster → Whisper, Hugging Face semantic segmentation, FFmpeg multi-aspect-ratio transcoding (16:9, 9:16, 1:1) → ProjectAssetMeta Video Clipper records per aspect ratio. Oban enqueues asset jobs → ECS Fargate workers execute Anthropic API calls locally → generates quotes, social copy, email content."
      },
      {
        title: "Security & Compliance",
        content: "GuardDuty enabled across all accounts for threat detection (crypto mining, credential exfiltration, suspicious network activity). Security Hub aggregates findings from GuardDuty, IAM Access Analyzer, and AWS Config. CloudTrail logs all API activity, centralized to Audit account for forensic analysis and compliance reporting. AWS Config (production-only) validates resource configurations against compliance rules. Secrets Manager stores Anthropic API keys, database credentials, and service tokens with automatic rotation."
      },
      {
        title: "Monitoring & Observability",
        content: "CloudWatch Logs aggregates ECS containers, Lambda functions, and VPC Flow Logs with log insights queries. Custom metrics for Oban job queue depth, processing latency, GPU utilization, and API call volumes. CloudWatch Synthetics canary scripts monitor application endpoints every 5 minutes. CloudWatch Alarms trigger on Synthetics failures, high error rates, database CPU/IOPS, and ECS task health. AWS Chatbot delivers alerts to Slack for rapid incident response."
      }
    ],
    results: [
      "Delivered a production-ready, multi-account AWS infrastructure supporting an early-access launch with enterprise-grade security, governance, and compliance controls from day one.",
      "Achieved zero-downtime deployments through blue-green ECS Fargate deployment strategy with automated rollback, enabling rapid iteration and feature releases across dev, staging, and production environments.",
      "Implemented comprehensive security posture with GuardDuty threat detection, Security Hub aggregation, CloudTrail audit logging, and Identity Center SSO, providing centralized visibility and control across all seven AWS accounts.",
      "Enabled scalable, GPU-accelerated video processing supporting AI-powered content generation workflows (transcription, visual analysis, multi-aspect-ratio clipping, quote/social/email generation) with automated orchestration via Oban job queues.",
      "Established proactive observability and incident response through CloudWatch Synthetics endpoint monitoring, custom metrics, log aggregation, and Slack-integrated alerting, ensuring rapid detection and remediation of issues.",
      "Optimized infrastructure costs during development by selectively enabling compliance monitoring services (Config enabled only in Production) while maintaining security best practices across all environments."
    ],
    techStack: [
      {
        category: "Cloud & Multi-Account Governance",
        items: ["AWS Control Tower", "AWS Identity Center", "AWS Organizations"]
      },
      {
        category: "Compute & Orchestration",
        items: ["Amazon ECS Fargate", "NVIDIA T4 GPU Cluster", "AWS Lambda"]
      },
      {
        category: "Networking & Load Balancing",
        items: ["Amazon VPC", "Application Load Balancer", "CloudFront"]
      },
      {
        category: "CI/CD & Deployment",
        items: ["AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "Amazon ECR", "GitHub"]
      },
      {
        category: "Database & Storage",
        items: ["Amazon RDS PostgreSQL", "Amazon S3"]
      },
      {
        category: "Security & Compliance",
        items: ["AWS GuardDuty", "AWS Security Hub", "AWS Config", "AWS CloudTrail", "AWS Secrets Manager"]
      },
      {
        category: "Monitoring & Observability",
        items: ["Amazon CloudWatch Logs", "Amazon CloudWatch Metrics", "Amazon CloudWatch Synthetics", "AWS Chatbot"]
      },
      {
        category: "AI & Video Processing",
        items: ["Whisper", "Amazon Rekognition", "Hugging Face", "FFmpeg", "Anthropic API", "Oban"]
      },
      {
        category: "Application Framework",
        items: ["Elixir", "Phoenix", "Docker"]
      }
    ]
  },
  {
    id: 4,
    title: "Multi-Tenant Infrastructure Automation Platform",
    subtitle: "Self-Service AWS ECS Deployment Platform",
    description: "Designed and developed a self-service infrastructure automation and deployment platform for a leading provider of customizable learning management systems, SPIFF management, and rewards programs. The platform enables internal operations teams to provision and deploy isolated client environments on-demand, eliminating manual infrastructure setup and accelerating client onboarding from days to minutes.",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGF1dG9tYXRpb24lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3Njg5MzczNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["AWS ECS", "FastAPI", "Vue.js", "CodePipeline", "CodeDeploy", "Python", "boto3", "Docker", "PostgreSQL"],
    highlights: [
      "Reduced client onboarding time from days to minutes",
      "Enabled self-service infrastructure provisioning with one-click deployment",
      "Achieved 60-70% cost reduction through shared cluster architecture",
      "Zero-downtime deployments with blue-green strategy"
    ],
    overview: "Designed and developed a self-service infrastructure automation and deployment platform for a leading provider of customizable learning management systems (LMS), SPIFF management, and rewards programs for major brands and dealership networks. The platform enables internal operations teams to provision and deploy isolated client environments on-demand through a management portal, eliminating manual infrastructure setup and enabling rapid client onboarding. Built on AWS ECS (EC2 launch type) with a shared cluster architecture, the solution provisions dedicated, tenant-isolated infrastructure for each new client with a single button click. Each client receives a dedicated ECS service, Amazon ECR repository, CI/CD pipeline (CodePipeline + CodeBuild), blue-green deployment automation (CodeDeploy), Application Load Balancer target group, and Route 53 DNS record—all provisioned automatically through the management portal. The platform uses a single-repository, multi-tenant application architecture where tenant-specific configurations are served dynamically via an API from the management application, eliminating the need for per-client code repositories. The application stack is built on FastAPI (Python) for the backend and Vue.js for the frontend, enabling a modern, responsive management experience.",
    problems: [
      "Manual infrastructure provisioning for each new client required DevOps intervention, creating bottlenecks and delaying client onboarding by days or weeks.",
      "Inconsistent deployment practices across clients led to configuration drift, operational complexity, and difficulty troubleshooting issues.",
      "Lack of self-service capabilities meant operations teams depended on engineering resources for routine infrastructure tasks, limiting scalability.",
      "No standardized CI/CD for client environments resulted in manual deployments, increased risk of errors, and inability to roll back failed releases quickly.",
      "Complex multi-tenant management made it difficult to track which infrastructure belonged to which client, complicating auditing, cost allocation, and lifecycle management."
    ],
    goals: [
      "Enable self-service infrastructure provisioning so operations teams can onboard new clients instantly without engineering intervention.",
      "Standardize deployment workflows across all clients using automated CI/CD pipelines with blue-green deployments for zero-downtime releases.",
      "Implement tenant isolation at the infrastructure level while maintaining shared cluster economics to balance cost efficiency with security and performance.",
      "Reduce operational overhead by automating infrastructure lifecycle management (creation, updates, teardown) through a centralized management portal.",
      "Accelerate client onboarding from days to minutes by eliminating manual provisioning steps and providing instant deployment capabilities.",
      "Maintain cost efficiency through shared ECS cluster and ALB resources while providing dedicated services and pipeline isolation per client."
    ],
    role: [
      "Architected and developed the complete infrastructure automation platform including the management portal (FastAPI + Vue.js), AWS infrastructure provisioning logic, and CI/CD pipeline orchestration.",
      "Designed the multi-tenant ECS architecture with shared cluster and ALB infrastructure, tenant-isolated ECS services, and auto-scaling EC2 launch type for cost-effective resource utilization.",
      "Implemented self-service provisioning workflows enabling operations teams to create client infrastructure, trigger deployments, and manage lifecycle operations through a web interface.",
      "Built automated CI/CD pipeline generation using AWS CodePipeline, CodeBuild, and CodeDeploy with blue-green deployment strategy for zero-downtime client releases.",
      "Developed the tenant configuration API allowing the single-repository application to serve client-specific configurations dynamically, eliminating code duplication.",
      "Configured Application Load Balancer routing with per-client target groups and health checks, integrated with Route 53 for automatic DNS management.",
      "Established infrastructure-as-code practices using boto3 (AWS SDK for Python) to programmatically provision ECS services, ECR repositories, CodePipeline resources, target groups, and DNS records.",
      "Implemented monitoring and logging through CloudWatch to track deployment status, service health, and infrastructure events across all client environments."
    ],
    architecture: [
      "Amazon ECS Cluster (EC2 Launch Type) serves as the shared compute foundation for all client workloads.",
      "EC2 Auto Scaling Group dynamically scales cluster capacity based on resource utilization (CPU, memory) across all running ECS services.",
      "Application Load Balancer (ALB) provides centralized ingress for all client environments with per-client target groups and host-based routing rules.",
      "Route 53 Hosted Zone manages DNS records for all client subdomains, automatically provisioned during infrastructure creation.",
      "FastAPI backend orchestrates infrastructure provisioning through AWS SDK (boto3), manages tenant configuration data, and exposes API endpoints for client applications.",
      "Vue.js frontend provides a responsive web interface for operations teams to manage client infrastructure and trigger deployments.",
      "PostgreSQL database stores client metadata, configuration mappings, infrastructure state, and deployment history.",
      "Per-client infrastructure includes dedicated ECS Service, ECR Repository, CodePipeline, ALB Target Group, Route 53 Record, and CloudWatch Log Groups.",
      "Single application repository contains FastAPI + Vue.js code shared by all clients; configuration API serves tenant-specific settings based on client subdomain.",
      "CodePipeline executes: Source (GitHub) → Build (CodeBuild: Docker image build/test) → Deploy (CodeDeploy: blue-green deployment to ECS).",
      "ALB routes client requests via host-based routing to appropriate target groups; ECS tasks fetch client configuration from management portal API."
    ],
    keyDetails: [
      {
        title: "Multi-Tenant Architecture",
        content: "Shared cluster model balances cost efficiency with tenant isolation: all clients run on the same ECS cluster and share ALB infrastructure, reducing per-client overhead by 60-70%. Service-level isolation ensures each client has a dedicated ECS service with separate task definitions, scaling policies, and target groups for workload and resource isolation. Configuration-based tenancy uses a single application codebase serving all clients dynamically based on API-provided configurations, eliminating code duplication and simplifying updates. Network isolation via ALB listener rules and target groups prevents cross-client traffic."
      },
      {
        title: "ECS Cluster & Auto-Scaling",
        content: "EC2 Launch Type provides cost-effective compute for predictable, steady-state workloads with full control over instance types and scaling policies. Cluster Auto Scaling monitors aggregate CPU and memory reservation across all services and scales EC2 instances up or down to maintain target utilization (~70-80%). Service Auto Scaling adjusts the number of ECS tasks per client based on request rate, CPU, or memory metrics, ensuring responsive performance during traffic spikes."
      },
      {
        title: "Infrastructure Provisioning Automation",
        content: "Programmatic AWS API calls (boto3) from the FastAPI backend provision all infrastructure components: ECS services, ECR repositories, CodePipeline, CodeBuild projects, CodeDeploy applications, target groups, listener rules, Route 53 records. Idempotent operations ensure re-running provisioning for an existing client updates resources rather than failing, supporting infrastructure updates and drift correction. Infrastructure state tracking in PostgreSQL database records provisioning status, resource ARNs/IDs, and timestamps for auditing and lifecycle management. Error handling and rollback capabilities log failures and support manual or automated cleanup."
      },
      {
        title: "CI/CD Pipeline Architecture",
        content: "Single-repository strategy allows all clients to deploy from the same GitHub repository, simplifying codebase management and enabling simultaneous feature rollouts to all clients. Per-client pipelines ensure each client has a dedicated CodePipeline instance to isolate build artifacts, deployment history, and permissions. Blue-green deployment with CodeDeploy provisions new ECS tasks (green) alongside existing tasks (blue), performs health checks, and shifts traffic gradually; old tasks are terminated only after successful cutover, enabling instant rollback on failure. Build caching and optimization through CodeBuild using Docker layer caching and dependency caching (pip for Python, npm for Vue.js) to accelerate build times."
      },
      {
        title: "Configuration Management",
        content: "Centralized configuration API in the management portal exposes tenant-specific settings via authenticated endpoints. Runtime configuration fetching allows ECS tasks to call the configuration API on startup and cache settings locally, with support for hot-reloading on configuration updates. Secrets management stores sensitive client credentials (database passwords, API keys) in AWS Secrets Manager or SSM Parameter Store, retrieved by ECS tasks via IAM task roles. Environment variables pass non-sensitive configuration (client ID, API endpoint URLs) to ECS tasks via task definition."
      },
      {
        title: "Cost Optimization",
        content: "Shared infrastructure (ECS cluster, ALB) amortizes fixed costs across all clients, reducing per-client infrastructure overhead by approximately 60-70% compared to dedicated clusters. EC2 auto-scaling ensures cluster capacity matches actual demand, avoiding over-provisioning and reducing idle compute costs. ECR lifecycle policies automatically delete old Docker images after 30 days or keep only the latest 10 versions, minimizing storage costs. Consolidated billing and cost allocation tags on all provisioned resources enable accurate per-client cost tracking and chargeback."
      }
    ],
    results: [
      "Reduced client onboarding time from days to minutes by enabling self-service infrastructure provisioning through the management portal, eliminating DevOps bottlenecks.",
      "Enabled operations team autonomy for infrastructure management and deployments, freeing engineering resources to focus on platform enhancements and new features.",
      "Achieved zero-downtime deployments for all clients through automated blue-green deployment strategy with CodeDeploy, improving reliability and reducing deployment risk.",
      "Standardized infrastructure and deployment practices across all clients, reducing configuration drift, simplifying troubleshooting, and improving operational consistency.",
      "Reduced per-client infrastructure costs by approximately 60-70% through shared cluster and ALB architecture while maintaining service-level isolation and performance guarantees.",
      "Accelerated feature delivery by using a single-repository, multi-tenant application model that allows simultaneous rollout of updates to all clients without per-client code changes.",
      "Improved visibility and control over client infrastructure lifecycle with centralized management portal, real-time deployment tracking, and comprehensive logging."
    ],
    techStack: [
      {
        category: "Cloud & Compute",
        items: ["Amazon ECS (EC2 Launch Type)", "EC2 Auto Scaling Group", "Amazon ECR"]
      },
      {
        category: "Networking & Load Balancing",
        items: ["Application Load Balancer (ALB)", "Amazon Route 53"]
      },
      {
        category: "CI/CD & Deployment",
        items: ["AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "GitHub"]
      },
      {
        category: "Management Platform",
        items: ["FastAPI (Python)", "Vue.js", "PostgreSQL", "boto3 (AWS SDK)"]
      },
      {
        category: "Security & Configuration",
        items: ["AWS Secrets Manager", "SSM Parameter Store", "IAM Task Roles"]
      },
      {
        category: "Monitoring & Logging",
        items: ["Amazon CloudWatch Logs", "Amazon CloudWatch Metrics", "Amazon CloudWatch Alarms", "CloudWatch Events"]
      },
      {
        category: "Containerization",
        items: ["Docker"]
      }
    ]
  },
  {
    id: 5,
    title: "HR AI Enterprise Portal",
    subtitle: "AI-Powered Search with SageMaker & OpenSearch",
    description: "Designed and implemented an AI-powered search experience for a large HR and benefits technology provider. Built on Amazon SageMaker, OpenSearch Service, and MongoDB Atlas to deliver neural search capabilities across HR, benefits, and policy content for a multi-tenant platform.",
    image: "https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwY2xvdWQlMjBkYXRhYmFzZXxlbnwxfHx8fDE3Njg5NDE1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Amazon SageMaker", "Amazon OpenSearch", "MongoDB Atlas", "AWS Lambda", "AWS Glue", "S3", "API Gateway", "Cognito", "Terraform", "GitHub Actions"],
    highlights: [
      "Neural search with SageMaker embedding models and semantic ranking",
      "Hybrid search combining vector k-NN and traditional BM25",
      "Multi-tenant architecture with Cognito-based access control",
      "Infrastructure-as-code with Terraform and GitHub CI/CD"
    ],
    overview: "Designed and implemented an AI-powered search experience for a large HR and benefits technology provider that delivers cloud-based HR, benefits, and financial solutions to many of the world's largest enterprises. The project enhanced an existing multi-tenant HR portal product by integrating a neural search engine built on Amazon SageMaker, Amazon OpenSearch Service, and MongoDB Atlas, giving employees faster, more relevant answers across benefits, HR, and policy content. The architecture combines SageMaker-hosted models for embedding and relevance ranking, OpenSearch for semantic and keyword search, AWS Lambda and Lambda layers for query and ingestion logic, and AWS Glue with Amazon S3 for data preparation and indexing pipelines. Amazon API Gateway and Amazon Cognito provide secure, authenticated access from the HR portal, while Terraform and GitHub-based CI/CD pipelines manage all infrastructure and Lambda/Lambda-layer deployments, ensuring repeatable, versioned environments across dev, test, and production.",
    problems: [
      "The existing HR portal relied on basic keyword search, making it difficult for employees to quickly find benefits information, HR policies, and knowledge articles across large, heterogeneous content sets.",
      "Search results lacked semantic understanding, often missing relevant documents if users didn't use exact wording or internal terminology, leading to higher call center and HR support load.",
      "The underlying data lived across multiple systems (document repositories, content databases, knowledge bases), with no unified, automated pipeline to clean, enrich, and index content for search.",
      "Infrastructure changes for the search components (Lambda functions, SageMaker endpoints, OpenSearch indices) required manual work, slowing delivery and increasing risk of misconfigurations."
    ],
    goals: [
      "Deliver a modern, AI-augmented search experience that understands intent and context, not just keywords, to improve employees' ability to self-serve HR and benefits questions.",
      "Build a scalable, cloud-native search architecture leveraging SageMaker and OpenSearch so new content sources and models can be added with minimal friction.",
      "Implement a repeatable, infrastructure-as-code and CI/CD approach so environments can be provisioned, updated, and rolled back safely and consistently.",
      "Integrate with existing HR portal authentication (Cognito) and tenant model while honoring data isolation and access controls for different clients and user segments."
    ],
    role: [
      "Architected the AI search integration for the HR portal, including SageMaker model endpoints, OpenSearch domain design, and query/ingestion flows using Lambda.",
      "Developed Terraform modules to provision and configure SageMaker endpoints, OpenSearch domains and indices, API Gateway, Cognito integrations, Lambda functions/layers, S3 buckets, Glue jobs, and supporting IAM roles.",
      "Built CI/CD pipelines with GitHub for Lambda functions and Lambda layers, including packaging, testing, and deployment to multiple environments.",
      "Implemented Lambda business logic for query processing (embedding generation via SageMaker, hybrid/semantic search against OpenSearch, result re-ranking) and data ingestion (reading content from S3/Glue outputs and MongoDB Atlas, transforming documents, and indexing into OpenSearch).",
      "Designed integration patterns between the HR portal, API Gateway, and Cognito to ensure authenticated, tenant-aware search requests.",
      "Collaborated with product and data teams to define relevance signals, index mappings, and schema for documents stored in MongoDB Atlas and S3."
    ],
    architecture: [
      "Source content (HR policies, benefits documentation, FAQs, plan details, knowledge articles) is stored in MongoDB Atlas and exported or mirrored into Amazon S3.",
      "AWS Glue jobs clean, normalize, and enrich raw content (e.g., HTML/PDF to text, metadata extraction, tagging), writing structured JSON documents to S3.",
      "An OpenSearch ingestion Lambda (invoked on Glue completion or on a schedule) reads the processed documents, calls SageMaker to generate text embeddings, and indexes both raw text and vector embeddings into Amazon OpenSearch Service for semantic search.",
      "Index mappings include fields for full-text search, facets (topic, plan type, country, client), and embedding vectors for k-NN or neural search.",
      "Users authenticate to the HR portal via Amazon Cognito (federated from the client's identity provider); the portal includes a search UI component.",
      "Search requests are sent from the portal to Amazon API Gateway, which forwards them to a Lambda search function.",
      "The Lambda search function validates the user context and tenant from JWT claims (Cognito) and request metadata, calls SageMaker to generate an embedding for the user's query and optionally perform query rewriting or expansion, executes a hybrid search in OpenSearch combining semantic/vector search (k-NN on embeddings) and traditional full-text search (BM25) with filters (tenant, country, plan year, document type), and re-ranks results using relevance signals.",
      "The Lambda returns a ranked list of results to API Gateway, which responds to the HR portal; the UI presents snippets, facets, and deep links into the HR portal.",
      "Cognito user pools and identity pools issue tokens containing tenant and role claims; Lambda enforces access so queries only return documents belonging to the user's employer or HR program.",
      "IAM roles and policies restrict Lambda, Glue, and SageMaker access to only the necessary S3 buckets, OpenSearch indices, and MongoDB Atlas integration endpoints.",
      "VPC integration is used where required so SageMaker, OpenSearch, and MongoDB Atlas communication stays within private networks."
    ],
    keyDetails: [
      {
        title: "Terraform & Infrastructure as Code",
        content: "Created Terraform modules for SageMaker models, endpoints, endpoint configurations; OpenSearch domain, access policies, index templates; Lambda functions and Lambda layers (Python) for query and ingestion; API Gateway REST APIs and stages; Cognito user pool/client configuration and authorizers for API Gateway; S3 buckets and Glue jobs for content processing. Used environment-specific variables and workspaces to deploy consistent stacks for dev, test, and production, with remote state and locking to support team workflows."
      },
      {
        title: "CI/CD Pipelines (GitHub-Based)",
        content: "GitHub Actions workflows (or equivalent) triggered on commits/PRs to run unit tests and linting on Lambda code and shared libraries (layers), package Lambda functions and layers into versioned artifacts, and deploy changes via Terraform or direct Lambda update APIs to appropriate AWS accounts/environments. Tag releases and maintain changelogs for traceability. Pipelines support blue/green or canary deployment for Lambda functions where needed, minimizing downtime and risk during updates."
      },
      {
        title: "SageMaker and OpenSearch Integration",
        content: "Deployed SageMaker endpoints hosting embedding or ranking models suitable for HR/knowledge search use cases. Configured OpenSearch indices for hybrid/semantic search, using vector fields, analyzers for multiple languages (where applicable), and relevance tuning. Lambda functions batch requests to SageMaker when embedding many documents to optimize throughput and cost."
      },
      {
        title: "MongoDB Atlas Integration",
        content: "HR content and configuration metadata are stored in MongoDB Atlas, with scheduled exports or change-stream-based sync into S3 for indexing. Tenant and document metadata used to drive search filters and access control. In some flows, ingestion Lambda reads directly from Atlas for near-real-time indexing of new or updated content."
      }
    ],
    results: [
      "Upgraded the HR portal with AI-powered search, enabling employees to find benefits, HR, and policy information faster and with more relevant results, reducing reliance on call centers and manual HR support.",
      "Delivered a scalable, cloud-native search architecture that can integrate additional models and content sources with minimal changes, using SageMaker and OpenSearch best practices.",
      "Standardized infrastructure and deployment for all search components through Terraform and GitHub-based CI/CD, improving reliability, auditability, and time-to-delivery for new features.",
      "Improved security and tenant isolation by integrating with Cognito and enforcing tenant-aware access controls throughout the search stack.",
      "Created a reusable AI search integration pattern that can be applied to other products and portals within the organization."
    ],
    techStack: [
      {
        category: "AI & Machine Learning",
        items: ["Amazon SageMaker", "Embedding Models", "Ranking Models"]
      },
      {
        category: "Search & Data Platform",
        items: ["Amazon OpenSearch Service", "MongoDB Atlas"]
      },
      {
        category: "Compute & Orchestration",
        items: ["AWS Lambda", "AWS Lambda Layers", "AWS Glue"]
      },
      {
        category: "Storage & Data Pipeline",
        items: ["Amazon S3"]
      },
      {
        category: "API & Authentication",
        items: ["Amazon API Gateway", "Amazon Cognito"]
      },
      {
        category: "Infrastructure & CI/CD",
        items: ["Terraform", "GitHub Actions", "IAM"]
      },
      {
        category: "Search Capabilities",
        items: ["Vector k-NN Search", "BM25 Full-Text Search", "Hybrid/Semantic Search", "Re-ranking"]
      }
    ]
  }
];