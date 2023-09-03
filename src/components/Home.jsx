import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          John Herberger
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a passionate Computer Scientist.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        As a driven computer scientist student, I find immense joy in diving headfirst 
        into intricate problems that others might shy away from. The thrill of 
        deciphering complex challenges and crafting innovative solutions fuels 
        my drive and keeps me enamored with the ever-evolving world of technology.
        </p>
      </div>
    </div>
  );
};

export default Home;
