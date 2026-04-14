export default function CaseStudyHero({ navigate, project }) {
  return (
    <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
      <button
        className="back-link"
        onClick={() => navigate("/#work")}
        type="button"
      >
        Back to selected work
      </button>

      <div className="case-study-hero__grid">
        <div className="case-study-hero__content">
          <p className="section-eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="case-study-hero__tagline">{project.tagline}</p>
          <p className="case-study-hero__summary">{project.summary}</p>
          <p className="case-study-hero__context">{project.context}</p>
        </div>

        <aside className="case-study-hero__meta">
          <div className="detail-card">
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div className="detail-card">
            <span>Project type</span>
            <strong>{project.projectType}</strong>
          </div>
          <div className="detail-card">
            <span>Timeframe</span>
            <strong>{project.timeframe}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

