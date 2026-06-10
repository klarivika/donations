// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { paraglideVitePlugin } from "@inlang/paraglide-js";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site:"https://klarivika.github.io/donations",
  integrations: [
    svelte({extensions:['.svelte']}), 
    sitemap(),
  ],
   adapter: cloudflare(),
  vite:{
    css:{
      transformer:'postcss'
    },
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
                project: "./project.inlang",
                outdir: "./src/paraglide",
            }),
    ]
  },
  
});