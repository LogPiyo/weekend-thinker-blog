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
      favicon: 'favicon.ico',
      logo: { src: './src/assets/logo.svg', alt: SITE_TITLE + 'の画像' },
      social: [
        { icon: 'github', label: 'github', href: 'https://github.com/LogPiyo'},
        { icon: 'x.com', label: 'x', href: 'https://x.com/LogPiyoo'},
      ],
      sidebar: [
        {
          label: 'コンピュータサイエンス',
          items: [
            'blog/1',
            'blog/2',
            'blog/5',
            'blog/10',
            'blog/11',
            'blog/12',
            'blog/13',
          ],
        },
        {
          label: '物理学・数学',
          items: [
            'blog/3',
            'blog/4',
            'blog/7',
          ],
        },
        {
          label: '雑記',
          items: [
            'blog/6',
            'blog/8',
            'blog/9',
          ],
        },
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
        Footer: './src/components/Footer.astro',
      },
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        }
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