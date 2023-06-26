/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        require('rehype-pretty-code'),
        /** @type {Partial<import("rehype-pretty-code").Options>} */
        ({
          theme: "github-light",
          getHighlighter: require('shiki').getHighlighter,
        }),
      ],
    ],
  },
});
module.exports = withMDX(nextConfig);
