'use client';

import {
  About,
  Contact,
  GallerySection,
  Hero,
  Interview,
  Skills,
  Testimonial,
  Footer,
  Map,
} from './components';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}
