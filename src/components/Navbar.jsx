import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 bg-white text-black text-xl'>
      <div>
        <Link to='/' className=''>Jack Herberger</Link>
      </div>
      <div>
        <Link to='/info' className='hover:underline'>Info</Link>
      </div>
    </div>
  );
};

export default Navbar;
