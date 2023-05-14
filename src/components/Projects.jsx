// Component for the "Projects" section of the website

import React from 'react';

import { FaLaptopCode } from 'react-icons/fa';

import { projects } from '../data';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center md:flex-row xl:flex-col '>
        <div className='mx-auto mb-16 w-full flex flex-col items-center text-center  md:mb-0 md:pr-24 md:w-1/2  lg:flex-grow  xl:pr-0'>
          <FaLaptopCode size={50} color='white' className='mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Projects
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
          I have had the opportunity to apply my skills to projects. While I had fun collaborating with my peers on academic projects, 
          I have also learned a lot by working on individual side projects.
        </p>
        </div>

        <div className='w-5/6 grid gap-9 grid-cols-2'>
          { 
            projects.map((project) => (
              <a href={project.link} key={project.image} className="max-h-min">
                <div className="flex relative ">
                  <img alt="gallery" className="object-cover absolute inset-0 w-full h-full" src={project.image}/>

                  <div className='px-8 py-20 relative z-10 bg-slate-800 opacity-0 flex flex-col text-left  hover:opacity-100 hover:border hover:border-slate-700'>
                    <h2 className='mb-4 title-font font-medium text-white text-xl'>{project.name}</h2>
                    <h4 className="text-lg text-green-500 mb-4">{project.stack}</h4>
                    <p className="leading-relaxed">{project.description}</p>

                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>    
    </section>
  )
}

export default Projects;