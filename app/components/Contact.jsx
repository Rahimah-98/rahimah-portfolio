import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '60412e08-8032-4c8f-b22a-8eb8c03e6dc5');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully!');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center mt-5 font-Ovo mb-12 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eum
        expedita cupiditate minus neque nihil!
      </p>

      <form action='' onSubmit={onSubmit} className='max-w-2xl mx-auto mt-10 mb-8 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='Enter your name'
            className='p-3 outline-none border border-gray-300 rounded-md bg-white w-full'
            required
            name='name'
          />
          <input
            type='email'
            placeholder='Enter your email'
            className='p-3 outline-none border border-gray-300 rounded-md bg-white w-full'
            required
            name='email'
          />
        </div>

        <textarea
          rows='6'
          placeholder='Enter your message'
          className='w-full p-4 mt-4 outline-none border border-gray-300 rounded-md bg-white'
          required
          name='message'
        />

        <button
          type='submit'
          className='mt-6 w-max flex items-center justify-center gap-2 mx-auto bg-black/80 text-white px-8 py-3 rounded-full hover:bg-black hover:-translate-y-1 duration-500'>
          Submit now
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </button>

        <p className='mt-4 text-gray-400'>{result}</p>
      </form>
    </div>
  );
}

export default Contact;
