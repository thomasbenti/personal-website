import React, { useEffect, useMemo, useState } from "react";
import "./Research.css";

const SlideshowCard = ({
  title,
  description,
  href,
  images = [],
  autoPlay = false,
  interval = 3500,
  className = "",
}) => {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter((x) => x?.src) : []),
    [images]
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= safeImages.length) setIdx(0);
  }, [idx, safeImages.length]);

  const prev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (safeImages.length === 0) return;
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const next = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (safeImages.length === 0) return;
    setIdx((i) => (i + 1) % safeImages.length);
  };

  const goTo = (i) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx(i);
  };

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % safeImages.length),
      interval
    );
    return () => clearInterval(t);
  }, [autoPlay, interval, safeImages.length]);

  const CardTag = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const active = safeImages[idx];

  return (
    <CardTag className={`project-card ${className}`} {...cardProps}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-slideshow">
        <div className="project-image-wrapper">
          {active ? (
            <img
              src={active.src}
              alt={active.label || `${title} slide ${idx + 1}`}
              className="project-image"
              loading="lazy"
            />
          ) : (
            <div className="project-image-placeholder">No images found</div>
          )}
        </div>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              className="slide-btn slide-prev"
              aria-label="Previous slide"
              onClick={prev}
            >
              ‹
            </button>

            <button
              type="button"
              className="slide-btn slide-next"
              aria-label="Next slide"
              onClick={next}
            >
              ›
            </button>

            <div className="slide-dots" aria-label="Slide indicators">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot ${i === idx ? "active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={goTo(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </CardTag>
  );
};

const Research = () => {
  const spirobImages = [
    { label: "MuJoCo", src: "/spirob website pics/spirob-mujoco-pic.png" },
    { label: "MuJoCo curled", src: "/spirob website pics/spirob-mujoco-curled-pic.png" },
    { label: "Onshape Part", src: "/spirob website pics/spirob-onshape-part-pic.png" },
    { label: "Onshape Assembly", src: "/spirob website pics/spirob-onshape-assembly-pic.png" },
    { label: "Grasp Demo", src: "/spirob website pics/spirob-grasping-pic.png" },
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-overlay">
        <h2 className="research-heading">Research</h2>

        <div className="research-cards">
          <SlideshowCard
            className="research-card"
            title="SpiRob"
            description="Cable-driven hyper-redundant robot: CAD → simulation → prototype iterations."
            images={spirobImages}
            autoPlay={true}
            interval={3000}
          />

          <div className="research-card">
            <p>Code for robot</p>
            <a
              href="https://github.com/CyPhiLab/spirob_ctrl/tree/KALMAN"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;