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

      <Section
        eyebrow="Featured Work"
        intro="These five artifacts cover Modern Warfare Zombies exfil, a BO6 keypad interaction, Warzone / Cold War visual systems, a post-match squad flow, and BO6 stealth readability."
        title="Five Shipped Call of Duty Projects"
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
        intro="The franchise work spans multiple releases and problem types, so the hub clarifies scope before handing off to individual artifacts."
        title="Why the Hub Exists"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="The hub stays short and routes into artifact-led pages where decks, video, and diagrams can do the heavier storytelling."
        title="How the Cluster Is Organized"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        eyebrow="Artifacts"
        intro="Slideshows, video, flow diagrams, and supporting stills keep the franchise work scannable without flattening it into one page."
        title="What This Cluster Now Supports"
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
