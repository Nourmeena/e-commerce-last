import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/e-commerce-app/", // Must match your repo name exactly
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
