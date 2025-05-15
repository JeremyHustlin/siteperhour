import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Web Development",
      image: "/project-1.jpg",
      description: "A fully responsive e-commerce platform built with React and Node.js.",
      url: "https://haskelshop.com/"
    },
    {
      title: "Corporate Rebrand",
      category: "UI/UX Design",
      image: "/project-2.jpg",
      description: "Complete visual identity redesign for a services company.",
      url: "https://perhour.great-site.net/"
    },
    {
      title: "Mobile App",
      category: "App Development",
      image: "/project-3.jpg",
      description: "A cross-platform mobile application for tracking fitness goals.",
      url: "https://your-app-site.com",
      buttonText: "In Progress"
    },
    {
      title: "Marketing Website",
      category: "Web Design",
      image: "/project-4.jpg",
      description: "SEO-optimized landing pages for a SaaS product launch.",
      url: "http://www.vanellaromedomus.com/en/home-page-eng/"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each represents my commitment to quality and attention to detail.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card overflow-hidden border-none group">
              <div className="h-60 overflow-hidden bg-muted">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="w-full h-full bg-black/50 flex flex-col justify-end p-6">
                    <p className="text-primary text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <CardFooter className="p-4 bg-card">
                <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-auto"
                >
                    <Button variant="ghost" className="flex items-center gap-2 hover:text-primary">
                        {project.buttonText || "View Details"} <ArrowRight size={16} />
                    </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
