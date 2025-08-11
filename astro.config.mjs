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
          autogenerate: {directory: '/blog/computer'},
        },
        {
          label: '物理学・数学',
          autogenerate: {directory: '/blog/physics'},
        },
        {
          label: '雑記',
          autogenerate: {directory: '/blog/misc'},
          collapsed: true,
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
  redirects: {
    '/blog/1/': '/blog/computer/5/',
    '/blog/2/': '/blog/computer/6/',
    '/blog/3/': '/blog/physics/2/',
    '/blog/4/': '/blog/physics/3/',
    '/blog/5/': '/blog/computer/2/',
    '/blog/6/': '/blog/misc/3/',
    '/blog/7/': '/blog/physics/1/',
    '/blog/8/': '/blog/misc/1/',
    '/blog/9/': '/blog/misc/2/',
    '/blog/10/': '/blog/computer/8/',
    '/blog/11/': '/blog/computer/4/',
    '/blog/12/': '/blog/computer/7/',
    '/blog/13/': '/blog/computer/9/',
    '/blog/14/': '/blog/computer/3/',
    '/blog/15/': '/blog/computer/10/',
    '/blog/16/': '/blog/computer/11/',
    '/blog/17/': '/blog/computer/12/',
    '/blog/18/': '/blog/computer/13/',
    '/blog/19/': '/blog/misc/4/',
    '/blog/20/': '/blog/computer/14/',
    '/blog/21/': '/blog/computer/1/',
    '/blog/22/': '/blog/computer/15/',
    '/blog/23/': '/blog/computer/16/',
  },
});