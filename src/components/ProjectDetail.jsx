import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { technicalStories, personalWriting, projects as contentProjects, openQuestions, blogPosts } from '../data/newContent';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const filterRef = useRef(null);

  const allContent = {
    'technical-stories': technicalStories,
    'personal-writing': personalWriting,
    'projects': contentProjects,
    'open-questions': openQuestions,
    'blog': blogPosts,
  };

  const projectCategory = allContent[projectId];

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!projectCategory) {
    return (
      <div className='w-full min-h-screen bg-white p-8 text-black'>
        <div className='max-w-[1000px] mx-auto py-8'>
          <h1 className='text-4xl font-normal'>Category Not Found</h1>
          <p>The category you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const isBlog = projectId === 'blog';

  // Filter logic
  const filteredPosts = isBlog 
    ? (selectedCategory === 'All' 
        ? projectCategory 
        : projectCategory.filter(post => post.category && post.category.includes(selectedCategory)))
    : projectCategory;

  const polishedPosts = filteredPosts.filter(post => post.polished);
  const comingSoonPosts = filteredPosts.filter(post => !post.polished);

  const categories = ['All', 'Technical', 'Personal', 'Philosophical'];

  return (
    <div name='project-detail' className='w-full min-h-screen bg-white p-8 text-black relative'>
      <div className='max-w-[1000px] mx-auto py-8'>
        
        <div className='flex flex-col mb-16 pb-4'>
           <div className='flex justify-between items-end'>
             <h1 className='text-4xl sm:text-6xl font-normal capitalize tracking-tighter'>
              ({projectId.replace(/-/g, ' ')})
             </h1>
           </div>
           
           {isBlog && (
             <div className='mt-2' ref={filterRef}>
               <div className='text-xl text-gray-500 font-normal flex flex-wrap items-center gap-2 transition-all duration-300 ease-in-out'>
                 <span>Filtering for</span>
                 
                 {!isExpanded ? (
                   <button 
                     onClick={() => setIsExpanded(true)}
                     className='text-black hover:line-through transition-all'
                   >
                     ({selectedCategory.toLowerCase()})
                   </button>
                 ) : (
                   <div className='inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-black'>
                     <span>(</span>
                     {categories.map((cat) => (
                       <button
                         key={cat}
                         onClick={() => {
                           setSelectedCategory(cat);
                           setIsExpanded(false);
                         }}
                         className={`
                           hover:line-through transition-all
                           ${selectedCategory === cat ? 'line-through decoration-black/30' : ''}
                         `}
                       >
                         {cat.toLowerCase()}
                       </button>
                     ))}
                     <span>)</span>
                   </div>
                 )}

                 <span>stories</span>
               </div>
             </div>
           )}
        </div>
        
        <div className='grid grid-cols-1 gap-12'>
          {polishedPosts.map((item) => (
            <div key={item.id} className='group relative pl-4 border-l border-gray-200 hover:border-black transition-colors duration-300'>
              <div className='flex flex-col sm:flex-row sm:items-baseline justify-between mb-2'>
                <div className='flex items-center gap-3 flex-wrap'>
                  {item.category && Array.isArray(item.category) ? (
                    item.category.map(cat => (
                     <span key={cat} className={`
                       text-xs font-normal px-2 py-1 rounded-md uppercase tracking-wide border
                       ${cat === 'Technical' ? 'bg-blue-50 text-blue-600 border-blue-200' : 
                         cat === 'Personal' ? 'bg-purple-50 text-purple-600 border-purple-200' :
                         'bg-orange-50 text-orange-600 border-orange-200'}
                     `}>
                       {cat}
                     </span>
                    ))
                  ) : item.category && (
                     <span className={`
                       text-xs font-normal px-2 py-1 rounded-md uppercase tracking-wide border
                       ${item.category === 'Technical' ? 'bg-blue-50 text-blue-600 border-blue-200' : 
                         item.category === 'Personal' ? 'bg-purple-50 text-purple-600 border-purple-200' :
                         'bg-orange-50 text-orange-600 border-orange-200'}
                     `}>
                       {item.category}
                     </span>
                  )}
                   <span className='text-sm text-gray-400 font-mono'>{new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
              
              <Link to={`/${projectId}/${item.id}`} className='block'>
                <h2 className='text-3xl sm:text-4xl font-normal mb-2 group-hover:line-through decoration-black transition-all duration-300'>
                  {item.title}
                </h2>
              </Link>

              <p className='text-lg sm:text-xl text-gray-600 leading-relaxed font-light'>
                {item.subtitle}
              </p>
              
              {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className='inline-flex items-center mt-3 text-sm font-normal text-black hover:opacity-70 transition-opacity'>
                    View on GitHub <span className='ml-1'>↗</span>
                  </a>
              )}
            </div>
          ))}
        </div>

        {comingSoonPosts.length > 0 && (
          <>
            <div className='my-24 flex items-center gap-4'>
               <div className='h-px bg-gray-200 flex-grow'></div>
               <span className='text-gray-400 font-normal text-sm text-center'>(Following posts are in the process of being polished)</span>
               <div className='h-px bg-gray-200 flex-grow'></div>
            </div>
            
            <div className='grid grid-cols-1 gap-12 opacity-80'>
              {comingSoonPosts.map((item) => (
                <div key={item.id} className='pl-4 border-l border-gray-100'>
                   <div className='flex items-center gap-3 mb-2'>
                      {item.category && Array.isArray(item.category) ? (
                        item.category.map(cat => (
                          <span key={cat} className='text-xs font-normal px-2 py-1 rounded-md uppercase tracking-wide border bg-gray-50 text-gray-400 border-gray-200'>
                            {cat}
                          </span>
                        ))
                      ) : item.category && (
                        <span className='text-xs font-normal px-2 py-1 rounded-md uppercase tracking-wide border bg-gray-50 text-gray-400 border-gray-200'>
                          {item.category}
                        </span>
                      )}
                      <span className='text-xs font-normal px-2 py-1 rounded-md bg-gray-100 text-gray-500'>COMING SOON</span>
                   </div>
                   <h2 className='text-2xl font-normal text-gray-400 mb-2'>{item.title}</h2>
                   <p className='text-lg text-gray-400'>{item.subtitle}</p>
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

