import NavLinks from './NavLinks';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useHomeLayoutContext } from '../pages/HomeLayout';

const BigSidebar = () => {
	const { showSidebar } = useHomeLayoutContext();
	return (
		<Wrapper>
			<div
				className={
					showSidebar
						? 'sidebar-container '
						: 'sidebar-container show-sidebar'
				}
			>
				<div className="content">
					<NavLinks isBigSidebar />
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
