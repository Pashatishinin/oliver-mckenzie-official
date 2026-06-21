import { urlForImage } from "../../shared/lib/urlForImage";
import type { Career, CareerRaw } from "./career.types";

export function mapCareer(raw: CareerRaw): Career {
	return {
		title: raw.title,
		coverImageUrl: raw.coverImage ? urlForImage(raw.coverImage).url() : null,
		coverImageAlt: raw.coverImage?.alt ?? "",
		careerContent: raw.careerContent ?? [],
	};
}
