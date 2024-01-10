const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  redirects: [
    {
      source: "/bm40",
      destination: "/kprepublic-bm40",
      permanent: "true",
    },
  ],
};

module.exports = nextConfig;
