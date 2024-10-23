import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_CONTACT_US_PAGE_DATA as query } from '@/data/queries/pages/FETCH_CONTACT_US_PAGE_DATA';
import {
	Heading,
	Paragraph,
	ParagraphLarge,
	SubHeading,
} from '../components/utils/typography/Typography';
import { FiPhone, FiMail } from 'react-icons/fi';
import AnimateUp from '../components/utils/animations/AnimateUp';

export const metadata = {
	title: 'Contact Us',
	description: 'Get in touch with us for more information',
};

const ContactUsPage = async () => {
	const [data] = await fetchContent(query);
	return (
		<div className='max-w-7xl  mx-auto px-2 lg:px-4 py-12 grid place-items-center'>
			<Heading type='primary' text={data.title} />

			<div className='mt-12 border border-dark/20 p-4 lg:p-8 rounded-sm shadow-md lg:w-3/4 mx-auto grid place-items-center text-center'>
				<Paragraph
					text="Request a Free Estimate. All estimates are complimentary and tailored to your materials and scheduling needs. Fill out the form below, and we'll follow up within 48 hours."
					type='primary'
				/>
				<button className='border border-primary  lg:text-xl text-primary font-bold px-6 py-3 rounded-sm transition duration-300 mt-8'>
					Fill Out Form
				</button>
			</div>
			<AnimateUp>
				<div className='mt-24 grid place-items-center'>
					<SubHeading type='primary' text={data.subTitle} />
					<div>
						<div className='mt-4 space-y-4 grid place-items-center'>
							<a
								href={`tel:${data.phoneNumber}`}
								className='flex items-center hover:underline'
							>
								<FiPhone className='h-6 w-6 text-dark mr-3' />
								<span className='text-lg text-dark/80 hover:text-dark'>
									{data.phoneNumber}
								</span>
							</a>
							<a
								href={`mailto:${data.email}`}
								className='flex items-center hover:underline mt-4'
							>
								<FiMail className='h-6 w-6 text-dark mr-3' />
								<span className='text-lg text-dark/80 hover:text-dark'>
									{data.email}
								</span>
							</a>
						</div>
					</div>
				</div>
			</AnimateUp>
		</div>
	);
};

export default ContactUsPage;

export const revalidate = 10;
