import AnimateUp from '../utils/animations/AnimateUp';

const FeaturedTestimonials = ({ data }) => {
	return (
		<div className='max-w-7xl mx-auto py-12 px-4'>
			{/* Heading and Intro */}
			<div className='text-center'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-black'>
					{data.heading}
				</h1>
				<p className='my-8 lg:text-xl leading-7 lg:leading-9 lg:w-4/5 mx-auto'>
					{data.intro}
				</p>
			</div>

			{/* Testimonials Grid */}
			<div className='grid grid-cols-1  lg:grid-cols-3 gap-8 mt-16 '>
				{data.testimonialsList.map((testimonial, index) => (
					<AnimateUp key={index}>
						<div
							
							className='bg-dark  shadow-lg shadow-primary/30 rounded-sm p-6 text-secondary flex flex-col justify-between gap-4'
						>
							<p className='text-lg italic  mb-4 '>{testimonial.testimonial}</p>
							<p className='text-left font-bold text-light'>- {testimonial.author}</p>
						</div>
					</AnimateUp>
				))}
			</div>
			<div className=' grid place-items-center mt-24 '>
				<button className='bg-secondary text-dark font-bold text-lg px-6 py-2 rounded-sm hover:bg-primary hover:text-light hover:scale-95 transition duration-700  w-5/6 lg:w-1/2 '>
					View More Testimonials
				</button>
			</div>
		</div>
	);
};

export default FeaturedTestimonials;
