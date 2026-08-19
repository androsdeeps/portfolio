import type { Skill, SkillCategory } from "@/types";

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "cloud", label: "Cloud" },
  { id: "tools", label: "Tools" },
];

export const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", icon: "atom", color: "#61DAFB", level: "Intermediate", percentage: 65, category: "frontend" },
  { id: "nextjs", name: "Next.js", icon: "triangle", color: "#000000", level: "Intermediate", percentage: 60, category: "frontend" },
  { id: "javascript", name: "JavaScript (ES6+)", icon: "file-code", color: "#F7DF1E", level: "Intermediate", percentage: 70, category: "frontend" },
  { id: "html5", name: "HTML5", icon: "code-2", color: "#E34F26", level: "Advanced", percentage: 85, category: "frontend" },
  { id: "css3", name: "CSS3", icon: "wind", color: "#1572B6", level: "Advanced", percentage: 80, category: "frontend" },

  // Backend
  { id: "nodejs", name: "Node.js", icon: "server", color: "#68A063", level: "Intermediate", percentage: 65, category: "backend" },
  { id: "express", name: "Express.js", icon: "route", color: "#000000", level: "Intermediate", percentage: 60, category: "backend" },
  { id: "rest-api", name: "REST API Design", icon: "network", color: "#E10098", level: "Intermediate", percentage: 65, category: "backend" },

  // Mobile
  { id: "react-native", name: "React Native", icon: "smartphone", color: "#61DAFB", level: "Intermediate", percentage: 60, category: "mobile" },

  // Cloud
  { id: "aws", name: "AWS", icon: "cloud", color: "#FF9900", level: "Beginner", percentage: 40, category: "cloud" },

  // Tools
  { id: "git", name: "Git", icon: "git-branch", color: "#F05032", level: "Intermediate", percentage: 70, category: "tools" },
  { id: "github", name: "GitHub", icon: "github", color: "#181717", level: "Intermediate", percentage: 70, category: "tools" },
  { id: "postman", name: "Postman", icon: "send", color: "#FF6C37", level: "Intermediate", percentage: 65, category: "tools" },
  { id: "scrum", name: "Agile / Scrum", icon: "workflow", color: "#2088FF", level: "Intermediate", percentage: 60, category: "tools" },
  { id: "code-review", name: "Code Review", icon: "git-pull-request", color: "#8250DF", level: "Intermediate", percentage: 55, category: "tools" },
];
