import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  server: {
    open: true,
  },
});
