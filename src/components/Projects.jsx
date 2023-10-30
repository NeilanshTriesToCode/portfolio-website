// Component for the "Projects" section of the website

import React from 'react';

import { FaLaptopCode } from 'react-icons/fa';

import { projects } from '../data';

const Projects = () => {
  return (
    <section id='projects' className='hide-content'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center '>
        <div className='mx-auto mb-4 w-full flex flex-col items-center text-center  md:mb-0  md:w-3/4 lg:w-2/3  lg:flex-grow  xl:pr-0'>
          <FaLaptopCode size={50} color='white' className='mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Projects
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
          I've had the chance to put my skills into action on various projects. 
          While collaborating with peers on academic projects was enjoyable, 
          I've equally gained valuable insights through my involvement in side projects.
          </p>
        </div>

        <div className='mt-4 w-5/6 grid gap-9 grid-cols-1  xl:grid-cols-2'>
          { 
            projects.map((project, index) => (
              <a href={project.link} key={project.image} className="">
                <div className="flex relative ">
                  <img alt={project.name} className="object-cover absolute inset-0 w-full h-full" src={project.image}/>

                  <div className='h-5/6 px-8 py-20 relative z-10 bg-slate-800 opacity-0 flex flex-col text-left  hover:opacity-100 hover:border hover:border-slate-700'>
                    <h2 className='mb-1 title-font font-medium text-white text-xl'>{project.name}</h2>
                    <h4 className="text-lg text-green-500 mb-3">{project.stack}</h4>
                    <p className="leading-normal tracking-tight">{project.description}</p>
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