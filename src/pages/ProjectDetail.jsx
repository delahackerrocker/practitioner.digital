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
        <p>Return to the home page to continue through the portfolio.</p>
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
        intro="Screenshots, diagrams, and motion selected to show the work quickly."
        title="Project media"
      >
        <MediaGallery media={project.media} projectTitle={project.title} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Challenge"
        intro="The product, interaction, or communication problem at the center of the project."
        title="What needed to work"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="The key decisions, constraints, and production thinking behind the work."
        title="How the work was shaped"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Outcome"
        intro="What the project demonstrates and why it matters in the portfolio."
        title="What the project shows"
      >
        <DetailList items={project.outcome} />
      </Section>

      <Section
        eyebrow="Deliverables"
        intro="Core artifacts represented in the case study."
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
          intro="Original references, demos, and supporting material."
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
        intro="Related work from games, XR, and interactive product development."
        title="More projects"
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
