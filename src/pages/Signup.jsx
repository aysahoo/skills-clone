import React from 'react'
import Navbar from '../components/Navbar'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();
  function onhandle(){
    navigate('/');
  }

  return (
    <>
      <Navbar />
      
      <div>
        <article className='grid grid-rows-3 justify-center pt-40'>
        <h1 className='text-4xl text-purple-400'>Join the sprint</h1>
        <h2 className='text-6xl'>REGISTER</h2>

        <h3 className='pt-10'>Haven't you registered yet? Log in </h3>
        </article>
        <div >
          <form className='grid grid-rows-4 gap-4 justify-center pt-10 '>
            <input type="text" placeholder="Email" className='w-96 rounded-md bg-[#1A1635] p-2'/>
            <input type="password" placeholder="Password" className='bg-[#1A1635] rounded-md p-2'/>
            <a className='text-sm flex justify-end' href="/forgot">Forgot Password ?</a>
            <div className='flex justify-between'>
            <button onClick={onhandle} className='px-6 py-2 text-sm border-none rounded-lg text-black bg-slate-100 hover:bg-blue-500'>Back</button>
            <button className='px-6 py-2 text-sm border-none rounded-lg text-black bg-slate-100 hover:bg-blue-500'>Create Account</button>
            </div>
          </form>
        </div>
      </div>  
    </>
  )
}

export default Signup;