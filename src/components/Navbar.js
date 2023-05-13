// Component for the Navbar

import React from 'react'

const Navbar = () => {
  return (
    <header className='top-0 z-30 bg-gray-800 border-b border-gray-600 md:sticky  '>
        <div className='mx-auto p-5 container flex flex-col flex-wrap md:flex-row items-center'>
            <a className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                Neilansh Rajpal
                </a>
            </a>

            <nav className='flex flex-col flex-wrap md:flex-row md:ml-auto'>
                <a href="#about" className="ml-5 hover:text-white">
                About
                </a>

                <a href="#hobbies" className="ml-5 hover:text-white">
                Hobbies
                </a>

                <a href="#skills" className="ml-5 hover:text-white">
                Skills
                </a>

                <a href="#projects" className="ml-5 hover:text-white">
                Projects
                </a>

                <a href="#experience" className="ml-5 hover:text-white">
                Experience
                </a>

                <a href="#contact" className="mx-5 hover:text-white">
                Contact
                </a>
            </nav>
    
        </div>
    </header>
  )
}

export default Navbar;