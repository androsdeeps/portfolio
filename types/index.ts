export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isSection: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  roles: string[];
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  resumeUrl: string;
  mapEmbedUrl: string;
  availableForWork: boolean;
  yearsOfExperience: number;
  githubUsername: string;
  stats: {
    label: string;
    value: number;
    suffix?: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  interests: string[];
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "mobile"
  | "cloud"
  | "devops"
  | "tools";

export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  percentage: number;
  category: SkillCategory;
}

export type ProjectCategory =
  | "web"
  | "mobile"
  | "backend"
  | "fullstack"
  | "design";

export type ProjectStatus = "completed" | "in-progress" | "maintained";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  thumbnail: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  completionDate: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  logo?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  image: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  feedback: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  url: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}
