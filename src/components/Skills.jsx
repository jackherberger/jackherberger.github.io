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
import node from '../assets/node.png';
import pandas from '../assets/pandas.png';
import mongo from '../assets/mongo.png';
import beautifulsoup from '../assets/beautiful_soup.png';
import my_sql from '../assets/my_sql.png';
// import sklearn from '../assets/sklearn.png';




const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl mx-auto font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>Here are just a few of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={python} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>PYTHON</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={c} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>C</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>REACT</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={java} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>JAVA</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={javascript} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>JAVASCRIPT</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={mongo} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>MONGO</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={my_sql} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>MYSQL</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={node} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>NODE.JS</p>
              </div>

              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-40 mx-auto my-4' src={pandas} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>pandas</p>
              </div>

              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-50 mx-auto my-4' src={beautifulsoup} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>beautifulsoup</p>
              </div>

              {/* <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='h-20 mx-auto my-4' src={sklearn} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>sklearn</p>
              </div> */}

              

              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={git} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>GIT</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={linux} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>LINUX</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={r} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>R</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={elastic} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>ELASTICSEARCH</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={kibana} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>KIBANA</p>
              </div>
              <div className='bg-[#b3dae4] shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto my-4' src={bash} alt="HTML icon" />
                  <p className='my-4 text-black font-extrabold'>BASH</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
