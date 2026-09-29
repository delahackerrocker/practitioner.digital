import SiteLink from "../components/SiteLink";
import { PageCta } from "../components/ReplicaPrimitives";
import { referenceSite } from "../data/referenceContent";

export function StudyImage({ image, eager = false }) {
  return (
    <figure className={`study-image${image.portrait ? " study-image--portrait" : ""}`}>
      <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${image.caption}`}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={eager ? "eager" : "lazy"} />
      </a>
      <figcaption>{image.caption} <span aria-hidden="true">↗</span></figcaption>
    </figure>
  );
}

export default function VisualCaseStudy({ study, navigate }) {
  return (
    <article className="visual-study">
      <header className="case-study-hero shell">
        <SiteLink href="/work" navigate={navigate} className="back-link">← All Work</SiteLink>
        <p className="case-study-hero__meta">{study.meta}</p>
        <h1>{study.title}</h1>
        <p className="visual-study__tagline">{study.tagline}</p>
        <div className="visual-study__intro"><p className="lede">{study.summary}</p><a className="hard-button" href={study.href} target="_blank" rel="noreferrer">{study.cta} ↗</a></div>
        <ul className="tag-list" aria-label="Project focus">{study.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </header>
      <section className="study-overview shell" aria-label="Desktop and mobile screenshots">
        {study.hero.map(image => <StudyImage key={image.src} image={image} eager />)}
      </section>
      <section className="study-context shell">
        <div><p className="eyebrow">The Experience</p><h2>{study.context.title}</h2></div>
        <div>{study.context.body.map(text => <p key={text}>{text}</p>)}</div>
      </section>
      <div className="shell">
        {study.sections.map((section, index) => (
          <section className={`study-use-case${section.images ? " study-use-case--paired" : ""}`} key={section.title} aria-labelledby={`${study.slug}-${index}`}>
            <div className="study-use-case__copy"><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {section.label}</p><h2 id={`${study.slug}-${index}`}>{section.title}</h2>{section.body.map(text => <p key={text}>{text}</p>)}</div>
            {section.images ? (
              <div className="study-platform-pair" aria-label={`${section.label}: desktop and iOS screenshots`}>
                {section.images.map(image => <StudyImage key={image.src} image={image} />)}
              </div>
            ) : <StudyImage image={section.image} />}
          </section>
        ))}
      </div>
      <PageCta title={study.closeTitle} body={study.closeIntro} cta={{label: `${study.cta} ↗`, href: study.href}} secondaryCta={referenceSite.primaryCta} navigate={navigate} />
    </article>
  );
}
