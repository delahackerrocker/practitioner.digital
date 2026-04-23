import FeatureSlideshow from "../components/FeatureSlideshow";
import Footer from "../components/Footer";
import FlowChartViewer from "../components/FlowChartViewer";
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

export default function CallOfDutyCaseStudyPage({ navigate, project }) {
  const relatedCaseStudies = callOfDutyCaseStudies
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
        <button className="back-link" onClick={() => navigate("/projects/call-of-duty")} type="button">
          Back to Call of Duty Hub
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
        eyebrow="Challenge"
        intro="The player-facing communication or interaction problem at the center of this case study."
        title="What Needed to Work"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="How the artifact was framed, sequenced, and supported so the thinking stays legible."
        title="How the Case Study Is Framed"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        eyebrow="Artifacts"
        intro="The media and documentation that make the design thinking legible."
        title="Included Artifacts"
      >
        <div className="tag-row">
          {project.deliverables.map((deliverable) => (
            <span className="tag tag--strong" key={deliverable}>
              {deliverable}
            </span>
          ))}
        </div>
      </Section>

      {project.links.length ? (
        <Section
          eyebrow="Supporting Links"
          intro="Original decks and public references connected to the work."
          title="Source Material"
        >
          <div className="link-grid">
            {project.links.map((link) => (
              <a
                className="support-link"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="More COD Work"
        intro="More franchise case studies across extraction UX, visual systems, social flow, and combat communication."
        title="Continue Through the Cluster"
      >
        <div className="project-grid project-grid--compact">
          {relatedCaseStudies.map((entry) => (
            <ProjectCard key={entry.slug} navigate={navigate} project={entry} />
          ))}
        </div>
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
