import Image from 'next/image';

const MeetOurTeam = ({ data }) => {
	return (
		<div className='relative w-full'>
			{/* Background image */}
			<div className='relative w-full h-[50vh]'>
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
						<p className='max-w-4xl mx-auto text-xl md:text-3xl text-light leading-relaxed text-center'>
							{data.teamParagraph}
						</p>
						<button className='bg-primary text-light font-bold text-lg w-5/6 lg:w-1/2 md:text-2xl px-8 py-4 rounded-sm hover:bg-primary hover:text-light hover:scale-95 transition duration-500'>
							{data.heading}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeetOurTeam;
