export const FETCH_HOME_PAGE_DATA = `
*[_type == "homePage"]{
  landingHero {
    "imageUrl": image.asset->url,
    heading,
    subheading,
    blurb
  },
  intro {
    heading,
    introParagraph,
    "introImageUrl": introImage.asset->url
  },
  services {
    title,
    servicesList[] {
      serviceName,
      "imageUrl": image.asset->url,
      hoverText
    }
  },
  testimonials {
    heading,
    intro,
    testimonialsList[] {
      author,
      testimonial
    }
  },
  meetOurTeam {
    heading,
    teamParagraph,
    "teamImageUrl": teamImage.asset->url
  }
}
`;
