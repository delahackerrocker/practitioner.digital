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
            <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Project Call →</HardButton>
            <HardButton href="/#work" navigate={navigate} tone="plain">See the Work ↓</HardButton>
          </div>
        </div>
        <SpecTable title="Builder Spec" rows={homePage.spec} />
      </section>
      <Marquee items={homePage.capabilities} />
      <section className="section shell" id="work">
        <SectionIntro eyebrow="Featured Work" />
        <div className="work-grid">{homePage.featuredStudies.map((project) => <WorkCard key={project.title} project={project} navigate={navigate} />)}</div>
        <HardButton href="/work" navigate={navigate} tone="plain">See All Work and Experiments →</HardButton>
      </section>
      <section className="statement-section"><div className="shell">
        <SectionIntro eyebrow="What I Actually Do" title="I Turn Fuzzy Ideas Into Things People Can Use, Play, and Understand." />
        <p className="statement-copy">The feature you can explain but can’t quite design. The prototype that works but feels wrong. The game system that’s still sitting in a document. I figure out what it needs to feel like, build the part most likely to go sideways first, and work through the rest without losing the point of the thing.</p>
      </div></section>
      <section className="section shell">
        <SectionIntro eyebrow="How I Work" title="What Working With Me Looks Like." />
        <ProcessGrid items={homePage.process} />
      </section>
      <section className="section section--proof shell">
        <SectionIntro eyebrow="Proof, Not Adjectives" />
        <MetricGrid items={homePage.proof} />
      </section>
      <Marquee items={homePage.credentials} />
      <section className="section section--ruled shell" id="services">
        <SectionIntro eyebrow="Typical Engagements" title="How You Can Hire Me." />
        <EngagementGrid items={homePage.engagements} />
        <HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Project Call →</HardButton>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Selected Work" />
        <div className="work-list">{homePage.selectedWork.map((item) => <WorkRow key={item.title} item={item} />)}</div>
      </section>
      <section className="section section--current-builds shell">
        <SectionIntro eyebrow="Current Builds" title="My Own Worlds and Tools." />
        <div className="product-grid">{homePage.products.map((product) => <ProductCard key={product.title} product={product} />)}</div>
      </section>
      <section className="section section--profile shell">
        <ProfileBlock
          profile={homePage.profile}
          cta={{ href: "/about", label: "Read the Full Story →" }}
          navigate={navigate}
        />
      </section>
      <PageCta
        title="Have Something Strange, Useful, or Stuck?"
        body="Bring me the messy idea. We’ll spend 30 minutes figuring out what’s getting in the way, what a useful first version could look like, and whether I’m the right person to help design or build it. No pitch deck required."
        cta={referenceSite.primaryCta}
        secondaryCta={{ label: "Or Send a Message →", href: `mailto:${referenceSite.email}` }}
        navigate={navigate}
      />
    </>
  );
}
