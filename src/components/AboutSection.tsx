import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Frontend Development",
    "Responsive Design",
    "UI/UX Design",
    "Backend Development",
    "SEO Optimization",
    "Performance Optimization"
  ];

  return (
    <section id="about" className="section-spacing bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">Who I Am & What I Do</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Passionate Web Developer</h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience, I specialize in creating modern, responsive websites 
              and web applications that deliver exceptional user experiences. I combine technical 
              expertise with creative design to build solutions that not only look great but also 
              perform well.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach is client-focused, ensuring that I understand your unique requirements 
              and business goals before starting any project. This allows me to deliver tailored 
              solutions that truly serve your needs.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-square bg-muted rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay"></div>
            <div className="w-full h-full relative">
                <img
                    src="/images/software-development-programming-coding-vector-29570719.jpg"
                    alt="Coding illustration"
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
