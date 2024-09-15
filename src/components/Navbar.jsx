import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu_icon.png'


const Navbar = () => {
  return (
    <div className='px-[9%] py-[3%] w-full fixed z-50'>
      <nav className="p-2 bg-gray-400 rounded-lg backdrop-blur-md bg-opacity-20">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-3'>
          <img src={logo} alt="Logo" className="h-8 w-8" />
            <div className="xs:hidden md:flex space-x-6 ">
                <a href="#home" className="text-white font-semibold hover:text-gray-200">Process</a>
                <a href="#timeline" className="text-white font-semibold hover:text-gray-200">Timeline</a>
                <a href="#perks" className="text-white font-semibold hover:text-gray-200">Perks</a>
                <a href="#domains" className="text-white font-semibold  hover:text-gray-200">Explore Domains</a>
                <a href="#faqs" className="text-white font-semibold hover:text-gray-200">FAQs</a>
            </div>
            <button href="#register" className="px-6 py-2 text-sm border-none rounded-lg text-black bg-slate-100 hover:bg-blue-500" >Register</button>
            <img src={menu} alt="menu_icon" className='md:hidden h-11 w-11' />
            </div>
            
      </nav>
    </div>
  )
}

export default Navbar
