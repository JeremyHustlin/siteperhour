import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";
import SplineSection from "@/components/SplineSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SplineSection />
      <SectionLayout>
        <AboutSection />
      </SectionLayout>
      <SectionLayout>
        <ServicesSection />
      </SectionLayout>
      <SectionLayout>
        <ProjectsSection />
      </SectionLayout>
      <SectionLayout>
        <ContactSection />
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default Index;
