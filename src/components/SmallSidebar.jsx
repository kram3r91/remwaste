import Wrapper from '../assets/wrappers/SmallSidebar';
import { useHomeLayoutContext } from '../pages/HomeLayout';
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useHomeLayoutContext();

	return (
		<Wrapper>
			<div
				className={
					showSidebar
						? 'sidebar-container show-sidebar'
						: 'sidebar-container'
				}
			>
				<div className="content">
					<button
						type="button"
						className="close-btn"
						onClick={toggleSidebar}
					>
						<FaTimes />
					</button>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
