import React from 'react';

const About = () => {
  
  return (


    <div id='about' className='bg-white flex flex-col gap-16 xl:gap-24 items-center py-14 xl:py-20 px-3 w-full md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[50%] 3xl:w-[40%] mx-auto h-full'>
      <div className='flex flex-col xl:flex-row gap-10 items-center'>
      <div className='rounded-lg flex '>
        <img src="/img/about.webp" alt="" className='rounded-lg' width={500}/>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-blue-600 uppercase'>about me</h2>
        <div className='font-bold text-[2em] text-[#2d2e32]'>
            <p>Front-end Developer</p>
            <p>based in Palghar, Maharashtra</p>
        </div>
        <div className='mt-4 text-lg text-[#555] '>
        <p>Hey, my name is Kripal, and I'm a Frontend Developer. </p>
        <p>My passion is to develop a clean UI/UX for users.</p>
        </div>
      </div>
      </div>

      <div className='flex flex-col-reverse xl:flex-row gap-10 items-center'>

      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-blue-600 uppercase'>my info</h2>
        <div className='font-bold text-[2em] text-[#2d2e32]'>
            <p>Passionate Web-Dev</p>
            <p>based in Palghar, Maharashtra</p>
        </div>
        <div className='mt-4 text-lg text-[#555] '>
        <p>My main stack currently is React/Next.js. </p>
        <p>In combination with Tailwind CSS and TypeScript.</p>
        </div>
      </div>
      <div className='rounded-lg flex '>
        <img src="/img/layout.jpg" alt="" className='rounded-lg' width={500}/>
      </div>
      </div>

    </div>


  );
}

export default About;
