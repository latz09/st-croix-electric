import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const MeetOurTeam = ({ data }) => {
	return (
		<div className='relative w-full'>
			{/* Background image */}

			<div className='relative w-full h-[60vh] lg:h-[70vh] max-w-5xl mx-auto'>
				<Image
					src={data.teamImageUrl}
					alt='Team Image'
					fill
					sizes='100vw'
					className='object-cover object-to'
				/>

				{/* Overlay for darkening the background image */}
				<div className='absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark'></div>

				{/* Centered heading as a button and paragraph */}
				<div className='absolute inset-0 '>
					<div className=' gap-8 border border-light h-full '>
						<div className=' text-light flex flex-col justify-between h-full px-6 py-4 lg:px-12 lg:py-6'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-black text-cener text-secondary/80'>
								{data.heading}
							</h1>

							<div className='grid gap-6 '>
								<p className=' text-xl md:text-3xl  text-ceter leading-7'>
									{data.teamParagraph}
								</p>
								<div className='flex items-center gap-4 text-xl lg:text-3xl text-secondary  place-self-center lg:place-self-end'>
									<span>Meet Our Team</span>
									<FaArrowRight />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeetOurTeam;
