import About from './components/About';
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-gray-400 bg-slate-900 body-font">
      <Navbar />
      <About />
      <Hobbies />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    
  )
}

export default App
