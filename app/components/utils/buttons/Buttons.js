import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export const PrimaryButtonLink = ({ title, href, type, width = 'w-full' }) => {
	return (
		<Link href={href}>
			<button
				className={`${width} ${
					type === 'secondary'
						? 'bg-secondary text-dark'
						: 'bg-primary text-light'
				} font-bold text-lg px-6 py-2 rounded-sm hover:bg-dark hover:text-light hover:scale-95 transition duration-700  `}
			>
				{title}
			</button>
		</Link>
	);
};


export const SecondaryButtonLink = ({ title, href, type, width = 'w-full' }) => {
	return (
	  <Link href={href}>
		<div
		  className={`flex items-center gap-4 text-xl lg:text-3xl group ${
			type === 'secondary' ? 'text-primary' : 'text-secondary'
		  }`}
		>
		  <span>{title}</span>
		  <div className='transition-transform duration-300 transform group-hover:translate-x-4'>
			<FaArrowRight />
		  </div>
		</div>
	  </Link>
	);
  };

