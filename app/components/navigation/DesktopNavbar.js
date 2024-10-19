import Link from 'next/link';
import Logo from '../lib/Logo';

const DesktopNavbar = ({ navLinks }) => {
	return (
		<div className='hidden lg:flex items-center gap-12 max-w-7xl mx-auto '>
			<Logo height={150} width={150} />
			<NavigationLinks navLinks={navLinks} />
		</div>
	);
};

export default DesktopNavbar;

const NavigationLinks = ({ navLinks }) => {
	return (
		<div className='flex justify-around items-center  w-full text-center '>
			{navLinks.map((link, index) => (
				<Link key={index} href={link.href} passHref>
					<span
						className={`block text-lg font-semibold transition cursor-pointer py-2  px-4 xl:px-8 
				${
					link.title === 'Contact Us'
						? 'bg-primary text-light rounded-sm hover:bg-secondary hover:text-dark/80 hover:scale-105 transiton duration-300'
						: 'text-dark hover:text-primary'
				}`}
					>
						{link.title}
					</span>
				</Link>
			))}
		</div>
	);
};
