
import Image from 'next/image';

import {
	Heading,
	ParagraphLarge,
	SubHeading,
} from '../utils/typography/Typography';
import { SecondaryButtonLink } from '../utils/buttons/Buttons';

const MeetOurTeam = async () => {
	
	
	
	return (
		<div className='relative w-full'>
			{/* Background image */}

			<div className='relative w-full h-[70vh] max-w-5xl mx-auto '>
				<Image
					src='/images/content/meet-the-team.jpg'
					alt='Team Image'
					fill
					sizes='100vw'
					className='object-cover object-to '
				/>

				{/* Overlay for darkening the background image */}
				<div className='absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark '></div>

				{/* Centered heading as a button and paragraph */}
				<div className='absolute inset-0 '>
					<div className=' gap-8 h-full group cursor-pointer '>
						<div className=' text-light flex flex-col justify-between h-full px-6  lg:px-12 py-6'>
							<Heading type='secondary' text='Meet The Team' />

							<div className='grid gap-6 '>
								<div className='lg:group-hover:text-secondary'>
									<ParagraphLarge text='At St. Croix Electric, we combine generations of expertise with modern techniques, delivering exceptional, personalized service as a family-owned business.' type='secondary' />
								</div>

								<div className='place-self-center lg:place-self-end '>
									<SecondaryButtonLink
										title='Meet The Team'
										href='/meet-the-team'
									/>
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


export const revalidate = 10;