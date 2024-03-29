import React from 'react';
import heroImage from '../assets/heroImage.png';

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#001F3F] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 pt-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>A quick overview...</p>
          </div>
          <div></div>
          <div className='sm:mt-0 mt-4'>
            <img src={heroImage} alt='John Herberger' className='max-w-full h-auto' />
          </div>
          <div className='sm:max-w-[1000px] w-full px-4'>
            <p className='sm:break-words'>
              I am 3rd year Computer Science student at Cal Poly, San Luis Obispo. As I begin my 
              journey into my second half of my university career, I have developed 
              strong skills in programming, some of which you can see below. 
            </p>  
            <p className='mt-4 sm:break-words'>
              Just as importantly, I have spent a great deal of time studying advanced algorithms 
              and data structures, striving for efficiency and optimization at every possible application. 
            </p>
            <p className='mt-4 sm:break-words'>
              As I continute to learn and grow, I have developed a keen interest in Technical Product Management.
              How can we optimize our product development process to enhance efficiency, maintain quality, and meet evolving market demands
              to bring a truly amazing product to our customer?
            </p>
            <p className='mt-4 sm:break-words'>
              Alongside my technical skills, I have developed 
              strong interpersonal skills such as communication, determination, coach-ability, 
              and eagerness. 
            </p>
            <p className='mt-4 sm:break-words pb-4'> 
              But what's most important to me is doing meaningful work to bring our community together.
              How can we create a more inclusive, equitable, and sustainable world through technology?
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
