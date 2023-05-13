// Component for the "Skills" section of the website

import React from 'react'

import { RiCodeSSlashFill, RiCodeSSlashLine } from 'react-icons/ri';

const Skills = () => {
  return (
    <section id='skills'> 
      <div className='mx-auto px-10 py-20 container flex flex-col items-center  md:flex-row '>
        <div className='mb-16 flex flex-col items-center text-center  md:pr-16 md:text-left md:mb-0 md:w-1/2  lg:flex-grow lg:pr-24'>
          <RiCodeSSlashFill size={50} color='white' className='mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Skills
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
          Originally from Ahmedabad, India, I'm a Computer Science graduate at UBC Okanagan, Canada. This is my portfolio website. 
          Follow along to know more about me! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
          fuga dolore.
          </p>
        </div>





    </div>
  </section>
  )
}

export default Skills;