export const FETCH_SEE_OUR_WORK_PAGE_DATA = `
*[_type == "seeOurWork" && visible == true] {
  title,
  "projects": projects[]{
    "imageUrl": image.asset->url,
    title,
    alt
  }
}

`;