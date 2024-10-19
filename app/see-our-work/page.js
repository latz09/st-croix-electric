import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_SEE_OUR_WORK_PAGE_DATA as query } from '@/data/queries/pages/FETCH_SEE_OUR_WORK_PAGE_DATA';


export const metadata = {
    title: 'See Our Work',
    description: 'See Our Work',
};

const SeeOurWorkPage = async () => {
	const [data] = await fetchContent(query);
	return (
		<div className='h-[50vh] grid place-items-center text text-3xl font-black opacity-60'>
			<div>{data.title}</div>
		</div>
	);
};

export default SeeOurWorkPage;


export const revalidate = 10;