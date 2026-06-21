import { urlForImage } from "../../shared/lib/urlForImage";
import type { ContentBlock, ContentBlockRaw, Project, ProjectRaw } from "./project.types";

function mapContentBlock(raw: ContentBlockRaw): ContentBlock {
	return {
		contentTitle: raw.contentTitle,
		images: (raw.imagesList ?? []).map((img) => ({
			url: urlForImage(img).url(),
			alt: img.alt ?? "",
			aspectRatio: img.aspectRatio ?? 1,
		})),
	};
}

export function mapProject(raw: ProjectRaw): Project {
	return {
		title: raw.title,
		slug: raw.slug.current,
		coverImageUrl: raw.coverImage ? urlForImage(raw.coverImage).url() : null,
		coverImageAlt: raw.coverImage?.alt ?? "",
		projectContent: (raw.projectContent ?? []).map(mapContentBlock),
	};
}
