import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
      <p className='text-center mt-5 font-Ovo mb-12 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eum
        expedita cupiditate minus neque nihil!
      </p>

      <div className='grid grid-cols-auto gap-6 my-10 '>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            className='border-[0.5px] border-gray-400 rounded-lg cursor-pointer hover:bg-fuchsia-50/30 hover:-translate-y-1 duration-500 hover:shadow-gray-500 hover:shadow-md px-8 py-12 '
            key={index}>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more{' '}
              <Image src={assets.right_arrow} className='w-4' alt='' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
