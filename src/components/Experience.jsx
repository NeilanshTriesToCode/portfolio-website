// Component for the "Experience" section of the website

import React from 'react'

import { FaSuitcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id='experience'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center md:flex-row xl:flex-col'>
          <div className='mb-16 flex flex-col items-center text-center  md:mb-0 md:pr-24 md:w-1/2  lg:flex-grow  xl:pr-0'>
            <FaSuitcase size={50} color='white' className='mx-auto mb-4'/>
            <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Experience
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
            I also had the opportunity to gain some professional experience during my studies.
            I enrolled in the Co-op program and got the chance to hone my skills and also develop new ones.
            </p>
          </div>





      </div>
    </section>
  )
}

export default Experience;