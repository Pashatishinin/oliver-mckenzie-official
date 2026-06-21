import { urlForImage } from "../../shared/lib/urlForImage";
import type { Hero, HeroRaw } from "./hero.types";

export function mapHero(raw: HeroRaw): Hero {
	return {
		title: raw.title,
		subTitle: raw.subTitle,
		imageUrl: raw.img ? urlForImage(raw.img).url() : null,
		imageAlt: raw.img?.alt ?? "",
		smallImageUrl: raw.smallImg ? urlForImage(raw.smallImg).url() : null,
		smallImageAlt: raw.smallImg?.alt ?? "",
	};
}
