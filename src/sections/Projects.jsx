import React, { useEffect, useState } from "react";
import "./Projects.css";

const SlideshowCard = ({
  title,
  description,
  href,
  images,
  autoPlay = false,
  interval = 3500,
}) => {
  const [idx, setIdx] = useState(0);

  const prev = (e) => {
    e?.preventDefault?.();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e?.preventDefault?.();
    setIdx((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, images.length]);

  const CardTag = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardTag className="project-card" {...cardProps}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div
        className="project-slideshow"
        onClick={(e) => {
          // prevent anchor navigation when clicking slideshow controls
          if (href) e.preventDefault();
        }}
      >
        <div className="project-image-wrapper">
          <img
            src={images[idx].src}
            alt={images[idx].label || `${title} slide ${idx + 1}`}
            className="project-image"
            loading="lazy"
          />
        </div>

        {images.length > 1 && (
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
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot ${i === idx ? "active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIdx(i);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </CardTag>
  );
};

const Projects = () => {
  const caseEatersImages = [
    { label: "Home", src: "/case-eaters-1.png" },
    { label: "Map", src: "/case-eaters-2.png" },
    // add more screenshots here
  ];

  const solarImages = [
    { label: "Assembly View", src: "/Solar Tracker Assembly.png" },
    { label: "Exploded View", src: "/Solar Tracker Exploded Veiw.png" },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="project-grid">
          <SlideshowCard
            title="Case Eaters"
            description="A website where students on a meal plan can auction off meal swipes to reduce food waste and save money, along with a campus map for posting free food events. (IN PROGRESS)"
            href="https://github.com/thomasbenti/case-eaters"
            images={caseEatersImages}
            autoPlay={false}
          />

          <SlideshowCard
            title="Sun Tracking Solar Panel"
            description="Dual-axis solar tracker prototype with a tripod base and actuator-driven tilt mechanism."
            images={solarImages}
            autoPlay={true}
            interval={3000}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;