import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Responsive websites and web apps built with React and Next.js.",
    icon: "Globe",
    features: [
      "Responsive & mobile-first design",
      "React & Next.js development",
      "REST API integration",
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Server-side APIs and business logic built with Node.js and Express.",
    icon: "ServerCog",
    features: [
      "RESTful API design",
      "Authentication",
      "Database-backed features",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Cross-platform mobile apps built with React Native.",
    icon: "Smartphone",
    features: [
      "Cross-platform iOS & Android apps",
      "API integration",
      "Responsive mobile UI",
    ],
  },
];
