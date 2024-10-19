import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_WHY_CHOOSE_US_PAGE_DATA as query} from '@/data/queries/pages/FETCH_WHY_CHOOSE_US_PAGE_DATA';

export const metadata = {
    title: 'Why Choose Us',
    description: 'Why Choose Us',
};

const WhyChooseUs = async () => {
    const [data] = await fetchContent(query);

    return ( <div className='h-[50vh] grid place-items-center text text-3xl font-black opacity-60'>
        <div>{data.title}</div>
    </div> );
}
 
export default WhyChooseUs;

export const revalidate = 10;