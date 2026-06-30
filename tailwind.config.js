/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paper / tabletop palette
        parchment: "#F4ECD8",
        cream: "#FBF6E9",
        ink: "#2B2620",
        "ink-soft": "#5A5247",
        board: {
          DEFAULT: "#5C8A5A", // felt / play surface
          dark: "#3F6B3E",
          light: "#7FB07C",
        },
        dice: {
          DEFAULT: "#C24B4B", // dice red / CTAs
          dark: "#9E3636",
        },
        meeple: {
          DEFAULT: "#3E6B8C", // secondary accent
          dark: "#2C4F69",
        },
        gold: {
          DEFAULT: "#C9A84C",
          dark: "#A8852E",
        },
        // keep legacy tokens used by MyFit pages
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
      },
      fontFamily: {
        // headings: characterful editorial serif (rulebook feel)
        display: ['Fraunces', "serif"],
        // body
        worksans: ["Work Sans", "sans-serif"],
        // handwritten margin notes
        hand: ["Caveat", "cursive"],
        poppins: ['Poppins', "sans-serif"],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        // printed cardboard lift
        cardboard: '0 1px 0 rgba(0,0,0,0.06), 0 10px 24px -8px rgba(43,38,32,0.28)',
        "cardboard-lg": '0 2px 0 rgba(0,0,0,0.08), 0 28px 50px -12px rgba(43,38,32,0.40)',
        token: 'inset 0 2px 4px rgba(255,255,255,0.5), 0 6px 14px -4px rgba(43,38,32,0.45)',
      },
      backgroundImage: {
        'paper-grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'token-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'dice-tumble': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(200deg) scale(1.15)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'pop-in': {
          '0%': { transform: 'translateY(12px) scale(0.96)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
      },
      animation: {
        'token-bob': 'token-bob 2.4s ease-in-out infinite',
        'dice-tumble': 'dice-tumble 0.7s ease-in-out',
        'pop-in': 'pop-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
