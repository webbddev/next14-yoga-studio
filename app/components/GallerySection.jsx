// import React, { useState } from 'react';
// import { PhotoAlbum } from 'react-photo-album';
// import Lightbox from 'yet-another-react-lightbox';
// import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// import NextJsImage from './NextJsImage'; // Assuming you put NextJsImage in a separate file
// import { galleryData } from '../data';

// const GallerySection = () => {
//   const [index, setIndex] = useState(-1);
//   const { title, btnText, btnIcon, images } = galleryData;

//   const photos = images.map(({ src, width, height }) => ({
//     src,
//     width,
//     height,
//   }));

//   const slides = images.map(({ original, width, height }) => ({
//     src: original,
//     width,
//     height,
//   }));

//   return (
//     <section
//       id='gallery'
//       className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'
//     >
//       <div className='container mx-auto'>
//         <motion.h2
//           variants={fadeIn('up')}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{ once: false, amount: 0.6 }}
//           className='h2 max-w-[370px] lg:mb-20'
//         >
//           {title}
//         </motion.h2>
//       </div>
//       {/* photo album */}
//       <motion.div
//         variants={fadeIn('up')}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{ once: false, amount: 0.3 }}
//         className='mb-8 lg:mb-20'
//       >
//         <PhotoAlbum
//           onClick={(event, photo, index) => setIndex(index)}
//           layout='rows'
//           photos={photos}
//           renderPhoto={NextJsImage} // Using custom NextJsImage component
//         />
//         <Lightbox
//           slides={slides}
//           styles={{
//             container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
//             content: { maxWidth: '90vw', maxHeight: '90vh' }, // Adjust these values as needed
//           }}
//           open={index >= 0}
//           index={index}
//           close={() => setIndex(-1)}
//           plugins={[Slideshow, Thumbnails]}
//         />
//       </motion.div>
//       {/* btn */}
//       <motion.div
//         variants={fadeIn('up')}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{ once: false, amount: 0.2 }}
//         className='flex justify-center'
//       >
//         <button className='btn btn-lg btn-dark'>
//           {btnText} <div className='text-xl'>{btnIcon}</div>
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default GallerySection;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// import { galleryData } from '../data';
// import { PhotoAlbum } from 'react-photo-album';
// import Lightbox from 'yet-another-react-lightbox';
// import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import NextJsImage from './NextJsImage';

// const GallerySection = () => {
//   const [index, setIndex] = useState(-1);
//   const { title, btnText, btnIcon, images } = galleryData;

//   const photos = images.map(({ src, width, height }, index) => ({
//     src,
//     width,
//     height,
//     key: index.toString(), // Use index as key
//   }));

//   const slides = images.map(({ original, width, height }) => ({
//     src: original,
//     width,
//     height,
//   }));

//   const handleImageClick = (event, photo, index) => {
//     setIndex(index); // Set the index of the clicked image
//   };

//   return (
//     <section
//       id='gallery'
//       className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'
//     >
//       <div className='container mx-auto'>
//         <motion.h2
//           variants={fadeIn('up')}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{ once: false, amount: 0.6 }}
//           className='h2 max-w-[370px] lg:mb-20'
//         >
//           {title}
//         </motion.h2>
//       </div>
//       {/* photo album */}
//       <motion.div
//         variants={fadeIn('up')}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{ once: false, amount: 0.3 }}
//         className='mb-8 lg:mb-20'
//       >
//         <PhotoAlbum
//           onClick={handleImageClick} // Use the custom onClick handler
//           layout='rows'
//           photos={photos}
//           renderPhoto={NextJsImage} // Use custom NextJsImage component
//         />
//         <Lightbox
//           slides={slides}
//           styles={{
//             container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
//             content: { maxWidth: '90vw', maxHeight: '90vh' }, // Adjust these values as needed
//           }}
//           open={index >= 0}
//           index={index}
//           close={() => setIndex(-1)}
//           plugins={[Slideshow, Thumbnails]}
//         />
//       </motion.div>
//       {/* btn */}
//       <motion.div
//         variants={fadeIn('up')}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{ once: false, amount: 0.2 }}
//         className='flex justify-center'
//       >
//         <button className='btn btn-lg btn-dark'>
//           {btnText} <div className='text-xl'>{btnIcon}</div>
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default GallerySection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { galleryData } from '../data';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import NextJsImage from './NextJsImage';
// lightbox css
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, btnText, btnIcon, images } = galleryData;

  const photos = images.map(({ src, original, width, height }) => ({
    src,
    original,
    width,
    height,
  }));

  const handleImageClick = (event, photo, index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id='gallery'
      className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'
    >
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[370px] lg:mb-20'
        >
          {title}
        </motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='mb-8 lg:mb-20'
      >
        <PhotoAlbum
          onClick={handleImageClick}
          layout='rows'
          photos={photos}
          renderPhoto={NextJsImage}
        />
        <Lightbox
          open={lightboxOpen}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
            content: { maxWidth: '90vw', maxHeight: '90vh' }, // Adjust these values as needed
          }}
          close={() => setLightboxOpen(false)}
          slides={images.map(({ original }) => original)}
          index={currentIndex}
          plugins={[Slideshow, Thumbnails]}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='flex justify-center'
      >
        <button className='btn btn-lg btn-dark'>
          {btnText} <div className='text-xl'>{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
