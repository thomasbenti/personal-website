import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>SpiRob Controller</h3>
            <p>ROS2-based cable-driven hyper-redundant robot controller with MuJoCo simulation.</p>
          </div>
          <div className="project-card">
            <h3>Streamlit NLP App</h3>
            <p>Built a real-time sentiment analyzer using TextBlob and Streamlit Cloud deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;