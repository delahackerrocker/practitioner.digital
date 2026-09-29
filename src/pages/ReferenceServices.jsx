import { referenceSite, servicesPage } from "../data/referenceContent";
import { EngagementGrid, HardButton, PageCta, ProcessGrid, SectionIntro } from "../components/ReplicaPrimitives";

export default function ReferenceServices({ navigate }) {
  return (
    <>
      <section className="page-hero shell">
        <SectionIntro eyebrow={servicesPage.eyebrow} title={servicesPage.title} intro={servicesPage.intro} as="h1" />
        <div className="button-row"><HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Let’s Talk for 30 Minutes →</HardButton></div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Ways I Can Help" title="Start Something. Fix Something. Get It Moving." />
        <EngagementGrid items={servicesPage.engagements} />
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="How I Work" title="What Working With Me Looks Like." />
        <ProcessGrid items={servicesPage.process} />
      </section>
      <PageCta
        title="Have Something Strange, Useful, or Stuck?"
        body="Tell me what you’ve got, what you need, and what’s giving you trouble. We’ll work out where to start."
        cta={referenceSite.primaryCta}
        secondaryCta={{ label: "Or Send a Message →", href: `mailto:${referenceSite.email}` }}
        navigate={navigate}
      />
    </>
  );
}
