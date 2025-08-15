import { User, MapPin, GraduationCap, Briefcase, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              
              {/* Main profile circle */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center animate-pulse-glow">
                <User size={120} className="text-primary-foreground" />
              </div>
            </div>
          </div>
          
          {/* Right: About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full stack developer currently pursuing my B.Tech in Computer Science 
              Engineering. With over 1+ years of hands-on experience, I specialize in creating modern, 
              scalable web applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in technology is driven by curiosity and innovation. I love turning complex 
              ideas into simple, beautiful, and functional digital experiences that users love.
            </p>
            
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 hover-grow">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-muted-foreground">Udaipur, Rajasthan, India</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-4 hover-grow">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Education</span>
                </div>
                <p className="text-muted-foreground">B.Tech Computer Science</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-4 hover-grow">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Experience</span>
                </div>
                <p className="text-muted-foreground">1+ Years Development</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-4 hover-grow">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Achievements</span>
                </div>
                <p className="text-muted-foreground">SIH 2024 Semi-Finalist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;