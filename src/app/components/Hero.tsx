import { Button } from "@/app/components/ui/button";
import { Github, Linkedin, Mail, Award, Cloud, TrendingUp } from "lucide-react";
import profileImage from "@/assets/8077e0e7a99ab6550667790eafa497f9f7187c94.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
              Senior SRE & DevOps Engineer
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Richard Augenti
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Architecting enterprise cloud infrastructure across <span className="text-cyan-600 font-semibold">AWS, Azure, and GCP</span>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <Award className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <Cloud className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Accounts</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start items-center flex-wrap mb-8">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:border-cyan-600 hover:text-cyan-600 transition-all">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="mailto:richard.augenti@rivia.io" 
                className="p-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-full transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-full transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/richardaugenti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right column - Profile image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <img 
                src={profileImage} 
                alt="Richard Augenti" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}