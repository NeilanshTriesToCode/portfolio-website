import React from "react";

import About from './components/About';
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Hobbies />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
