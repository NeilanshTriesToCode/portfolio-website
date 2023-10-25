import { useEffect } from 'react';

import About from './components/About';
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  // useEffect for scroll-animation
  // as useEffect or componentDidUpdate() is preferred over document.onload
  // this will execute only once, when the App Component loads for the first time
  useEffect(() => {
      // using IntersectionObserver for the scrolling-animation
      /*
      - In this case, intersectionObserver will help detect which elements are currently on the viewport
      - All elements by default are blurred and opaque.
      - For an element that is on the viewport, add a class to remove its opacity and blur.
      - If it's not on the viewport, remove the above classes so that it's back to being opaque and blur
      - This will result in a scrolling-animation as elements will seem to appear when user scrolls onto them
      */
    // create IntersectionObserver object
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          // check if an element is currently on the viewport or not
          if(entry.isIntersecting){
            // add class to reduce opacity to 0 and unblur the element
            entry.target.classList.add('opacity-0 blur-none');
          }
          else{
            // remove the class if the element is out of focus
            // i.e., entry.isIntersecting = false
            entry.target.classList.remove('opacity-0 blur-none');
          }
        });
    });

  /*
    since each piece of content (About, Hobbies, Skills, etc.) is enclosed within a <Section> element,
    use <Section> for the attribute selector
  */
  const content = document.getElementsByTagName('section');
    
  // using the observer object
  observer.observe(content);

  // cleanup function for useEffect()
  return () => {
    // disconnect InteractionObserver object
    observer.disconnect();
  }

  }, []);

  return (
    <main className="text-gray-400 bg-slate-900 body-font font-sans">
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
