import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
});

// Use ./ to serve the app from the root when using Netlify
// Use /Professional-Portfolio-Website/ to serve the app from a subdirectory when using GitHub Pages?
