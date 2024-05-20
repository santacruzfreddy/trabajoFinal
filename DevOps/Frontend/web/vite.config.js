import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  logLevel: "info",

  plugins: [reactRefresh()],
  server: {
    host: process.env.VITE_HOST || null,
    port: process.env.VITE_PORT || null,
    hmr: {
      clientPort: process.env.VITE_CLIENT_PORT || null,
    },
    port: 5173,
    proxy: {
      "/api": {
        target: "http://avatars:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
