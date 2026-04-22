export default function ProjectCard({ project, navigate }) {
  const visualStyle = {
    "--project-accent": project.accent,
  };
  const projectHref = `/projects/${project.slug}`;

  if (project.cardImage) {
    visualStyle["--project-image"] = `url(${project.cardImage})`;
  }

  return (
    <a
      className="project-card"
      href={projectHref}
      onClick={(event) => {
        event.preventDefault();
        navigate(projectHref);
      }}
      onKeyDown={(event) => {
        if (event.key === " ") {
          event.preventDefault();
          navigate(projectHref);
        }
      }}
      style={visualStyle}
    >
      <div aria-hidden="true" className="project-card__visual" />

      <div className="project-card__body">
        <div className="project-card__copy">
          <p className="project-card__deck">{project.tagline}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>

        <div className="meta-row">
          <span>{project.role}</span>
          <span>{project.projectType}</span>
          <span>{project.timeframe}</span>
        </div>

        <div className="tag-row">
          {project.focusTags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <span className="project-card__cta">
          Open Project
        </span>
      </div>
    </a>
  );
}
