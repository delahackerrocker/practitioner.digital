import Footer from "../components/Footer";
import InteractiveWireSurface from "../components/InteractiveWireSurface";
import ProjectGrid from "../components/ProjectGrid";
import Section from "../components/Section";
import { callOfDutyCaseStudies } from "../data/callOfDuty";
import { footerContent } from "../data/siteContent";

// Reused for short proof-point lists inside case-study sections.
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

// Hub page frames the franchise work before sending users into individual artifacts.
export default function CallOfDutyHubPage({ navigate, project }) {
  return (
    <>
      <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
        <InteractiveWireSurface accent={project.accent} variant="case" />
        <button className="back-link" onClick={() => navigate("/#overview")} type="button">
          Back to Home
        </button>

        <div className="case-study-hero__grid">
          <div className="case-study-hero__content">
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
        intro="These five artifacts cover Modern Warfare Zombies extraction rewards, a BO6 keypad interaction, Warzone / Cold War visual guidelines, a post-match squad flow, and BO6 stealth readability."
        title="Five Shipped Call of Duty Projects"
      >
        <ProjectGrid navigate={navigate} projects={callOfDutyCaseStudies} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Problem"
        intro="The hub has to turn franchise-scale UI/UX work into a quick, credible path: what shipped, what each artifact proves, and where to go next."
        title="Make Five Shipped Artifacts Easy to Read"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="Each card routes to the artifact format that best explains the work: full deck slideshows, motion clips, flow diagrams, and focused stills."
        title="Artifact-Led Case Study System"
      >
        <DetailList items={project.approach} />
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
