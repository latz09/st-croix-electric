import MobileNavbar from '../utils/modals/MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { navigationLinks } from '@/data/navigationLinks';
const NavigationContainer = () => {
	return (
		<div className=' z-30 py-2 sticky top-0 bg-light '>
			
			<MobileNavbar navLinks={navigationLinks}/>
			<DesktopNavbar navLinks={navigationLinks}/>
		</div>
	);
};

export default NavigationContainer;
