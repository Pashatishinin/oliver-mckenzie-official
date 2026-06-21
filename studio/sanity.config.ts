import { assist } from "@sanity/assist";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
	name: "default",
	title: "oliver-mckenzie",

	projectId: "kpkjot36",
	dataset: "production",

	plugins: [structureTool({ structure }), visionTool(), assist()],

	schema: {
		types: schemaTypes,
	},
});
