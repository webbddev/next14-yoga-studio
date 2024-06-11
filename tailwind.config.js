/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Oswald', 'sans-serif'],
      secondary: ['Raleway', 'sans-serif'],
      tertiary: ['Rozha One', 'sans-serif'],
      oswald: ['var(--font-oswald)', 'sans-serif'],
      rozha: ['var(--font-rozha)', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '20px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero_img: "url('/img/hero/bg.jpg')",
        about_img: "url('/img/about/image.png')",
        interview: "url('/img/interview/bg.png')",
      },
      // svg elements
      content: {
        // outlineText: 'url("/src/img/hero/outline-text.svg")',
        outlineText: 'url("/img/hero/UNLEASH.svg")',
      },
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
        5000: '5000ms',
      },
    },
  },
  plugins: [],
};
