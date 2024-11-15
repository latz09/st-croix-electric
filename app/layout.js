import Footer from './components/navigation/Footer';
import NavigationContainer from './components/navigation/NavigationContainer';
import RequestQuoteNow from './components/utils/modals/RequestQuoteNow';
import './globals.css';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL('https://st-croix-electric.vercel.app/'),
	title: {
		default: 'St. Croix Electric',
		template: `%s | St. Croix Electric inc. `,
	},
	description: `St. Croix Electric offers trusted electrical solutions for historic homes and new builds. As a family-owned business with a legacy of excellence, we deliver precision, care, and innovative services tailored to your needs. Experience expertise you can rely on.`,
	twitter: {
		card: 'summary_large_image',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<NavigationContainer />
				<RequestQuoteNow />
				{children}
				<Footer />
			</body>
		</html>
	);
}
