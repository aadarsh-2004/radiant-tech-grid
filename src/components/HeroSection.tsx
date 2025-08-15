import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative top-10 min-h-screen flex items-center justify-center overflow-hidden grid-bg-animated">
      {/* Grid overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-lg animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hey, It's{" "}
            <span className="text-gradient">Aadarsh Soni</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I've been working as a full stack web developer for 1+ years, 
            creating innovative solutions and bringing ideas to life through code.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact">
            <Button  size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            </a>
             <a href="https://drive.google.com/file/d/1HoVWgZdLOqRXL0g_WFzu-ML8sype8DJs/view?usp=drive_link">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
               </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/aadarsh-2004" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/aadarsh-soni01/" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:2020aadarshsoni@gmail.com" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="glass rounded-xl p-6 hover-grow">
            <div className="text-2xl font-bold text-primary mb-2">1+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="glass rounded-xl p-6 hover-grow">
            <div className="text-2xl font-bold text-primary mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </div>
          <div className="glass rounded-xl p-6 hover-grow">
            <div className="text-2xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="glass rounded-xl p-6 hover-grow">
            <div className="text-2xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
