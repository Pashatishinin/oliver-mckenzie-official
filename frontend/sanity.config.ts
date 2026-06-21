import { assist } from "@sanity/assist";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "../studio/schemaTypes";
import { structure } from "../studio/structure";

export default defineConfig({
	name: "default",
	title: "oliver-mckenzie",

	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,

	plugins: [structureTool({ structure }), visionTool(), assist()],

	schema: {
		types: schemaTypes,
	},
});
