// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/studio": {
			status: 301,
			destination: "https://oliver-mckenzie.sanity.studio/",
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
