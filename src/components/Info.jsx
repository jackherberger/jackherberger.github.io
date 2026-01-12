import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import badge_wind from '../assets/badge_wind.png'; // Import the image

const Info = () => {
  return (
    <div name='info' className='w-full min-h-screen bg-white p-8 text-black'>
      <div className='max-w-[1000px] mx-auto py-8'>
        <p className='text-xl font-bold pb-4'>• BIO</p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight'>
          I am a Techincal Product Manager, passionate about doing truly meaningful work and bringing our community together.
        </h1>
        <div className='text-4xl mb-8'>
          <p className='pb-2'>
            <Link to='/personal-writing/3' className='hover:line-through'>
              ① My Story
            </Link>
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'> {/* Reverted to 2 columns */}
          <div>
            <ul className='text-xl'>
              <li className='mb-2'>• E-M → <a href="mailto:herberger.jack@gmail.com" className='hover:line-through'>herberger.jack@gmail.com</a></li>
              <li className='mb-2'>• IN → <a href="https://www.linkedin.com/in/jack-herberger/" target="_blank" rel="noopener noreferrer" className='hover:line-through'>@jackherberger</a></li>
              <li className='mb-2'>• GH → <a href="https://github.com/jackherberger" target="_blank" rel="noopener noreferrer" className='hover:line-through'>@jackherberger</a></li>
            </ul>
            <div className='mt-8'>
              <img src={badge_wind} alt="Badge" style={{ width: '400px' }} />
            </div>
          </div>
          <div>
            <p className='text-xl font-bold pb-4'>• INTERESTS</p>
            <div className='grid grid-cols-1 gap-4 text-xl'> {/* Changed to 1 column for interests */}
              <ul>
                <li>Deep Learning</li>
                <li>3D Printing</li>
                <li>Photography</li>
                <li>LLM Interpretability & Alignment</li>
                <li>Community Building</li>
                <li>Values</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
