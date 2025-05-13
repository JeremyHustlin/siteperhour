
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-border">
          <div>
            <h3 className="text-xl font-bold mb-4">Your<span className="text-primary">Name</span></h3>
            <p className="text-muted-foreground mb-6">
              Building beautiful, functional websites and web applications that help businesses achieve their goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  Performance Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <address className="text-muted-foreground not-italic space-y-2">
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>Email: youremail@example.com</p>
              <p>Phone: +1 234 567 8901</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 text-center text-muted-foreground">
          <p>© 2025 YourName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
