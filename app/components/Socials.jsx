import React from 'react';
import Link from 'next/link';

// import social data
import { socialData } from '../../data';

const Socials = () => {
  return (
    <ul className='flex justify-center items-center gap-x-[30px]'>
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href}>{item.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
