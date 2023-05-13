// Component for the "Projects" section of the website

import React from 'react';

import { FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center  md:flex-row '>
        <div className='mb-16 flex flex-col items-center text-left sm:text-center  md:pr-16  md:mb-0 md:w-1/2  lg:flex-grow lg:pr-24'>
          <FaLaptopCode size={50} color='white' className='mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Projects
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
          I have had the opportunity to apply my skills to projects. While I had fun collaborating with my peers on academic projects, 
          I also learned a lot by working on individual side projects.
        </p>
        </div>





</div>
    
    
    
    
    
    </section>
  )
}

export default Projects;