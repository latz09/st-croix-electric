'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateUp from '../utils/animations/AnimateUp'; // Custom animation component

const ImageGallery = ({ data }) => {
	const [selectedImage, setSelectedImage] = useState(null);

	// Preload images when the component mounts
	useEffect(() => {
		data.forEach((image) => {
			const img = new window.Image();
			img.src = image.imageUrl;
		});
	}, [data]);

	// Disable scrolling when modal is open
	useEffect(() => {
		if (selectedImage) {
			document.body.style.overflow = 'hidden'; // Disable scroll
		} else {
			document.body.style.overflow = 'auto'; // Enable scroll
		}

		// Cleanup function to reset scrolling when component unmounts
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [selectedImage]);

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<AnimateUp>
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-[2px] md:gap-2 lg:gap-4 '>
					{data.map((image, index) => (
						<div
							key={index}
							className='relative w-full h-64 md:h-80 overflow-hiddn cursor-pointer'
							onClick={() => setSelectedImage(image)}
						>
							<Image
								src={image.imageUrl}
								alt={image.alt || 'Gallery Image'}
								fill
								quality={100}
								className='object-cover shadow-lg hover:scale-95 hover:shadow-secondary/30 transition duration-300'
								sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
							/>
						</div>
					))}
				</div>
			</AnimateUp>

			{/* Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-dark via-dark/50 to-dark backdrop-blur'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeModal}
					>
						<motion.div
							className='relative w-full h-full max-w-4xl max-h-[90vh] p-4'
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
						>
							<Image
								src={selectedImage.imageUrl}
								alt={selectedImage.alt || 'Full-size Image'}
								fill
								quality={100}
								className='object-contain '
								style={{ maxHeight: '100%', maxWidth: '100%' }}
							/>
							{/* Close Button */}
							<button
								className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full '
								onClick={closeModal}
							>
                                <div className="w-full grid place-items-center py-2">
								<FaArrowAltCircleLeft className='text-4xl text-secondary' /></div>
								
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ImageGallery;
