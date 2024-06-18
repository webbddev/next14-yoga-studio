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

export const metadata = {
  title: '🧘🏻‍♀️ Yoga Lucia Studio 🧘🏼',
  description: 'Yoga Studio in Chisinau, Moldova',
  keywords: 'yoga, yoga classes, botanica, chisinau, moldova, studio',
  author: 'Lucia Yoga Studio',
  creator: 'Nicholas Tetradov',
  applicationName: 'Next.js',
  date: '2024-06-17',
  language: 'en-US',
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${oswald.variable} ${rozha.variable}`}>{children}</body>
    </html>
  );
}
