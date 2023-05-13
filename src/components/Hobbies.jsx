// Component for the "Interests and Hobbies" section of the website

import React from 'react'

import {GiSoccerBall} from 'react-icons/gi'; 
import {BiDumbbell} from 'react-icons/bi';

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center  md:flex-row '>
        <div className='mb-16 flex flex-col items-center text-center  md:pr-16 md:text-left md:mb-0 md:w-1/2  lg:flex-grow lg:pr-24'>
          <GiSoccerBall size={50} color='white' className='mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Interests & Hobbies
          </h1>
          <ul className="mb-8 text-xl list-disc">
            <li className='pb-2 '>A big sports aficionado, loves all things <span className='text-white font-semibold'> Football.</span></li>
            <li className='pb-2'>A fitness freak, hits the gym often.</li>
            <li className='pb-2'><span className='text-white font-semibold'>House music</span> enthusiast. Part-time <span className='text-white font-semibold'>bedroom DJ.</span></li>
            <li className='pb-2'>Often gets lost in deep thoughts about the <span className='text-white font-semibold'>Cosmos.</span></li>
            <li className='pb-2'><span className='text-white font-semibold'>Polyglot.</span> <span className='italic'>Me gusta aprender nuevos idiomas.</span></li>
          </ul>
        </div>
    
    
    
    
    
      </div>
    </section>
  )
}

export default Hobbies;