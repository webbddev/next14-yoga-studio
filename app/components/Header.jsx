'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// import header data
import { headerData } from '../data';
// import components
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';
import Socials from './Socials';
// import icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  const closeMobileMenu = () => {
    setNavMobile(false); // Function to close the mobile menu
  };

  return (
    <header
      className={`${
        isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'
      } fixed bg-white left-0 right-0 z-10 min-w-max w-full mx-auto transition-all duration-500`}
    >
      <div className='flex items-center justify-between h-full pl-[50px] pr-[60px] md:pr-[80px] md:pl-[80px] lg:pl-[100px] lg:pr-[100px] xl:pl-[140px] xl:pr-[140px] 2xl:pl-[180px] 2xl:pr-[180px]'>
        {/* logo */}
        <a href='/'>
          <Image
            className='w-[188px] h-[90px]'
            src={logo}
            alt='logo'
            width={188}
            height={90}
          />
        </a>
        {/* nav - initially hidden, show on desktop */}
        <div className='hidden lg:flex mx-auto'>
          <NavLinks />
        </div>
        {/* hamburger menu icon = showing by default, hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-2xl' />
        </div>
        {/* nav mobile - showing by default, hidden on desktop */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile closeMobileMenu={closeMobileMenu} />
        </div>
        {/* social icons - initially hidden - show on desktop */}
        <div className='hidden lg:flex'>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;