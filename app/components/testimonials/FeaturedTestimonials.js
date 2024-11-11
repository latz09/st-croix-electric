import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_FEATURED_TESTIMONIALS as query } from '@/data/queries/testimonials/FETCH_FEATURED_TESTIMONIALS';
import AnimateUp from '../utils/animations/AnimateUp';
import { PrimaryButtonLink } from '../utils/buttons/Buttons';
import { Heading, Paragraph, SubHeading } from '../utils/typography/Typography';

const FeaturedTestimonials = async () => {
	const [data] = await fetchContent(query);
	
	return (
		<div className='max-w-7xl mx-auto py-12 px-4'>
			{/* Heading and Intro */}
			<div className='text-center space-y-4 max-w-5xl mx-auto'>
				<Heading type='primary' text={data.heading} />

				<Paragraph text={data.intro} type='primary' />
			</div>

			{/* Testimonials Grid */}
			<div className='grid grid-cols-1  md:grid-cols-3 gap-8 mt-16 '>
				{data.testimonialsList.map((testimonial, index) => (
					<AnimateUp key={index}>
						<div className='bg-dark  shadow-lg shadow-primary/30 rounded-sm p-6 text-light flex flex-col justify-between gap-4'>
							<Paragraph text={testimonial.content} />

							<SubHeading text={testimonial.firstName} type='secondary' />
						</div>
					</AnimateUp>
				))}
			</div>
			<div className=' grid text-center mt-24 '>
				<PrimaryButtonLink
					title='View All Testimonials'
					href='/why-choose-us'
					type='secondary'
					width={'w-full lg:w-1/2'}
				/>
			</div>
		</div>
	);
};

export default FeaturedTestimonials;

export const revalidate = 10;
