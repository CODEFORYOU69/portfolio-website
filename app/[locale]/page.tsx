import Intro from "@/components/intro";
import FeaturedProjects from "@/components/featured-projects";
import Services from "@/components/services";
import Work from "@/components/work";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Intro />
      <FeaturedProjects />
      <Services />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
