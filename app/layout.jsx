// 'use client';

import { Oswald, Rozha_One } from 'next/font/google';
// import { Header, Copyright } from './components';
import './globals.css';
// import Header from './components/Header';
// Dynamic import for Header component
import dynamic from 'next/dynamic';
// const Header = dynamic(() => import('./components/Header'), {
//   ssr: false, // This ensures that the component is only rendered on the client side
// });
// const DyMap = dynamic(() => import('./components/Map'), {
//   ssr: false, // This ensures that the component is only rendered on the client side
// });
import Copyright from './components/Copyright';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

const rozha = Rozha_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rozha',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <body
        className={`${oswald.variable} ${rozha.variable} max-w-full mx-auto overflow-hidden bg-white`}
      > */}
      <body className={`${oswald.variable} ${rozha.variable}`}>
        <div className=''>
          {/* <div className='w-full max-w-full mx-auto overflow-hidden bg-white'> */}
          {/* <Header /> */}
          {/* <DyMap /> */}
          {children}
          {/* <Copyright /> */}
        </div>
      </body>
    </html>
  );
}

// 'use client';

// import { Oswald, Rozha_One } from 'next/font/google';
// import './globals.css';
// import dynamic from 'next/dynamic';
// import { Copyright } from './components';

// // Dynamically import the Header component
// const DynamicHeader = dynamic(() => import('./components/Header'), {
//   ssr: false,
// });

// const oswald = Oswald({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700'],
//   variable: '--font-oswald',
// });

// const rozha = Rozha_One({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-rozha',
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang='en'>
//       <body className={`${oswald.variable} ${rozha.variable}`}>
//         <div className='max-w-full mx-auto overflow-hidden bg-white'>
//           <DynamicHeader />
//           {children}
//           <Copyright />
//         </div>
//       </body>
//     </html>
//   );
// }
