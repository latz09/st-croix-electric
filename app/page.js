import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_HOME_PAGE_DATA as query } from '@/data/queries/pages/FETCH_HOME_PAGE_DATA';
import PageContainer from './components/utils/animations/PageContainer';
import LandingHero from './components/heros/LandingHero';
import HomePageIntro from './components/about/HomePageIntro';
import ServiceCards from './components/services/ServiceCards';
import FeaturedTestimonials from './components/testimonials/FeaturedTestimonials';
import MeetOurTeam from './components/our-team/MeetOurTeam';
import AnimateUp from './components/utils/animations/AnimateUp';

export default async function Home() {
	const [data] = await fetchContent(query);

	return (
		<PageContainer>
			<LandingHero
				image={data.landingHero.imageUrl}
				heading={data.landingHero.heading}
				subheading={data.landingHero.subheading}
				blurb={data.landingHero.blurb}
			/>
			<AnimateUp>
				<HomePageIntro
					heading={data.intro.heading}
					intro={data.intro.introParagraph}
					image={data.intro.introImageUrl}
				/>
			</AnimateUp>
			<ServiceCards data={data.services} />
			<FeaturedTestimonials data={data.testimonials} />
			<MeetOurTeam data={data.meetOurTeam} />
		</PageContainer>
	);
}

// Animations,

export const revalidate = 1;
