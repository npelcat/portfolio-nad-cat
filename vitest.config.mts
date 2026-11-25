import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    // Same "@/" alias as in tsconfig.json.
    alias: { "@": path.resolve(import.meta.dirname, ".") },
  },
});
