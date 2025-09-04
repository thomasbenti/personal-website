import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Thomas Bentivoglio</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;