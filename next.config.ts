import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server accept requests when opened from another device on
  // the same network (e.g. a phone hitting http://192.168.x.x:3000) instead
  // of only localhost. Harmless in production (unused there).
  // Add your machine's LAN IP here if it differs (shown as "Network:" when
  // `npm run dev` starts).
  allowedDevOrigins: ["192.168.100.*", "192.168.1.*", "10.0.0.*"],
};

export default nextConfig;
