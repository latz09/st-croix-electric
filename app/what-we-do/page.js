import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_WHAT_WE_DO_PAGE_DATA as query } from '@/data/queries/pages/FETCH_WHAT_WE_DO_PAGE_DATA';
import ServicePageLayout from '../components/services/ServicePageLayout';

export const metadata = {
	title: 'What We Do',
	description: 'What We Do',
};

const WhatWeDoPage = async () => {
	const [data] = await fetchContent(query);

	return (
		<div className='bg-gradient-to-b from-light via-secondary/5 to-light'>
			<div className=' py-12 max-w-7xl mx-auto '>
				{/* Services List */}
				<ServicePageLayout data={data} />
			</div>
		</div>
	);
};

export default WhatWeDoPage;

export const revalidate = 10;
