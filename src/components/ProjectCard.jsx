import { ExternalLinks } from "./ExternalLinks";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-copy">
        <div className="project-card-header">
          <p className="project-date">{project.date}</p>
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
        <ExternalLinks links={project.links} />
      </div>
      <div
        className="project-image-shell"
        style={project.imageHeight ? { height: project.imageHeight } : undefined}
      >
        <img
          src={project.image}
          alt={project.alt}
          style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
        />
      </div>
    </article>
  );
}
