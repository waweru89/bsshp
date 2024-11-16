import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // This ensures assets are resolved relative to the root
  plugins: [react()],
});
