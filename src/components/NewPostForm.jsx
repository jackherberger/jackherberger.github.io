import React, { useState } from 'react';

const NewPostForm = () => {
  const [formData, setFormData] = useState({
    category: 'technical-stories',
    title: '',
    subtitle: '',
    date: new Date().toISOString(),
    services: '',
    image: '',
    content: '',
    polished: true,
  });
  const [generatedCode, setGeneratedCode] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleGenerateCode = (e) => {
    e.preventDefault();
    const { category, title, subtitle, date, services, image, content, polished } = formData;
    const servicesArray = services.split(',').map(s => s.trim());
    
    const newPostObject = {
      id: 'REPLACE_WITH_NEW_ID',
      title,
      subtitle,
      date,
      services: servicesArray,
      image: image || null,
      content,
      polished
    };

    const codeString = `// Add this object to the '${category}' array in src/data/newContent.js
{
  id: ${newPostObject.id},
  title: '${newPostObject.title}',
  subtitle: '${newPostObject.subtitle}',
  date: '${newPostObject.date}',
  services: [${newPostObject.services.map(s => `'${s}'`).join(', ')}],
  image: ${newPostObject.image ? `'${newPostObject.image}'` : null},
  content: \`${newPostObject.content}\`,
  polished: ${newPostObject.polished}
},`;

    setGeneratedCode(codeString);
  };

  return (
    <div className='w-full min-h-screen bg-white p-8 text-black'>
      <div className='max-w-[1000px] mx-auto py-8'>
        <h1 className='text-4xl font-bold mb-8'>Create a New Post</h1>
        <form onSubmit={handleGenerateCode} className='space-y-4'>
          <div>
            <label htmlFor='category' className='block font-bold mb-1'>Category</label>
            <select name='category' id='category' value={formData.category} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
              <option value='technical-stories'>Technical Stories</option>
              <option value='personal-writing'>Personal Writing</option>
              <option value='projects'>Projects</option>
              <option value='open-questions'>Open Questions</option>
            </select>
          </div>
          <div>
            <label htmlFor='title' className='block font-bold mb-1'>Title</label>
            <input type='text' name='title' id='title' value={formData.title} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' required />
          </div>
          <div>
            <label htmlFor='subtitle' className='block font-bold mb-1'>Subtitle</label>
            <input type='text' name='subtitle' id='subtitle' value={formData.subtitle} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' required />
          </div>
          <div>
            <label htmlFor='date' className='block font-bold mb-1'>Date</label>
            <input type='text' name='date' id='date' value={formData.date} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
          </div>
          <div>
            <label htmlFor='services' className='block font-bold mb-1'>Services (comma-separated)</label>
            <input type='text' name='services' id='services' value={formData.services} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
          </div>
          <div>
            <label htmlFor='image' className='block font-bold mb-1'>Image Path (optional)</label>
            <input type='text' name='image' id='image' value={formData.image} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
          </div>
          <div>
            <label htmlFor='content' className='block font-bold mb-1'>Content (Markdown)</label>
            <textarea name='content' id='content' value={formData.content} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='10'></textarea>
          </div>
          <div className='flex items-center'>
            <input type='checkbox' name='polished' id='polished' checked={formData.polished} onChange={handleChange} className='mr-2' />
            <label htmlFor='polished' className='font-bold'>Polished</label>
          </div>
          <button type='submit' className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800'>Generate Code</button>
        </form>

        {generatedCode && (
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>Generated Code</h2>
            <p className='mb-2'>Copy the code below and paste it into the appropriate array in <strong>src/data/newContent.js</strong>. Remember to replace <strong>REPLACE_WITH_NEW_ID</strong> with the next available ID in the array.</p>
            <pre className='bg-gray-100 p-4 rounded overflow-x-auto'>
              <code>{generatedCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPostForm;

