import Image from 'next/image';
import { Heading, Paragraph, SubHeading } from '../utils/typography/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import FadeIn from '../utils/animations/FadeIn';

const TeamIntroductions = ({ data }) => {
	return (
		<div className='grid place-items-center gap-24 px-2 '>
			{data.map((member, index) => (
				<AnimateUp key={index}>
					<TeamMember
						name={member.name}
						role={member.role}
						image={member.image}
						description={member.description}
						reverseLayout={index % 2 === 1} // Pass true for odd indexes to reverse layout
					/>
				</AnimateUp>
			))}
		</div>
	);
};

export default TeamIntroductions;

const TeamMember = ({ name, role, image, description, reverseLayout }) => {
	return (
		<div
			className={` grid place-items-center lg:flex gap-4 lg:gap-16 items-center ${
				reverseLayout ? 'lg:flex-row-reverse' : ''
			}`}
		>
			{/* Name and Role for Small Screens */}
			<div className='lg:hidden grid place-items-center pb-4'>
				<Heading text={name} type='primary' />
				<SubHeading text={role} type='primary' />
			</div>

			{/* Team Member Image */}
			<Image
				src={image}
				alt={name}
				width={300}
				height={300}
				className='lg:w-1/3 lg:p-2 shadow-xl lg:rounded-sm lg:bg-gradient-to-r from-dark/80 via-dark/80 to-dark/70'
                priority
			/>

			{/* Team Member Details */}
			<div className=''>
				{/* Name and Role for Large Screens */}
				<div className='hidden lg:grid gap-2 pb-4'>
					<Heading text={name} type='primary' />
					<SubHeading text={role} type='primary' />
				</div>
				{/* Description */}
				<div className=' space-y-2 px-4 lg:px-0 text-center lg:text-start pt-4 lg:pt-0'>
					{description.map((desc, idx) => (
						<FadeIn key={idx}>
							<Paragraph text={desc} type='primary' />
						</FadeIn>
					))}
				</div>
			</div>
		</div>
	);
};
