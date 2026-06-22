import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { cream: '#fff7ed', peach: '#fed7aa', mint: '#bbf7d0' } } },
  plugins: []
};
export default config;
