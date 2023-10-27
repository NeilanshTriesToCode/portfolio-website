// Component for the "Experience" section of the website

import React from 'react'

import { FaSuitcase } from 'react-icons/fa';

// import experience data
import { experience } from '../data';

const Experience = () => {
  return (
    <section id='experience' className='hide-content min-h-full'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center '>
          <div className='mb-4 flex flex-col items-center text-center  md:mb-0 md:w-5/6 lg:w-2/3   lg:flex-grow  xl:pr-0'>
            <FaSuitcase size={50} color='white' className='mx-auto mb-4'/>
            <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Experience
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
            I also had the opportunity to gain professional experience during my academic journey. 
            I participated in the Co-op program to acquire valuable skills and practical experience.
            </p>
          </div>

          <div className='mt-4 w-5/6 grid gap-9 grid-cols-1  xl:grid-cols-2'>
           {
            experience.map((data) => (
              <div key={data.id} className='p-4 bg-slate-800 border border-slate-700 rounded-md '>
                <h2 className='title-font font-medium text-white text-xl'>{data.title}</h2>
                <a href={data.link} className="text-lg text-cyan-500 font-semibold underline underline-offset-4 hover:font-bold sm:no-underline">{data.company}</a>
                <h4 className="text-lg mb-2">{data.location} <span>({data.date})</span></h4>
                <ul className="text-md list-disc ml-4">
                {
                  data.description.map((task, i) => (
                    <li key={`${task} ${i}`} className='leading-relaxed'>{task}</li>
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