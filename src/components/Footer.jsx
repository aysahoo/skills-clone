import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div className=' bg-[#9A8DEC] pb-6 pt-10 pl-20 grid grid-rows-2 gap-10 '>
        <div className=' flex justify-start gap-4'>
        <img className='h-10 p-1 bg-black rounded-full ' src={logo} alt="" />
        <h1 className='text-balance'>A event organised by Zairza for the welfare of budding talented software engineers, hardware engineers and designers</h1>
        </div> 
        <div>
            Youtube
        </div>   
      </div>
    </>
  )
}

export default Footer
