'use client';

import { motion } from 'framer-motion';

const ModalOverlay = ({ children, isOpen, onClose }) => {
	return (
		<>
			{isOpen && (
				<motion.div
					className="fixed inset-0 bg-dark/70 backdrop-blur-sm flex items-center justify-center z-[999999] no-scroll"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					onClick={onClose}
				>
					{/* Modal container with max-height and hidden scrollbar */}
					<motion.div
						className="bg-dark p-2 md:p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[85vh] overflow-y-scroll scrollbar-hide"
						onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</>
	);
};

export default ModalOverlay;
