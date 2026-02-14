import React from 'react'; // Removed useState
import { Link } from 'react-router-dom';
import { blogPosts, projects as contentProjects } from '../data/newContent';

const Home = () => {
  // Removed hoveredImage state

  const getCircledNumber = (num) => {
    if (num >= 1 && num <= 9) {
      return String.fromCharCode(0x2460 + num - 1);
    }
    // Fallback for numbers > 9 or other cases
    return `${num}.`;
  };

  const sections = [
    {
      title: 'Blog',
      path: '/blog',
      image: blogPosts[0]?.image,
    },
    {
      title: 'Projects',
      path: '/projects',
      image: contentProjects[0]?.image,
    },
    {
      title: 'Photography',
      path: 'https://www.jackherberger.com/lambdaCatfishPhotography/', // External URL
      external: true, // New property to indicate external link
      image: null,
    },
    {
      title: 'About',
      path: '/info',
      image: null,
    },
  ];

  return (
    <div name='home' className='w-full min-h-screen bg-white p-8 relative'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
        <ol className='text-4xl sm:text-5xl md:text-6xl text-black leading-relaxed'>
          {sections.map((section, index) => (
            <React.Fragment key={section.path}>
              <li className='inline mr-4 mb-2 whitespace-nowrap'>
                {section.external ? (
                  <a href={section.path} target="_blank" rel="noopener noreferrer" className='hover:line-through decoration-2'>
                    {getCircledNumber(index + 1)} {section.title}
                  </a>
                ) : (
                  <Link to={section.path} className='hover:line-through decoration-2'>
                    {getCircledNumber(index + 1)} {section.title}
                  </Link>
                )}
              </li>
              {index === 1 && <li className='block h-0 w-full mb-2 content-[""]'></li>}
            </React.Fragment>
          ))}
        </ol>
      </div>

      {/* Removed conditional rendering of hoveredImage */}
    </div>
  );
};

export default Home;
