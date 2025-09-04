import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600">Thomas Bentivoglio</h1>
        <ul className="flex space-x-6 text-lg font-medium text-gray-800">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#research" className="hover:text-blue-600">Research</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;