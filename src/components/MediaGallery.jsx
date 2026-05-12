import { useEffect, useState } from "react";

// Keeps generic project media simple: one active item, one summary, one chip row.
function MediaFrame({ item }) {
  if (item.type === "video" && item.embedUrl) {
    return (
      <div className="media-frame media-frame--embed">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={item.embedUrl}
          title={item.title}
        />
      </div>
    );
  }

  if (item.type === "image" && item.src) {
    return (
      <div className="media-frame">
        <img alt={item.title} src={item.src} />
      </div>
    );
  }

  return (
    <div className="media-frame media-frame--placeholder">
      <span>{item.label}</span>
      <strong>{item.title}</strong>
      <p>{item.caption}</p>
    </div>
  );
}

export default function MediaGallery({ media, projectTitle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [media]);

  if (!media.length) {
    return null;
  }

  const activeItem = media[activeIndex];

  return (
    <div className="media-gallery">
      <div className="media-gallery__stage">
        <MediaFrame item={activeItem} />
      </div>

      <div className="media-gallery__summary">
        <p className="section-eyebrow">Media</p>
        <h3>{activeItem.title}</h3>
        <p>Selected media from {projectTitle}. {activeItem.caption}</p>
      </div>

      <div className="media-gallery__controls">
        {media.map((item, index) => (
          <button
            aria-pressed={activeIndex === index}
            className={`media-chip ${activeIndex === index ? "is-active" : ""}`}
            key={`${item.title}-${index}`}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{item.label}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
