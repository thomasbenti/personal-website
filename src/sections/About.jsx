import React from "react";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm Thomas Bentivoglio, a Mechanical Engineering and Computer Science double major at Case Western Reserve University.
            I focus on robotics, embedded systems, and full-stack software development. I’m currently working on cable-driven hyper-redundant robots,
            integrating Onshape CAD with ROS2 and MuJoCo simulation for real-time control research.
          </p>
        </div>

        {/* Image Right */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Thomas Bentivoglio"
            className="rounded-xl shadow-xl w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;