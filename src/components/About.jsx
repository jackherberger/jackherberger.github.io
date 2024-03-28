import React from 'react';
import heroImage from '../assets/heroImage.png';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#001F3F] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm John Herberger.</p>
            </div>
            <div></div>
            <div className='sm:mt-0 mt-4'>
              {/* Insert the image here */}
              <img src={heroImage} alt='John Herberger' className='max-w-full h-auto' />
            </div>
            <div className='sm:max-w-[1000px] w-full px-4'>
              <p className='sm:break-words'>
              I am 3rd year Computer Science student at Cal Poly, San Luis Obispo. As I begin my 
              journey into my second half of my university career, I have developed 
              strong skills in programming languages such as Python, Java, C, React, Assembly, 
              R, and Bash scripting. Just as importantly, I have spent a great deal of 
              time studying advanced algorithms and data structures, striving for efficiency 
              and optimization at every possible application. My coursework has also consisted 
              of fundamentally important courses such as Statistical Methods, Linear Analysis 
              and Algebra, Discrete Structures, Calculus and Mathematical Proofs, which has given 
              me a strong basis for this role. Alongside my technical skills, I have developed 
              strong interpersonal skills such as communication, determination, coach-ability, 
              and eagerness. These skills have driven me to be constantly learning and applying 
              my skills and abilities to real world problems.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
