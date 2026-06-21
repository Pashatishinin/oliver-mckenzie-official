export interface LogoRaw {
	img: {
		_type: "image";
		asset: { _ref: string; _type: "reference" };
		alt: string;
	} | null;
}

export interface Logo {
	imageUrl: string | null;
	imageAlt: string;
}
