// Component for the "Contact" section of the website

import React from 'react'

import { MdContacts } from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='mx-auto px-10 py-20 container flex flex-col items-center md:flex-row xl:flex-col'>
          <div className='mb-16 flex flex-col items-center text-center  md:mb-0 md:pr-24 md:w-1/2  lg:flex-grow  xl:pr-0'>
            <MdContacts size={50} color='white' className='mx-auto mb-4'/>
            <h1 className='mb-4 title-font font-medium text-white text-4xl'>
            Contact
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
            Have something to discuss? Let's get in touch!
            </p>
          </div>





      </div>
    </section>
  )
}

export default Contact;