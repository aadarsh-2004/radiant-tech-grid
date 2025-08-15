import { Code, Database, Cloud, Globe, Smartphone, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    "Programming Languages": {
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "Python", "C++", "C"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    "Frontend Development": {
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    "Backend Development": {
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "Django", "REST APIs"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    "Databases": {
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
      color: "from-orange-500/20 to-red-500/20"
    },
    "Cloud & DevOps": {
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux"],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    "Developer Tools": {
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git/GitHub", "VS Code", "Postman", "Figma"],
      color: "from-yellow-500/20 to-orange-500/20"
    }
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data]) => (
            <div
              key={category}
              className={`group bg-gradient-to-br ${data.color} bg-card border border-border rounded-2xl p-6 hover-grow`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {data.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-medium">{skill}</span>
                    <div className="flex gap-1">
                      {/* Skill level indicators */}
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Proficiency indicator */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-semibold text-primary">Advanced</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Problem Solving", "Team Leadership", "UI/UX Design", "Agile Methodology",
              "Code Review", "Technical Writing", "Mentoring", "Open Source",
              "Continuous Learning", "Innovation", "Project Management"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;