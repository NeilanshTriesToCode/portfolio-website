// Component for the "Skills" section of the website

import React from 'react'

import { RiCodeSSlashFill } from 'react-icons/ri';

const Skills = () => {
  return (
    <section id='skills'> 
      <div className='mx-auto px-10 py-20 container flex flex-col items-center md:flex-row xl:flex-col'>
        <div className='mb-16 flex flex-col items-center text-center  md:mb-0 md:pr-24 md:w-1/2  lg:flex-grow  xl:pr-0'>
          <RiCodeSSlashFill size={50} color='white' className='mx-auto mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Skills
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
         Through the years, I have been exposed to different tools and frameworks, and have been able to add a few skills up my arsenal.
          </p>
        </div>





    </div>
  </section>
  )
}

export default Skills;