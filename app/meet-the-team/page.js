import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_MEET_THE_TEAM_PAGE_DATA as query } from '@/data/queries/pages/FETCH_MEET_THE_TEAM_PAGE_DATA';
import {
	Heading,
	Paragraph,
	SubHeading,
} from '../components/utils/typography/Typography';
import TeamIntroductions from '../components/our-team/TeamIntroductions';
import PageContainer from '../components/utils/animations/PageContainer';
export const metadata = {
	title: 'Meet the Team',
	description: 'Meet the team at St. Croix Electric',
};

const MeetTheTeamPage = async () => {
	const [data] = await fetchContent(query);

	return (
		<PageContainer>
			<div className='space-y-8 lg:space-y-16 bg-gradient-to-b from-light via-primary/10 to-light'>
				<div className='text-center bg-dark py-8  '>
					<Heading text={data.heading} type='text-secondary' />
				</div>
				<div className='max-w-7xl mx-auto'>
					<TeamIntroductions data={data.teamMembers} />
				</div>
			</div>
		</PageContainer>
	);
};

export default MeetTheTeamPage;

export const revalidate = 10;
