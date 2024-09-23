'use client';

import { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import ModalOverlay, { QuoteModalOverlay } from './ModalOverlay';
import SubmitContactForm from '../../contact/SubmitContactForm';

const RequestQuoteNow = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className='bg-dark fixed bottom-0 left-0 right-0 '>
				<div className='max-w-3xl mx-auto  text-light flex justify-around gap-2 items-center p-4 shadow-lg  '>
					<button
						className='bg-secondary text-dark py-2 rounded-sm font-bold w-1/2 text-center'
						onClick={handleOpen}
					>
						Request Quote
					</button>
					<div className='w-1/2 flex justify-around text-3xl'>
						<a href='tel:+17153478887' className='flex items-center gap-2'>
							<FiPhone className='text-secondary' />
						</a>
						<a
							href='mailto:billy@nc715.com'
							className='flex items-center gap-2'
						>
							<FiMail className='text-secondary' />
						</a>
					</div>
				</div>
			</div>

			{/* Modal Overlay */}
			<div className=''>
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
