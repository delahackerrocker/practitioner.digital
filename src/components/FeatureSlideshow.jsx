import { useEffect, useRef, useState } from "react";

function MediaStage({ item, stageClassName = "" }) {
  const stageClasses = ["feature-stage"];

  if (stageClassName) {
    stageClasses.push(stageClassName);
  }

  if (item.type === "video" && item.embedUrl) {
    return (
      <div className={[...stageClasses, "feature-stage--video"].join(" ")}>
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
      <div className={[...stageClasses, "feature-stage--video"].join(" ")}>
        <video controls playsInline poster={item.poster} preload="metadata">
          <source src={item.src} />
        </video>
      </div>
    );
  }

  if (item.src) {
    return (
      <div
        className={[
          ...stageClasses,
          item.fit === "contain" ? "feature-stage--contain" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <img alt={item.title} src={item.src} />
      </div>
    );
  }

  return (
    <div className={[...stageClasses, "feature-stage--placeholder"].join(" ")}>
      <p className="section-eyebrow">{item.label}</p>
      <h3>{item.title}</h3>
      <p>{item.caption}</p>
    </div>
  );
}

export default function FeatureSlideshow({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (!isFullscreen) {
      return undefined;
    }

    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsFullscreen(false);
        return;
      }

      if (items.length < 2) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => {
        fullscreenButtonRef.current?.focus();
      });
    };
  }, [isFullscreen, items.length]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];
  const compactRail = items.length > 12;
  const canNavigate = items.length > 1;
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };
  const goToNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  const renderControls = (fullscreen = false) => (
    <div
      aria-label={fullscreen ? "Fullscreen slideshow controls" : "Slideshow controls"}
      className={`feature-slideshow__controls ${fullscreen ? "feature-slideshow__controls--fullscreen" : ""}`}
      role="group"
    >
      <button
        aria-label="Show previous slide"
        className="button button--secondary feature-slideshow__control"
        disabled={!canNavigate}
        onClick={goToPrevious}
        type="button"
      >
        Previous
      </button>
      <span
        aria-atomic="true"
        aria-live="polite"
        className="feature-slideshow__count"
      >
        {activeIndex + 1} / {items.length}
      </span>
      <button
        aria-label="Show next slide"
        className="button button--secondary feature-slideshow__control"
        disabled={!canNavigate}
        onClick={goToNext}
        type="button"
      >
        Next
      </button>
      {fullscreen ? (
        <button
          className="button button--secondary feature-slideshow__control"
          onClick={() => setIsFullscreen(false)}
          ref={closeButtonRef}
          type="button"
        >
          Exit Fullscreen
        </button>
      ) : (
        <button
          aria-haspopup="dialog"
          aria-label="Open fullscreen slideshow"
          className="button button--secondary feature-slideshow__control"
          onClick={() => setIsFullscreen(true)}
          ref={fullscreenButtonRef}
          type="button"
        >
          Fullscreen
        </button>
      )}
    </div>
  );

  return (
    <div className="feature-slideshow">
      <div className="feature-slideshow__card">
        <MediaStage item={activeItem} />
        <div className="feature-slideshow__footer">
          <div className="feature-slideshow__meta">
            <span>{activeItem.label}</span>
            <strong>{activeItem.title}</strong>
            {activeItem.caption ? <p>{activeItem.caption}</p> : null}
          </div>
          {renderControls()}
        </div>
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

      {isFullscreen ? (
        <div
          aria-label="Fullscreen slideshow"
          aria-modal="true"
          className="feature-slideshow__overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsFullscreen(false);
            }
          }}
          role="dialog"
        >
          <div className="feature-slideshow__overlay-surface">
            <div className="feature-slideshow__overlay-header">
              <p className="section-eyebrow">Fullscreen slideshow</p>
              <button
                className="button button--secondary feature-slideshow__control"
                onClick={() => setIsFullscreen(false)}
                type="button"
              >
                Close
              </button>
            </div>

            <MediaStage item={activeItem} stageClassName="feature-stage--fullscreen" />

            <div className="feature-slideshow__footer feature-slideshow__footer--fullscreen">
              <div className="feature-slideshow__meta">
                <span>{activeItem.label}</span>
                <strong>{activeItem.title}</strong>
                {activeItem.caption ? <p>{activeItem.caption}</p> : null}
              </div>
              {renderControls(true)}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
