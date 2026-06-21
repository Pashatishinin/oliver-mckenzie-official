export interface ContentBlockRaw {
	contentTitle: string;
	imagesList: {
		_type: "image";
		asset: { _ref: string; _type: "reference" };
		alt: string;
		aspectRatio: number;
	}[];
}

export interface ProjectRaw {
	title: string;
	slug: { current: string };
	coverImage: {
		_type: "image";
		asset: { _ref: string; _type: "reference" };
		alt: string;
	} | null;
	projectContent: ContentBlockRaw[];
}

export interface ContentBlock {
	contentTitle: string;
	images: { url: string; alt: string; aspectRatio: number }[];
}

export interface Project {
	title: string;
	slug: string;
	coverImageUrl: string | null;
	coverImageAlt: string;
	projectContent: ContentBlock[];
}
