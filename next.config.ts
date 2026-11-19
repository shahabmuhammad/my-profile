import type { NextConfig } from "next";

// Deployed as a GitHub Pages *project* site (github.com/shahabmuhammad/my-profile),
// which serves from https://shahabmuhammad.github.io/my-profile/ — everything
// below exists to make a plain static export work correctly under that subpath.
const REPO_NAME = "my-profile";
// Only prefix in production builds (`next build`, which GitHub Actions runs),
// so `next dev` serves the site at http://localhost:3000/ as usual.
const basePath =
  process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages has no server to run Next's image optimizer.
    unoptimized: true,
  },
  // next/image and next/font auto-prefix basePath for their own asset
  // URLs, but a raw string src (e.g. a public/ image) does not — expose
  // it so components can prefix those manually. See Hero.tsx.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Lets the dev server accept requests when opened from another device on
  // the same network (e.g. a phone hitting http://192.168.x.x:3000) instead
  // of only localhost. Harmless in production (unused there).
  // Add your machine's LAN IP here if it differs (shown as "Network:" when
  // `npm run dev` starts).
  allowedDevOrigins: ["192.168.100.*", "192.168.1.*", "10.0.0.*"],
};

export default nextConfig;
