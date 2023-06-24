/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        require('rehype-pretty-code'),
      ],
    ],
  },
});
module.exports = withMDX(nextConfig);
