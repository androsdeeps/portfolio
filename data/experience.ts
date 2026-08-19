import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "1",
    company: "Hallow Tech",
    position: "Full-Stack Developer",
    location: "Nepal",
    employmentType: "Full-time",
    startDate: "2026-05",
    endDate: null,
    description:
      "Building and maintaining features across a Learning Management System (LMS), an ERP platform, and a Next.js CMS.",
    responsibilities: [
      "Develop features for a Learning Management System (LMS), an ERP platform, and a Next.js CMS",
      "Build UI and application logic using React and Next.js",
      "Collaborate with the team on production codebases and code reviews",
    ],
    technologies: ["React", "Next.js", "Node.js", "JavaScript"],
  },
  {
    id: "2",
    company: "NPTS Extension — Capstone Project",
    companyUrl: "https://github.com/androsdeeps/rom-restaurant",
    position: "Full-Stack Developer",
    location: "Lalitpur, Nepal",
    employmentType: "Certification Program",
    startDate: "2025-06",
    endDate: "2026-06",
    description:
      "Certification in Software Development, NPTS Extension — designed and built a cross-platform restaurant menu management system.",
    responsibilities: [
      "Designed and developed a cross-platform restaurant menu management system end-to-end, covering requirements, architecture, implementation, testing, and AWS deployment",
      "Built a web + mobile system with a React admin interface and a React Native mobile app, backed by a shared Node.js/Express REST API",
      "Implemented core APIs for menu management, authentication, and order processing, with a responsive UI delivering real-time menu updates",
      "Practiced AWS deployment fundamentals and Git-based workflows including branching and pull-request reviews",
      "Worked in an Agile Scrum environment, contributing to sprint planning, stand-ups, and iterative feature refinement",
    ],
    technologies: ["React", "React Native", "Node.js", "Express.js", "AWS", "Git"],
  },
];
