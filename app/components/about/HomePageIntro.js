import Image from 'next/image';

const HomePageIntro = ({ heading, intro, image }) => {
	return (
		<>
			<div className='max-w-7xl mx-auto  grid lg:grid-cols-7 gap-8 place-items-center text-center lg:text-start px-4'>
				<div className='lg:col-span-5'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-black'>
						{heading}
					</h1>
					<p className='mt-4 lg:text-xl leading-7 lg:leading-9'>{intro}</p>
				</div>
				<div className='lg:col-span-2'>
					<Image
						src={image}
						alt='Hero Background'
						width={500}
						height={300}
						className='w-3/4 lg:w-full mx-auto  rounded-b-sm '
					/>
					<div className='relative z-0 mt-4 text-sm text-gray-700 italic text-center p-2 '>
						<p>Generations of expertise, passed down from father to son.</p>
						<p>
							St. Croix Electric, where family tradition meets modern
							craftsmanship.
						</p>
					</div>
					<div className=' grid place-items-center mt-12 w-5/6 mx-auto'>
						<button className='bg-secondary text-dark font-bold text-lg px-6 py-2 rounded-sm hover:bg-primary hover:text-light hover:scale-95 transition duration-700 w-full'>
							Who Wo Are
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePageIntro;
