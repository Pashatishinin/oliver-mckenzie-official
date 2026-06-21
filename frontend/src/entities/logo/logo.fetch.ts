import { client } from "../../shared/lib/client";
import { LOGOS_QUERY } from "./logo.api";
import { mapLogo } from "./logo.mappers";
import type { Logo, LogoRaw } from "./logo.types";

export async function fetchLogos(): Promise<Logo[]> {
	const raw = await client.fetch<LogoRaw[]>(LOGOS_QUERY);
	return raw.map(mapLogo);
}
