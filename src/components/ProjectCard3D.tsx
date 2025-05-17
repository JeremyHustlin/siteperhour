import { useState, useRef, ReactNode } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCard3DProps {
  title: string;
  category: string;
  image: string;
  description: string;
  url: string;
  buttonText?: string;
}

const ProjectCard3D = ({ title, category, image, description, url, buttonText }: ProjectCard3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card 
        className="bg-card overflow-hidden border-none group transform-gpu preserve-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="h-60 overflow-hidden bg-muted relative">
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="w-full h-full bg-black/50 flex flex-col justify-end p-6 transform-gpu preserve-3d" style={{ transform: 'translateZ(20px)' }}>
              <p className="text-primary text-sm font-medium mb-1">{category}</p>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/70 text-sm">{description}</p>
            </div>
          </div>
        </div>
        <CardFooter className="p-4 bg-card transform-gpu preserve-3d" style={{ transform: 'translateZ(30px)' }}>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-auto"
          >
            <Button variant="ghost" className="flex items-center gap-2 hover:text-primary">
              {buttonText || "View Details"} <ArrowRight size={16} />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard3D; 