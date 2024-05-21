import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

console.log("VITE_HOST:", process.env.VITE_HOST);
console.log("VITE_PORT:", process.env.VITE_PORT);
console.log("VITE_CLIENT_PORT:", process.env.VITE_CLIENT_PORT);

export default defineConfig({
  logLevel: "info",

  plugins: [reactRefresh()],
  server: {
    host: process.env.VITE_HOST || null,
    port: process.env.VITE_PORT || null,
    hmr: {
      clientPort: process.env.VITE_CLIENT_PORT || null,
    },
    proxy: {
      "/api": {
        target: "http://avatars:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
