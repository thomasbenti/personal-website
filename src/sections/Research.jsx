import React from "react";
import "./Research.css"; 
const researchItems = [
  {
    title: "About physical robot",
    url: "https://github.com/yourusername/about-robot",
  },
  {
    title: "Code for robot",
    url: "https://github.com/CyPhilLab/spirob_ctrl/tree/KALMAN",
  },
];

const Research = () => {
  return (
    <section id="research" className="research-section">
      <div className="research-overlay">
        <h2 className="research-heading">Research</h2>
        <div className="research-cards">
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