import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Add these:
  base: "./", // Relative paths for assets
  build: {
    assetsDir: "assets", // Organizes processed files here
    emptyOutDir: true, // Clears dist on rebuild
  },
});
