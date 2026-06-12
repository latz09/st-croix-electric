
import AllTestimonials from '../components/testimonials/AllTestimonials';
import { Heading, SubHeading } from '../components/utils/typography/Typography';
import PageContainer from '../components/utils/animations/PageContainer';

export const metadata = {
	title: 'Why Choose Us',
	description: 'Why Choose Us',
};

const WhyChooseUs = async () => {
	

	return (
		<PageContainer>
			<div className='grid gap-8 '>
				<div className='text-center space-y-2 py-12 border-b border-dark/70 max-w-5xl mx-auto'>
					<Heading text='Why Choose Us' type='primary' />
					<div className="opacity-60 italic">
						<SubHeading text={'Testimonials'} type='primary' />
					</div>
				</div>

				<AllTestimonials />
			</div>
		</PageContainer>
	);
};

export default WhyChooseUs;

export const revalidate = 10;
