module.exports = {
  async redirects() {
    return [
      {
        source: "/blog/*",
        destination: "/posts/",
        permanent: true,
      },
    ];
  },
};
