import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        exo2: ['var(--font-exo2)', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00D4FF',
        'neon-red': '#FF2D55',
        'neon-purple': '#BF5FFF',
        'bg-dark': '#04060F',
        'bg-card': 'rgba(255,255,255,0.04)',
        'text-white': '#F0F4FF',
        'text-muted': '#8892A4',
      },
      backgroundImage: {
        'glow-blue': 'var(--glow-blue)',
        'glow-red': 'var(--glow-red)',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
