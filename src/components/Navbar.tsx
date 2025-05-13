
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-bold text-white">
          Your<span className="text-primary">Name</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-white transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/80">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/80 w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
