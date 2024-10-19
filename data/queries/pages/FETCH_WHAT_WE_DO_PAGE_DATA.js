export const FETCH_WHAT_WE_DO_PAGE_DATA = `
*[_type == "services"]{
  title,
  servicesList[] {
    title,
    image,
    description,
    subcategories[] {
      subTitle,
      subDescription
    }
  }
}

`;

export const FETCH_SERVICE_CARD_DATA = `
*[_type == "services"]{
  title,
  servicesList[] {
    title,
    image {
      asset->{
        url
      }
    },
    subcategories[] {
      subTitle
    },
    pageId
  }
}
`;
