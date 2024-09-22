/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
            xl: '1280px',
            '2xl': '1400px'
        }
    },
    screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    backgroundImage: {
      'banner': "url('./assets/banner-bg.png')",
      'collection': "url('./assets/slide.png')",
    },
    scale: {
      '175': '1',
    }
    },
  },
  plugins: [],
};
