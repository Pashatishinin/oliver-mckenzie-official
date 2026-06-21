export interface CareerRaw {
	title: string;
	coverImage: {
		_type: "image";
		asset: { _ref: string; _type: "reference" };
		alt: string;
	} | null;
	careerContent: string[];
}

export interface Career {
	title: string;
	coverImageUrl: string | null;
	coverImageAlt: string;
	careerContent: string[];
}
