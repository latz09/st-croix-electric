export const FETCH_MEET_THE_TEAM_PAGE_DATA = `
*[_type == "meetTheTeam"]{
  heading,
  whoWeAreCard {
    teamParagraph,
    
  },
  teamMembers[] {
    name,
    role,
   "image": image.asset->url,
    description[] // This will fetch each text field in the description array
  }
}
`;
