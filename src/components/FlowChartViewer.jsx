import { useEffect, useId, useRef, useState } from "react";

// Dialog focus stays local so inspect mode behaves like a real modal.
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type=\"hidden\"])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "[tabindex]:not([tabindex=\"-1\"])",
].join(", ");

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const BUTTON_ZOOM_STEP = 0.35;
const WHEEL_ZOOM_STEP = 0.22;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
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

// Flow charts need zoom and pan because the source images can be much wider than the page.
export default function FlowChartViewer({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInspecting, setIsInspecting] = useState(false);
  const [view, setView] = useState({ scale: MIN_SCALE, offsetX: 0, offsetY: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dialogRef = useRef(null);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const imageRef = useRef(null);
  const zoomSurfaceRef = useRef(null);
  const dragStateRef = useRef(null);
  const restoreFocusRef = useRef(false);
  const dialogId = useId();
  const dialogTitleId = useId();
  const dialogHelpId = useId();

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    setView({ scale: MIN_SCALE, offsetX: 0, offsetY: 0 });
    setIsDragging(false);
    dragStateRef.current = null;
  }, [activeIndex, isInspecting]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return undefined;
    }

    const handleCancel = (event) => {
      event.preventDefault();
      restoreFocusRef.current = true;
      setIsInspecting(false);
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

    if (!isInspecting) {
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
        openButtonRef.current?.focus();
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
  }, [isInspecting]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];
  const canNavigate = items.length > 1;

  const clampView = (scale, offsetX, offsetY) => {
    const surface = zoomSurfaceRef.current;
    const image = imageRef.current;

    if (!surface || !image) {
      return { scale, offsetX, offsetY };
    }

    // Clamp pan to the visible image bounds so users cannot lose the chart.
    const maxOffsetX = Math.max(0, ((image.offsetWidth * scale) - surface.clientWidth) / 2);
    const maxOffsetY = Math.max(0, ((image.offsetHeight * scale) - surface.clientHeight) / 2);

    return {
      scale,
      offsetX: clamp(offsetX, -maxOffsetX, maxOffsetX),
      offsetY: clamp(offsetY, -maxOffsetY, maxOffsetY),
    };
  };

  const updateView = (nextScale, nextOffsetX, nextOffsetY) => {
    setView(clampView(nextScale, nextOffsetX, nextOffsetY));
  };

  const resetView = () => {
    setView({ scale: MIN_SCALE, offsetX: 0, offsetY: 0 });
    setIsDragging(false);
    dragStateRef.current = null;
  };

  const getZoomPoint = (event) => {
    const surface = zoomSurfaceRef.current;

    if (!surface) {
      return { x: 0, y: 0 };
    }

    const rect = surface.getBoundingClientRect();

    return {
      x: event.clientX - rect.left - (rect.width / 2),
      y: event.clientY - rect.top - (rect.height / 2),
    };
  };

  const zoomTo = (nextScale, point = { x: 0, y: 0 }) => {
    setView((current) => {
      const clampedScale = clamp(nextScale, MIN_SCALE, MAX_SCALE);

      if (clampedScale === current.scale) {
        return current;
      }

      // Zoom around the pointer instead of snapping back to the image center.
      const ratio = clampedScale / current.scale;
      const nextOffsetX = point.x - ((point.x - current.offsetX) * ratio);
      const nextOffsetY = point.y - ((point.y - current.offsetY) * ratio);

      return clampView(clampedScale, nextOffsetX, nextOffsetY);
    });
  };

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

  const openInspect = () => {
    restoreFocusRef.current = false;
    setIsInspecting(true);
  };

  const closeInspect = () => {
    restoreFocusRef.current = true;
    setIsInspecting(false);
  };

  const handleDialogKeyDown = (event) => {
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

    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      zoomTo(view.scale + BUTTON_ZOOM_STEP);
    }

    if (event.key === "-" || event.key === "_") {
      event.preventDefault();
      zoomTo(view.scale - BUTTON_ZOOM_STEP);
    }

    if (event.key === "0") {
      event.preventDefault();
      resetView();
    }
  };

  const handleZoomSurfaceWheel = (event) => {
    event.preventDefault();

    const direction = event.deltaY > 0 ? -1 : 1;
    const zoomAmount = direction * WHEEL_ZOOM_STEP;
    zoomTo(view.scale + zoomAmount, getZoomPoint(event));
  };

  const handleZoomSurfacePointerDown = (event) => {
    if (view.scale <= MIN_SCALE) {
      return;
    }

    event.preventDefault();
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: view.offsetX,
      offsetY: view.offsetY,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handleZoomSurfacePointerMove = (event) => {
    const dragState = dragStateRef.current;

    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    updateView(
      view.scale,
      dragState.offsetX + (event.clientX - dragState.startX),
      dragState.offsetY + (event.clientY - dragState.startY),
    );
  };

  const endDrag = (event) => {
    if (event && dragStateRef.current?.pointerId !== event.pointerId) {
      return;
    }

    if (event?.currentTarget?.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current = null;
    setIsDragging(false);
  };

  return (
    <div className="flowchart-viewer">
      <div className="feature-slideshow__card flowchart-viewer__card">
        <button
          aria-controls={dialogId}
          aria-haspopup="dialog"
          aria-label={`Inspect ${activeItem.title}`}
          className="flowchart-viewer__preview"
          onClick={openInspect}
          ref={openButtonRef}
          type="button"
        >
          <img alt={activeItem.title} draggable="false" src={activeItem.src} />
          <span className="flowchart-viewer__preview-badge">Click to Inspect</span>
        </button>

        <div className="feature-slideshow__footer">
          <div className="feature-slideshow__meta">
            <span>{activeItem.label}</span>
            <strong>{activeItem.title}</strong>
            {activeItem.caption ? <p>{activeItem.caption}</p> : null}
          </div>

          <div className="feature-slideshow__controls" role="group" aria-label="Flow chart controls">
            {canNavigate ? (
              <button
                aria-label="Show previous flow chart"
                className="button button--secondary feature-slideshow__control"
                onClick={goToPrevious}
                type="button"
              >
                Previous
              </button>
            ) : null}

            <span className="feature-slideshow__count">
              {canNavigate ? `${activeIndex + 1} / ${items.length}` : "Zoom and Pan"}
            </span>

            {canNavigate ? (
              <button
                aria-label="Show next flow chart"
                className="button button--secondary feature-slideshow__control"
                onClick={goToNext}
                type="button"
              >
                Next
              </button>
            ) : null}

            <button
              aria-controls={dialogId}
              aria-haspopup="dialog"
              className="button button--secondary feature-slideshow__control"
              onClick={openInspect}
              type="button"
            >
              Inspect
            </button>
          </div>
        </div>
      </div>

      {items.length > 1 ? (
        <div className="feature-slideshow__rail">
          {items.map((item, index) => (
            <button
              aria-pressed={activeIndex === index}
              className={`feature-rail__item ${activeIndex === index ? "is-active" : ""}`}
              key={`${item.title}-${index}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span>{item.label}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
      ) : null}

      <dialog
        aria-describedby={dialogHelpId}
        aria-labelledby={dialogTitleId}
        className="feature-slideshow__lightbox flowchart-viewer__lightbox"
        id={dialogId}
        onKeyDown={handleDialogKeyDown}
        ref={dialogRef}
      >
        <div className="feature-slideshow__lightbox-shell flowchart-viewer__lightbox-shell">
          <h2 className="visually-hidden" id={dialogTitleId}>
            Inspectable flow chart for {activeItem.title}
          </h2>

          <button
            aria-label="Close flow chart viewer"
            className="button button--secondary feature-slideshow__lightbox-close"
            onClick={closeInspect}
            ref={closeButtonRef}
            type="button"
          >
            Close
          </button>

          <div className="flowchart-viewer__toolbar" role="group" aria-label="Zoom controls">
            <button
              aria-label="Zoom out"
              className="button button--secondary flowchart-viewer__toolbar-button"
              onClick={() => zoomTo(view.scale - BUTTON_ZOOM_STEP)}
              type="button"
            >
              -
            </button>
            <span className="feature-slideshow__count feature-slideshow__count--lightbox">
              {Math.round(view.scale * 100)}%
            </span>
            <button
              aria-label="Zoom in"
              className="button button--secondary flowchart-viewer__toolbar-button"
              onClick={() => zoomTo(view.scale + BUTTON_ZOOM_STEP)}
              type="button"
            >
              +
            </button>
            <button
              className="button button--secondary flowchart-viewer__toolbar-button flowchart-viewer__toolbar-button--reset"
              onClick={resetView}
              type="button"
            >
              Reset
            </button>
          </div>

          <div className="feature-slideshow__lightbox-stage flowchart-viewer__lightbox-stage">
            <div
              className={`flowchart-viewer__zoom-surface ${view.scale > MIN_SCALE ? "is-zoomed" : ""} ${
                isDragging ? "is-dragging" : ""
              }`}
              onPointerCancel={endDrag}
              onPointerDown={handleZoomSurfacePointerDown}
              onPointerMove={handleZoomSurfacePointerMove}
              onPointerUp={endDrag}
              onWheel={handleZoomSurfaceWheel}
              ref={zoomSurfaceRef}
              style={{ touchAction: view.scale > MIN_SCALE ? "none" : "pinch-zoom" }}
            >
              <img
                alt={activeItem.title}
                className="flowchart-viewer__zoom-image"
                draggable="false"
                onLoad={() => {
                  setView((current) =>
                    clampView(current.scale, current.offsetX, current.offsetY),
                  );
                }}
                ref={imageRef}
                src={activeItem.src}
                style={{
                  transform: `translate(${view.offsetX}px, ${view.offsetY}px) scale(${view.scale})`,
                }}
              />
            </div>
          </div>

          <div className="feature-slideshow__lightbox-bar flowchart-viewer__lightbox-bar">
            {canNavigate ? (
              <button
                aria-label="Show previous flow chart"
                className="button button--secondary feature-slideshow__lightbox-step"
                onClick={goToPrevious}
                type="button"
              >
                Previous
              </button>
            ) : (
              <span className="feature-slideshow__lightbox-spacer" aria-hidden="true" />
            )}

            <p className="flowchart-viewer__lightbox-help" id={dialogHelpId}>
              Drag while zoomed. Use the wheel or buttons to change scale.
            </p>

            {canNavigate ? (
              <button
                aria-label="Show next flow chart"
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
