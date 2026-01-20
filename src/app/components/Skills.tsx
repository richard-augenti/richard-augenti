import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      "AWS (EC2, EKS, ECS, Lambda, RDS, S3)",
      "Azure (AKS, Azure DevOps, Functions)",
      "GCP (GKE, Cloud Functions, BigQuery)"
    ]
  },
  {
    title: "Container Orchestration",
    skills: [
      "Kubernetes (AKS, EKS, GKE)",
      "Docker",
      "Helm",
      "ArgoCD",
      "Istio",
      "Velero"
    ]
  },
  {
    title: "Infrastructure as Code",
    skills: [
      "Terraform",
      "CloudFormation",
      "ARM Templates",
      "Bicep",
      "Ansible"
    ]
  },
  {
    title: "CI/CD & Automation",
    skills: [
      "Jenkins",
      "GitLab CI/CD",
      "GitHub Actions",
      "AWS CodePipeline",
      "Azure DevOps",
      "CircleCI"
    ]
  },
  {
    title: "AI/ML & MLOps",
    skills: [
      "AWS SageMaker",
      "Azure ML Studio",
      "Google Vertex AI",
      "MLflow",
      "Kubeflow",
      "OpenSearch/Elasticsearch"
    ]
  },
  {
    title: "MLSecOps & AI Security",
    skills: [
      "Model Governance",
      "Data Privacy Controls",
      "AWS Bedrock Security",
      "Azure AI Security",
      "Model Versioning",
      "Compliance Automation"
    ]
  },
  {
    title: "Monitoring & Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "Datadog",
      "ELK Stack",
      "CloudWatch",
      "New Relic"
    ]
  },
  {
    title: "Security & Compliance",
    skills: [
      "Microsoft Defender for Cloud",
      "Wiz.io",
      "HashiCorp Vault",
      "Kyverno",
      "SOC 2",
      "HIPAA",
      "PCI-DSS"
    ]
  },
  {
    title: "Programming & Scripting",
    skills: [
      "Python",
      "Bash",
      "PowerShell",
      "YAML",
      "JSON"
    ]
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle",
      "MariaDB",
      "Aurora (MySQL/PostgreSQL)",
      "DynamoDB",
      "MongoDB",
      "MongoDB Atlas",
      "Cosmos DB",
      "Cassandra",
      "Redis",
      "Memcached",
      "OpenSearch",
      "Elasticsearch",
      "BigQuery",
      "Redshift",
      "Snowflake"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-cyan-500">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-cyan-50 text-cyan-800 hover:bg-cyan-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}