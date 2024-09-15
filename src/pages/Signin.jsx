import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Signin = () => {
  return (
    <>
      <Navbar />
      
      <div>
        <article className='grid grid-rows-3 justify-center pt-40'>
        <h1 className='text-4xl text-purple-400'>Welcome back!!</h1>
        <h2 className='text-6xl'>LOG IN</h2>

        <h3 className='pt-10'>Haven't you registered yet? </h3>
        </article>
        <div >
          <form className='grid grid-rows-4 gap-4 justify-center pt-10 '>
            <input type="text" placeholder="Email" className='w-96 rounded-md bg-[#1A1635] p-2'/>
            <input type="password" placeholder="Password" className='bg-[#1A1635] rounded-md p-2'/>
            <a className='text-sm flex justify-end' href="/forgot">Forgot Password ?</a>
            <div className='flex justify-between'>
            <button className='px-6 py-2 text-sm border-none rounded-lg text-black bg-slate-100 hover:bg-blue-500'>Back</button>
            <button className='px-6 py-2 text-sm border-none rounded-lg text-black bg-slate-100 hover:bg-blue-500'>Sign In</button>
            </div>
          </form>
        </div>
      </div>  
    </>
  )
}

export default Signin
