export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc){
  title,
  slug,
  coverImage,
  projectContent[]{
    contentTitle,
    imagesList[]{
      _type,
      asset,
      alt,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
  }
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title,
  slug,
  coverImage,
  projectContent[]{
    contentTitle,
    imagesList[]{
      _type,
      asset,
      alt,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
  }
}`;
