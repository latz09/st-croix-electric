'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegHandPointer } from 'react-icons/fa';
import AnimateUp from '../utils/animations/AnimateUp';
import { motion } from 'framer-motion';
import logoImage from '@/public/images/st-croix-electric.jpg';

const ServiceCards = ({ data }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div className='max-w-7xl mx-auto py-12'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16'>
				{data.title}
			</h1>

			{/* Cards container */}
			<div className='relative overflow-hidden'>
				{' '}
				{/* Added overflow-hidden */}
				{/* Background Image */}
				<motion.div
					className='absolute inset-0 -z-10 grid place-items-center'
					whileInView={{
						x: [0, 60, 100, 60, 0, -60, -100, -60, 0], // Adjusted values for a smaller circular motion
						y: [0, 60, 0, -60, -100, -60, 0, 60, 0], // Adjusted values for a smaller circular motion
					}}
					transition={{
						duration: 12, // Adjust the duration for a slower or faster motion
						repeat: Infinity, // Keep the motion infinite
						ease: 'linear', // Smooth and continuous motion
						delay: 2
						
					}}
				>
					<Image
						src={logoImage} // Replace with your image path
						alt='Background Image'
						width={500} // Set your desired width
						height={300} // Set your desired height
						className='opacity-40' // Adjust opacity as needed
					/>
				</motion.div>
				{/* Services Grid Container */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
					{data.servicesList.map((service, index) => (
						<AnimateUp key={index}>
							<div
								className='relative group overflow-hidden lg:rounded-sm shadow-lg shadow-primary/30 cursor-pointer hover:shadow-none lg:hover:scale-105 transition duration-700 '
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								onClick={() => setHoveredIndex(index)} // For touch devices
							>
								{/* Service Image */}
								<div className='relative w-full h-72'>
									<Image
										src={service.imageUrl}
										alt={service.serviceName}
										className='object-cover group-hover:brightness-75 transition duration-300 h-full'
										height={1000}
										width={1000}
									/>
									{/* React Icon on hover */}
									<div className='absolute top-4 right-4 text-secondary text-3xl opacity-80'>
										<FaRegHandPointer />
									</div>
								</div>

								{/* Service Name */}
								<div className='absolute bottom-0 left-0 right-0 p-4 text-light text-lg font-bold text-center bg-dark/90'>
									{service.serviceName}
								</div>

								{/* Hover Text */}
								{hoveredIndex === index && (
									<div className='absolute inset-0 bg-dark/80 text-light backdrop-blur-sm flex flex-col items-center gap-4 lg:gap-8 p-4 lg:p-8'>
										<h3 className='text-2xl lg:text-3xl font-bold text-secondary'>
											{service.serviceName}
										</h3>
										<ul className='space-y-2 lg:text-lg font-bold'>
											{service.hoverText.map((text, i) => (
												<motion.li
													key={i}
													initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
													animate={{ x: 0, opacity: 1 }} // Move to the original position
													transition={{ delay: i * 0.1, duration: 0.3 }} // Stagger each item
												>
													{text}
												</motion.li>
											))}
										</ul>
									</div>
								)}
							</div>
						</AnimateUp>
					))}
				</div>
			</div>
			<div className='mt-24 grid place-items-center w-full'>
				<button className='bg-secondary text-dark font-bold text-lg px-6 py-2 rounded-sm hover:bg-primary hover:text-light hover:scale-95 transition duration-700 w-5/6 lg:w-1/2'>
					View All of Our Services
				</button>
			</div>
		</div>
	);
};

export default ServiceCards;
