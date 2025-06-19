/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        custom: '0.5rem', // Tambahkan nilai untuk 0.5rem
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: '#002BB1',
          hover: '#3358CC',
          surface: '#F5F7FF',
          border: '#D3D7E5',
          pressed: '#21367A',
          focus: '#ccd5ef',
        },
        secondary: {
          DEFAULT: '#F6CF37',
          hover: '#CCAD33',
          surface: '#FFFBEB',
          border: '#FCF8E8',
          pressed: '#7A6821',
          focus: '#F6CF37',
        },
        danger: {
          DEFAULT: '#CB3A31',
          hover: '#BD251C',
          surface: '#FFF4F2',
          border: '#EEB4B0',
          pressed: '#731912',
          focus: '#f5d8d6',
        },
        success: {
          DEFAULT: '#43936C',
          hover: '#367A59',
          surface: '#F7F7F7',
          border: '#B8DBCA',
          pressed: '#20573D',
          focus: '#d9e9e2',
        },
        normal: {
          10: '#FFFFFF', // #FFFFFF
          20: '#F5F5F5', // #F5F5F5
          30: '#EDEDED', // #EDEDED
          40: '#E0E0E0', // #E0E0E0
          50: '#C2C2C2', // #C2C2C2
          60: '#9E9E9E', // #9E9E9E
          70: '#757575', // #757575
          80: '#616161', // #616161
          90: '#404040', // #404040
          100: '#323232', // #323232
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        sidebar: `
            8.3125rem 0rem 2.3125rem 0rem rgba(0, 0, 0, 0.00),
            5.3125rem 0rem 2.125rem 0rem rgba(0, 0, 0, 0.01),
            3rem 0rem 1.8125rem 0rem rgba(0, 0, 0, 0.03),
            1.3125rem 0rem 1.3125rem 0rem rgba(0, 0, 0, 0.04),
            0.3125rem 0rem 0.75rem 0rem rgba(0, 0, 0, 0.05)
          `,
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
