import { services as data } from '@/data/services';
import ServicePageLayout from '../components/services/ServicePageLayout';
import ServicesNavigation from '../components/services/ServicesNavigation';
import PageContainer from '../components/utils/animations/PageContainer';

export const metadata = {
	title: 'What We Do',
	description: 'What We Do',
};

const WhatWeDoPage = () => {
	const serviceNavigationData = data.servicesList.map((service) => ({
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