const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static export
  trailingSlash: true,     // Ensure URLs have a trailing slash
};

module.exports = withContentlayer(nextConfig);
