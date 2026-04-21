import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import {
  callOfDutyCaseStudies,
  callOfDutyHub,
  primaryProjects,
  secondaryProjects,
} from "../data/projects";
import {
  actionLinks,
  callOfDutyClusterContent,
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
        className="section--flagship-cluster"
        eyebrow={callOfDutyClusterContent.eyebrow}
        id="work"
        intro={callOfDutyClusterContent.intro}
        title={callOfDutyClusterContent.title}
      >
        <div
          className="flagship-callout"
          style={{
            "--project-accent": callOfDutyHub.accent,
            "--project-image": `url(${callOfDutyHub.cardImage})`,
          }}
        >
          <div className="flagship-callout__content">
            <p className="section-eyebrow">{callOfDutyHub.eyebrow}</p>
            <h3>{callOfDutyHub.title}</h3>
            <p>{callOfDutyHub.summary}</p>
            <div className="tag-row">
              {callOfDutyHub.focusTags.map((tag) => (
                <span className="tag tag--strong" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <button
              className="button button--primary"
              onClick={() => navigate(callOfDutyClusterContent.action.target)}
              type="button"
            >
              {callOfDutyClusterContent.action.label}
            </button>
          </div>
        </div>

        <div className="project-grid">
          {callOfDutyCaseStudies.map((project) => (
            <ProjectCard key={project.slug} navigate={navigate} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={featuredWorkContent.eyebrow}
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
            Start with Call of Duty for feature flows, social UX, and combat communication, then
            move into Rebel Future, Snoopy's Soapbox Racers, and the strongest supporting work.
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
