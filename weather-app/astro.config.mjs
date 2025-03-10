// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
});