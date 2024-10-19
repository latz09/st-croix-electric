import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_SERVICE_CARD_DATA as query } from '@/data/queries/pages/FETCH_WHAT_WE_DO_PAGE_DATA';
import ServiceCards from './ServiceCards';

const ServiceCardsContainer = async () => {
	const [data] = await fetchContent(query);

	return (
		<>
			<ServiceCards data={data} />
		</>
	);
};

export default ServiceCardsContainer;

export const revalidate = 10;