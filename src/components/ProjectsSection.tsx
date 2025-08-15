import { ExternalLink, Github, ChevronRight, Zap, Database, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "QuoteKaro – Studio SaaS Platform",
      category: "SaaS Development",
      description: "A professional SaaS platform enabling photography studios to generate and share branded quotations for clients.",
      highlights: [
        "Personalized studio dashboard with client management",
        "Theme-based PDF template engine",
        "Firebase Auth, MongoDB backend",
        "Admin dashboard for usage tracking"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Amazon Polly", "Tailwind CSS"],
      status: "In Development",
      size: "large",
      icon: <Zap className="h-6 w-6" />,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "AI Portfolio Chatbot",
      category: "AI Integration", 
      description: "AI-powered chatbot with voice interaction and audio responses using Amazon Polly.",
      highlights: [
        "Amazon Polly voice integration",
        "Customized knowledge base",
        "Iframe embeddable design"
      ],
      tech: ["React.js", "Node.js", "Amazon Polly", "AI APIs"],
      status: "Completed",
      size: "medium",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Crypto Tracker",
      category: "Web Development",
      description: "Real-time cryptocurrency tracking platform with live updates and market charts.",
      highlights: [
        "Binance API integration",
        "TradingView charts",
        "Real-time data updates"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      status: "Completed", 
      size: "medium",
      icon: <Database className="h-6 w-6" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Complete e-commerce solution with payment integration and admin dashboard.",
      highlights: [
        "Stripe payment integration",
        "Inventory management",
        "Order tracking system"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      size: "small",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Task Management App",
      category: "Productivity",
      description: "Modern task management application with team collaboration features.",
      highlights: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Progress tracking"
      ],
      tech: ["React.js", "Firebase", "Material-UI"],
      status: "Completed",
      size: "small",
      icon: <Zap className="h-6 w-6" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Weather Dashboard",
      category: "API Integration",
      description: "Beautiful weather dashboard with detailed forecasts and location-based data.",
      highlights: [
        "OpenWeather API",
        "Geolocation features",
        "Interactive maps"
      ],
      tech: ["React.js", "OpenWeather API", "Chart.js"],
      status: "Completed",
      size: "small",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  const getGridClasses = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2';
      default:
        return 'md:col-span-1';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A showcase of my recent work and technical capabilities
            </p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 mt-4 md:mt-0">
            View All Projects <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid md:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${project.color} bg-card border border-border rounded-2xl overflow-hidden hover-grow ${getGridClasses(project.size, index)}`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights - Only show on larger cards */}
                {project.size !== 'small' && (
                  <div className="space-y-2 mb-4">
                    {project.highlights.slice(0, project.size === 'large' ? 4 : 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, project.size === 'large' ? 6 : project.size === 'medium' ? 4 : 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > (project.size === 'large' ? 6 : project.size === 'medium' ? 4 : 3) && (
                    <span className="bg-secondary/50 text-muted-foreground px-2 py-1 rounded text-xs">
                      +{project.tech.length - (project.size === 'large' ? 6 : project.size === 'medium' ? 4 : 3)} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;