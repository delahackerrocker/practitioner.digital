import InteractiveWireSurface from "./InteractiveWireSurface";

function openContactLink(event, href) {
  event.preventDefault();
  window.location.assign(href);
}

export default function Footer({ content }) {
  return (
    <footer className="site-footer site-footer--surface shell" id="contact">
      <InteractiveWireSurface accent="#8fb7ff" variant="contact" />

      <div className="site-footer__content">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
      </div>

      <div className="contact-grid">
        {content.contactCards.map((item) => (
          <a
            className="contact-card"
            href={item.href}
            key={item.label}
            onClick={(event) => openContactLink(event, item.href)}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.note}</small>
          </a>
        ))}
      </div>
    </footer>
  );
}
