import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@customMUI": "/src/components/customMUI",
      "@assets": "/src/assets",
      "@variables": "/src/variables",
      "@providers": "/src/providers",
      "@utils": "/src/utils",
      "@layouts": "/src/layouts",
    },
  },
  plugins: [react()],
  base: "/SK-Biler/",
});
