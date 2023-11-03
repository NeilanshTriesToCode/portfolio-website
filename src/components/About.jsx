// Component for the "About" section of the website

import React from 'react'
import TypeWriter from './TypeWriter';

const About = () => {

  return (
    <section id='about'  className='hide-content lg:min-h-[85vh]'>
        <div className='mx-auto px-10 py-20 container flex flex-col items-center  md:flex-row '>
          <div className='mb-16 flex flex-col items-center text-center  md:pr-16 md:items-start md:text-left md:mb-0 md:w-1/2  lg:flex-grow lg:pr-24'>
          <h1 className='title-font font-blacksans font-medium text-white text-4xl md:text-5xl'>Hola,</h1>  
          <TypeWriter text={"I'm Neilansh"} />
            <p className="text-xl leading-relaxed text-left md:text-2xl ">
            Originally from <span className='text-white font-medium'>Ahmedabad, India,</span> I'm a Computer Science graduate at 
             <span className='text-white font-medium'> UBC Okanagan, Canada.</span> As a budding developer, I'm interested in 
             <span className='text-white font-medium'> web, frontend </span>development 
            and like creating <span className='text-white font-medium'> dynamic and scalable UIs.</span>
            <br />This is my portfolio. Follow along to know more about me!
            </p>
          </div>

          <div className='w-5/6 flex justify-center  md:w-1/2  lg:max-w-lg lg:w-full'>
            <img src='profile.jpg' alt='profile image' className='h-80 w-72 rounded-full ring-2 ring-slate-600 sm:h-96 sm:w-80'/>
          </div>
    
        </div>
    </section>
  );
}

export default About;