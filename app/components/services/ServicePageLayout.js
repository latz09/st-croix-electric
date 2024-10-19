'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Paragraph, SubHeading } from '../utils/typography/Typography';
import { SecondaryButtonLink } from '../utils/buttons/Buttons';

const ServicePageLayout = ({ data }) => {
	return (
		<div className='grid gap-16 lg:gap-24'>
			{data.servicesList &&
				data.servicesList.map((service, index) => (
					<div id={`${service.pageId}`} className='scroll-mt-6 border-t-2 border-dark/10' key={index}>
						<motion.div
							className='overflow-hidden '
							initial={{ opacity: 0, y: 150, scale: 1 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.9 }}
							viewport={{ threshold: 0.5, once: true }}
						>
							<div className='grid lg:grid-cols-2 gap-8 items-center'>
								{/* Overlay Content on the left */}
								<OverlayContent
									title={service.title}
									description={service.description}
								/>

								{/* Service Image on the right */}
								<ServiceImage image={service.image} title={service.title} />
							</div>

							{/* Subcategories */}
							{service.subcategories && service.subcategories.length > 0 && (
								<Subcategories subcategories={service.subcategories} />
							)}
						</motion.div>
					</div>
				))}
		</div>
	);
};

// Component for displaying service image (to the right)
const ServiceImage = ({ image, title }) => {
	if (!image) return null;
	return (
		<Image
			src={image.asset.url}
			alt={title}
			width={400}
			height={300}
			className='w-full lg:p-16  object-cover '
		/>
	);
};

// Component for the content (title and description) on the left
const OverlayContent = ({ title, description }) => (
	<div className='p-4 lg:p-8'>
		{/* Service Title */}
		<div className='mb-6'>
			<Heading text={title} type='primary' />
		</div>

		{/* Service Description */}
		<div className='space-y-4'>
			{description &&
				description.map((desc, descIndex) => (
					<Paragraph key={descIndex} text={desc} type='primary' />
				))}
		</div>

		{/* Call to Action Button */}
		<div className="mt-8 grid place-items-center lg:place-items-start">
			<SecondaryButtonLink title='Request a Quote Now' type='secondary' href='/' width='w-1/2' />
		</div>
	</div>
);

// Component for displaying subcategories
const Subcategories = ({ subcategories }) => (
	<div className='mt-6 p-8'>
		<div className='grid lg:grid-cols-2 gap-8'>
			{subcategories.map((sub, subIndex) => (
				<div key={subIndex} className='grid gap-2'>
					<SubHeading text={sub.subTitle} type='primary' />
					<Paragraph text={sub.subDescription} type='primary' />
				</div>
			))}
		</div>
	</div>
);

export default ServicePageLayout;
