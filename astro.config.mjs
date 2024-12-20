import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://zainresu.me",
  integrations: [tailwind(), sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
    entryLimit: 10000,
  }), robotsTxt(), icon()],
});