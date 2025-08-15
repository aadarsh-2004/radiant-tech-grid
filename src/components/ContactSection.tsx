import { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData, selectedInterest);
  };

  const interests = [
    "Web Development",
    "Full Stack Development", 
    "UI/UX Design",
    "API Integration",
    "Consulting"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-lg"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Got a project?
              <br />
              <span className="text-gradient">Let's Talk!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with 
              amazing people. Let's bring your ideas to life together!
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover-grow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:2020aadarshsoni@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    2020aadarshsoni@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover-grow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+917877571101" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7877571101
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover-grow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <span className="text-muted-foreground">Udaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/aadarsh-2004"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aadarsh-soni01/"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:2020aadarshsoni@gmail.com"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;