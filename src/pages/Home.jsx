import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { featuredProjects } from "../data/projects";
import {
  actionLinks,
  caseStudyPrompt,
  experienceContent,
  featuredWorkContent,
  footerContent,
  heroContent,
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
          {featuredProjects.map((project) => (
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
            Start with one flagship project, then roll the same structure forward as final media and
            writing are approved.
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

