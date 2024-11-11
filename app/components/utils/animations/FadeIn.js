'use client';
import { motion } from 'framer-motion';

const FadeIn = ({ children, className, ...rest }) => {
	return (
		<>
			<motion.div
				className={className}
				initial={{  opacity: 0 }}
				whileInView={{  opacity: 1}}
				transition={{ duration: 0.7, delay: .2 }}
				viewport={{ once: true }}
				{...rest}
			>
				{children}
			</motion.div>
		</>
	);
};

export default FadeIn;
