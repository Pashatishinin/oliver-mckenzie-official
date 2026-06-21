import { ImageIcon, VersionsIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
	S.list()
		.title("Контент")
		.items([
			S.listItem()
				.title("Hero Section")
				.icon(VersionsIcon)
				.child(S.document().schemaType("hero").documentId("hero")),
			S.divider(),
			S.listItem()
				.title("Projects")
				.icon(ImageIcon)
				.child(S.documentTypeList("project").title("Projects List")),
			S.listItem()
				.title("Trusted by")
				.icon(ImageIcon)
				.child(S.documentTypeList("logo").title("Logos List")),
			S.listItem()
				.title("Career Section")
				.icon(VersionsIcon)
				.child(S.documentTypeList("career").title("Career List")),
		]);
