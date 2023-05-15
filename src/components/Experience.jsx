// Component for the "Experience" section of the website

import React from 'react'

import { FaSuitcase } from 'react-icons/fa';

// import experience data
import { experience } from '../data';

const Experience = () => {
  return (
    <section id='experience'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center '>
          <div className='mb-16 flex flex-col items-center text-center  md:mb-0 md:w-1/2  lg:flex-grow  xl:pr-0'>
            <FaSuitcase size={50} color='white' className='mx-auto mb-4'/>
            <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Experience
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
            I also had the opportunity to gain some professional experience during my studies.
            I enrolled in the Co-op program and got the chance to hone my skills and also develop new ones.
            </p>
          </div>

          <div className='mt-4 w-5/6 grid gap-9 grid-cols-1  xl:grid-cols-2'>
           {
            experience.map((data) => (
              <div id={data.id} className='p-4 bg-slate-800 border border-slate-700 rounded-md '>
                <h2 className='title-font font-medium text-white text-xl'>{data.title}</h2>
                <h4 className="text-lg text-sky-500">{data.company}</h4>
                <h4 className="text-lg mb-2">{data.location} <span>({data.date})</span></h4>
                <ul className="text-md list-disc">
                {
                  data.description.map((task) => (
                    <li className='ml-2 leading-relaxed'>{task}</li>
                  ))
                }
                </ul>
              </div>
            ))
           }
          </div>
      </div>
    </section>
  )
}

export default Experience;