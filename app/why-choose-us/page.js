import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_WHY_CHOOSE_US_PAGE_DATA as query } from '@/data/queries/pages/FETCH_WHY_CHOOSE_US_PAGE_DATA';
import AllTestimonials from '../components/testimonials/AllTestimonials';
import { Heading } from '../components/utils/typography/Typography';
import PageContainer from '../components/utils/animations/PageContainer';

export const metadata = {
	title: 'Why Choose Us',
	description: 'Why Choose Us',
};

const WhyChooseUs = async () => {
	const [data] = await fetchContent(query);

	return (
		<PageContainer>
			<div className='grid gap-8 '>
				<div className='text-center py-12 border-b border-dark/70 max-w-5xl mx-auto'>
					<Heading text={data.title} type='primary' />
				</div>

				<AllTestimonials />
			</div>
		</PageContainer>
	);
};

export default WhyChooseUs;

export const revalidate = 10;
