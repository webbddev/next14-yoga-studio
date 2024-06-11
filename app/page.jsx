// 'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Dynamically import the Header and the Map component
const DynamicHeader = dynamic(() => import('./components/Header'), {
  ssr: false,
});
// const DynamicMap = dynamic(() => import('./components/Map'), {
//   ssr: false,
// });

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Hero from './components/Hero';
import Interview from './components/Interview';
import Map from './components/Map';
import MapWrapper from './components/MapWrapper';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import Copyright from './components/Copyright';

// import {
//   About,
//   Contact,
//   GallerySection,
//   Hero,
//   Interview,
//   Skills,
//   Testimonial,
//   Footer,
//   Map,
// } from './components';

export default function Home() {
  const DynamicMap = dynamic(() => import('./components/Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });
  // const DynamicHeader = useMemo(
  //   () =>
  //     dynamic(() => import('./components/Header'), {
  //       loading: () => <p>A header is loading</p>,
  //       ssr: false,
  //     }),
  //   []
  // );

  return (
    <main className='w-full max-w-full mx-auto overflow-hidden bg-white'>
      <Header />
      {/* <DynamicHeader />  */}
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      {/* Dynamically load the Map component */}
      <DynamicMap />
      {/* <MapWrapper> */}
      {/* <Map /> */}
      {/* </MapWrapper> */}
      <Footer />
      <Copyright />
    </main>
  );
}

// 'use client';

// import {
//   About,
//   Contact,
//   GallerySection,
//   Hero,
//   Interview,
//   Skills,
//   Testimonial,
//   Footer,
// } from './components';
// import dynamic from 'next/dynamic'; // Import the dynamic function

// // Dynamically import the Map component
// const DynamicMap = dynamic(() => import('./components/Map'), {
//   ssr: false, // Ensure it's not included in server-side rendering
// });

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <GallerySection />
//       <Skills />
//       <Testimonial />
//       <Interview />
//       <Contact />
//       <DynamicMap /> {/* Use the dynamically imported Map component */}
//       <Footer />import Hero from './components/Hero';

//     </>
//   );
// }
