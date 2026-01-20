import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { projectsData } from "@/app/data/projectsData";

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const getCloudColor = (technologies: string[]) => {
    if (technologies.some(t => t.includes('AWS'))) return 'border-l-4 border-l-orange-500';
    if (technologies.some(t => t.includes('Azure'))) return 'border-l-4 border-l-blue-500';
    if (technologies.some(t => t.includes('GCP') || t.includes('Google'))) return 'border-l-4 border-l-green-500';
    return 'border-l-4 border-l-cyan-500';
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-scale cloud infrastructure and DevOps implementations
          </p>
        </div>
        
        <div className="space-y-8">
          {projectsData.map((project) => (
            <Card 
              key={project.id} 
              className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${getCloudColor(project.technologies)}`}
              onClick={() => onProjectClick(project.id)}
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative overflow-hidden group">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[300px] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="md:col-span-3">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl mb-2 text-gray-900">{project.title}</CardTitle>
                        <CardDescription className="text-base text-cyan-700 font-medium">{project.subtitle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-cyan-600 mt-1 font-bold">✓</span>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onProjectClick(project.id);
                        }}
                        className="w-full md:w-auto shadow-md hover:shadow-lg transition-all"
                      >
                        View Full Project Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}