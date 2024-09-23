import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const MeetOurTeam = ({ data }) => {
	return (
		<div className='relative w-full'>
			{/* Background image */}

			<div className='relative w-full h-[60vh]'>
				<Image
					src={data.teamImageUrl}
					alt='Team Image'
					fill
					sizes='100vw'
					className='object-cover'
				/>

				{/* Overlay for darkening the background image */}
				<div className='absolute inset-0 bg-dark/70'></div>

				{/* Centered heading as a button and paragraph */}
				<div className='absolute inset-0 grid place-items-center'>
					<div className='grid place-items-center gap-8 px-4'>
						<div className='space-y-8 text-light'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-black text-center '>
								{data.heading}
							</h1>
							<p className='max-w-4xl mx-auto text-xl md:text-3xl  text-center'>
								{data.teamParagraph}
							</p>
						</div>
						<div className='flex items-center gap-4 text-xl lg:text-3xl text-secondary border px-8 py-4'>
							<span>Meet Our Team</span>
							<FaArrowRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeetOurTeam;
