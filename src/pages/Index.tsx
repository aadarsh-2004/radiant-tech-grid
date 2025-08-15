import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialSection from "@/components/TestimonialSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CertificationsSection from "@/components/CertificationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <TestimonialSection />
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="trainings">
        <CertificationsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
