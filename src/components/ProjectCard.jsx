export default function ProjectCard({ project, navigate }) {
  const visualStyle = {
    "--project-accent": project.accent,
  };

  if (project.cardImage) {
    visualStyle["--project-image"] = `url(${project.cardImage})`;
  }

  return (
    <article className="project-card" style={visualStyle}>
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

        <button
          className="button button--card"
          onClick={() => navigate(`/projects/${project.slug}`)}
          type="button"
        >
          Open Project
        </button>
      </div>
    </article>
  );
}
