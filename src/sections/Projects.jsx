import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const solarImages = [
    {
      label: "Assembly View",
      src: "/Solar Tracker Assembly.png",
    },
    {
      label: "Exploded View",
      src: "/Solar Tracker Exploded Veiw.png",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(solarImages[0].src);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="project-grid">
          {/* Case Eaters */}
          <a
            href="https://github.com/thomasbenti/case-eaters"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Case Eaters</h3>
            <p>
              A website where students on a meal plan can auction off meal
              swipes to reduce food waste and save money, along with a campus
              map for posting free food events. (IN PROGRESS)
            </p>
          </a>

          {/* Solar Tracker */}
          <div className="project-card">
            <h3>Sun Tracking Solar Panel</h3>

            <p>
              Dual-axis solar tracker prototype with a tripod base and
              actuator-driven tilt mechanism.
            </p>

            {/* Dropdown */}
            <label htmlFor="solar-view" className="project-label">
              View
            </label>
            <select
              id="solar-view"
              className="project-dropdown"
              value={selectedImage}
              onChange={(e) => setSelectedImage(e.target.value)}
            >
              {solarImages.map((img) => (
                <option key={img.src} value={img.src}>
                  {img.label}
                </option>
              ))}
            </select>

            {/* Image */}
            <div className="project-image-wrapper">
              <img
                src={selectedImage}
                alt="Solar tracker CAD view"
                className="project-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;