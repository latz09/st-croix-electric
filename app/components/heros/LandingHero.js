import Image from 'next/image';
import DelayAppear from '../utils/animations/DelayAppear';
import Link from 'next/link';

const LandingHero = ({ image, heading, subheading, blurb }) => {
	return (
		<div className='relative h-[70vh]'>
			{/* Fullscreen background image */}
			<div className='absolute inset-0 '>
				<Image
					src={image}
					alt='Hero Background'
					fill
					sizes='100vw'
					className='object-cover'
				/>
			</div>

			{/* Dark overlay */}
			<div className='absolute inset-0 bg-dark/70 '></div>

			{/* Heading and Subheading */}
			<div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-light px-2 max-w-5xl mx-auto'>
				<h1 className='text-3xl md:text-5xl font-black pb-2'>{heading}</h1>
				<DelayAppear>
					<p className='pt-2 text-lg md:text-2xl font-bold text-secondary border-t border-secondary'>
						{subheading}
					</p>
					<Link href='/contact-us'>
						<button className='text-lg mt-8 px-8 py-4 rounded-sm border border-light text-light font-bold hover:text-dark hover:border-dark hover:scale-95 transition hover:bg-secondary  duration-700'>
							Get Started Now
						</button>
					</Link>
				</DelayAppear>
			</div>
		</div>
	);
};

export default LandingHero;
