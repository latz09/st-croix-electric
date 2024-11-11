import Link from 'next/link';
import Logo from '../lib/Logo';
import { navigationLinks } from '@/data/navigationLinks';
import SocialLinks from '../lib/SocialLinks';

const currentYear = new Date().getFullYear();
const CLIENT_BUSINESS_NAME = 'St. Croix Electric';

const Footer = () => {
	return (
		<footer className='pb-16 pt-36 grid place-items-center gap-12'>
			<div className=' grid place-items-center '>
				<Logo height={200} width={200} />
			</div>
			<FooterLinks />
			<div className="grid place-items-center gap-4 group">
				<SocialLinks />
				<p className="font-bold opacity-90 text-lg group-hover:text-primary transition duration-1000">Follow Us</p>
			</div>
			<CopyRight />
		</footer>
	);
};

export default Footer;

const CopyRight = () => {
	// Get the current year

	return (
		<div className='text-center py-12 mt-2 px-2  grid gap-3 text-dark'>
			<Link href='/legal/privacy-policy'>
				<span className='text-xs font-semibold'>Privacy Policy</span>
			</Link>
			<a
				href='https://www.latzwebdesign.com'
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center justify-center gap-2  text-dark '
			>
				<p>
					{`© ${currentYear} by ${CLIENT_BUSINESS_NAME}. Handcrafted with care by `}
					<span className='font-bold '>LatzWebDesign.</span>
				</p>
			</a>
		</div>
	);
};

const FooterLinks = () => {
	return (
		<div className='grid place-items-center gap-6 lg:flex lg:gap-16 '>
			{navigationLinks.map((link, i) => (
				<Link href={link.href} key={i}>
					<span className='text-dark/80 font-bold hover:text-primary transiton duration-700 '>
						{link.title}
					</span>
				</Link>
			))}
		</div>
	);
};
