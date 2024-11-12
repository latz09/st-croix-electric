import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_WHAT_WE_DO_PAGE_DATA as query } from '@/data/queries/pages/FETCH_WHAT_WE_DO_PAGE_DATA';
import ServicePageLayout from '../components/services/ServicePageLayout';
import ServicesNavigation from '../components/services/ServicesNavigation';
import PageContainer from '../components/utils/animations/PageContainer';

export const metadata = {
	title: 'What We Do',
	description: 'What We Do',
};

const WhatWeDoPage = async () => {
	const [data] = await fetchContent(query);

	const serviceNavigationData = data?.servicesList.map((service) => ({
		title: service.title,
		pageId: service.pageId,
	}));

	return (
		<PageContainer>
			<div className='bg-gradient-to-b from-light via-secondary/5 to-light'>
				<div className=' py-12 max-w-7xl mx-auto '>
					{/* Services List */}
					<ServicePageLayout data={data} />
				</div>

				<ServicesNavigation services={serviceNavigationData} />
			</div>
		</PageContainer>
	);
};

export default WhatWeDoPage;

export const revalidate = 10;
