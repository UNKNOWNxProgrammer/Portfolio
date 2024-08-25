import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
  

const MobileNav = () => {
  return (
    <div className='flex items-center'>
      <Sheet>
        <SheetTrigger><Menu className='size-8 opacity-90' /></SheetTrigger>
        <SheetContent>
          <div>
          <ul className='flex flex-col items-center justify-center text-[1.2em] font-semibold text-[#2d2e32]'>
            <li className='hover:bg-gray-100 hover:text-[#399fff] w-full py-3 flex justify-center items-center cursor-pointer transition'>Home</li>
            <li className='hover:bg-gray-100 hover:text-[#399fff] w-full py-3 flex justify-center items-center cursor-pointer transition'>About</li>
            <li className='hover:bg-gray-100 hover:text-[#399fff] w-full py-3 flex justify-center items-center cursor-pointer transition'>Projects</li>
            <li className='hover:bg-gray-100 hover:text-[#399fff] w-full py-3 flex justify-center items-center cursor-pointer transition'>Contact</li>
          </ul> 
          </div>
        </SheetContent>
      </Sheet>

    </div>
  );
}

export default MobileNav;
