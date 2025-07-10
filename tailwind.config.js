/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '0rem',
      },
    },
    screens: {
      sm: '393px',
      // => @media (min-width: 393px) { ... }
      md: '834px',
      // => @media (min-width: 834px) { ... }
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      display: ['Markazi Text', 'serif'],
      body: ['Noto Sans', 'serif'],
    },
    fontSize: {
      'display-lg': ['128px', { lineHeight: '1', letterSpacing: '-0.25px', fontWeight: '700' }],
      'display-m': ['45px', { lineHeight: '52px', letterSpacing: '0', fontWeight: '700' }],
      'display-s': ['36px', { lineHeight: '44px', letterSpacing: '0', fontWeight: '700' }],
      'heading-lg': ['32px', { lineHeight: '40px', letterSpacing: '0', fontWeight: '700' }],
      'heading-m': ['28px', { lineHeight: '36px', letterSpacing: '0', fontWeight: '700' }],
      'heading-s': ['24px', { lineHeight: '32px', letterSpacing: '0', fontWeight: '700' }],
      'title-lg': ['22px', { lineHeight: '28px', letterSpacing: '0', fontWeight: '400' }],
      'title-m': ['16px', { lineHeight: '24px', letterSpacing: '0.15px', fontWeight: '500' }],
      'title-s': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '500' }],
      'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px', fontWeight: '400' }],
      'body-m': ['14px', { lineHeight: '20px', letterSpacing: '0.25px', fontWeight: '400' }],
      'body-s': ['12px', { lineHeight: '16px', letterSpacing: '0.4px', fontWeight: '400' }],
      'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '500' }],
      'label-m': ['12px', { lineHeight: '16px', letterSpacing: '0.5px', fontWeight: '500' }],
      'label-s': ['11px', { lineHeight: '16px', letterSpacing: '0.5px', fontWeight: '500' }],
    },
    colors: {
      primary: {
        DEFAULT: 'rgb(var(--bh-sys-color-primary))',
        on: 'rgb(var(--bh-sys-color-on-primary))',
        container: 'rgb(var(--bh-sys-color-primary-container))',
        'on-container': 'rgb(var(--bh-sys-color-on-primary-container))',
        'state-layers-0.16': 'rgb(var(--bh-sys-color-primary-surface-horvered))',
      },
      secondary: {
        DEFAULT: 'rgb(var(--bh-sys-color-secondary))',
        on: 'rgb(var(--bh-sys-color-on-secondary))',
        container: 'rgb(var(--bh-sys-color-secondary-container))',
        'on-container': 'rgb(var(--bh-sys-color-on-secondary-container))',
      },
      surface: {
        DEFAULT: 'rgb(var(--bh-sys-color-surface))',
        on: 'rgb(var(--bh-sys-color-on-surface))',
        container: 'rgb(var(--bh-sys-color-surface-container))',
        'on-container': 'rgb(var(--bh-sys-color-on-surface-container))',
      },
      'surface-variant': {
        DEFAULT: 'rgb(var(--bh-sys-color-surface-variant))',
        on: 'rgb(var(--bh-sys-color-on-surface-variant))',
        'state-layers-0.16': 'rgb(var(--bh-sys-color-netural-surface-horvered))',
      },
      background: {
        DEFAULT: 'rgb(var(--bh-sys-color-on-background))',
        on: 'rgb(var(--bh-sys-color-on-background))',
      },
      outline: {
        DEFAULT: 'rgb(var(--bh-sys-color-outline))',
        variant: 'rgb(var(--bh-sys-color-outline-variant))',
      },
    },
    extend: {
      spacing: {
        'p-1': 'var(--bh-sys-spacing-padding-10)',
        'p-2': 'var(--bh-sys-spacing-padding-20)',
        'p-3': 'var(--bh-sys-spacing-padding-30)',
        'p-4': 'var(--bh-sys-spacing-padding-40)',
        'p-6': 'var(--bh-sys-spacing-padding-60)',
        'p-8': 'var(--bh-sys-spacing-padding-80)',
        'p-12': 'var(--bh-sys-spacing-padding-120)',
        'p-20': 'var(--bh-sys-spacing-padding-200)',
        'p-60': 'var(--bh-sys-spacing-padding-600)',
      },
    },
  },
  plugins: [],
}
