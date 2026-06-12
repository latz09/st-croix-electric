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

const data = {
	heading: 'Meet The Team',
	whoWeAreCard: {
		teamParagraph: `At St. Croix Electric, we combine generations of expertise with modern techniques, delivering exceptional, personalized service as a family-owned business.`,
	},
	teamMembers: [
		{
			name: 'Nik Lewandowski',
			role: 'Owner & Master Electrician',
			image: '/images/content/Nik.jpg',
			description: [
				`Nik Lewandowski is the heart behind St. Croix Electric Inc., a company he has been immersed in since apprenticing with his father as a teenager. Nik's journey in the electrical trade began over 20 years ago, and he has since developed a deep understanding of the business and a commitment to its values.`,
				`Now at the helm, Nik continues to honor the company's legacy while modernizing its services. Working alongside his parents, the original owners, Nik learned the ins and outs of the industry and cultivated a passion for creating a safe, professional work environment that feels like family.`,
				`His expertise spans residential and small commercial electrical systems, and he is dedicated to delivering personalized, top-quality service to every client.`,
			],
		},
		{
			name: 'Caspar Moore',
			role: 'Electrician',
			image: '/images/content/Caspar.png',
			description: [
				`Caspar Moore is an Electrician at St. Croix Electric Inc., bringing a versatile background in painting and carpentry before pursuing his passion for electrical work. With 4.5 years in the field, Caspar has developed a reputation for his hands-on skills and problem-solving approach.`,
				`He enjoys the dynamic nature of his role, from breaking things down to fixing and troubleshooting complex issues, all while helping clients achieve safe and functional electrical solutions.`,
				`Caspar's dedication to the craft and his commitment to quality service make him an essential part of the St. Croix Electric Inc. team.`,
			],
		},
		{
			name: 'Tamara Tillery',
			role: 'Office Manager & Executive Assistant',
			image: '/images/content/Tamara.jpg',
			description: [
				`Tamara Tillery serves as the Office Manager and Executive Assistant at St. Croix Electric Inc., bringing over 15 years of comprehensive administrative experience.`,
				`Her diverse background spans the real estate, nonprofit, beauty, and bridal sectors, equipping her with a unique skill set that enhances her efficiency in managing office operations, human resources, and client relations.`,
				`Known for her organizational expertise and commitment to customer satisfaction, Tamara ensures that both team members and clients experience a high level of professionalism and support. Fluent in Portuguese and Spanish, she brings added versatility and a welcoming approach to St. Croix Electric Inc.'s customer service experience.`,
			],
		},
	],
};

const MeetTheTeamPage = () => {
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
