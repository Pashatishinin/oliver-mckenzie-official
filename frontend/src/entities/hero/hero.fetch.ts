import { client } from "../../shared/lib/client";
import { HERO_QUERY } from "./hero.api";
import { mapHero } from "./hero.mappers";
import type { Hero, HeroRaw } from "./hero.types";

export async function fetchHero(): Promise<Hero | null> {
	const raw = await client.fetch<HeroRaw | null>(HERO_QUERY);
	if (!raw) return null;
	return mapHero(raw);
}
