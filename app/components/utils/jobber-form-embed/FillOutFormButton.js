'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const FillOutFormButton = ({ title, className }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let link, script;

		if (isOpen) {
			// Disable background scrolling
			document.body.style.overflow = 'hidden';

			// Dynamically add the stylesheet
			link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href =
				'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
			link.media = 'screen';
			document.head.appendChild(link);

			// Dynamically add the script
			script = document.createElement('script');
			script.src =
				'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
			script.setAttribute(
				'clienthub_id',
				'865b975f-b671-4d76-ae80-2510533643a8'
			);
			script.setAttribute(
				'form_url',
				'https://clienthub.getjobber.com/client_hubs/865b975f-b671-4d76-ae80-2510533643a8/public/work_request/embedded_work_request_form'
			);
			document.body.appendChild(script);
		} else {
			// Re-enable background scrolling
			document.body.style.overflow = '';
		}

		return () => {
			// Cleanup script and stylesheet when modal is closed
			if (link) document.head.removeChild(link);
			if (script) document.body.removeChild(script);

			// Re-enable background scrolling on cleanup
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<div>
			{/* Open Button */}
			<button
				onClick={() => setIsOpen(true)}
				className={`bg-secondary ${className}`}
			>
				{title}
			</button>

			{/* Modal */}
			{isOpen && (
				<div className='fixed inset-0 bg-dark/50 backdrop-blur flex items-center justify-center z-50'>
					<div className='bg-light rounded-sm relative w-screen max-w-2xl max-h-[95%] lg:max-h-[90%] overflow-y-auto scrollbar-hide'>
						{/* Close Button */}
						<motion.button
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.9, delay: 0.9 }}
							onClick={() => setIsOpen(false)}
							className='sticky top-0 bg-primary py-4 shadow-lg w-full'
						>
							<div className='w-full'>
								<span className='text-gray-500 hover:text-gray-700 focus:outline-none text-lg text-light font-bold'>
									Close
								</span>
							</div>
						</motion.button>

						<div
							id='865b975f-b671-4d76-ae80-2510533643a8'
							className='scrollbar-hide'
						></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default FillOutFormButton;
