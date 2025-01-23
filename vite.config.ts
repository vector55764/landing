import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/landing",
  plugins: [react(), ghPages()],
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
