import { Mail, Map } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='bg-white flex flex-col gap-14 items-center xl:items-start justify-center h-full py-28 px-3 md:px-0 w-full md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[50%] 3xl:w-[40%] mx-auto '>
      
      <div className='flex flex-col gap-3'>
         <span className='text-xl font-bold text-blue-600 uppercase'>contact</span>
         <p className='text-3xl font-bold text-[#2d2e32]'>Don't be shy! Hit me up! 👇</p>
      </div>

      <div className='flex flex-col xl:flex-row gap-14 xl:gap-20'>
        <div className='flex flex-row gap-5 items-center'>

        <div className='rounded-full p-3 shadow-xl border border-gray-100'>
          <Map className='size-8 text-blue-500' />
        </div> 

        <div className='flex flex-col gap-1'>
        <span className='text-xl font-bold text-[#2d2e32]'>Location</span>
        <p className='text-[#767676] text-lg cursor-pointer hover:text-blue-500'>Palghar, Maharashtra</p>
        </div>

        </div>

        <div className='flex flex-row gap-5 items-center'>

        <div className='rounded-full p-3 shadow-xl border border-gray-100'>
          <Mail className='size-8 text-blue-500' />
        </div> 

        <div className='flex flex-col gap-1'>
        <span className='text-xl font-bold text-[#2d2e32]'>Email</span>
        <p className='text-[#767676] text-lg cursor-pointer hover:text-blue-500'>kripaltare09@gmail.com</p>
        </div>

        </div>
      </div>

    </div>
  );
}

export default Contact;
