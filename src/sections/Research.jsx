import React from "react";
import "./Research.css";

const researchItems = [
  {
    title: "About physical robot",
    url: "https://github.com/yourusername/about-robot",
  },
  {
    title: "Code for robot",
    url: "https://github.com/yourusername/robot-code",
  },
];

const Research = () => {
  return (
    <section id="research" className="research">
      <div className="research-container">
        <h2>Research</h2>

        <div className="research-grid">
          {researchItems.map((item, index) => (
            <div key={index} className="research-card">
              <p>{item.title}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;