import dynamic from 'next/dynamic';

import {
  Header,
  About,
  Contact,
  GallerySection,
  Hero,
  Interview,
  Skills,
  Testimonial,
  Footer,
  Copyright,
} from './components';

export default function Home() {
  const DynamicMap = dynamic(() => import('./components/Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  return (
    <main className='w-full max-w-full mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <DynamicMap />
      <Footer />
      <Copyright />
    </main>
  );
}
