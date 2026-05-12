import CaseStudyHero from "../components/CaseStudyHero";
import Footer from "../components/Footer";
import MediaGallery from "../components/MediaGallery";
import ProjectGrid from "../components/ProjectGrid";
import Section from "../components/Section";
import { projects } from "../data/projects";
import { footerContent } from "../data/siteContent";

// Generic project notes use the same compact detail-card rhythm as the franchise pages.
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

// Fallback detail template for non-Call-of-Duty portfolio entries.
export default function ProjectDetail({ navigate, project }) {
  if (!project) {
    return (
      <section className="missing-page shell">
        <p className="section-eyebrow">Project Not Found</p>
        <h1>The Requested Case Study Has Not Been Wired Yet.</h1>
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
        eyebrow="Media Gallery"
        intro="Screenshots, diagrams, and motion selected to show the interface decisions quickly."
        title="Project Evidence"
      >
        <MediaGallery media={project.media} projectTitle={project.title} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Problem"
        intro="The task, workflow, or communication issue the project needed to resolve."
        title="User and System Problem"
      >
        <DetailList items={project.challenge} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Approach"
        intro="The design decisions, constraints, and implementation thinking behind the work."
        title="Design and Production Approach"
      >
        <DetailList items={project.approach} />
      </Section>

      <Section
        className="section--compact"
        eyebrow="Outcome"
        intro="What the project demonstrates across usability, clarity, and production readiness."
        title="Outcome and Portfolio Signal"
      >
        <DetailList items={project.outcome} />
      </Section>

      <Section
        eyebrow="More Work"
        intro="Related work across games, XR, interface systems, and interactive prototypes."
        title="More Projects"
      >
        <ProjectGrid compact navigate={navigate} projects={relatedProjects} />
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
