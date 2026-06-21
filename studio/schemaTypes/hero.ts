import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const hero = defineType({
	name: "hero",
	title: "Hero Section",
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
			title: "Picture",

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
			name: "smallImg",
			type: "image",
			options: {
				hotspot: true,
				aiAssist: {
					imageDescriptionField: "alt",
				},
			},
			title: "Small image",

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
			title: "Title ",
			type: "string",
			validation: (Rule) => Rule.max(50).error("Title is too long"),
			options: {
				aiAssist: {
					exclude: true,
				},
			},
		}),
		defineField({
			name: "subTitle",
			title: "Sub Title",
			type: "string",
			validation: (Rule) => Rule.max(50).error("Subtitle is too long"),
			options: {
				aiAssist: {
					exclude: true,
				},
			},
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
			};
		},
	},
});
