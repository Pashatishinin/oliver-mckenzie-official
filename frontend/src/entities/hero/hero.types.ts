type SanityImage = {
	_type: "image";
	asset: { _ref: string; _type: "reference" };
	alt: string;
};

export interface HeroRaw {
	title: string;
	subTitle: string;
	img: SanityImage | null;
	smallImg: SanityImage | null;
}

export interface Hero {
	title: string;
	subTitle: string;
	imageUrl: string | null;
	imageAlt: string;
	smallImageUrl: string | null;
	smallImageAlt: string;
}
