import { defineField, defineType } from "sanity";

export const project = defineType({
	name: "project",
	title: "Project",
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
			// Отключаем ИИ для простого заголовка
			options: { aiAssist: { exclude: true } },
		}),

		defineField({
			name: "slug",
			title: "Page Link",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
				// Отключаем ИИ для ссылки страницы
				aiAssist: { exclude: true },
			},
			validation: (rule) =>
				rule.required().error("Page link (slug) is required"),
		}),

		defineField({
			name: "projectContent",
			title: "Content Blocks",
			type: "array",
			// УБРАЛИ ОТСЮДА aiAssist: { exclude: true }, чтобы ИИ мог видеть вложенные картинки!
			of: [
				{
					type: "object",
					name: "contentBlock",
					title: "Content Block",
					fields: [
						defineField({
							name: "contentTitle",
							title: "Block Title",
							type: "string",
							// Отключаем ИИ только для названия блока
							options: { aiAssist: { exclude: true } },
						}),
						defineField({
							name: "imagesList",
							title: "Images List",
							type: "array",
							of: [
								{
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
								},
							],
						}),
					],
				},
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
