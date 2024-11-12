import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_SEE_OUR_WORK_PAGE_DATA as query } from '@/data/queries/pages/FETCH_SEE_OUR_WORK_PAGE_DATA';
import ImageGallery from '../components/portfolio/ImageGallery';
import { Heading } from '../components/utils/typography/Typography';
import PageContainer from '../components/utils/animations/PageContainer';

export const metadata = {
	title: 'See Our Work',
	description: 'See Our Work',
};

const SeeOurWorkPage = async () => {
	const [data] = await fetchContent(query);

	return (
		<PageContainer>
			<div className='max-w-7xl mx-auto space-y-12 pt-12 text-center '>
				<Heading text={data.title} type='primary' />
				<ImageGallery data={data.projects} />
			</div>
		</PageContainer>
	);
};

export default SeeOurWorkPage;

export const revalidate = 10;
