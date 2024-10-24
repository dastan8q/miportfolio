import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Geologica Variable', 'sans-serif', ], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brightMode: '#c6d6db',
        darkMode: '#14191d',
        brightText: '#e1e9ec',
        brightTitle: '#f3f6f8',
      },
    },
  },
  plugins: [],
};

export default config;
