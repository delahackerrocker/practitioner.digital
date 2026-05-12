import FeatureSlideshow from "../components/FeatureSlideshow";
import Footer from "../components/Footer";
import FlowChartViewer from "../components/FlowChartViewer";
import InteractiveWireSurface from "../components/InteractiveWireSurface";
import ProjectGrid from "../components/ProjectGrid";
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

export default function CallOfDutyCaseStudyPage({ navigate, project }) {
  const relatedCaseStudies = callOfDutyCaseStudies
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
        <InteractiveWireSurface accent={project.accent} variant="case" />
        <button className="back-link" onClick={() => navigate("/projects/call-of-duty")} type="button">
          Back to Call of Duty Hub
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

      {project.mediaBlocks.map((block) => (
        <Section
          className="section--cod-media"
          eyebrow={block.eyebrow}
          intro={block.intro}
          key={block.title}
          title={block.title}
        >
          {block.variant === "flowchart" ? (
            <FlowChartViewer items={block.items} />
          ) : (
            <FeatureSlideshow items={block.items} />
          )}
        </Section>
      ))}

      <Section
        className="section--compact"
        eyebrow="Problem"
        intro="The player-facing communication or interaction issue at the center of this case study."
        title="User and System Problem"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="How the artifact was sequenced, documented, and supported so the design decisions stay legible."
        title="Design Approach"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        eyebrow="More Call of Duty Work"
        intro="More franchise case studies across extraction UX, visual systems, social flow, and combat communication."
        title="Continue Through the Cluster"
      >
        <ProjectGrid compact navigate={navigate} projects={relatedCaseStudies} />
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
