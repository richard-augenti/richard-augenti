import { useState, useEffect } from "react";
import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { ProjectDetail } from "@/app/components/ProjectDetail";
import { projectsData } from "@/app/data/projectsData";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#project-")) {
        const projectId = parseInt(hash.replace("#project-", ""));
        if (!isNaN(projectId) && projectsData.find(p => p.id === projectId)) {
          setSelectedProjectId(projectId);
          window.scrollTo(0, 0);
        }
      } else if (selectedProjectId !== null) {
        setSelectedProjectId(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [selectedProjectId]);

  const handleProjectClick = (projectId: number) => {
    window.location.hash = `project-${projectId}`;
  };

  const handleBackToPortfolio = () => {
    window.location.hash = "";
    setSelectedProjectId(null);
    window.scrollTo(0, 0);
  };

  const selectedProject = selectedProjectId 
    ? projectsData.find(p => p.id === selectedProjectId)
    : null;

  if (selectedProject) {
    return (
      <>
        <Navigation />
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToPortfolio}
        />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects onProjectClick={handleProjectClick} />
      <Contact />
      <Footer />
    </div>
  );
}