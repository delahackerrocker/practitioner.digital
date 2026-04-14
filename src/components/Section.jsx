export default function Section({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  children,
}) {
  return (
    <section className={`section shell ${className}`.trim()} id={id}>
      <div className="section__header">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="section__title">{title}</h2> : null}
        {intro ? <p className="section__intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

