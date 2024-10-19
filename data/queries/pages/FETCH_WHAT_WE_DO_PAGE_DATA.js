export const FETCH_WHAT_WE_DO_PAGE_DATA = `
*[_type == "services"]{
  title,
  servicesList[] {
    title,
     image {
      asset->{
        url
      }
    },
    description,
    subcategories[] {
      subTitle,
      subDescription
    },
    pageId
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
