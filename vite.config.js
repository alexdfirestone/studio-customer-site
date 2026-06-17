import { defineConfig } from "vite";

// Served inside a Vercel Sandbox and shown in the demo's iframe via the sandbox's
// public domain, so we bind all interfaces and allow the proxied host.
export default defineConfig({
  server: {
    host: true, // 0.0.0.0 — reachable from the sandbox edge
    port: 3000, // matches the port the Pilot exposes
    strictPort: true,
    allowedHosts: true, // accept the sandbox's *.vercel.run preview host
  },
});
