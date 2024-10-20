import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_ALL_TESTIMONIALS as query } from '@/data/queries/testimonials/FETCH_ALL_TESTIMONIALS';
import { Paragraph, SubHeading } from '../utils/typography/Typography';
import AnimateUp from '../utils/animations/AnimateUp';

const AllTestimonials = async () => {
	const [data] = await fetchContent(query);
	const { testimonialsList, heading, intro } = data;

	return (
		<div className='max-w-7xl mx-auto p-4 lg:p-6'>
			{/* Heading and Intro */}
			<div className='text-center max-w-5xl mx-auto space-y-4 mb-8'>
				<SubHeading text={heading} type='primary' />
				<Paragraph text={intro} type='primary' />
			</div>

			{/* Testimonials Grid */}
			<div className='grid gap-12 sm:grid-cols-1 lg:grid-cols-2 pt-12 place-items-center'>
				{testimonialsList.map((testimonial, index) => (
					<AnimateUp key={index}>
						<div
							className={`flex bgdar flex-col justify-between gap-8 p-6 borer border-secondary rounded-b rounded-t-xl bg-gradient-to-l from-dark via-dark/90 to-dark shadow-lg shadow-secondary/30 `}
						>
							{/* Testimonial Content */}
							<SubHeading text={`${testimonial.firstName}`} type='secondary' />
							<div className='self-center '>
								<Paragraph text={`"${testimonial.content}"`} type='secondary' />
							</div>
						</div>
					</AnimateUp>
				))}
			</div>
		</div>
	);
};

export default AllTestimonials;
