import { referenceSite, workPage } from "../data/referenceContent";
import { PageCta, ProductCard, SectionIntro, WorkCard } from "../components/ReplicaPrimitives";

export default function ReferenceWork({ navigate }) {
  return (
    <>
      <section className="page-hero work-hero shell"><SectionIntro eyebrow={workPage.eyebrow} title={workPage.title} intro={workPage.intro} as="h1" /></section>
      <section className="section shell">
        <SectionIntro eyebrow="Selected Work" title="Shipped Systems, Sites, and Experiences." intro="A focused selection of game, product, commerce, and interactive work." />
        <div className="work-grid">{workPage.work.map((project) => <WorkCard key={project.title} project={project} navigate={navigate} />)}</div>
      </section>
      <section className="section shell">
        <SectionIntro eyebrow="Current Builds" title="My Own Worlds and Tools." intro="Original products and systems in active development." />
        <div className="product-grid">{workPage.products.map((product) => <ProductCard key={product.title} product={product} />)}</div>
      </section>
      <PageCta title="Have Something Strange, Useful, or Stuck?" cta={referenceSite.primaryCta} navigate={navigate} />
    </>
  );
}
