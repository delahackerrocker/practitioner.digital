import SiteLink from "../components/SiteLink";
import { HardButton, Kicker, PageCta } from "../components/ReplicaPrimitives";
import { nationwideAsset, nationwideStudy as study } from "../data/nationwide";
import { referenceSite } from "../data/referenceContent";
import "../styles/nationwide.css";

function Screenshot({ image, label, eager = false, className = "" }) {
  return (
    <figure className={`nationwide-screenshot ${className}`}>
      <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${label}`}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={eager ? "eager" : "lazy"} decoding="async" />
      </a>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function NationwideCaseStudy({ navigate }) {
  return (
    <article className="nationwide-study">
      <header className="nationwide-hero shell">
        <SiteLink href="/work" navigate={navigate} className="back-link">← All Work</SiteLink>
        <Kicker>{study.meta}</Kicker>
        <h1>{study.title}</h1>
        <p className="nationwide-hero__headline">A Better Night at the Arena.</p>
        <div className="nationwide-hero__intro">
          <p className="lede">{study.summary}</p>
          <HardButton href={study.href}>Explore the Live App ↗</HardButton>
        </div>
        <ul className="nationwide-platforms" aria-label="Project platforms">
          {study.platforms.map((platform) => <li key={platform}>{platform}</li>)}
        </ul>
      </header>

      <section className="nationwide-showcase" aria-label="Desktop and mobile screenshots">
        <div className="shell nationwide-device-pair">
          <Screenshot image={study.image} label="Desktop Web" eager />
          <Screenshot image={study.mobileImage} label={study.mobileImage.label} eager className="nationwide-screenshot--mobile" />
        </div>
      </section>

      <section className="nationwide-context shell">
        <div><Kicker>The Experience</Kicker><h2>From Planning Ahead to Finding Your Seat.</h2></div>
        <div>
          <p>A visitor’s questions change throughout the night. What’s on? Where should I park? Which section is mine? Where can I get help? This project brings those moments into one visitor guide, with versions for desktop web, mobile web, iOS, and Android.</p>
          <p className="nationwide-note">An independent prototype, not an official Nationwide Arena app. Screens shown here are from the web version.</p>
        </div>
      </section>

      <div className="shell nationwide-features">
        {study.features.map((feature) => (
          <section className="nationwide-feature" key={feature.id} aria-labelledby={`feature-${feature.id}`}>
            <div className="nationwide-feature__copy">
              <Kicker>{feature.label}</Kicker>
              <h2 id={`feature-${feature.id}`}>{feature.title}</h2>
              <p>{feature.body}</p>
              <p className="nationwide-note">{feature.detail}</p>
            </div>
            <div className="nationwide-device-pair" aria-label={`${feature.label}: desktop and mobile screenshots`}>
              <Screenshot image={{ src: nationwideAsset(feature.image), alt: feature.alt, width: 1440, height: 1050 }} label={feature.caption} />
              <Screenshot image={feature.mobileImage} label="Mobile Web" className="nationwide-screenshot--mobile" />
            </div>
          </section>
        ))}
      </div>
      <PageCta title="Try the Visitor Guide." body="Explore the map, plan a visit, and see the web experience in action." cta={{ href: study.href, label: "Open Nationwide Arena ↗" }} secondaryCta={referenceSite.primaryCta} navigate={navigate} />
    </article>
  );
}
