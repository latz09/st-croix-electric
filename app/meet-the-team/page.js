import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_MEET_THE_TEAM_PAGE_DATA as query } from '@/data/queries/pages/FETCH_MEET_THE_TEAM_PAGE_DATA';
export const metadata = {
    title: 'Meet the Team',
    description: 'Meet the team at St. Croix Electric',
};

const MeetTheTeamPage = async () => {
	const [data] = await fetchContent(query);
	return (
		<div className='h-[50vh] grid place-items-center text text-3xl font-black opacity-60'>
			<div>{data.title}</div>
		</div>
	);
};

export default MeetTheTeamPage;

export const revalidate = 10;