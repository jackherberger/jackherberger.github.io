import React from 'react';
import ICG from '../assets/ICG.jpg';
import ingram_slide from '../assets/ingram_slide.png';

const Experience = () => {
  return (
    <div name='experience' className='w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-left items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4 pt-20'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Experience 
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>Ingram Content Group: Systems Engineer Intern</p>
          </div>
          <div className='sm:mt-0 mt-4'>
            {/* <img src= {ingramLogo} alt = 'Ingram Logo' className='max-w-auto h-auto' */}
            {/* REPLACE WITH INGRAM LOGO, MAKE SMALLLER, MAYBE PHOTO OF PLANT */}
            <img src={ICG} alt='John Herberger' className='w-60 h-auto' />
          </div>
          <div className='sm:max-w-[1000px] mb-10 w-full px-8'>
            <p className='sm:break-words'>
              Over the summer of 2023, I worked as a Information Technology Systems 
              Engineer Intern for Ingram Content Group, a large scale publisher and 
              distrubuter. The project was to aid systems construction during the creation of
              a brand new manurfacturing and distrubution plant in Pennsylvania. My roles included the following:
            </p>  
          </div>
        </div>
        <div className='max-w-[1000px] w-full'>
          <div>
            <img src={ingram_slide} alt='Ingram Slide' className='max-w-full h-auto' />
          </div>
          <div className='text-sm sm:break-wordssm:text-base text-gray-400 mt-10 mb-40 mx-20'>
            <ul className='list-disc list-inside'>
              <li>
                Collaborated with the IT engineering team to implement and manage the Elastic Stack (ELK) for real-time analysis of firewall data across multiple networks.
              </li>
              <li>
                Programmed Kibana dashboards in KQL to visually interpret and analyze firewall logs, enabling the identification of potential security threats and vulnerabilities.
              </li>
              <li>
                Contributed to the successful setup and launch of a new production plant by overseeing technical systems deployment, including networking infrastructure, production machines, and workstation PCs.
              </li>
              <li>
                Led the imaging process for workstation PCs, ensuring uniform software configurations and streamlined deployment across the plant, while helping develop batch automation scripts for the process.
              </li>
              <li>
                Collaborated with cross-functional teams to troubleshoot and resolve technical issues during the production plant build-out, ensuring timely completion, operational readiness, and security.
              </li>
              <li>
                Learned the importance of high-level communication across diverse teams to fulfill critical objectives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;