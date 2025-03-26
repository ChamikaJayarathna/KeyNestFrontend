import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <section className='flex justify-between items-center shadow-sm p-4 relative'>
      <div className="flex items-center gap-2">
        <img src="./logo.svg" width={40} height={40} />
      </div>
      <ul className='hidden md:flex gap-16 ml-25'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Property</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Services</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
      </ul>
      <div className="flex gap-4">
        <Button>Sign in</Button>
        <Button>Join</Button>
      </div>
    </section>
  );
}

export default Header;