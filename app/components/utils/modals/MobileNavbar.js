'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ModalOverlay from './ModalOverlay';
import MenuIcon from '../../navigation/MenuIcon';
import Logo from '../../lib/Logo';

const MobileNavbar = ({ navLinks }) => {
	const [isNavOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!isNavOpen);
	};

	return (
		<div className='lg:hidden'>
			<div className='flex items-center justify-between px-8'>
				<Logo height={125} width={125} />
				<MenuIcon toggleNav={toggleNav} isNavOpen={isNavOpen} />
			</div>

			<ModalOverlay isOpen={isNavOpen} onClose={toggleNav}>
				<AnimatePresence>
					{isNavOpen && (
						<motion.div
							className='fixed inset-y-0 right-0 bg-light w-full shadow-lg p-6 z-50'
							initial={{ x: '100%' }}
							animate={{ x: '0%' }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.5 }}
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
						>
							<nav className='mt-24 space-y-8 grid'>
								{navLinks.map((link, index) => (
									<Link key={index} href={link.href} passHref>
										<span
											className='block text-2xl font-semibold text-dark hover:text-primary transition cursor-pointer'
											onClick={toggleNav} // Close the nav when a link is clicked
										>
											{link.title}
										</span>
									</Link>
								))}
								<div className='grid place-items-center pt-8' onClick={toggleNav}>
									<Logo height={150} width={150} />
								</div>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</ModalOverlay>
		</div>
	);
};

export default MobileNavbar;
