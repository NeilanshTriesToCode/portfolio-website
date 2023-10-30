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
      - All elements by default are blurred and hidden.
      - For an element that is on the viewport, add a class to hide and blur it.
      - If it's not on the viewport, remove the above classes so that it's back to being hidden and blur
      - This will result in a scrolling-animation as elements will become opaque (i.e. reappear) when the user scrolls onto them
      */
    // create IntersectionObserver object
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          // check if an element is currently on the viewport or not
          if(entry.isIntersecting){
            // add class to unhide and unblur the element
            //console.log('if', entry.target)
            entry.target.classList.add('show-content');
          }
          else{
            // remove the class if the element is out of focus
            // i.e., entry.isIntersecting = false
            entry.target.classList.remove('show-content');
            //console.log('else', entry.target)
          }
        });
    });

  /*
    since each piece of content (About, Hobbies, Skills, etc.) is enclosed within a <Section> element,
    use <Section> for the attribute selector
  */
  const contents = document.querySelectorAll('.hide-content');

  // using the observer object
  contents.forEach(content => observer.observe(content));
  //console.log(contents)

  // cleanup function for useEffect()
  return () => {
    contents.forEach(content => observer.unobserve(content));
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
