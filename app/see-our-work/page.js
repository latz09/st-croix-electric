import ImageGallery from '../components/portfolio/ImageGallery';
import { Heading } from '../components/utils/typography/Typography';
import PageContainer from '../components/utils/animations/PageContainer';

export const metadata = {
	title: 'See Our Work',
	description: 'See Our Work',
};

const data = {
	title: 'See Our work',
	projects: [
		{ imageUrl: '/images/content/gallery/1.jpg', title: '1', alt: null },
		{ imageUrl: '/images/content/gallery/2.jpg', title: '2', alt: null },
		{ imageUrl: '/images/content/gallery/3.jpg', title: '3', alt: null },
		{ imageUrl: '/images/content/gallery/4.jpg', title: '4', alt: null },
		{ imageUrl: '/images/content/gallery/5.jpg', title: '5', alt: null },
		{ imageUrl: '/images/content/gallery/6.jpg', title: '6', alt: null },
		{ imageUrl: '/images/content/gallery/7.jpg', title: '7', alt: null },
		{ imageUrl: '/images/content/gallery/8.jpg', title: '8', alt: null },
		{ imageUrl: '/images/content/gallery/9.jpg', title: '9', alt: null },
		{ imageUrl: '/images/content/gallery/10.jpg', title: '10', alt: null },
		{ imageUrl: '/images/content/gallery/11.jpg', title: '11', alt: null },
		{ imageUrl: '/images/content/gallery/12.jpg', title: '12', alt: null },
		{ imageUrl: '/images/content/gallery/13.jpg', title: '13', alt: null },
		{ imageUrl: '/images/content/gallery/14.jpg', title: '14', alt: null },
		{ imageUrl: '/images/content/gallery/15.jpg', title: '15', alt: null },
		{ imageUrl: '/images/content/gallery/16.jpg', title: '16', alt: null },
		{ imageUrl: '/images/content/gallery/17.jpg', title: '17', alt: null },
		{ imageUrl: '/images/content/gallery/18.jpg', title: '18', alt: null },
		{ imageUrl: '/images/content/gallery/19.jpg', title: '19', alt: null },
		{ imageUrl: '/images/content/gallery/20.jpg', title: '20', alt: null },
	],
};

const SeeOurWorkPage = () => {
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