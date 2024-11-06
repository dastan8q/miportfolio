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
      fontFamily: {
        rubik: ['Geologica Variable', 'sans-serif',], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brightMode: '#c6d6db',
        darkMode: '#14191d',
        darkText: '#3a4750',
        brightText: '#e1e9ec',
        brightTitle: '#f3f6f8',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
};

export default config;
