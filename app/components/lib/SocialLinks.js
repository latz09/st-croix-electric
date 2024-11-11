import { FaTiktok, FaFacebookF, FaSquareInstagram } from 'react-icons/fa6';

const socialMediaLinks = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/your-profile',
		icon: <FaFacebookF />,
	},
	{
		name: 'Tiktok',
		url: 'https://www.tiktok.com/your-profile',
		icon: <FaTiktok />,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/your-profile',
		icon: <FaSquareInstagram />,
	},
];

const SocialLinks = () => {
	return (
		<div className="flex space-x-16">
			{socialMediaLinks.map((link) => (
				<a
					key={link.name}
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.name}
					className="text-3xl hover:text-secondary hover:scale-95 transition duration-700"
				>
					{link.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
