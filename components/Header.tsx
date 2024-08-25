import React from 'react';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <div id='navbar' className='px-14 py-7 shadow-md flex justify-between items-center'>

      <div className='text-[1.4em] font-bold text-[#2d2e32] cursor-default'>
        rat.dev
      </div>

      <div className='flex xl:hidden'>
        <MobileNav />
      </div>   
      
      <div className='hidden xl:flex'>
        <ul className='flex gap-8 text-[1.2em] font-bold text-[#2d2e32]'>
            <a href="#hero"><li className='hover:text-[#399fff] cursor-pointer transition'>Home</li></a>
            <a href="#about"><li className='hover:text-[#399fff] cursor-pointer transition'>About</li></a>
            <a href="#projects"><li className='hover:text-[#399fff] cursor-pointer transition'>Projects</li></a>
            <a href="#contact"><li className='hover:text-[#399fff] cursor-pointer transition'>Contact</li></a>
        </ul>  
      </div>
          
    </div>
  );
}

export default Header;
