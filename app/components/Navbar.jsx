import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'My work', href: '#work' },
    { name: 'contact', href: '#contact' },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white opacity-50 background-blur-lg shadow-sm left-0'
            : 'bg-transparent'
        }`}>
        <Link href='/'>
          <h1 className='text-4xl font-titillium'>
            Rahimah
            <span className='text-accent text-red-600 font-medium'>ツ</span>
          </h1>
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-gray-100/50 shadow-md'
          } `}>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className='font-Ovo'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} className='w-5' alt='' />
          </button> 

          <a
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full ml-4 font-Ovo hover:translate-x-1 duration-500'>
            Contact{' '}
            <Image src={assets.arrow_icon} className='w-3' alt='arrow' />
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} className='w-5' alt='' />
          </button>
        </div>

        {/* ------- Mobile menu -------- */}

        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-full z-50 h-screen bg-white transition duration-500'>
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=''
              className='w-5 cursor-pointer'
            />
          </div>

          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className='font-Ovo'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
