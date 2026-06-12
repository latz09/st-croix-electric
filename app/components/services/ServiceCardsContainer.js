import ServiceCards from './ServiceCards';

const data = {
	title: 'What We Do',
	servicesList: [
		{
			title: 'Electric Upgrades, Wiring & Repairs',
			pageId: 'electrical',
			image: {
				asset: {
					url: '/images/content/services-electric-panel.webp',
				},
			},
			subcategories: [
				{ subTitle: 'Service Upgrades' },
				{ subTitle: 'Fuse Panel Replacements' },
				{ subTitle: 'Electrical Panel upgrades' },
				{ subTitle: 'GFCI Installations' },
				{ subTitle: 'Electrical Wiring for Renovations' },
			],
		},
		{
			title: 'Lighting Solutions',
			pageId: 'lighting',
			image: {
				asset: {
					url: '/images/content/services-lighting.jpg',
				},
			},
			subcategories: [
				{ subTitle: 'Light Fixture Services' },
				{ subTitle: 'Recessed Lighting' },
				{ subTitle: 'Security Lighting' },
				{ subTitle: 'Outdoor Lighting Installations' },
			],
		},
		{
			title: 'Remodeling & New Installations',
			pageId: 'remodeling',
			image: {
				asset: {
					url: '/images/content/services-remodeling.jpg',
				},
			},
			subcategories: [
				{ subTitle: 'Kitchen/Bathroom/Basement Remodels' },
				{ subTitle: 'New Outlets' },
				{ subTitle: 'Ceiling Fans' },
				{ subTitle: 'Hot Tubs & Saunas' },
			],
		},
		{
			title: 'Backup Power & Surge Protection',
			pageId: 'backup',
			image: {
				asset: {
				url: '/images/content/services-generator.jpg',
				},
			},
			subcategories: [
				{ subTitle: 'Backup Generator Installation' },
				{ subTitle: 'Surge Protection Solutions' },
			],
		},
		{
			title: 'Smart Home Device Installation',
			pageId: 'smarthome',
			image: {
				asset: {
					url: '/images/content/services-smart-home.jpg',
				},
			},
			subcategories: [
				{ subTitle: 'Smart Lighting Installation' },
				{ subTitle: 'Smart Thermostat Installation' },
				{ subTitle: 'Smart Door Lock Installation' },
				{ subTitle: 'Smart Security Systems' },
			],
		},
	],
};

const ServiceCardsContainer = () => {
	return (
		<>
			<ServiceCards data={data} />
		</>
	);
};

export default ServiceCardsContainer;
