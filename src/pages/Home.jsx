import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { primaryProjects, secondaryProjects } from "../data/projects";
import {
  actionLinks,
  caseStudyPrompt,
  experienceContent,
  featuredWorkContent,
  footerContent,
  heroContent,
  supportingWorkContent,
} from "../data/siteContent";

export default function Home({ navigate }) {
  return (
    <>
      <Hero actionLinks={actionLinks} content={heroContent} navigate={navigate} />

      <Section
        eyebrow={featuredWorkContent.eyebrow}
        id="work"
        intro={featuredWorkContent.intro}
        title={featuredWorkContent.title}
      >
        <div className="project-grid">
          {primaryProjects.map((project) => (
            <ProjectCard key={project.slug} navigate={navigate} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={supportingWorkContent.eyebrow}
        intro={supportingWorkContent.intro}
        title={supportingWorkContent.title}
      >
        <div className="project-grid">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} navigate={navigate} project={project} />
          ))}
        </div>
      </Section>

      <Section
        className="section--split"
        eyebrow={experienceContent.eyebrow}
        id="experience"
        intro={experienceContent.intro}
        title={experienceContent.title}
      >
        <div className="pillar-grid">
          {experienceContent.pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={caseStudyPrompt.eyebrow}
        intro={caseStudyPrompt.intro}
        title={caseStudyPrompt.title}
      >
        <div className="case-study-prompt">
          <p>
            Start with Call of Duty as the flagship, then deepen Rebel Future, Snoopy's Soapbox
            Racers, and the strongest secondary projects as final assets and writing come together.
          </p>
          <button
            className="button button--primary"
            onClick={() => navigate(caseStudyPrompt.action.target)}
            type="button"
          >
            {caseStudyPrompt.action.label}
          </button>
        </div>
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
