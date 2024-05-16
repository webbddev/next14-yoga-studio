'use client';

import {
  About,
  Contact,
  GallerySection,
  GalleryNextSection,
  Hero,
  Interview,
  Skills,
  Testimonial,
  Footer,
} from './components';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <GallerySection />
      {/* <GalleryNextSection/> */}
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
    </div>
  );
}
