import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { callOfDutyCaseStudies } from "../data/callOfDuty";
import { footerContent } from "../data/siteContent";

function DetailList({ items }) {
  return (
    <div className="detail-list">
      {items.map((item) => (
        <article className="detail-list__item" key={item}>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}

export default function CallOfDutyHubPage({ navigate, project }) {
  return (
    <>
      <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
        <button className="back-link" onClick={() => navigate("/#overview")} type="button">
          Back to home
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
              <span>Role / focus</span>
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

      <Section
        eyebrow="Featured work"
        intro="These five artifacts cover reward flows, puzzle feedback, visual systems, post-match social UX, and combat communication."
        title="Five shipped Call of Duty projects"
      >
        <div className="project-grid">
          {callOfDutyCaseStudies.map((entry) => (
            <ProjectCard key={entry.slug} navigate={navigate} project={entry} />
          ))}
        </div>
      </Section>

      <Section
        className="section--compact"
        eyebrow="Challenge"
        intro="The hub makes a broad body of franchise work easier to scan."
        title="Why the hub exists"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="The overview stays concise and hands off to dedicated case-study pages for the deeper material."
        title="How the cluster is organized"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        eyebrow="Artifacts"
        intro="The cluster combines slideshows, video, diagrams, and supporting stills."
        title="What this cluster now supports"
      >
        <div className="tag-row">
          {project.deliverables.map((deliverable) => (
            <span className="tag tag--strong" key={deliverable}>
              {deliverable}
            </span>
          ))}
        </div>
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
