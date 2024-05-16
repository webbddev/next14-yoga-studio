import React from 'react';
import Link from 'next/link';
// import footer data
import { footerData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';

// stagger container
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  // destructure footer data
  const { about, links, program, newsletter } = footerData;

  return (
    <footer className='section bg-dark'>
      <div className='container mx-auto'>
        {/* grid */}

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
        >
          {/* About Void Tattoo */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            {/* title */}
            <div className='font-oswald text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            {/* subtitle */}
            <div className='font-thin leading-relaxed text-[#dbdbdb]'>
              {about.subtitle}
            </div>
            {/* address, phone & email */}
            <div className='flex flex-col gap-y-4 font-medium text-[#dbdbdb]'>
              {/* address */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              {/* email */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          {/* Useful Links */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            <div>
              <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='font-thin flex flex-col gap-y-4 text-[#dbdbdb]'>
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <Link href={href} className='hover:text-white transition'>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
          {/* Working Time */}
          <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
              {program.title}
            </div>
            <ul className='font-thin flex flex-col gap-y-4 text-[#dbdbdb]'>
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </motion.div>
          {/* Newsletter */}
          <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
              {newsletter.title}
            </div>
            <div className='font-thin leading-relaxed mb-9 text-[#dbdbdb]'>
              {newsletter.subtitle}
            </div>
            <form className='flex justify-between items-start border-b border-[#090707]'>
              <input
                className='font-thin outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2'
                placeholder={newsletter.form.placeholder}
                type='text'
              />
              <button className='text-2xl cursor-pointer' type='submit'>
                {newsletter.form.icon}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
