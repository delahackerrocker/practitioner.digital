import FeatureSlideshow from "../components/FeatureSlideshow";
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

export default function CallOfDutyCaseStudyPage({ navigate, project }) {
  const relatedCaseStudies = callOfDutyCaseStudies
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="case-study-hero shell" style={{ "--project-accent": project.accent }}>
        <button className="back-link" onClick={() => navigate("/projects/call-of-duty")} type="button">
          Back to Call of Duty hub
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

      {project.mediaBlocks.map((block) => (
        <Section
          className="section--cod-media"
          eyebrow={block.eyebrow}
          intro={block.intro}
          key={block.title}
          title={block.title}
        >
          <FeatureSlideshow items={block.items} />
        </Section>
      ))}

      <Section
        className="section--compact"
        eyebrow="Challenge"
        intro="The core communication or interaction problem at the center of this case study."
        title="What needed to work"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="How the work was framed, structured, and supported by the artifact set."
        title="How the case study is framed"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        eyebrow="Artifacts"
        intro="The media and documentation that anchor this case study."
        title="Included artifacts"
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
          eyebrow="Supporting links"
          intro="Original decks and supporting references."
          title="Source material"
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
        eyebrow="More COD work"
        intro="More flagship Call of Duty case studies from the same cluster."
        title="Continue through the cluster"
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
