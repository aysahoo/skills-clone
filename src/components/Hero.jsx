import React from 'react'
import rectangle from '../assets/rectangle.png'
import circle from '../assets/circle.png'
import kiddo from '../assets/Kiddo.png'
import big_circle from '../assets/big_circle.png'
import kiddo2 from '../assets/Kiddo2.png'   
import zairza from '../assets/zairza.png'
import photo2 from '../assets/photo2.png'
import discord from '../assets/discord.png'
import chat from '../assets/chat.png'
import badges from '../assets/badges.png'

const Hero = () => {
  return (
    <>
    <div className='relative min-h-screen w-auto'>
      <img src={rectangle} alt="rectangle" className='absolute h-[20%] -top-4 right-0' />
      <img src={circle} alt="circle" className='absolute h-[7%] top-20 right-80' />
      <img src={big_circle} alt="big_circle" class="absolute h-[50%] top-60 inset-0 mx-auto " />
      <img src={kiddo2} alt="kiddo2" className='absolute h-[62%] top-[149px] inset-0 mx-auto' />
      <img src={kiddo} alt="kiddo" className='absolute h-[55%] top-36 inset-0 mx-auto' />
      <img src={rectangle} alt="rectangle" className='absolute h-[30%] top-[75%] -left-[22%] -rotate-90' />
      <article className='absolute top-[80%] mx-[23%]'>
        <h1 className='text-4xl text-[#9A8DEC] '>2K24</h1>  
        <h1 className='text-7xl text-slate-100 '>SKILSS++</h1>  
        <h1 className='text-2xl text-gray-400 tracking-wider '>Elevate Your Expertise</h1> 
        <h3 className='text-base text-balance text-gray-400 tracking-wider mt-10 '>
        Boost your skills with guidance in various tech domains. Gain expert knowledge, hands-on experience, personalized mentoring, and earn a certification. Transform your future,
        </h3>
        <h3 className='font-semibold tracking-wider animate-glow mt-2'>REGISTER NOW!!</h3>
        <button href="#domains" className="px-6 py-2 text-sm border-none rounded-lg mt-5 text-black bg-slate-100 hover:bg-blue-500 hover:text-white" >Explore Domains</button>
      </article>
      <div className='absolute top-[123%] right-[20%] flex justify-center'>
        <h3 className='italic'>~by ZAIRZA</h3>
        <img src={zairza} alt="zairza" className='h-6 pl-3' />
      </div>
    </div>
    <div className='static min-h-screen w-auto'>
        <img src={photo2} alt="photo2" className='absolute h-[50%] top-[135%] inset-0 mx-auto' />
        <article className='absolute top-[190%] mx-[23%]'>
            <h1 className='text-4xl text-[#9A8DEC] '>What is Skills++</h1>  
            <h1 className='text-7xl text-slate-100 '>PROCESS</h1>  
            <div className='grid grid-rows-3 grid-flow-col gap-5 pt-10 pb-10'>
                <img src={discord} alt="discord" className='h-9' />
                <img src={chat} alt="chat" className='h-9' />
                <img src={badges} alt="badges" className='h-9' />
                <h1 className='text-sm text-balance text-gray-400 '>Get registered and join your respective domain discord channel mentioned after registration.</h1>
                <h1 className='text-sm text-balance text-gray-400 '>Get one on one mentorship from your mentors along with assignments on start of each week.</h1>
                <h1 className='text-sm text-balance text-gray-400 '>Earn badges on successful submission of assignments of first 3 weeks and a certificate on the 4th week.</h1>
            </div>
        </article>

    </div>
    </>
  )
}

export default Hero
