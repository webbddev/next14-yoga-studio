import { Oswald, Rozha_One } from 'next/font/google';
import './globals.css';

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
      <body className={`${oswald.variable} ${rozha.variable}`}>
        {/* <div className=''> */}

        {children}

        {/* </div> */}
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
