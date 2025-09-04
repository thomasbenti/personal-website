import React from "react";
import myPhoto from "../assets/profile.jpeg"; // 🔁 Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm Thomas Bentivoglio, a Mechanical Engineering and Computer Science double major at Case Western Reserve University.
            I focus on robotics, embedded systems, and full-stack software development. I’m currently working on cable-driven hyper-redundant robots,
            integrating Onshape CAD with ROS2 and MuJoCo simulation for real-time control research.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={myPhoto}
            alt="Thomas Bentivoglio"
            className="w-100 h-100 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;