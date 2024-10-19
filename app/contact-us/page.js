import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_CONTACT_US_PAGE_DATA as query } from '@/data/queries/pages/FETCH_CONTACT_US_PAGE_DATA';

export const metadata = {
    title: 'Contact Us',
    description: 'Contact us for more information',
};

const ContactUsPage = async () => {
	const [data] = await fetchContent(query);
	return (
		<div className='h-[50vh] grid place-items-center text text-3xl font-black opacity-60'>
			<div>{data.title}</div>
			
		</div>
	);
};

export default ContactUsPage;

export const revalidate = 10;