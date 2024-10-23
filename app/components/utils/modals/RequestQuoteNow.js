'use client';

import { useState, useEffect } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { QuoteModalOverlay } from './ModalOverlay';
import SubmitContactForm from '../../contact/SubmitContactForm';

const RequestQuoteNow = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	// Use useEffect to add/remove the 'no-scroll' class to the body element
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		// Cleanup when the component unmounts
		return () => document.body.classList.remove('no-scroll');
	}, [isOpen]);

	return (
		<>
			<div className='bg-dark fixed bottom-0 left-0 right-0 z-50'>
				<div className='max-w-3xl mx-auto  text-light flex justify-around gap-2 items-center p-4 shadow-lg  '>
					<button
						className='bg-secondary text-dark py-2 rounded-sm font-bold w-1/2 text-center'
						onClick={handleOpen}
					>
						Request Quote
					</button>
					<div className='w-1/2 flex justify-around text-3xl'>
						<a href='tel:+6124309156' className='flex items-center gap-2'>
							<FiPhone className='text-secondary' />
						</a>
						<a
							href='mailto:stcroixelectricinc@gmail.com'
							className='flex items-center gap-2'
						>
							<FiMail className='text-secondary' />
						</a>
					</div>
				</div>
			</div>

			{/* Modal Overlay */}
			<div className='z-50'>
				<QuoteModalOverlay isOpen={isOpen} onClose={handleClose}>
					<div>
						<SubmitContactForm />
						<div className='grid place-items-center w-full'>
							<button
								className='mt-8 bg-primary w-1/2 text-light py-1 px-3 rounded-full font-semibold'
								onClick={handleClose}
							>
								Close
							</button>
						</div>
					</div>
				</QuoteModalOverlay>
			</div>
		</>
	);
};

export default RequestQuoteNow;
