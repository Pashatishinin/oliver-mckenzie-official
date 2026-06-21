import { client } from "../../shared/lib/client";
import { CAREERS_QUERY } from "./career.api";
import { mapCareer } from "./career.mappers";
import type { Career, CareerRaw } from "./career.types";

export async function fetchCareers(): Promise<Career[]> {
	const raw = await client.fetch<CareerRaw[]>(CAREERS_QUERY);
	return raw.map(mapCareer);
}
