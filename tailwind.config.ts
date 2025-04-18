import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsmall: '512px',
        tablet: '768px',
        small: '1024px',
        overSmall: '1145px',
        medium: '1280px',
        large: '1440px',
        overLarge: '1444px',
        xlarge: '1680px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        theme_green: 'var(--green)',
        theme_light_orange: 'var(--light-orange)',
        theme_dark_orange: 'var(--dark-orange)',
        theme_brown: 'var(--brown)',
      },
      fontFamily: {
        font_anonymous: ['var(--font-anonymous-pro)', 'serif'],
        font_italiana: ['var(--font-italiana)'],
        font_inter: ['var(--font-inter)'],
      },
      padding: {
        'layout-small': 'var(--layout-margin-small)',
      },
      margin: {
        'section-gap': '64px',
        'section-gap-xsmall': '72px',
        'section-gap-small': '80px',
        'layout-small': 'var(--layout-margin-small)',
      },
      keyframes: {
        'pulse-half': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.04' },
        },
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-half': 'pulse-half 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
