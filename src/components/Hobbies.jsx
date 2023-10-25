// Component for the "Interests and Hobbies" section of the website

import React from 'react'

import {GiSoccerBall} from 'react-icons/gi'; 
import {BiDumbbell} from 'react-icons/bi';

const Hobbies = () => {
  return (
    <section id='hobbies' className='opacity-100 blur-sm'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center '>
        <div className='mb-4 flex flex-col items-center text-center  md:mb-0  lg:w-1/2  lg:flex-grow  xl:pr-0'>
          <GiSoccerBall size={50} color='white' className='mx-auto mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Interests & Hobbies
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
           I like to keep myself occupied during my spare time, and try to take time out for things I'm passionate about.
          </p>
        
        </div>

        <div className='w-11/12  text-left  sm:w-5/6  lg:max-w-lg lg:w-full'>
          <ul className="text-xl list-disc list-inside">
            <li className='pb-2'>A big sports aficionado, loves all things <span className='text-white font-semibold'> Football.</span></li>
            <li className='pb-2'>A fitness freak; probably at the gym if not home.</li>
            <li className='pb-2'><span className='text-white font-semibold'>House music</span> enthusiast. 
             Part-time <a href='https://www.mixcloud.com/Neilansh/' className='text-cyan-500 font-semibold underline underline-offset-4 hover:font-bold sm:no-underline'>bedroom DJ.</a></li>
            <li className='pb-2'>Frequently immerses in profound contemplation of the <span className='text-white font-semibold'>Cosmos.</span></li>
            <li className='pb-2'><span className='text-white font-semibold'>Polyglot.</span> <span title='Well, I like learning new languages.' className='italic font-semibold hover:font-bold'>Bueno, me gusta aprender nuevos idiomas.</span></li>
          </ul>
        </div>
    
    
    
    
    
      </div>
    </section>
  )
}

export default Hobbies;