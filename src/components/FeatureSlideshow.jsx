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
const FLASH_PRESS_DURATION = 140;
const STAGE_CLICK_SUPPRESSION_DURATION = 220;

function isPressKey(event) {
  return event.key === " " || event.key === "Enter";
}

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
  const [manualPressedDirection, setManualPressedDirection] = useState(null);
  const [flashPressedDirection, setFlashPressedDirection] = useState(null);
  const fullscreenButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const railRef = useRef(null);
  const railItemRefs = useRef([]);
  const closeButtonRef = useRef(null);
  const flashPressTimeoutRef = useRef(null);
  const restoreFocusRef = useRef(false);
  const suppressStageClickRef = useRef(false);
  const suppressStageClickTimeoutRef = useRef(null);
  const touchStartRef = useRef(null);
  const dialogId = useId();
  const dialogTitleId = useId();
  const dialogCountId = useId();

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(
    () => () => {
      if (flashPressTimeoutRef.current) {
        window.clearTimeout(flashPressTimeoutRef.current);
      }

      if (suppressStageClickTimeoutRef.current) {
        window.clearTimeout(suppressStageClickTimeoutRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    railItemRefs.current = railItemRefs.current.slice(0, items.length);
  }, [items.length]);

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

  useEffect(() => {
    const rail = railRef.current;
    const activeRailItem = railItemRefs.current[activeIndex];

    if (!rail || !activeRailItem || items.length < 2) {
      return undefined;
    }

    const itemWidths = railItemRefs.current
      .filter(Boolean)
      .map((item) => item.getBoundingClientRect().width);

    if (!itemWidths.length) {
      return undefined;
    }

    const averageItemWidth =
      itemWidths.reduce((total, width) => total + width, 0) / itemWidths.length;
    const computedRailStyle = window.getComputedStyle(rail);
    const railGap =
      Number.parseFloat(computedRailStyle.columnGap || computedRailStyle.gap || "0") || 0;
    const edgeThreshold = (averageItemWidth * 2) + (railGap * 2);
    const railRect = rail.getBoundingClientRect();
    const activeItemRect = activeRailItem.getBoundingClientRect();
    const distanceFromLeftEdge = activeItemRect.left - railRect.left;
    const distanceFromRightEdge = railRect.right - activeItemRect.right;

    let targetScrollLeft = null;

    if (distanceFromLeftEdge < edgeThreshold) {
      targetScrollLeft = activeRailItem.offsetLeft - edgeThreshold;
    } else if (distanceFromRightEdge < edgeThreshold) {
      targetScrollLeft =
        activeRailItem.offsetLeft +
        activeRailItem.offsetWidth -
        (rail.clientWidth - edgeThreshold);
    }

    if (targetScrollLeft === null) {
      return undefined;
    }

    const clampedScrollLeft = Math.max(
      0,
      Math.min(targetScrollLeft, rail.scrollWidth - rail.clientWidth),
    );

    if (Math.abs(clampedScrollLeft - rail.scrollLeft) < 2) {
      return undefined;
    }

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.dataset.motionReduced === "true";

    rail.scrollTo({
      left: clampedScrollLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    return undefined;
  }, [activeIndex, items.length]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];
  const compactRail = items.length > 12;
  const canNavigate = items.length > 1;
  const supportsStageNavigation = canNavigate && Boolean(activeItem.src) && activeItem.type !== "video";

  const clearManualPressedDirection = (direction) => {
    setManualPressedDirection((current) => (current === direction ? null : current));
  };

  const flashNavPress = (direction) => {
    if (flashPressTimeoutRef.current) {
      window.clearTimeout(flashPressTimeoutRef.current);
    }

    setFlashPressedDirection(direction);
    flashPressTimeoutRef.current = window.setTimeout(() => {
      setFlashPressedDirection(null);
      flashPressTimeoutRef.current = null;
    }, FLASH_PRESS_DURATION);
  };

  const suppressStageClick = () => {
    suppressStageClickRef.current = true;

    if (suppressStageClickTimeoutRef.current) {
      window.clearTimeout(suppressStageClickTimeoutRef.current);
    }

    suppressStageClickTimeoutRef.current = window.setTimeout(() => {
      suppressStageClickRef.current = false;
      suppressStageClickTimeoutRef.current = null;
    }, STAGE_CLICK_SUPPRESSION_DURATION);
  };

  const isNavButtonPressed = (direction) =>
    manualPressedDirection === direction || flashPressedDirection === direction;

  const navigateByDirection = (direction, options = {}) => {
    if (!canNavigate) {
      return;
    }

    if (options.flash) {
      flashNavPress(direction);
    }

    setActiveIndex((current) => {
      if (direction === "previous") {
        return current === 0 ? items.length - 1 : current - 1;
      }

      return current === items.length - 1 ? 0 : current + 1;
    });
  };

  const goToPrevious = (options) => {
    navigateByDirection("previous", options);
  };

  const goToNext = (options) => {
    navigateByDirection("next", options);
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
      suppressStageClick();
      goToNext();
      return;
    }

    suppressStageClick();
    goToPrevious();
  };

  const handleStageNavigate = (direction) => (event) => {
    if (suppressStageClickRef.current) {
      event.preventDefault();
      suppressStageClickRef.current = false;
      return;
    }

    if (direction === "previous") {
      goToPrevious({ flash: true });
      return;
    }

    goToNext({ flash: true });
  };

  const getNavButtonPressProps = (direction) => ({
    "data-pressed": isNavButtonPressed(direction) ? "true" : "false",
    onBlur: () => {
      clearManualPressedDirection(direction);
    },
    onKeyDown: (event) => {
      if (event.repeat || !isPressKey(event)) {
        return;
      }

      setManualPressedDirection(direction);
    },
    onKeyUp: (event) => {
      if (!isPressKey(event)) {
        return;
      }

      clearManualPressedDirection(direction);
    },
    onPointerCancel: () => {
      clearManualPressedDirection(direction);
    },
    onPointerDown: () => {
      setManualPressedDirection(direction);
    },
    onPointerLeave: () => {
      clearManualPressedDirection(direction);
    },
    onPointerUp: () => {
      clearManualPressedDirection(direction);
    },
  });

  const renderStage = ({ shellClassName = "", stageClassName = "" } = {}) => (
    <div
      className={[
        "feature-slideshow__stage-shell",
        shellClassName,
        supportsStageNavigation ? "feature-slideshow__stage-shell--navigable" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MediaStage item={activeItem} stageClassName={stageClassName} />

      {supportsStageNavigation ? (
        <div aria-hidden="true" className="feature-slideshow__stage-hit-areas">
          <button
            className="feature-slideshow__stage-hit-area feature-slideshow__stage-hit-area--previous"
            onClick={handleStageNavigate("previous")}
            onMouseDown={(event) => {
              event.preventDefault();
            }}
            tabIndex={-1}
            type="button"
          />
          <button
            className="feature-slideshow__stage-hit-area feature-slideshow__stage-hit-area--next"
            onClick={handleStageNavigate("next")}
            onMouseDown={(event) => {
              event.preventDefault();
            }}
            tabIndex={-1}
            type="button"
          />
        </div>
      ) : null}
    </div>
  );

  const renderInlineControls = () => (
    <div
      aria-label="Slideshow controls"
      className="feature-slideshow__controls"
      role="group"
    >
      <button
        aria-label="Show previous slide"
        className="button button--secondary feature-slideshow__control feature-slideshow__nav-button"
        disabled={!canNavigate}
        onClick={goToPrevious}
        {...getNavButtonPressProps("previous")}
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
        className="button button--secondary feature-slideshow__control feature-slideshow__nav-button"
        disabled={!canNavigate}
        onClick={goToNext}
        {...getNavButtonPressProps("next")}
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
        {renderStage()}
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
        <div
          className={`feature-slideshow__rail ${compactRail ? "is-compact" : ""}`}
          ref={railRef}
        >
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
                ref={(element) => {
                  railItemRefs.current[index] = element;
                }}
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
                className="feature-slideshow__lightbox-arrow feature-slideshow__lightbox-arrow--previous feature-slideshow__nav-button"
                onClick={goToPrevious}
                {...getNavButtonPressProps("previous")}
                type="button"
              >
                <span aria-hidden="true">&lt;</span>
              </button>

              <button
                aria-label="Show next slide"
                className="feature-slideshow__lightbox-arrow feature-slideshow__lightbox-arrow--next feature-slideshow__nav-button"
                onClick={goToNext}
                {...getNavButtonPressProps("next")}
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
            {renderStage({
              shellClassName: "feature-slideshow__lightbox-stage-shell",
              stageClassName: "feature-stage--lightbox",
            })}
          </div>

          <div
            aria-label="Fullscreen slideshow controls"
            className="feature-slideshow__lightbox-bar"
            role="group"
          >
            {canNavigate ? (
              <button
                aria-label="Show previous slide"
                className="button button--secondary feature-slideshow__lightbox-step feature-slideshow__nav-button"
                onClick={goToPrevious}
                {...getNavButtonPressProps("previous")}
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
                className="button button--secondary feature-slideshow__lightbox-step feature-slideshow__nav-button"
                onClick={goToNext}
                {...getNavButtonPressProps("next")}
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
