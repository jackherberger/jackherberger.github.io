import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';



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
        <p className='text-[#8892b0] py-8 max-w-[700px]'>
        As a driven computer scientist student, I find immense joy in diving headfirst 
        into intricate problems that others might shy away from. The thrill of 
        deciphering complex challenges and crafting innovative solutions fuels 
        my drive and keeps me enamored with the ever-evolving world of technology.
        </p>
        <p className='text-[#8892b0] pb-8 max-w-[700px]'>
        "Change breaks the brittle." – Jan Houtema
        </p>
        <div>
          <a
            href='https://drive.google.com/file/d/1dfgGWyOSLMFrXzzjMNzScjODfApRgpPe/view?usp=sharing'
            className='text-white group border-2 px-2 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
            style={{ display: 'inline-block', padding: '5px 10px' }} // Adjust padding as needed
          >
            <span style={{ marginRight: '5px' }}>View Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
