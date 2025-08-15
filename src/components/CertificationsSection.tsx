import React from 'react';
import { GraduationCap, Briefcase, Code, Cloud } from 'lucide-react';

const certificationsData = [
  {
    icon: <GraduationCap />,
    title: "Great Learning Course: HTML, CSS, and Linux",
    completionDate: "July 2023",
    description: "Gained proficiency in web development fundamentals (HTML, CSS) and Linux OS basics."
  },
  {
    icon: <Briefcase />,
    title: "IBM Data Analyst Internship",
    completionDate: "September 2023",
    description: "Gained practical experience in data analysis and visualization using industry tools."
  },
  {
    icon: <Code />,
    title: "MERN Stack Training",
    completionDate: "September 2024",
    description: "Completed training in React, MongoDB, Express.js for full-stack web development."
  },
  {
    icon: <Cloud />,
    title: "DevOps Training",
    completionDate: "April 2025",
    description: "Completed a program in AWS, Linux, Jenkins, Ansible, Docker, Kubernetes, and Terraform to enhance DevOps skills."
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional development and skills acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 border border-border rounded-xl shadow-lg bg-background/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon with gradient */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="w-8 h-8">{item.icon}</div>
                  </span>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold text-sm">
                  <span className="text-white">Completion:</span> {item.completionDate}
                </p>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
