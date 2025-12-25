import React, { useEffect, useMemo, useState } from "react";
import "./Projects.css";

const SlideshowCard = ({
  title,
  description,
  href,
  images = [],
  autoPlay = false,
  interval = 3500,
}) => {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter((x) => x?.src) : []),
    [images]
  );

  const [idx, setIdx] = useState(0);

  // reset index if images change or idx goes out of range
  useEffect(() => {
    if (idx >= safeImages.length) setIdx(0);
  }, [idx, safeImages.length]);

  const prev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const next = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    <CardTag className="project-card" {...cardProps}>
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

const Projects = () => {
  const caseEatersImages = [
    { label: "Home", src: "/case-eaters-1.png" },
    { label: "Map", src: "/case-eaters-2.png" },
  ];

  // IMPORTANT: spaces in filenames must be URL-encoded OR rename the files.
  // Recommended rename to: solar-tracker-assembly.png, solar-tracker-exploded-view.png
  const solarImages = [
    { label: "Assembly View", src: "/Solar%20Tracker%20Assembly.png" },
    { label: "Exploded View", src: "/Solar%20Tracker%20Exploded%20Veiw.png" },
    { label: "Slide 1",  src: "/sunnies-slides/DDR_ Sunnies1.png" },
    { label: "Slide 3",  src: "/sunnies-slides/DDR_ Sunnies3.png" },
    { label: "Slide 4",  src: "/sunnies-slides/DDR_ Sunnies4.png" },
    { label: "Slide 5",  src: "/sunnies-slides/DDR_ Sunnies5.png" },
    { label: "Slide 6",  src: "/sunnies-slides/DDR_ Sunnies6.png" },
    { label: "Slide 7",  src: "/sunnies-slides/DDR_ Sunnies7.png" },
    { label: "Slide 8",  src: "/sunnies-slides/DDR_ Sunnies8.png" },
    { label: "Slide 9",  src: "/sunnies-slides/DDR_ Sunnies9.png" },
    { label: "Slide 10", src: "/sunnies-slides/DDR_ Sunnies10.png" },
    { label: "Slide 11", src: "/sunnies-slides/DDR_ Sunnies11.png" },
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