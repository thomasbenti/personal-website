import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About"
import Projects from "./sections/Projects"
import Resume from "./sections/Resume"
import Contact from "./sections/Contact"
import Research from "./sections/Research";

function App() {
  return (
    <div className="font-sans scroll-smooth w-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Research />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}



export default App;
