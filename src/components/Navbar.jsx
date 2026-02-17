import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 bg-white text-black text-xl'>
      <div className='flex items-center gap-2'>
        <div className='w-4 h-4 bg-black rounded-full'></div>
        <Link to='/' className='font-normal'>Jack</Link>
      </div>
      <div>
        <Link to='/info' className='hover:underline'>Info</Link>
      </div>
    </div>
  );
};

export default Navbar;
