// @ts-check
import { SITE_TITLE } from './src/consts';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import partytown from '@astrojs/partytown';
import rehypeMermaid from 'rehype-mermaid';

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
          label: '論理学',
          autogenerate: {directory: '/blog/logic'},
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
    syntaxHighlight: {
      excludeLangs: ['mermaid'],
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {output: 'mathml'}
      ],
      rehypeMermaid,
    ]
  },
});