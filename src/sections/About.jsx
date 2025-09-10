import React from "react";
import profile from "../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Thomas Bentivoglio, a Mechanical Engineering and Computer Science double major at Case Western Reserve University.
            I focus on robotics, embedded systems, and full-stack software development. I’m currently working on cable-driven hyper-redundant robots,
            integrating Onshape CAD with ROS2 and MuJoCo simulation for real-time control research.
          </p>
        </div>
        <div className="about-image">
          <img src={profile} alt="Thomas Bentivoglio" />
        </div>
      </div>
    </section>
  );
};

export default About;