export default function Section({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  children,
}) {
  const introContent = Array.isArray(intro) ? (
    <div className="section__intro-group">
      {intro.map((paragraph) => (
        <p className="section__intro" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  ) : intro ? (
    <p className="section__intro">{intro}</p>
  ) : null;

  return (
    <section className={`section shell ${className}`.trim()} id={id}>
      <div className="section__header">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="section__title">{title}</h2> : null}
        {introContent}
      </div>
      {children}
    </section>
  );
}
