// @lovable.dev/vite-tanstack-config already includes required plugins.
// Do NOT duplicate plugins or the app will break.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // 👇 THIS IS THE IMPORTANT FIX FOR GITHUB PAGES
  vite: {
    base: "/agam-gavriel-beauty/",
  },

  tanstackStart: {
    // Keep SSR/server entry as Lovable expects
    server: { entry: "server" },
  },
});
