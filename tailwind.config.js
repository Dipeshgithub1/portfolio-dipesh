/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode colors (default)
        primary: "#6D28D9", // A deeper, more distinguished purple
        secondary: "#3B82F6", // A clear, bright blue for contrast
        accent: "#EC4899", // A vibrant pink for highlights and interactive elements
        background: "#F9FAFB", // A very light grey, almost white
        text: "#1F2937", // A dark charcoal grey for main text
        "text-secondary": "#4B5563", // A medium grey for secondary text
        card: "#FFFFFF", // Pure white for cards, ensuring they pop
        item: "#E5E7EB", // A light grey for item backgrounds

        // Dark mode colors (prefixed with 'dark:')
        dark: {
          background: "#111827", // A very dark blue-grey
          text: "#F3F4F6", // A light off-white for main text
          "text-secondary": "#9CA3AF", // A lighter grey for secondary text
          card: "#1F2937", // Dark charcoal for cards
          item: "#374151", // A darker grey for item backgrounds
          primary: "#9F7AEA", // A lighter purple for dark mode primary
          secondary: "#60A5FA", // A lighter blue for dark mode secondary
          accent: "#F472B6", // A brighter pink for dark mode highlights
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      extend: {
        letterSpacing: {
          tightest: '-.075em',
          tighter: '-.05em',
          tight: '-.025em',
          normal: '0',
          wide: '.025em',
          wider: '.05em',
          widest: '.1em',
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
