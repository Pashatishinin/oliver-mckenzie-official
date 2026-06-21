import { client } from "../../shared/lib/client";
import { PROJECT_BY_SLUG_QUERY, PROJECTS_QUERY } from "./project.api";
import { mapProject } from "./project.mappers";
import type { Project, ProjectRaw } from "./project.types";

export async function fetchProjects(): Promise<Project[]> {
	const raw = await client.fetch<ProjectRaw[]>(PROJECTS_QUERY);
	return raw.map(mapProject);
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
	const raw = await client.fetch<ProjectRaw | null>(PROJECT_BY_SLUG_QUERY, { slug });
	if (!raw) return null;
	return mapProject(raw);
}
