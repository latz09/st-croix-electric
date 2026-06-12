import { testimonials } from '@/data/testimonials';
import { Paragraph, SubHeading } from '../utils/typography/Typography';
import TestimonialsList from './TestimonialsList';

const AllTestimonials = () => {
	const { testimonialsList, heading, intro } = testimonials;

	return (
		<div className='max-w-7xl mx-auto p-4 lg:p-6'>
			{/* Heading and Intro */}
			<div className='text-center max-w-5xl mx-auto space-y-4 mb-8'>
				<SubHeading text={heading} type='primary' />
				<Paragraph text={intro} type='primary' />
			</div>

			{/* Testimonials Grid */}
			<TestimonialsList testimonials={testimonialsList} />
		</div>
	);
};

export default AllTestimonials;