'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import MobileNavbarModalOverlay from './ModalOverlay';
import MenuIcon from '../../navigation/MenuIcon';
import Logo from '../../lib/Logo';
import SocialLinks from '../../lib/SocialLinks';

const MobileNavbar = ({ navLinks }) => {
	const [isNavOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!isNavOpen);
	};

	// Use useEffect to add/remove the 'no-scroll' class to the body element
	useEffect(() => {
		if (isNavOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		// Cleanup when the component unmounts
		return () => document.body.classList.remove('no-scroll');
	}, [isNavOpen]);

	return (
		<div className='lg:hidden'>
			<div className='flex items-center justify-between px-8'>
				<Logo height={125} width={125} />
				<MenuIcon toggleNav={toggleNav} isNavOpen={isNavOpen} />
			</div>

			<MobileNavbarModalOverlay isOpen={isNavOpen} onClose={toggleNav}>
				<AnimatePresence>
					{isNavOpen && (
						<motion.div
							className='fixed inset-y-0 right-0 bg-light z w-full shadow-lg p-6 z-40'
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
								{/* <div className='grid place-items-center pt-16' onClick={toggleNav}>
									<Logo height={225} width={225} />
								</div> */}
								<div className='pt-16 grid place-items-center'>
									<SocialLinks />
								</div>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</MobileNavbarModalOverlay>
		</div>
	);
};

export default MobileNavbar;
