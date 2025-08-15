import React from "react";
import { Code, Database, Cloud, Globe, Wrench } from "lucide-react";

// Placeholder components for skill logos.
// The key is that their parent div now has `overflow-hidden`.
const NodejsLogo = () => <img src="https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon.png" alt="Node.js" className="w-full h-full object-cover" />;
const ExpressLogo = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpCVrym3sQKRS3_hAnLQIocLuMJorvv0Jiw&s" alt="Express.js" className="w-full h-full object-contain" />;
const ReactLogo = () => <img src="https://dfdmyvckxgqn5.cloudfront.net/_app/immutable/assets/building-elegant-rest-apis.d8f4cbc6.jpg" alt="React.js" className="w-full h-full object-contain" />;
const NextjsLogo = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCghLiCNsu6OBa6WrEw9zonircCsurDCYLQ&s" alt="Next.js" className="w-full h-full object-contain" />;
const AwsLogo = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqnh8-0KkSX0YIYB36GbbEGsCcWKvAEZp1g&s" alt="AWS" className="w-full h-full object-contain" />;
const DockerLogo = () => <img src="https://icon-library.com/images/docker-icon/docker-icon-15.jpg" alt="Docker" className="w-full h-full object-contain" />;
const GitLogo = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jy1nCmfook6BbyrZIEN0azpKlTag2eO4sA&s" alt="Git" className="w-full h-full object-contain" />;
const FigmaLogo = () => <img src="https://static.vecteezy.com/system/resources/previews/065/386/869/non_2x/figma-circle-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png" alt="Figma" className="w-full h-full object-contain" />;
const PostmanLogo = () => <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" className="w-full h-full object-contain" />;
const VscodeLogo = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRWCTvfI3-Eqf_vBB6NyfSyB54B1SQB6kTg&s" alt="VS Code" className="w-full h-full object-contain" />;
const MySQLLogo = () => <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MySQL" className="w-full h-full object-contain" />;
const MongoDbLogo = () => <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/26145621/Group-56812-1.png" alt="MongoDB" className="w-full h-full object-contain" />;
const FirebaseLogo = () => <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" alt="Firebase" className="w-full h-full object-contain" />;

const skillsData = {
  "Programming Languages": {
    categoryIcon: <Code className="w-full h-full" />,
    skills: [
      { name: "JavaScript", icon: <img src="https://ih1.redbubble.net/image.815350031.4911/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg" alt="JavaScript" className="w-full h-full object-contain" /> },
      { name: "Python", icon: <img src="https://www.shutterstock.com/image-vector/python-programming-language-icon-vector-260nw-2486626399.jpg" alt="Python" className="w-full h-full object-contain" /> },
      { name: "Java", icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweACcgxqS3YuYVDOT4DlJRQN1c0gXSJOyuA&s" alt="Java" className="w-full h-full object-contain" /> },
      { name: "C++", icon: <img src="https://i.pinimg.com/736x/c2/66/4d/c2664dcf18d2fd777aa954df6cd113a2.jpg" alt="C++" className="w-full h-full object-contain" /> },
      { name: "C", icon: <img src="https://img.icons8.com/?size=512&id=40670&format=png" alt="C" className="w-full h-full object-contain" /> },
    ],
  },
  "Frontend Development": {
    categoryIcon: <Globe className="w-full h-full" />,
    skills: [
      { name: "React.js",  icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_4tpmPKxJDqUB7SVS_kon_Jnr6xo14mHTw&s" alt="JavaScript" className="w-full h-full object-contain" /> },
      { name: "Next.js",  icon: <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="JavaScript" className="w-full h-full object-contain" /> },
      { name: "Tailwind CSS", icon: <img src="https://camo.githubusercontent.com/84917a6eccae7e48524ef90a2ae5645c5e5052e40cbb7069be4817f1dd47b057/68747470733a2f2f66696c65732e726179636173742e636f6d2f383078317078726137637961626b6f797871766c6f6e6f3273673970" alt="Tailwind CSS" className="w-full h-full object-contain" /> },
      { name: "HTML", icon: <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="HTML" className="w-full h-full object-contain" /> },
      { name: "CSS", icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiyQiqSxpPIX-mgsWn3doXfHmdwk_RoGTBw&s" alt="CSS" className="w-full h-full object-contain" /> },
    ],
  },
  "Backend Development": {
    categoryIcon: <Database className="w-full h-full" />,
    skills: [
      { name: "Node.js", icon: <NodejsLogo /> },
      { name: "Express.js", icon: <ExpressLogo /> },
      { name: "REST APIs", icon: <img src="https://media.licdn.com/dms/image/v2/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=4QpsM1YKchLOfxVzpfFJAQWdkJ3vg3aKUWYL5tFVXXI" alt="REST APIs" className="w-full h-full object-contain" /> },
    ],
  },
  "Cloud & DevOps": {
    categoryIcon: <Cloud className="w-full h-full" />,
    skills: [
      { name: "AWS", icon: <AwsLogo /> },
      { name: "Docker", icon: <DockerLogo /> },
      { name: "Jenkins", icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm35-ov_Saivzxjegm39mlI_aL4hMBEYyKBQ&s" alt="Jenkins" className="w-full h-full object-contain" /> },
      { name: "Linux", icon: <img src="https://cdn-icons-png.flaticon.com/512/518/518713.png" alt="Linux" className="w-full h-full object-contain" /> },
    ],
  },
  "Databases": {
    categoryIcon: <Database className="w-full h-full" />,
    skills: [
      { name: "MongoDB", icon: <MongoDbLogo /> },
      { name: "MySQL", icon: <MySQLLogo /> },
      { name: "Firebase", icon: <FirebaseLogo /> },
    ],
  },
  "Developer Tools": {
    categoryIcon: <Wrench className="w-full h-full" />,
    skills: [
      { name: "Git/GitHub", icon: <GitLogo /> },
      { name: "VS Code", icon: <VscodeLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "Figma", icon: <FigmaLogo /> },
    ],
  },
};

// You need to add these keyframe animations to your global stylesheet (e.g., globals.css)
// @keyframes rotate-slow {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// @keyframes pulse-slow {
//   0%, 100% { transform: scale(1); }
//   50% { transform: scale(1.1); }
// }

const SkillsSection = () => {
  const categoryKeys = Object.keys(skillsData);
  const totalCategories = categoryKeys.length;

  const getOrbitRadius = () => {
    if (window.innerWidth < 768) {
      return 120; // Mobile
    }
    return 250; // Desktop
  };

  const getInnerRadius = () => {
    if (window.innerWidth < 768) {
      return 60;
    }
    return 90;
  };

  const orbitRadius = getOrbitRadius();
  const innerRadius = getInnerRadius();

  return (
    <section className="py-10 bg-card/30 overflow-hidden">
      <div className="text-center mb-28 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
        </h2>
        
      </div>

      <div className="relative w-full h-[350px] md:h-[600px] mx-auto flex items-center justify-center rounded-full border border-border/50 bg-background/20 transition-all duration-500">

        {Object.entries(skillsData).map(([category, data], index) => {
          const angle = (index / totalCategories) * 2 * Math.PI;
          const x = orbitRadius * Math.cos(angle);
          const y = orbitRadius * Math.sin(angle);

          return (
            <div
              key={category}
              className="group absolute w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center rounded-full border border-primary/20 bg-background/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                top: '50%',
                left: '50%',
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-purple-400 rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <span className="w-full h-full flex items-center justify-center ">
                  {data.categoryIcon}
                </span>
              </div>

              {data.skills.map((skill, skillIndex) => {
                const totalSkills = data.skills.length;
                const innerAngle = (skillIndex / totalSkills) * 2 * Math.PI;
                const innerX = innerRadius * Math.cos(innerAngle);
                const innerY = innerRadius * Math.sin(innerAngle);

                return (
                  <div
                    key={skill.name}
                    className="absolute  w-8 h-8 md:w-14 md:h-14 rounded-full bg-background/70 border border-border transition-all duration-500 overflow-hidden" // Added `overflow-hidden`
                    style={{
                      transform: `translate(calc(-50% + ${innerX}px), calc(-50% + ${innerY}px))`,
                      top: '50%',
                      left: '50%',
                      animation: `pulse-slow 2s ease-in-out infinite, rotate-slow ${10 + Math.random() * 5}s linear infinite`,
                    }}
                  >
                    {skill.icon}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;