
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center bg-[url('/hero-bg.svg')] bg-cover bg-center relative pt-16"
    >
      <div className="container-custom text-center max-w-4xl mx-auto">
        <p className="text-primary font-medium mb-2 animate-fade-in">Web Developer & Designer</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crafting Digital Experiences That Matter
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          I build beautiful, functional websites and web applications that help businesses and individuals achieve their goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            <a href="https://github.com/JeremyHustlin?tab=repositories">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-primary transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
