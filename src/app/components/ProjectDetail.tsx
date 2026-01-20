import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    overview: string;
    problems: string[];
    goals: string[];
    role: string[];
    architecture: string[];
    keyDetails: { title: string; content: string }[];
    results: string[];
    techStack: { category: string; items: string[] }[];
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Button 
          onClick={onBack}
          variant="outline" 
          className="mb-8 hover:border-cyan-600 hover:text-cyan-600"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        {/* Hero Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">{project.title}</h1>
          <p className="text-2xl text-cyan-700 font-medium">{project.subtitle}</p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-cyan-500">{project.overview}</p>
        </section>

        {/* Problems and Goals */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-t-4 border-t-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Problems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0 font-bold">✗</span>
                    <span className="text-gray-700 leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0 font-bold">✓</span>
                    <span className="text-gray-700 leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Role & Responsibilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Role & Responsibilities</h2>
          <Card className="border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {project.role.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1 flex-shrink-0 font-bold">▸</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Architecture & Flow */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Architecture & Deployment Flow</h2>
          <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {project.architecture.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1 flex-shrink-0 font-bold">→</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Key Implementation Details */}
        {project.keyDetails.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Implementation Details</h2>
            <div className="space-y-6">
              {project.keyDetails.map((detail, index) => (
                <Card key={index} className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">{detail.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-t-4 border-t-green-500 shadow-lg">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1 flex-shrink-0 font-bold text-xl">✓</span>
                    <span className="text-gray-800 font-medium leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.techStack.map((category, index) => (
              <Card key={index} className="border-t-4 border-t-cyan-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-cyan-50 text-cyan-800 hover:bg-cyan-100">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Back Button at Bottom */}
        <div className="text-center pt-8">
          <Button onClick={onBack} size="lg" className="shadow-lg hover:shadow-xl transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}