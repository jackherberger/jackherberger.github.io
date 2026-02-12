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
            <div className='flex flex-wrap text-gray-600'>
              {post.services && post.services.map((service, index) => (
                <span key={index} className='mr-2'>
                  {service}
                  {index < post.services.length - 1 && <span className='mx-2'>•</span>}
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


