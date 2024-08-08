/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/file/imgUpload",
        destination: "http://localhost:3005/file/imgUpload",
      },
    ];
  },
};

export default nextConfig;
