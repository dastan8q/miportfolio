import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      // animation: {
      //   "loop-scroll": "loop-scroll 10s linear infinite"
      // },
      // keyframes: {
      //   "loop-scroll": {
      //     from: { transform: "translateX(0)" },
      //     to: { transform: "translateX(-100%)" },
      //   },
      // },
      fontFamily: {
        rubik: ['Geologica Variable', 'sans-serif',], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brightMode: '#c6d6db',
        darkMode: '#14191d',
        darkText: '#3a4750',
        darkerText: '#343e45',
        brightText: '#e1e9ec',
        brightTitle: '#f3f6f8',
        brightButton: '#7091a0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
};

export default config;
