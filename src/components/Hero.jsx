import InteractiveWireSurface from "./InteractiveWireSurface";

function ActionTile({ item, navigate }) {
  if (item.kind === "internal" && item.target) {
    return (
      <button
        className="action-tile action-tile--interactive"
        onClick={() => navigate(item.target)}
        type="button"
      >
        <span>{item.label}</span>
        <small>{item.note}</small>
      </button>
    );
  }

  return (
    <div className="action-tile action-tile--placeholder">
      <span>{item.label}</span>
      <small>{item.note}</small>
    </div>
  );
}

export default function Hero({ actionLinks, content, navigate }) {
  return (
    <section className="hero shell" id="overview">
      <div className="hero__content hero__content--surface">
        <InteractiveWireSurface accent="#8fb7ff" variant="hero" />
        <h1 className="hero__title">{content.title}</h1>
        <p className="hero__intro">{content.intro}</p>
        <p className="hero__positioning">{content.positioning}</p>

        <div className="hero__actions">
          <button
            className="button button--primary"
            onClick={() => navigate(content.primaryAction.target)}
            type="button"
          >
            {content.primaryAction.label}
          </button>
          <button
            className="button button--secondary"
            onClick={() => navigate(content.secondaryAction.target)}
            type="button"
          >
            {content.secondaryAction.label}
          </button>
        </div>

        <div className="hero__quick-links">
          {actionLinks.map((item) => (
            <ActionTile item={item} key={item.label} navigate={navigate} />
          ))}
        </div>
      </div>

      <aside className="hero__aside">
        <div className="hero-panel">
          <p className="hero-panel__eyebrow">Focus</p>
          <ul className="hero-panel__list">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel hero-panel--spotlight hero-panel--surface">
          <InteractiveWireSurface accent="#f2b76a" variant="compact" />
          <p className="hero-panel__eyebrow">{content.spotlight.eyebrow}</p>
          <h2>{content.spotlight.title}</h2>
          <p>{content.spotlight.summary}</p>
          <button
            className="button button--tertiary"
            onClick={() => navigate(content.spotlight.target)}
            type="button"
          >
            Open Call of Duty Hub
          </button>
        </div>
      </aside>
    </section>
  );
}
