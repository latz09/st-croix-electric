'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaRegHandPointer } from 'react-icons/fa';
import AnimateUp from '../utils/animations/AnimateUp';

const ServiceCards = ({ data }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div className='max-w-7xl mx-auto py-12'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16'>
				{data.title}
			</h1>

			{/* Cards container */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
				{data.servicesList.map((service, index) => (
					<AnimateUp key={index}>
						<div
							
							className='relative group overflow-hidden lg:rounded-sm shadow-lg shadow-primary/30 cursor-pointer hover:shadow-none lg:hover:scale-95 transition duration-1000 '
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							onClick={() => setHoveredIndex(index)} // For touch devices
						>
							{/* Service Image */}

							<div className='relative w-full h-64 '>
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
								<div className='absolute inset-0 bg-dark/80 backdrop-blur-sm flex flex-col justify-center items-center text-light px-6 py-4 text-sm'>
									<h3 className='text-xl lg:text-2xl font-bold mb-2 text-secondary'>
										{service.serviceName}
									</h3>
									<ul className='space-y-2 lg:text-lg font-bold'>
										{service.hoverText.map((text, i) => (
											<li key={i}>{text}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</AnimateUp>
				))}
			</div>
			<div className='mt-24 grid place-items-center w-full'>
				<button className='bg-secondary text-dark font-bold text-lg px-6 py-2 rounded-sm hover:bg-primary hover:text-light hover:scale-95 transition duration-700 w-5/6 lg:w-1/2'>
					See All That We Offer
				</button>
			</div>
		</div>
	);
};

export default ServiceCards;
