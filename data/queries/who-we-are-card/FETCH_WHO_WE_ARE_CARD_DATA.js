export const FETCH_WHO_WE_ARE_CARD_DATA = `
*[_type == "meetTheTeam"]{
  heading,
  whoWeAreCard {
    teamParagraph,
    image {
      asset->{
        url
      }
    }
  }
}
`;