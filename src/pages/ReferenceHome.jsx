import { homePage, referenceSite } from "../data/referenceContent";
import {
  WorkCard, EngagementGrid, HardButton, Kicker, Marquee, MetricGrid, PageCta,
  ProcessGrid, ProductCard, ProfileBlock, SectionIntro, SpecTable, WorkRow,
} from "../components/ReplicaPrimitives";

export default function ReferenceHome({ navigate }) {
  return (
    <>
      <section className="hero shell" aria-labelledby="home-title">
        <div className="hero__copy">
          <Kicker>{homePage.eyebrow}</Kicker>
          <h1 id="home-title"><span>{homePage.headline[0]}</span><mark>{homePage.headline[1]}</mark></h1>
          <p className="hero__lede">{homePage.intro}</p>
          <div className="button-row">
            <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Let’s Talk for 30 Minutes →</HardButton>
            <HardButton href="/#work" navigate={navigate} tone="plain">See the Work ↓</HardButton>
          </div>
        </div>
        <SpecTable title="The Basics" rows={homePage.spec} />
      </section>
      <Marquee items={homePage.capabilities} />
      <section className="section shell" id="work">
        <SectionIntro eyebrow="Featured Work" />
        <div className="work-grid">{homePage.featuredStudies.map((project) => <WorkCard key={project.title} project={project} navigate={navigate} />)}</div>
        <HardButton href="/work" navigate={navigate} tone="plain">See All the Work →</HardButton>
      </section>
      <section className="statement-section"><div className="shell">
        <SectionIntro eyebrow="What I Actually Do" title="Got an Idea? Let’s Get It Working." />
        <p className="statement-copy">Maybe the idea is still in your head. Maybe you’ve got a prototype that mostly works, except for the part that doesn’t. I help sort out the plan, try the tricky bit first, and build something we can actually use.</p>
      </div></section>
      <section className="section shell">
        <SectionIntro eyebrow="How I Work" title="What Working With Me Looks Like." />
        <ProcessGrid items={homePage.process} />
      </section>
      <section className="section section--proof shell">
        <SectionIntro eyebrow="A Few Things I’ve Done" />
        <MetricGrid items={homePage.proof} />
      </section>
      <Marquee items={homePage.credentials} />
      <section className="section section--ruled shell" id="services">
        <SectionIntro eyebrow="Need a Hand?" title="How You Can Hire Me." />
        <EngagementGrid items={homePage.engagements} />
        <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Let’s Talk for 30 Minutes →</HardButton>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Selected Work" />
        <div className="work-list">{homePage.selectedWork.map((item) => <WorkRow key={item.title} item={item} />)}</div>
      </section>
      <section className="section section--current-builds shell">
        <SectionIntro eyebrow="Current Builds" title="What I’m Building Now." />
        <div className="product-grid">{homePage.products.map((product) => <ProductCard key={product.title} product={product} />)}</div>
      </section>
      <section className="section section--profile shell">
        <ProfileBlock
          profile={homePage.profile}
          cta={{ href: "/about", label: "A Bit More About Me →" }}
          navigate={navigate}
        />
      </section>
      <PageCta
        title="Have Something Strange, Useful, or Stuck?"
        body="Tell me what you’re trying to build and where you’re stuck. We’ll take 30 minutes to talk it through and see if I can help. Rough notes are fine."
        cta={referenceSite.primaryCta}
        secondaryCta={{ label: "Or Send a Message →", href: `mailto:${referenceSite.email}` }}
        navigate={navigate}
      />
    </>
  );
}
