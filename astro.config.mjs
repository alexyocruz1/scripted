import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Update `site` to your production URL before deploying.
export default defineConfig({
  site: "https://scripted-blog.pages.dev", // Update this to your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
