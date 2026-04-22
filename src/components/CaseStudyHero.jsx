export default function CaseStudyHero({ navigate, project }) {
  return (
    <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
      <button
        className="back-link"
        onClick={() => navigate("/#overview")}
        type="button"
      >
        Back to Home
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
            <span>Role / Focus</span>
            <strong>{project.role}</strong>
          </div>
          <div className="detail-card">
            <span>Project Type</span>
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
