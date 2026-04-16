import { useEffect, useState } from "react";

function MediaStage({ item }) {
  if (item.type === "video" && item.embedUrl) {
    return (
      <div className="feature-stage feature-stage--video">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={item.embedUrl}
          title={item.title}
        />
      </div>
    );
  }

  if (item.type === "video" && item.src) {
    return (
      <div className="feature-stage feature-stage--video">
        <video controls playsInline poster={item.poster} preload="metadata">
          <source src={item.src} />
        </video>
      </div>
    );
  }

  if (item.src) {
    return (
      <div className={`feature-stage ${item.fit === "contain" ? "feature-stage--contain" : ""}`}>
        <img alt={item.title} src={item.src} />
      </div>
    );
  }

  return (
    <div className="feature-stage feature-stage--placeholder">
      <p className="section-eyebrow">{item.label}</p>
      <h3>{item.title}</h3>
      <p>{item.caption}</p>
    </div>
  );
}

export default function FeatureSlideshow({ eyebrow, intro, items, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];
  const compactRail = items.length > 12;

  return (
    <div className="feature-slideshow">
      <div className="feature-slideshow__stage">
        <MediaStage item={activeItem} />
      </div>

      <div className="feature-slideshow__sidebar">
        <p className="section-eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{intro}</p>
        <div className="feature-slideshow__meta">
          <span>{activeItem.label}</span>
          <strong>{activeItem.title}</strong>
          <p>{activeItem.caption}</p>
        </div>

        {items.length > 1 ? (
          <div className="feature-slideshow__nav">
            <button
              className="button button--secondary"
              onClick={() =>
                setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1))
              }
              type="button"
            >
              Previous
            </button>
            <span>
              {activeIndex + 1} / {items.length}
            </span>
            <button
              className="button button--secondary"
              onClick={() =>
                setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1))
              }
              type="button"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>

      {items.length > 1 ? (
        <div className={`feature-slideshow__rail ${compactRail ? "is-compact" : ""}`}>
          {items.map((item, index) => {
            const railLabel = compactRail
              ? item.type === "video"
                ? "Video"
                : "Page"
              : item.label;

            const railTitle = compactRail
              ? item.shortLabel ?? String(index + 1).padStart(2, "0")
              : item.title;

            return (
              <button
                aria-pressed={activeIndex === index}
                className={`feature-rail__item ${activeIndex === index ? "is-active" : ""}`}
                key={`${item.title}-${index}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span>{railLabel}</span>
                <strong>{railTitle}</strong>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
