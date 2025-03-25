import { useHomeLayoutContext } from '../pages/HomeLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ isBigSidebar }) => {
	const { toggleSidebar } = useHomeLayoutContext();

	return (
		<div className="nav-links">
			{links.map((link) => {
				const { id, text, path, icon } = link;
				return (
					<NavLink
						to={path}
						key={text}
						onClick={isBigSidebar ? null : toggleSidebar}
						className="nav-link"
						end
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};

export default NavLinks;
