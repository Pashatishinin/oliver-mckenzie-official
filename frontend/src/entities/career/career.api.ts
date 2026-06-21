export const CAREERS_QUERY = `*[_type == "career"] | order(_createdAt desc){
  title,
  coverImage,
  careerContent
}`;
