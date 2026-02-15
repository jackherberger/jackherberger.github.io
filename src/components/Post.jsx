import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { technicalStories, personalWriting, projects as contentProjects, openQuestions, blogPosts } from '../data/newContent';

const Post = () => {
  const { projectId, postId } = useParams();

  const allContent = {
    'technical-stories': technicalStories,
    'personal-writing': personalWriting,
    'projects': contentProjects,
    'open-questions': openQuestions,
    'blog': blogPosts,
  };

  const projectCategory = allContent[projectId];
  const post = projectCategory ? projectCategory.find(p => String(p.id) === String(postId)) : null;

  if (!post) {
    return (
      <div className='w-full min-h-screen bg-white p-8 text-black'>
        <div className='max-w-[1000px] mx-auto py-8'>
          <h1 className='text-4xl font-bold'>Post Not Found</h1>
          <p>The post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div name='post' className='w-full min-h-screen bg-white p-8 text-black'>
      <div className='max-w-[1000px] mx-auto py-8'>
        <p className='text-xl pb-4'>({post.title})</p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight'>
          {post.subtitle}
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          <div>
            <p className='text-gray-600'>{post.date}</p>
            <div className='flex flex-wrap mt-4'>
              {post.tags && post.tags.map((tag, index) => (
                <span key={index} className={`
                  text-xs font-normal px-2 py-1 rounded-md uppercase tracking-wide border mr-2
                  ${tag === 'Computer Vision' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                    tag === 'Machine Learning' ? 'bg-green-50 text-green-600 border-green-200' :
                    tag === 'Systems Programming' ? 'bg-red-50 text-red-600 border-red-200' :
                    tag === 'Distributed Computing' ? 'bg-yellow-50 text-yellow-600 border-yellow-200' :
                    tag === 'Security' ? 'bg-indigo-50 text-indigo-600 border-indigo-200' :
                    'bg-pink-50 text-pink-600 border-pink-200'
                  }
                `}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            {/* Description can be part of the markdown content */}
          </div>
        </div>

        <div className='prose prose-lg max-w-none mx-auto text-left'>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{post.content.trim()}</ReactMarkdown>
        </div>

        {post.image && (
          <div className='w-full h-auto mt-8'>
            <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;


