import { ProjectCard } from "../../components/ProjectCard";
import { siteData } from "../../siteData";

export const metadata = {
  title: "Projects",
  alternates: {
    canonical: "/projects/",
  },
};

export default function ProjectsPage() {
  return (
    <article className="page">
      <h1>Projects</h1>
      <p className="projects-intro">
        This is not an exhaustive list. More of my work can be found on my{" "}
        <a href={siteData.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <div className="projects-grid">
        {siteData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </article>
  );
}
