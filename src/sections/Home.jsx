// src/sections/Home.jsx
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-50 px-4"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I’m Thomas Bentivoglio
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          I’m a Mechanical Engineering & Computer Science student at CWRU,<br />
          passionate about robotics, mechatronics, and full-stack development.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;