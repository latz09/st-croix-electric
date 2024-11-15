'use client';

import Link from 'next/link';
import { FiPhone, FiMail } from 'react-icons/fi';
import FillOutFormButton from '../jobber-form-embed/FillOutFormButton';

const RequestQuoteNow = () => {
	return (
		<>
			<div className='bg-dark fixed bottom-0 left-0 right-0 z-50'>
				<div className='max-w-3xl mx-auto  text-light flex justify-around gap-2 items-center p-4 shadow-lg  '>
					{/* <Link
						href='/contact-us'
						className='bg-secondary w-1/2 text-center py-2 rounded-full '
					>
						<button className=' text-dark  font-bold '>Request Quote</button>
					</Link> */}
					<FillOutFormButton title='Request Quote' className='bg-secondary px-6 lg:px-12 text-dark font-bold  text-center py-2 rounded-full w-full' />
					
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
		</>
	);
};

export default RequestQuoteNow;
