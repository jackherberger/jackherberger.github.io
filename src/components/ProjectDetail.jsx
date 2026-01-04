import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { technicalStories, personalWriting, projects as contentProjects, openQuestions } from '../data/newContent';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const allContent = {
    'technical-stories': technicalStories,
    'personal-writing': personalWriting,
    'projects': contentProjects,
    'open-questions': openQuestions,
  };

  const projectCategory = allContent[projectId];

  if (!projectCategory) {
    return (
      <div className='w-full min-h-screen bg-white p-8 text-black'>
        <div className='max-w-[1000px] mx-auto py-8'>
          <h1 className='text-4xl font-bold'>Category Not Found</h1>
          <p>The category you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const polishedPosts = projectCategory.filter(post => post.polished);
  const comingSoonPosts = projectCategory.filter(post => !post.polished);

  return (
    <div name='project-detail' className='w-full min-h-screen bg-white p-8 text-black'>
      <div className='max-w-[1000px] mx-auto py-8'>
        <p className='text-xl font-bold pb-4'>({projectId.replace(/-/g, ' ')})</p>
        
        <div className='grid grid-cols-1 gap-8'>
          {polishedPosts.map((item) => (
            <div key={item.id} className='border-b-2 border-gray-200 pb-4'>
              <div className='flex items-center'>
                <Link to={`/${projectId}/${item.id}`}>
                  <h2 className='text-3xl hover:underline'>{item.title}</h2>
                </Link>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-sm text-blue-500 ml-2 hover:underline'>
                    (GitHub)
                  </a>
                )}
              </div>
              <p className='text-xl text-gray-600'>{item.subtitle}</p>
              <p className='text-sm text-gray-500 mt-2'>{item.date}</p>
            </div>
          ))}
        </div>

        {comingSoonPosts.length > 0 && (
          <>
            <hr className='my-12 border-gray-300' />
            <div className='mb-8'>
              <h2 className='text-5xl font-bold'>Coming soon</h2>
              <p className='text-xl text-gray-600'>Items need cleaning and polishing</p>
            </div>
            <div className='grid grid-cols-1 gap-8'>
              {comingSoonPosts.map((item) => (
                <div key={item.id} className='border-b-2 border-gray-200 pb-4'>
                  <div className='flex items-center'>
                    <Link to={`/${projectId}/${item.id}`}>
                      <h2 className='text-3xl hover:underline'>{item.title}</h2>
                    </Link>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-sm text-blue-500 ml-2 hover:underline'>
                        (GitHub)
                      </a>
                    )}
                  </div>
                  <p className='text-xl text-gray-600'>{item.subtitle}</p>
                  <p className='text-sm text-gray-500 mt-2'>{item.date}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

