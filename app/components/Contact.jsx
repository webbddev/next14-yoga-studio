import React from 'react';
// import contact data
import { contactData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import fade in
import { fadeIn } from '../variants';
import Link from 'next/link';
const Contact = () => {
  // destructure contact data
  const { title, info, form } = contactData;
  return (
    <section id='contact' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'
          >
            {/* title */}
            <h2 className='font-thin'>{title}</h2>
            {/* info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, index) => {
                // destructure item
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  // contact item
                  <div key={index}>
                    {/* title */}
                    <div className='font-oswald uppercase font-medium text-xl mb-3'>
                      {title}
                    </div>
                    {/* subtitle */}
                    <div className='font-thin mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
                      {subtitle}
                    </div>
                    {/* address, phone & email */}
                    <div className='flex flex-col gap-y-3 mb-8'>
                      {/* address */}
                      <div className='font-medium flex items-center gap-[10px]'>
                        <div>{address.icon}</div>
                        <div className=''>{address.name}</div>
                      </div>
                      {/* phone */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className=''>{phone.number}</div>
                      </div>
                      {/* email */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{email.icon}</div>
                        <div className=''>{email.address}</div>
                      </div>
                    </div>
                    {/* link */}
                    <Link
                      className='font-thin border-b border-dark pb-[5px]'
                      href='#'
                    >
                      {link}
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 xl:pl-[40px] flex justify-center items-center'
          >
            <form className='flex flex-col gap-y-10 w-full font-thin' action=''>
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                placeholder={form.name}
                type='text'
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                placeholder={form.email}
                type='text'
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                placeholder={form.message}
                type='text'
              />
              {/* button */}
              <button className='btn btn-sm btn-dark self-start'>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
