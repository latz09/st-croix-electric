export const FETCH_ALL_TESTIMONIALS = `
*[_type == "testimonials"]{
  testimonialsList[] {
    content,
    firstName,
    isFeatured
  }
}
`;
