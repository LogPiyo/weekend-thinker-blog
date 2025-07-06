// @ts-check
import { SITE_TITLE } from './src/consts';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://weekend-thinker.com/',
  integrations: [
    starlight({
      title: SITE_TITLE,
      logo: { src: '/public/myFavicon.svg', alt: SITE_TITLE + 'の画像' },
    }),
    sitemap(), 
    mdx(), 
  ],
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {output: 'mathml'}
      ],
    ]
  },
});