import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_MEET_THE_TEAM_PAGE_DATA as query } from '@/data/queries/pages/FETCH_MEET_THE_TEAM_PAGE_DATA';
import { Heading } from '../components/utils/typography/Typography';
import TeamIntroductions from '../components/our-team/TeamIntroductions';
export const metadata = {
	title: 'Meet the Team',
	description: 'Meet the team at St. Croix Electric',
};

const MeetTheTeamPage = async () => {
	const [data] = await fetchContent(query);
	
	return (
		<div className='space-y-8 lg:space-y-16 '>
			<div className='text-center bg-dark py-8'>
				<Heading text={data.heading} type='text-light' />
			</div>
			<div className="max-w-7xl mx-auto">
				<TeamIntroductions data={data.teamMembers} />
			</div>
		</div>
	);
};

export default MeetTheTeamPage;

export const revalidate = 10;
