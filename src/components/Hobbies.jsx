// Component for the "Interests and Hobbies" section of the website

import React from 'react'

import {GiSoccerBall} from 'react-icons/gi'; 
import {BiDumbbell} from 'react-icons/bi';

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center md:flex-row xl:flex-col '>
        <div className='mb-16 flex flex-col items-center text-left  sm:text-center  md:pr-16 t md:mb-0 md:w-1/2  lg:flex-grow lg:pr-24 '>
          <GiSoccerBall size={50} color='white' className='mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Interests & Hobbies
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
           I like to keep myself occupied during my spare time, do the things I like.
          </p>
        
        </div>

        <div className='w-3/4 flex items-center text-left  lg:text-center  md:w-1/2  lg:max-w-lg lg:w-full'>
          <ul className="text-xl list-disc ">
            <li className='pb-2'>A big sports aficionado, loves all things <span className='text-white font-semibold'> Football.</span></li>
            <li className='pb-2'>A fitness freak, probably at the gym if not home.</li>
            <li className='pb-2'><span className='text-white font-semibold'>House music</span> enthusiast. Part-time <span className='text-white font-semibold'>bedroom DJ.</span></li>
            <li className='pb-2'>Often gets lost in deep thoughts about the <span className='text-white font-semibold'>Cosmos.</span></li>
            <li className='pb-2'><span className='text-white font-semibold'>Polyglot.</span> <span className='italic'>Bueno, me gusta aprender nuevos idiomas.</span></li>
          </ul>
        </div>
    
    
    
    
    
      </div>
    </section>
  )
}

export default Hobbies;