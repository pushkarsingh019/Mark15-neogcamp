import Navbar from "../components/Navbar";
import projectSchema from "../data/projects.js";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

// importing animation library
import FadeIn from "react-fade-in";

const projectData = projectSchema.reverse();

function ProjectHeroSection() {
  return (
    <section className="text-section padding100">
      <h1>Projects</h1>
      <hr />
    </section>
  );
}

function ProjectDisplay() {
  return (
    <section className="project-display padding100">
      {projectData.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            name={project.name}
            codeName={project.codeName}
            description={project.description}
            liveProjectLink={project.liveProjectlink}
            githubLink={project.githublink}
          />
        );
      })}
    </section>
  );
}

function ProjectScreen() {
  return (
    <FadeIn>
      <Navbar />
      <ProjectHeroSection />
      <ProjectDisplay />
      <Footer />
    </FadeIn>
  );
}

export default ProjectScreen;
