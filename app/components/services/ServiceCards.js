'use client';
import { FaArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import Image from 'next/image';
import { FaRegHandPointer } from 'react-icons/fa';
import AnimateUp from '../utils/animations/AnimateUp';
import { motion } from 'framer-motion';
import logoImage from '@/public/images/st-croix-electric.jpg';
import { ParagraphLarge, SubHeading } from '../utils/typography/Typography';
import { PrimaryButtonLink } from '../utils/buttons/Buttons';
import Link from 'next/link';

const ServiceCards = ({ data }) => {
	return (
		<div className='max-w-7xl mx-auto py-12'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16'>
				{data.title}
			</h1>

			<div className='relative overflow-hidden'>
				<BackgroundImage />

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-16 gap-x-16'>
					{data.servicesList.map((service, index) => (
						<div
							key={index}
							className={`${
								data.servicesList.length === 5 && index === 4
									? 'sm:col-span-2 sm:w-1/2 sm:mx-auto'
									: ''
							}`}
						>
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>

			<div className='mt-24 mx-auto text-center'>
				<PrimaryButtonLink
					title='View All of Our Services'
					href='/what-we-do'
					type='secondary'
					width='w-5/6 lg:w-1/2'
				/>
			</div>
		</div>
	);
};

export default ServiceCards;

///////////////////////////////
// Sub-components start here //
///////////////////////////////

const BackgroundImage = () => (
	<motion.div
		className='absolute inset-0 -z-10 grid place-items-center'
		animate={{
			x: [0, 60, 100, 60, 0, -60, -100, -60, 0],
			y: [0, 60, 0, -60, -100, -60, 0, 60, 0],
		}}
		transition={{
			duration: 12,
			repeat: Infinity,
			ease: 'linear',
			delay: 2,
		}}
	>
		<Image
			src={logoImage}
			alt='Background Image'
			width={550}
			height={400}
			className='opacity-40'
		/>
	</motion.div>
);

const ServiceCard = ({ service }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<AnimateUp>
			<div
				className='relative group overflow-hidden lg:rounded-sm shadow-lg shadow-primary/30 cursor-pointer transition duration-700 h-96 '
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => setIsHovered(!isHovered)}
			>
				{/* Service Image */}
				<div className='relative w-full h-full'>
					<Image
						src={service.image.asset.url}
						alt={service.title}
						className='object-cover group-hover:brightness-75 transition duration-300 h-full w-full'
						height={400}
						width={600}
					/>
					{/* React Icon on hover */}
					<div className='absolute top-4 right-4 text-light text-3xl opacity-80'>
						<FaRegHandPointer />
					</div>
					{/* Hover Content */}
					{isHovered && <HoverContent service={service} />}
				</div>

				{/* Service Name */}
				<div
					className={`absolute bottom-0 left-0 right-0 px-2 py-4 text-center ${
						isHovered ? 'opacity bg-dark' : 'opacity-100 bg-light/80 '
					}`}
				>
					<SubHeading text={service.title} type={isHovered ? 'secondary' : 'primary'} />
				</div>
			</div>
		</AnimateUp>
	);
};

const HoverContent = ({ service }) => (
	<div className='absolute inset-0 bg-light/80 text-dark  flex flex-col gap-2 p-4 h-full overflow-y-auto'>
		{/* Service Description */}
		{service.description && (
			<div className='lg:text-lg font-bold'>
				{service.description.map((text, i) => (
					<motion.p
						key={i}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: i * 0.05, duration: 0.2 }}
					>
						{text}
					</motion.p>
				))}
			</div>
		)}

		{/* Subcategories */}
		{service.subcategories && service.subcategories.length > 0 && (
			<div className='mt-2'>
				<div className='mt-auto grid place-items-center mb-4'>
					<Link href={`/what-we-do#${service.pageId}`}>
						<div className='flex items-center gap-4 group'>
							<SubHeading text='Learn More' type='primary' />
							<FaArrowRight className='text-primary text-2xl ' />
						</div>
					</Link>
				</div>
				{service.subcategories.map((sub, i) => (
					<motion.div
						key={i}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: i * 0.05 + 0.2, duration: 0.2 }}
						className='mb-2'
					>
						<h3 className='font-bold text-lg'>{sub.subTitle}</h3>
					</motion.div>
				))}
				
			</div>
		)}
	</div>
);
