import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import Section from "../components/Section";
import {
  callOfDutyCaseStudies,
  callOfDutyHub,
} from "../data/projects";
import {
  actionLinks,
  callOfDutyClusterContent,
  caseStudyPrompt,
  experienceContent,
  footerContent,
  heroContent,
} from "../data/siteContent";

export default function Home({ navigate }) {
  return (
    <>
      <Hero actionLinks={actionLinks} content={heroContent} navigate={navigate} />

      <Section
        className="section--flagship-cluster"
        eyebrow={callOfDutyClusterContent.eyebrow}
        id="call-of-duty"
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

        <ProjectGrid navigate={navigate} projects={callOfDutyCaseStudies} />
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
            The hub connects the major proof points: extraction rewards, interaction feedback,
            visual-system guidance, squad continuity, stealth readability, and production-ready
            decks from five shipped releases.
          </p>
          <div
            className="case-study-prompt__action"
            style={{ "--project-image": `url(${callOfDutyHub.cardImage})` }}
          >
            <button
              className="button button--primary"
              onClick={() => navigate(caseStudyPrompt.action.target)}
              type="button"
            >
              {caseStudyPrompt.action.label}
            </button>
          </div>
        </div>
      </Section>

      <Footer content={footerContent} />
    </>
  );
}
