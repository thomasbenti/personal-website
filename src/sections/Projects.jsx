import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-grid">
          <a
            href="https://github.com/thomasbenti/case-eaters"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Case Eaters</h3>
            <p>
              A website where we allowed people on the meal plan to auction off
              meal swipes, to reduce food waste and save students money. As well
              as making a map for users to post events on campus that have free
              food. (IN PROGRESS)
            </p>
          </a>

          <a
            href="https://caseeaters.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Sun Tracking Solar Panel. IN PROGRESS </h3>
            <p>
              
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;