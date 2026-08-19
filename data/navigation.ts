import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { id: "home", label: "Home", href: "/#home", isSection: true },
  { id: "about", label: "About", href: "/#about", isSection: true },
  { id: "skills", label: "Skills", href: "/#skills", isSection: true },
  { id: "projects", label: "Projects", href: "/#projects", isSection: true },
  {
    id: "experience",
    label: "Experience",
    href: "/#experience",
    isSection: true,
  },
  { id: "services", label: "Services", href: "/#services", isSection: true },
  { id: "contact", label: "Contact", href: "/#contact", isSection: true },
];

export const footerLinks: NavItem[] = [
  { id: "about", label: "About", href: "/about", isSection: false },
  { id: "projects", label: "Projects", href: "/projects", isSection: false },
  {
    id: "experience",
    label: "Experience",
    href: "/experience",
    isSection: false,
  },
  { id: "skills", label: "Skills", href: "/skills", isSection: false },
  { id: "services", label: "Services", href: "/services", isSection: false },
  { id: "resume", label: "Resume", href: "/resume", isSection: false },
  { id: "contact", label: "Contact", href: "/contact", isSection: false },
];
