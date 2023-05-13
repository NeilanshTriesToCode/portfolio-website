// Component for the "About" section of the website

import React from 'react'

const About = () => {

  return (
    <section id='about'>
        <div className='mx-auto px-10 py-20 container flex flex-col items-center  md:flex-row '>
          <div className='mb-16 flex flex-col items-center text-center  md:pr-16 md:items-start md:text-left md:mb-0 md:w-1/2  lg:flex-grow lg:pr-24'>
            <h1 className='mb-4 title-font font-medium text-white text-4xl md:text-5xl'>
              Hola, <br /> I'm Neilansh
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
            Originally from Ahmedabad, India, I'm a Computer Science graduate at UBC Okanagan, Canada. This is my portfolio website. 
            Follow along to know more about me! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
            </p>
          </div>

          <div className='w-5/6 flex justify-center  md:w-1/2  lg:max-w-lg lg:w-full'>
            <img src='profile.jpg' alt='profile_img' className=' h-96 w-80 rounded-full ring-2 ring-slate-600'/>
          </div>
    
        </div>
    </section>
  );
}

export default About;