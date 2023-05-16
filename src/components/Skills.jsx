// Component for the "Skills" section of the website

import React from 'react'

import { RiCodeSSlashFill } from 'react-icons/ri';

// icons for skills
import {IoLogoJavascript, IoLogoHtml5, IoLogoCss3} from 'react-icons/io';
import { GrGithub, GrReactjs, GrMysql } from 'react-icons/gr';
import { SiFirebase, SiFlutter } from 'react-icons/si';

// import skills data
import { skills } from '../data';

const Skills = () => {

  // creating array of icons
  const icons = [
                      <IoLogoJavascript size={25} color='yellow'  className='ml-4 hidden sm:block' />, 
                      <IoLogoHtml5 size={25} color='orange' className='ml-4 hidden sm:block' />, 
                      <IoLogoCss3 size={25} color='purple' className='ml-4 hidden sm:block' />, 
                      <GrReactjs size={25} color='cyan' className='ml-4 hidden sm:block' />, 
                      <SiFlutter size={25} color='cyan' className='ml-4 hidden sm:block' />, 
                      <GrGithub size={25} color='white' className='ml-4 hidden sm:block' />,
                      <SiFirebase size={25} color='orange' className='ml-4 hidden sm:block' />,
                      <GrMysql size={25} color='white' className='ml-4 hidden sm:block' />
                    ]; 

  const skillsAndIcons = [];
    
  // combine skills and icons into a common array, called skillsAndIcons
  skills.forEach((element, index) => {
    skillsAndIcons[index] = {
      skill: skills[index],
      icon: icons[index]
    }
  });

  return (
    <section id='skills'> 
      <div className='mx-auto px-10 py-20 container flex flex-col items-center'>
        <div className='mb-4 flex flex-col items-center text-center  md:mb-0  md:w-3/4  lg:flex-grow  xl:pr-0'>
          <RiCodeSSlashFill size={50} color='white' className='mx-auto mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Skills
          
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
          As a budding developer, I'm always looking to add new skills to my arsenal. 
          <br /> Here are some that I've managed to acquire over time. 
          </p>
        </div>

        <div className='w-3/4 grid gap-9 grid-cols-2'>
          {
            skillsAndIcons.map((data) => (
              <div className='flex flex-row items-center  bg-slate-800 border border-slate-700 rounded-md '>
                {data.icon}
                <p className="font-light text-2xl text-white leading-relaxed p-2 mx-auto sm:mx-0">{data.skill}</p>
              </div>
            ))

          }
        </div>
    </div>
  </section>
  )
}

export default Skills;