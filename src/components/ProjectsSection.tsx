import { ExternalLink, Github, ChevronRight, Zap, Database, Cloud, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
  {
    title: "QuoteKaro – Studio SaaS Platform",
    category: "SaaS Development",
    description: "SaaS platform for photography studios to create, manage, and share branded quotations with clients.",
    highlights: [
      "Personalized dashboard with client management",
      "Theme-based PDF template generator",
      "Admin analytics for usage tracking"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],
    status: "In Development",
    size: "large",
    featured:true,
    icon: <Zap className="h-6 w-6" />,
    color: "from-blue-500/20 to-purple-500/20",
    liveDemo: "https://quotekaro.in",
  },
  {
  title: "MushroomJuniors",
  category: "E-Commerce Website",
  description: "Half e-commerce clothing website built for the luxury kids' clothing brand Mushroom Juniors, aimed at increasing market presence and brand visibility.",
  highlights: [
    "Clean, modern, and responsive UI",
    "Fast performance and optimized loading",
    "Brand-focused design for market impact"
  ],
  tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  status: "Completed",
  size: "medium",
  featured: true,
  icon: <Cloud className="h-6 w-6" />,
  color: "from-pink-500/20 to-yellow-500/20",
  liveDemo: "https://www.mushroomjuniors.com",
},
  {
  title: "PetJunction",
  category: "Pet Services Platform",
  description: "Website for a pet services startup offering boarding, walking, sitting, and other pet-related services, with booking facilitated via WhatsApp for quick and direct communication.",
  highlights: [
    "Showcases complete range of pet services",
    "WhatsApp-based booking integration",
    "Scalable architecture for future e-commerce features"
  ],
  tech: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  status: "Completed",
  size: "medium",
  icon: <Database className="h-6 w-6" />,
  color: "from-orange-500/20 to-red-500/20",
  liveDemo: "https://www.petjunction.in/",
},
{
  title: "Sabgumo.com",
  category: "Travel Website",
  featured: true,
  description: "Modern travel website built to showcase upcoming tours and packages, enabling easy bookings via WhatsApp conversations for a seamless user experience.",
  highlights: [
    "Tour and package showcase",
    "Direct WhatsApp booking integration",
    "Optimized for fast, responsive browsing"
  ],
  tech: ["React.js", "Tailwind CSS", "Vercel"],
  status: "Completed",
  size: "small",
  icon: <Code className="h-6 w-6" />,
  color: "from-cyan-500/20 to-blue-500/20",
  liveDemo: "https://www.sabgumo.com/",
},
{
  title: "UAF – Udaipur Animal Feed",
  category: "NGO Website",
  description: "Informative website for a Udaipur-based NGO supporting animal welfare, designed to share their mission, activities, and encourage public engagement.",
  highlights: [
    "Brand-aligned UI for NGO awareness",
    "Contact and enquiry form integration",
    "Mobile-friendly, accessible design"
  ],
  tech: ["React.js", "Tailwind CSS"],
  status: "Completed",
  size: "small",
  icon: <Cloud className="h-6 w-6" />,
  color: "from-purple-500/20 to-pink-500/20",
  liveDemo: "https://www.udaipuranimalfeed.org/"
},
  {
    title: "Crypto Tracker",
    category: "Web App",
    description: "Real-time cryptocurrency tracking app with live charts and market stats.",
    highlights: [
      "Binance API integration",
      "TradingView charts",
      "Live market data"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    status: "Completed",
    size: "small",
    icon: <Database className="h-6 w-6" />,
    color: "from-indigo-500/20 to-blue-500/20",
  liveDemo: "https://ascryptotracker.netlify.app/",
  },
  {
    title: "AI Portfolio Chatbot",
    category: "AI Integration",
    description: "AI-powered chatbot with voice interaction for portfolio websites.",
    highlights: [
      "Amazon Polly voice integration",
      "Custom knowledge base",
      "Iframe embeddable design"
    ],
    tech: ["React.js", "Node.js", "Amazon Polly", "AI APIs"],
    status: "Completed",
    size: "medium",
    icon: <Zap className="h-6 w-6" />,
    color: "from-pink-500/20 to-rose-500/20",
  liveDemo: "https://asportfoliochatbot.netlify.app/",
  },
  {
    title: "Mentor.AI (Frontend)",
    category: "Frontend Development",
    description: "Frontend UI for an AI mentorship platform built with React and Tailwind.",
    highlights: [
      "Clean and modular component structure",
      "Optimized for scalability",
      "Fully responsive design"
    ],
    tech: ["React.js", "Tailwind CSS"],
    status: "Completed",
    size: "small",
    icon: <Code className="h-6 w-6" />,
    color: "from-yellow-500/20 to-orange-500/20",
  liveDemo: "https://mentor.ai/",
  }
];


  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A showcase of my recent work and technical capabilities
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <h3 className="text-2xl font-semibold">Featured Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${project.color} bg-card border  rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full uppercase tracking-wide font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/60 text-foreground px-2.5 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-secondary/40 text-muted-foreground px-2.5 py-1 rounded-md text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" onClick={() => window.open(project.liveDemo, "_blank")} variant="outline" className="flex-1 h-9 text-xs font-medium hover:bg-primary/5">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </Button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${project.color}  rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="p-5 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {project.icon}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full uppercase tracking-wide font-medium mb-3 self-start">
                    {project.category}
                  </span>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack - Compact */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/60 text-foreground px-2 py-0.5 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-secondary/40 text-muted-foreground px-2 py-0.5 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions - Compact */}
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => window.open(project.liveDemo, "_blank")} variant="outline" className="flex-1 h-8 text-xs hover:bg-primary/5">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;