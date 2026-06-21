import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const logo = defineType({
	name: "logo",
	title: "Logo Section",
	type: "document",

	icon: PresentationIcon,

	fields: [
		defineField({
			name: "img",
			type: "image",
			options: {
				hotspot: true,
				aiAssist: {
					imageDescriptionField: "alt",
				},
			},
			title: "Logo",

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
	],
	preview: {
		select: {
			title: "img.alt",
			media: "img",
		},
		prepare(selection) {
			const { title, media } = selection;
			return {
				title: title,
				media: media,
			};
		},
	},
});
