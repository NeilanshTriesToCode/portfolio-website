// Component for the Navbar

import React from 'react'

const Navbar = () => {
  return (
    <header className='top-0 z-30 md:sticky '>
        <div className='mx-auto container flex flex-col flex-wrap md:flex-row items-center'>
            <a className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                Neilansh Rajpal
                </a>
            </a>

            <nav className='flex flex-col flex-wrap md:flex-row md:ml-auto'>
                <a href="#about" className="ml-5 text-xl">
                About
                </a>

                <a href="#hobbies" className="ml-5 text-xl">
                Hobbies
                </a>

                <a href="#skills" className="ml-5 text-xl">
                Skills
                </a>

                <a href="#projects" className="ml-5 text-xl">
                Projects
                </a>

                <a href="#experience" className="ml-5 text-xl">
                Experience
                </a>

                <a href="#contact" className="mx-5 text-xl">
                Contact
                </a>
            </nav>
    
        </div>
    </header>
  )
}

export default Navbar;