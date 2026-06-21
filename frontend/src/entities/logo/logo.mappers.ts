import { urlForImage } from "../../shared/lib/urlForImage";
import type { Logo, LogoRaw } from "./logo.types";

export function mapLogo(raw: LogoRaw): Logo {
	return {
		imageUrl: raw.img ? urlForImage(raw.img).url() : null,
		imageAlt: raw.img?.alt ?? "",
	};
}
