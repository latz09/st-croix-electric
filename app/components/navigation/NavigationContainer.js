import MobileNavbar from '../utils/modals/MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { navigationLinks } from '@/data/navigationLinks';
const NavigationContainer = () => {
	return (
		<div className=' '>
			<div className=' fixed w-full bg-light  py-2 '>
				<MobileNavbar navLinks={navigationLinks} />
			</div>
			<div className=' fixed w-full bg-light  py-2 '>
				<DesktopNavbar navLinks={navigationLinks} />
			</div>
		</div>
	);
};

export default NavigationContainer;
