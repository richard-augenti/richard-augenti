import { Card, CardContent } from "@/app/components/ui/card";
import { Cloud, Shield, Zap, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Multi-Cloud Expertise",
    description: "15+ years architecting and managing infrastructure across AWS, Azure, and GCP with deep expertise in cloud-native services and migrations."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implemented enterprise-grade security frameworks including SOC 2, HIPAA, and PCI-DSS compliance across multi-cloud environments."
  },
  {
    icon: Zap,
    title: "DevOps Excellence",
    description: "Built automated CI/CD pipelines, Infrastructure as Code (30+ Terraform modules), and GitOps workflows enabling daily deployments with zero downtime."
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Reduced cloud infrastructure costs by $500K+ annually through strategic Reserved Instance planning, rightsizing, and automation while maintaining 99.95% uptime."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Senior Site Reliability Engineer and Cloud DevOps Engineer with a proven track record 
            leading engineering teams and implementing enterprise-scale cloud infrastructure solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card key={highlight.title} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-cyan-500">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{highlight.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-t-4 border-t-cyan-500 shadow-lg">
          <CardContent className="pt-8">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Professional Experience Highlights</h3>
            <div className="space-y-6 text-gray-700">
              <div className="border-l-2 border-cyan-500 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">Infrastructure at Scale</h4>
                <p className="leading-relaxed">
                  Architected production Azure AKS clusters with 25+ nodes supporting 500K+ users, 
                  achieving 99.95% uptime. Managed multi-cloud infrastructure across 200+ cloud accounts 
                  with automated compliance monitoring and centralized security posture management.
                </p>
              </div>
              
              <div className="border-l-2 border-cyan-500 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">Team Leadership</h4>
                <p className="leading-relaxed">
                  Led teams of up to 10 cloud engineers managing $2M+ annual infrastructure budgets. 
                  Established technical roadmaps, conducted architecture reviews, and mentored junior 
                  engineers while delivering 40+ infrastructure projects.
                </p>
              </div>
              
              <div className="border-l-2 border-cyan-500 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">Automation & GitOps</h4>
                <p className="leading-relaxed">
                  Engineered libraries of 30+ reusable Terraform modules adopted by multiple engineering 
                  teams, reducing infrastructure deployment time by 75%. Implemented enterprise-wide 
                  GitOps workflows enabling 95% fewer manual approval cycles while maintaining security compliance.
                </p>
              </div>
              
              <div className="border-l-2 border-cyan-500 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">Large-Scale Migrations</h4>
                <p className="leading-relaxed">
                  Executed enterprise database migrations to AWS (15TB+) including Netezza to Redshift 
                  and DB2 to Aurora PostgreSQL with zero data loss. Led platform modernization initiatives 
                  migrating legacy applications to containerized microservices architectures.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}