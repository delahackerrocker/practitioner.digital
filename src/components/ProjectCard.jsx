export default function ProjectCard({ project, navigate }) {
  return (
    <article className="project-card" style={{ "--project-accent": project.accent }}>
      <div className="project-card__visual">
        <div className="project-card__visual-overlay">
          <span>{project.eyebrow}</span>
          <strong>{project.title}</strong>
          <p>{project.previewNote}</p>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__copy">
          <p className="project-card__eyebrow">{project.tagline}</p>
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
          View Case Study
        </button>
      </div>
    </article>
  );
}
