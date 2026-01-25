import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // DOM environment for React tests
    setupFiles: "./src/test/setupTests.ts", // global setup
    globals: true, // allows using "expect" without importing in every test
  },
});
