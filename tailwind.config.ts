import type { Config } from 'tailwindcss';

import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hind-siliguri)'],
      },
      colors: {
        'brand-primary': '#28a745',
        'brand-secondary': '#12222E',
        'text-main': '#333333',
        'text-light': '#555555',
        'bg-light': '#F8F8F8',
      },
    },
  },
  plugins: [
    aspectRatio,
    typography,
  ],
};

export default config;