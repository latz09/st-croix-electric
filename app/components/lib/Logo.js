import Image from 'next/image';
import logo from '@/public/images/st-croix-electric.jpg';
import Link from 'next/link';

const Logo = ({ height, width }) => {
	return (
		<Link href='/'>
			<div className='z-[9999] '>
				<Image src={logo} alt='logo' width={width} height={height} />
			</div>
		</Link>
	);
};

export default Logo;
