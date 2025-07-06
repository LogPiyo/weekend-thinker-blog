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
      social: [
        { icon: 'github', label: 'github', href: 'https://github.com/LogPiyo'},
        { icon: 'x.com', label: 'x', href: 'https://x.com/LogPiyoo'},
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'google-adsense-account',
            content: 'ca-pub-2425715237518287',
          },
        },
      ],
      components: {
        Head: './src/components/Head.astro',
      }
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