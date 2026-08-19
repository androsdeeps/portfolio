import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Services } from "@/sections/Services";
import { GithubRepos } from "@/sections/GithubRepos";
import { Contact } from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <GithubRepos />
      <Contact />
    </>
  );
}
