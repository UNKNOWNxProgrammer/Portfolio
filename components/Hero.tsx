import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='hero' className='bg-gray-100 bg-opacity-60 xl:gap-5 gap-16 h-full w-full justify-center flex flex-col xl:py-20 py-12'>

      <div className='flex flex-col-reverse gap-10 xl:gap-10 xl:flex-row items-center justify-center  px-6 md:px-8 w-full md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[50%] 3xl:w-[40%] mx-auto h-full'>
      <div className='flex flex-col w-full items-center justify-center xl:items-start xl:justify-start'>
          <h1 className='font-bold text-[2.4rem] sm:text-[3.7em] md:text-[3.7em] text-[#2d2e32]'>Front-End Nextjs</h1>
          <div className='flex flex-row gap-5 -mt-3'>
          <h2 className='font-bold text-[2.4rem] sm:text-[3.7em] md:text-[3.7em] text-[#2d2e32]'>Devloper</h2>
          <Image src="/hand.png" alt="" width={60} height={60} className='w-[60px] md:w-[80px]' />
          </div>

            <p id='text' className='text-[#555] md:text-[1.2em] text-[1.1em] mt-4 flex items-center justify-center xl:items-start xl:justify-start'>
              Hi, I'm Kripal. A passionate Front-end Developer.
            </p>

          <div className='mt-5 flex gap-5 items-center justify-center xl:items-start xl:justify-start  w-full'>
            <a href=""><Image src="/icons/linkedin.svg" alt="" width={30} height={30} className='hover:text-blue-600 flex cursor-pointer' /></a>
            <a href=""><Image src="/icons/github.svg" alt="" width={30} height={30} className='hover:text-blue-600 flex cursor-pointer' /></a>
          </div>  

      </div>

      <div className='flex items-center justify-center'>
        <Image id='hero-img' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/364/small_2x/3d-website-developer-working-on-laptop-illustration-png.png" alt="" width={400} height={400} className='xl:w-[750px] w-[400px] rounded-full border-gray-700 border-[6px] border-opacity-90'/>
      </div>
      </div>



      <div className='flex flex-col md:flex-row items-center gap-5 xl:justify-start justify-center uppercase text-lg md:px-8 w-full md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[50%] 3xl:w-[40%] mx-auto h-full'>
        <div className='flex gap-5'>
         <h2 className='font-semibold text-[#2d2e32] border-b-4 border-b-gray-900 border-opacity-30 md:border-b-0'>
            tech stack 
         </h2>

         <span className='hidden md:flex text-[#2d2e32] font-bold'>
            |
         </span>
        </div>
         <div className='flex flex-row items-center md:flex-row gap-1 md:gap-2'>
            <Image className='hover:scale-110 transition' src="/icons/html.png" alt="" width={70} height={70}/>
            <Image className='hover:scale-110 transition' src="/icons/css.png" alt="" width={70} height={70}/>
            <Image className='hover:scale-110 transition' src="/icons/javascript.png" alt="" width={70} height={70}/>
            <Image className='hover:scale-110 transition' src="/icons/next.png" alt="" width={60} height={60}/>
            <Image className='hover:scale-110 transition' src="/icons/tailwind.png" alt="" width={60} height={60}/>
         </div>
      </div>



    </div>
  );
}

export default Hero;
