import React from 'react'
import week1 from '../assets/week1.png'
import week2 from '../assets/week2.png'
import week3 from '../assets/week3.png'
import week4 from '../assets/week4.png'

const Badges = () => {
  return (
    <>
      <div className='mt-36'>
            <article className=' grid grid-rows-3 place-items-center  '>
            <h1 className='text-4xl text-[#9A8DEC] '>Badges and Certificate</h1>  
            <h1 className='text-6xl tracking-widest text-slate-100  '>PERKS</h1>  
            <h1 className='text-sm text-center text-balance text-white tracking-wide '>Level up and earn a new badge each week, and collect all four to receive a certificate of completion after your fourth successful submission, marking your mastery of the program.</h1> 
            </article>
            <div className='p-10 mt-2 flex justify-around '>
                <img src={week1} alt="week1" className='h-80 transition-transform duration-200 ease-in-out transform hover:scale-125' />
                <img src={week2} alt="week2" className='h-80 transition-transform duration-200 ease-in-out transform hover:scale-125' />
                <img src={week3} alt="week3" className='h-80 transition-transform duration-200 ease-in-out transform hover:scale-125' />
                <img src={week4} alt="week4" className='h-80 transition-transform duration-200 ease-in-out transform hover:scale-125' />
            </div>
      </div>
    </>
  )
}

export default Badges
