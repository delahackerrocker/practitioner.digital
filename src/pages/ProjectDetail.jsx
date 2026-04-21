import CaseStudyHero from "../components/CaseStudyHero";
import Footer from "../components/Footer";
import MediaGallery from "../components/MediaGallery";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projects } from "../data/projects";
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

export default function ProjectDetail({ navigate, project }) {
  if (!project) {
    return (
      <section className="missing-page shell">
        <p className="section-eyebrow">Project not found</p>
        <h1>The requested case study has not been wired yet.</h1>
        <p>Return to the home page to continue from the selected work overview.</p>
        <button className="button button--primary" onClick={() => navigate("/")} type="button">
          Back Home
        </button>
      </section>
    );
  }

  const relatedProjects = projects
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <CaseStudyHero navigate={navigate} project={project} />

      <Section
        eyebrow="Media gallery"
        intro="Screenshots, diagrams, and video are grouped here for a quick read on the work."
        title="Project media"
      >
        <MediaGallery media={project.media} projectTitle={project.title} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Challenge"
        intro="The core UX, interface, or product problem this project needed to solve."
        title="What needed to work"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="The key decisions, systems, and production thinking behind the work."
        title="How the work was shaped"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Outcome"
        intro="What the work demonstrates and why it matters."
        title="What the project shows"
      >
        <DetailList items={project.outcome} />
      </Section>

      <Section
        eyebrow="Deliverables"
        intro="Key artifacts tied to the case study."
        title="Artifacts this case study can hold"
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
          intro="Original decks, demos, and supporting references."
          title="Additional material"
        >
          <div className="link-grid">
            {project.links.map((link) =>
              link.href ? (
                <a
                  className="support-link"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ) : (
                <div className="support-link support-link--placeholder" key={link.label}>
                  {link.label}
                </div>
              )
            )}
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="More work"
        intro="A few related projects from the broader body of work."
        title="More selected work"
      >
        <div className="project-grid project-grid--compact">
          {relatedProjects.map((entry) => (
            <ProjectCard key={entry.slug} navigate={navigate} project={entry} />
          ))}
        </div>
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
