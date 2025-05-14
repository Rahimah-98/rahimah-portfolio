import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Link href='/'>
          <h1 className='text-5xl font-titillium mb-2 mx-auto'>
            Rahimah
            <span className='text-accent text-red-600 font-medium'>ツ</span>
          </h1>
        </Link>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          rahimaansari98@gmail.com
        </div>
          </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>2025 Rahimah Ansari. All right reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a href='' target='_blank'>
              Github
            </a>
          </li>
          <li>
            <a href='' target='_blank'>
              LinkedIn
            </a>
          </li>
          <li>
            <a href='' target='_blank'>
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
