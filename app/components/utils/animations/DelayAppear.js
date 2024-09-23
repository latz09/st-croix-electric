'use client';
import { motion } from 'framer-motion';

const DelayAppear = ({ children, className, ...rest }) => {
	return (
		<>
			<motion.div
				className={className}
				initial={{  opacity: 0, scale: .99 }}
				whileInView={{  opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 1 }}
				viewport={{ once: true }}
				{...rest}
			>
				{children}
			</motion.div>
		</>
	);
};

export default DelayAppear;
