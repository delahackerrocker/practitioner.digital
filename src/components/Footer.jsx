export default function Footer({ content }) {
  return (
    <footer className="site-footer shell" id="contact">
      <div className="site-footer__content">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
      </div>

      <div className="contact-grid">
        {content.contactCards.map((item) => (
          <div className="contact-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </footer>
  );
}
