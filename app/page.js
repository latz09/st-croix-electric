
import PageContainer from './components/utils/animations/PageContainer';
import LandingHero from './components/heros/LandingHero';
import HomePageIntro from './components/about/HomePageIntro';
import FeaturedTestimonials from './components/testimonials/FeaturedTestimonials';
import MeetOurTeam from './components/our-team/MeetOurTeam';
import AnimateUp from './components/utils/animations/AnimateUp';
import ServiceCardsContainer from './components/services/ServiceCardsContainer';

export default async function Home() {
	

	return (
		<PageContainer>
			<div className='grid gap-16'>
				<LandingHero
					image='/images/content/landing.jpg'
					heading='Complete Electrical Services with a Personal Touch'
					subheading='Specializing in Electrical Upgrades, Repairs, and New Installations.'
				
				/>
				<AnimateUp>
					<HomePageIntro
						heading='Experience You Can Trust, Solutions You Can Rely On'
						intro={`At St. Croix Electric, we pride ourselves on a legacy of excellence, passed down through generations. As a family-owned business, we’ve developed a unique understanding of electrical systems in both historic homes and new builds, ensuring that every project is completed with precision and care. Whether it’s a simple fix or a complex installation, our team is dedicated to optimizing your home or business's electrical setup with innovative solutions tailored to your needs.`}
						image='/images/content/generations.jpg'
					/>
				</AnimateUp>
				{/* <ServiceCards data={data.services} /> */}
				<ServiceCardsContainer />
				<FeaturedTestimonials />
				<div className='border bg-[#191717]'>
					<MeetOurTeam  />
				</div>
			</div>
		</PageContainer>
	);
}

// Animations,

export const revalidate = 10;
