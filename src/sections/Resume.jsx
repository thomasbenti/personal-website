import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>

      <div className="resume-download">
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          📄 Download Resume
        </a>
      </div>

      <div className="resume-viewer">
        <embed
          src="/Resume.pdf"
          type="application/pdf"
          width="100%"
          height="900px"
        />
      </div>
    </section>
  );
};

export default Resume;
