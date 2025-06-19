// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import db from "@astrojs/db";

import markdoc from "@astrojs/markdoc";

import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), db(), markdoc(), mdx(), partytown(), sitemap()],
});