import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://tzrmi5maro.ufs.sh/**")],
  },
};

export default nextConfig;
