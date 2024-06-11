'use client';
import Link from 'next/link';
// import hero data
import { heroData } from '../../data';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn, scaleUp } from '../variants';

const container = {
  hidden: { display: '' },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  // destructure heroData
  const { title, subtitle, btnText, btnIcon } = heroData;

  return (
    // bg properties for hero background set in className
    <section
      id='home'
      className='bg-hero_img bg-cover bg-center min-h-[40vh] lg:h-[948px] xl:h-[1108px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto min-h-[40vh] lg:h-full flex items-center xl:justify-end'
      >
        {/* text & btn */}
        <div className='text-white text-center lg:text-left lg:max-w-[540px] lg:ml-auto'>
          <motion.h1 variants={fadeIn('down')} className='h1'>
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn('left')}
            className='font-thin mb-8 lg:mb-16 max-w-lg leading-relaxed'
          >
            {subtitle}
          </motion.p>
          {/* btn */}
          <motion.div variants={fadeIn('up')}>
            {/* <Link href='/hero'> */}
            <button className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0'>
              {btnText} <div>{btnIcon}</div>
            </button>
            {/* </Link> */}
          </motion.div>
        </div>
        {/* outline text */}
        <motion.div
          variants={fadeIn('right')}
          viewport={{ once: false, amount: 0.7 }}
          className='hidden lg:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
