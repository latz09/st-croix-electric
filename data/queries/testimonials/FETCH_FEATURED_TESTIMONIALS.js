export const FETCH_FEATURED_TESTIMONIALS = `
*[_type == "testimonials"]{
  testimonialsList[isFeatured == true] {
    content,
    firstName,
    isFeatured
  },
  heading,
  intro
}
`;