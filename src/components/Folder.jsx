import React, { useState } from 'react';
import folder1 from '../assets/folder1.png';
import Folder2 from '../assets/Folder2.png';
import Folder3 from '../assets/Folder3.png';
import Folder4 from '../assets/Folder4.png';
import Folder5 from '../assets/Folder5.png';
import Folder6 from '../assets/Folder6.png';
import Folder7 from '../assets/Folder7.png';
import Folder8 from '../assets/Folder8.png';
import Folder9 from '../assets/Folder9.png';
import Folder10 from '../assets/Folder10.png';
import Folder11 from '../assets/Folder11.png';
import Folder12 from '../assets/Folder12.png';


const Folder = () => {
  const [type, setType] = useState('Full-Time');

  return (
    <>
      <div className='pt-36'>
        <article className='grid grid-rows-3 place-items-center'>
          <h1 className='text-4xl text-[#9A8DEC]'>Uncover the Dimensions</h1>
          <h1 className='text-6xl tracking-widest text-slate-100'>EXPLORE DOMAINS</h1>
        </article>

        <div className='p-4 mx-[7%] bg-[#362D6D] rounded-lg backdrop-blur-md flex justify-between '>
          <h1 className='pt-2'>Navigate the future</h1>
          <div className='relative'>
          <select
                    id="type"
                    name="type"
                    className="border bg-transparent rounded w-full py-2 px-3 "
                    required
                    value={type}
                    // Update the type state when the select value changes
                    onChange={(e) => setType(e.target.value)}
                    >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                </select>
          </div>
        </div>
        <div className='p-8 mx-[7%] bg-[#1A1635] rounded-lg grid grid-cols-4 gap-4 justify-between' >
            <img src={folder1} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125' />
            <img src={Folder2} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder3} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder4} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder5} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder6} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder7} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder8} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder9} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder10} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder11} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>
            <img src={Folder12} alt="" className='scale-110 transition duration-100 ease-in-out hover:brightness-125'/>

        </div>
      </div>
    </>
  );
}

export default Folder;