
'use client';

import { Paragraph, SubHeading } from '../utils/typography/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import TestimonialContent from './TestimonialContent';

const TestimonialsList = ({ testimonials }) => {
	return (
		<div className='grid gap-x-12 gap-y-32 sm:grid-cols-1 lg:grid-cols-2 pt-12 items-center'>
			{testimonials.map((testimonial, index) => (
				<AnimateUp key={index}>
					<div className='flex flex-col justify-between shadow-lg shadow-dark/30 w-full border border-dark/20'>
						{/* Testimonial Header */}
						<div className='bg-dark p-4'>
							<SubHeading text={testimonial.firstName} type='secondary' />
						</div>
						{/* Testimonial Content */}
						<div className='self-center p-4 '>
							<TestimonialContent content={testimonial.content} />
						</div>
					</div>
				</AnimateUp>
			))}
		</div>
	);
};

export default TestimonialsList;
