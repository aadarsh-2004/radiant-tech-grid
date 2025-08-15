import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Remote",
      period: "Dec 2024 – Present",
      location: "Remote",
      description: "Delivered customized web solutions for small to mid-sized businesses, focusing on performance, usability, and responsive design.",
      achievements: [
        "Developed 4+ complete web applications",
        "Increased client conversion rates by 40%",
        "Implemented modern tech stacks for scalable solutions",
        "Maintained 99% client satisfaction rate"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "AWS", "Cloudinary"]
    },
    {
      title: "Founder & Full-Stack Developer — QuoteKaro SaaS",
      company: "Self-initiated Startup Project",
      period: "May 2024 – Present",
      location: "Udaipur, Rajasthan (Remote)",
      description: "Building a SaaS platform for photography and event studios to create and share branded quotations with clients. Responsible for end-to-end development, architecture, and feature delivery.",
      achievements: [
        "Designed and developed the entire platform architecture using MERN stack",
        "Implemented theme-based PDF template engine with auto-filled estimates",
        "Integrated Firebase Auth, MongoDB backend, and credit-based estimate system",
        "Built admin dashboard for analytics, firm management, and usage tracking",
        "Planned multi-country expansion strategy starting with India"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS",  "Firebase", "AWS"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and delivering exceptional results
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 hover-grow"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Company Info */}
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="h-5 w-5" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
                
                {/* Middle: Role & Description */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">{exp.title}</h3>
                  <p className="text-muted-foreground mb-6">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
