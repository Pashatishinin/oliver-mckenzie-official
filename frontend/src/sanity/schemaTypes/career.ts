import { defineField, defineType } from "sanity";

export const career = defineType({
	name: "career",
	title: "Career",
	type: "document",

	fields: [
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: {
				hotspot: true,
				aiAssist: {
					imageDescriptionField: "alt",
				},
			},
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alt Text (SEO)",
					description: "Use the AI icon to auto-generate",
					validation: (rule) =>
						rule.required().error("Alt text is required for SEO"),
				}),
			],
		}),

		defineField({
			name: "title",
			title: "Title",
			type: "string",
			options: { aiAssist: { exclude: true } },
		}),

		defineField({
			name: "careerContent",
			title: "Content Blocks",
			type: "array",
			of: [
				defineField({
					name: "contentTitle",
					title: "Block Title",
					type: "string",
					options: { aiAssist: { exclude: true } },
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "coverImage",
		},
		prepare(selection) {
			const { title, media } = selection;
			return {
				title: title || "Untitled Project",
				media: media,
			};
		},
	},
});
