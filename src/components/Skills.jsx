import React from 'react';

import python from '../assets/python.png';
import bash from '../assets/bash.png';
import c from '../assets/c.png';
import elastic from '../assets/elastic.png';
import git from '../assets/git.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import kibana from '../assets/kibana.png';
import linux from '../assets/linux.png';
import r from '../assets/r.png';
import ReactImg from '../assets/react.png';
// import GitHub from '../assets/github.png';
import node from '../assets/node.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>Here are some of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={c} alt="HTML icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={node} alt="HTML icon" />
                  <p className='my-4'>NODE.JS</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={linux} alt="HTML icon" />
                  <p className='my-4'>LINUX</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={r} alt="HTML icon" />
                  <p className='my-4'>R</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={elastic} alt="HTML icon" />
                  <p className='my-4'>ELASTICSEARCH</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={kibana} alt="HTML icon" />
                  <p className='my-4'>KIBANA</p>
              </div>
              <div className='bg-[#001F3F] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={bash} alt="HTML icon" />
                  <p className='my-4'>BASH</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
