import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_WHAT_WE_DO_PAGE_DATA as query } from '@/data/queries/pages/FETCH_WHAT_WE_DO_PAGE_DATA';

export const metadata = {
    title: 'What We Do',
    description: 'What We Do',
};

const WhatWeDoPage = async () => {
	const [data] = await fetchContent(query);
	return (
		<div className='h-[50vh] grid place-items-center text text-3xl font-black opacity-60'>
			<div>{data.title}</div>
		</div>
	);
};

export default WhatWeDoPage;

export const revalidate = 10;
