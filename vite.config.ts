import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Electron loads the built app via a custom app:// protocol; relative
    // asset URLs are required so the packaged build resolves its files.
    base: process.env["ELECTRON_BUILD"] === "1" ? "./" : "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
