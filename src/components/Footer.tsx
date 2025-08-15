import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 bg-card/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-1/4 w-64 h-64 border-2 border-primary/10 rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 border-2 border-primary/5 rounded-lg rotate-45"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Aadarsh <span className="text-gradient">Soni</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              that solve real-world problems and deliver exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/aadarsh-2004"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aadarsh-soni01/"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:2020aadarshsoni@gmail.com"
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development", 
                "Full Stack Solutions", 
                "API Development", 
                "UI/UX Design", 
                "Consulting"
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © 2024 Aadarsh Soni. Made with <Heart className="h-4 w-4 text-red-500" /> in India
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Available for freelance projects
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary text-primary hover:bg-primary/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;