'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

// leaflet css
import 'leaflet/dist/leaflet.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const markers = [
  {
    position: [51.53154734935135, -0.16204833984375003],
    title: 'Carnival Bambini London',
    subtitle: 'To address all issues (including breaking changes)',
    image: '/img/map/cb.webp',
  },
  {
    position: [47.045745939597445, 28.865262866020206],
    title: 'Sexy Place',
    subtitle: 'Here takaq sexy lives',
    image: '/img/map/2.png',
  },
  {
    position: [46.98959154370678, 28.86788606643677],
    title: 'Yoga Studio Lucia',
    subtitle: "It's best in class, go stretch your a@@!",
    image: '/img/map/5.png',
  },
  {
    position: [34.0211, -118.3965],
    title: 'Yoga Studio Lucia LA',
    subtitle: 'To address all issues (including breaking changes)',
    image: '/img/map/4.png',
  },
];

const customIcon = new Icon({
  iconUrl: '/pin-solid.svg',
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <section>
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}
        zoomControl={false}
        // scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* markers */}
        {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className='flex gap-x-[30px]'>
                  <div className='flex-1'>
                    <h3>{marker.title}</h3>
                    <p className='leading-snug'>{marker.subtitle}</p>
                  </div>
                  <div className='flex-1'>
                    <Image
                      src={marker.image}
                      width={130}
                      height={160}
                      alt={marker.title}
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21748.996764401938!2d28.8624071!3d47.0475968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cefaf4ca33b%3A0x1fe1be761fa1ef3a!2zUsOiyJljYW5pIEZvcmVzdC1QYXJr!5e0!3m2!1sen!2s!4v1715932015051!5m2!1sen!2s'
        width='600'
        height='450'
        style='border:0;'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe> */}
    </section>
  );
};

export default Map;
