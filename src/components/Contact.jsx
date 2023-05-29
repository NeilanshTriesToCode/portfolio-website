// Component for the "Contact" section of the website

import React from 'react'

import { MdContacts } from 'react-icons/md';

import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { GrGithub } from 'react-icons/gr';
import { MdEmail, MdLocationOn } from 'react-icons/md';


const Contact = () => {
  return (
    <section id='contact'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center'>
        <div className='mb-4 flex flex-col items-center text-center  md:mb-0  md:w-1/2  lg:flex-grow  xl:pr-0'>
          <MdContacts size={50} color='white' className='mx-auto mb-4'/>
          <h1 className='mb-4 title-font font-medium text-white text-4xl'>
          Contact
          </h1>
          <p className="mb-8 text-lg leading-relaxed lg:mb-8">
          Something to discuss? Let's connect!
          </p>
        </div>

        <div className='w-full flex flex-col  lg:w-5/6'>
          <div className='p-2 flex flex-row mx-auto content-center'>
            <div className='flex place-items-center'>            
              <MdLocationOn size={27} color='white' className='mr-2' /> 
            </div>

            <div className='font-light text-xl text-white md:flex md:flex-row'>
              <p>Kelowna, BC, Canada |&nbsp;</p>
              <p>Ahmedabad, India</p>
            </div>
          </div>

          <div className='p-2 flex flex-row mx-auto'>
            <BsFillTelephoneFill size={25} color='white' className='mr-2' /> 
            <p className='font-light text-xl text-white'>+1 250-859-7069</p>
          </div>

          <div className='p-2 flex flex-row mx-auto'>
            <MdEmail size={25} color='white' className='mr-2' /> 
            <p className='font-light text-xl text-white'>neilanshjr@gmail.com</p>
          </div>

          <div className='p-2 flex flex-row mx-auto'>
            <GrGithub size={26} color='white' className='mr-2' /> 
            <a href='https://github.com/NeilanshTriesToCode' className='text-xl text-cyan-500 font-semibold hover:font-bold'>NeilanshTriesToCode</a>
          </div>

          <div className='p-2 flex flex-row mx-auto'>
            <BsLinkedin size={25} color='white' className='mr-2' /> 
            <a href='https://www.linkedin.com/in/neilansh-rajpal/' className='text-xl text-cyan-500 font-semibold hover:font-bold'>Neilansh Rajpal</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;