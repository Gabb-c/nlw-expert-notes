/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { name as projectName } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    coverage: {
      provider: "v8",
      exclude: [".d.ts"],
      include: ["src"],
    },
    name: projectName,
  },
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
});
