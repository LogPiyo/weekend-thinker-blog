// @ts-check
import { SITE_TITLE } from './src/consts';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import partytown from '@astrojs/partytown';

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
            'blog/14',
            'blog/15',
            'blog/16',
            'blog/17',
            'blog/18',
            'blog/20',
            'blog/21',
            'blog/22',
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
          collapsed: true,
          items: [
            'blog/6',
            'blog/8',
            'blog/9',
            'blog/19',
          ],
        },
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
            integrity: 'sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP',
            crossorigin: 'anonymous',
          }
        }
      ],
      customCss: [
        './src/styles/custom.css',
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
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    }),
  ],
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