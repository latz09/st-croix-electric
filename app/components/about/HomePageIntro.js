import Image from 'next/image';
import { AltText, Heading, Paragraph } from '../utils/typography/Typography';
import { PrimaryButtonLink } from '../utils/buttons/Buttons';

const HomePageIntro = ({ heading, intro, image }) => {
	return (
		<>
			<div className='max-w-7xl mx-auto  grid lg:grid-cols-7 gap-8 place-items-center text-center lg:text-start px-4'>
				<div className='lg:col-span-5 space-y-4'>
					<Heading type='primary' text={heading} />

					<Paragraph text={intro} type='primary' />
				</div>
				<div className='lg:col-span-2'>
					<Image
						src={image}
						alt='Hero Background'
						width={500}
						height={300}
						className='w-3/4 lg:w-full mx-auto  rounded-b-sm '
					/>
					<div className='relative z-0 mt-4  text-center p-2 space-y-2 '>
						<AltText
							text='Generations of expertise, passed down from father to son'
							type='primary'
						/>
						<AltText
							text='St. Croix Electric, where family tradition meets modern
							craftsmanship.'
							type='primary'
						/>
					</div>
					<div className=' mt-12 mx-auto'>
						<PrimaryButtonLink
							title='Who We Are'
							href='/meet-the-team'
							type='secondary'
							width='w-full md:w-3/4 lg:w-full'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePageIntro;
