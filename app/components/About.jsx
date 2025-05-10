import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Interduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src={assets.user_image}
            alt='user'
            className='w-full rounded-3xl'
          />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            dolores mollitia labore ab soluta eos nisi velit, impedit veritatis
            non eligendi, incidunt delectus earum consectetur.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, idonDark, title, description }, index) => (
              <li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='text-gray-700 my-4 font-semibold'>{title}</h3>
                <p className='text-sm text-gray-600'>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
