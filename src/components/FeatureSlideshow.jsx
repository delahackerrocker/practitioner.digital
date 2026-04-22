import { useEffect, useId, useRef, useState } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type=\"hidden\"])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "video[controls]",
  "[tabindex]:not([tabindex=\"-1\"])",
].join(", ");

const SWIPE_DISTANCE_THRESHOLD = 48;

function getFocusableElements(container) {
  if (!container) {
    return [];
  }

  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (element) =>
      element.getAttribute("aria-hidden") !== "true" &&
      !element.hasAttribute("disabled") &&
      element.getClientRects().length > 0,
  );
}

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
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const restoreFocusRef = useRef(false);
  const touchStartRef = useRef(null);
  const dialogId = useId();
  const dialogTitleId = useId();
  const dialogCountId = useId();

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return undefined;
    }

    const handleCancel = (event) => {
      event.preventDefault();
      restoreFocusRef.current = true;
      setIsFullscreen(false);
    };

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return undefined;
    }

    if (!isFullscreen) {
      if (dialog.open) {
        if (typeof dialog.close === "function") {
          dialog.close();
        } else {
          dialog.removeAttribute("open");
        }
      }

      if (!restoreFocusRef.current) {
        return undefined;
      }

      const restoreFocusFrame = window.requestAnimationFrame(() => {
        fullscreenButtonRef.current?.focus();
        restoreFocusRef.current = false;
      });

      return () => {
        window.cancelAnimationFrame(restoreFocusFrame);
      };
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    }

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(focusFrame);
    };
  }, [isFullscreen]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];
  const compactRail = items.length > 12;
  const canNavigate = items.length > 1;
  const goToPrevious = () => {
    if (!canNavigate) {
      return;
    }

    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };
  const goToNext = () => {
    if (!canNavigate) {
      return;
    }

    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };
  const openFullscreen = () => {
    restoreFocusRef.current = false;
    setIsFullscreen(true);
  };
  const closeFullscreen = () => {
    restoreFocusRef.current = true;
    setIsFullscreen(false);
  };

  const handleLightboxKeyDown = (event) => {
    if (event.key === "Tab") {
      const focusableElements = getFocusableElements(dialogRef.current);

      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstElement || activeElement === dialogRef.current) {
          event.preventDefault();
          lastElement.focus();
        }

        return;
      }

      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }

      return;
    }

    if (!canNavigate) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  const handleLightboxTouchStart = (event) => {
    if (!canNavigate || event.touches.length !== 1) {
      return;
    }

    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleLightboxTouchEnd = (event) => {
    if (!canNavigate || !touchStartRef.current || event.changedTouches.length !== 1) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (
      Math.abs(deltaX) < SWIPE_DISTANCE_THRESHOLD ||
      Math.abs(deltaY) > Math.abs(deltaX) * 0.7
    ) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  const renderInlineControls = () => (
    <div
      aria-label="Slideshow controls"
      className="feature-slideshow__controls"
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
      <button
        aria-controls={dialogId}
        aria-haspopup="dialog"
        aria-label="Open fullscreen slideshow"
        className="button button--secondary feature-slideshow__control"
        onClick={openFullscreen}
        ref={fullscreenButtonRef}
        type="button"
      >
        Fullscreen
      </button>
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
          {renderInlineControls()}
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

      <dialog
        aria-describedby={dialogCountId}
        aria-labelledby={dialogTitleId}
        className="feature-slideshow__lightbox"
        id={dialogId}
        onKeyDown={handleLightboxKeyDown}
        ref={dialogRef}
      >
        <div className="feature-slideshow__lightbox-shell">
          <h2 className="visually-hidden" id={dialogTitleId}>
            Fullscreen slideshow for {activeItem.title}
          </h2>

          <button
            aria-label="Close fullscreen slideshow"
            className="button button--secondary feature-slideshow__lightbox-close"
            onClick={closeFullscreen}
            ref={closeButtonRef}
            type="button"
          >
            Close
          </button>

          {canNavigate ? (
            <>
              <button
                aria-label="Show previous slide"
                className="feature-slideshow__lightbox-arrow feature-slideshow__lightbox-arrow--previous"
                onClick={goToPrevious}
                type="button"
              >
                <span aria-hidden="true">&lt;</span>
              </button>

              <button
                aria-label="Show next slide"
                className="feature-slideshow__lightbox-arrow feature-slideshow__lightbox-arrow--next"
                onClick={goToNext}
                type="button"
              >
                <span aria-hidden="true">&gt;</span>
              </button>
            </>
          ) : null}

          <div
            className="feature-slideshow__lightbox-stage"
            onTouchCancel={() => {
              touchStartRef.current = null;
            }}
            onTouchEnd={handleLightboxTouchEnd}
            onTouchStart={handleLightboxTouchStart}
          >
            <MediaStage item={activeItem} stageClassName="feature-stage--lightbox" />
          </div>

          <div
            aria-label="Fullscreen slideshow controls"
            className="feature-slideshow__lightbox-bar"
            role="group"
          >
            {canNavigate ? (
              <button
                aria-label="Show previous slide"
                className="button button--secondary feature-slideshow__lightbox-step"
                onClick={goToPrevious}
                type="button"
              >
                Previous
              </button>
            ) : (
              <span className="feature-slideshow__lightbox-spacer" aria-hidden="true" />
            )}

            <span
              aria-atomic="true"
              aria-label={`Slide ${activeIndex + 1} of ${items.length}`}
              aria-live="polite"
              className="feature-slideshow__count feature-slideshow__count--lightbox"
              id={dialogCountId}
            >
              {activeIndex + 1} / {items.length}
            </span>

            {canNavigate ? (
              <button
                aria-label="Show next slide"
                className="button button--secondary feature-slideshow__lightbox-step"
                onClick={goToNext}
                type="button"
              >
                Next
              </button>
            ) : (
              <span className="feature-slideshow__lightbox-spacer" aria-hidden="true" />
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}
