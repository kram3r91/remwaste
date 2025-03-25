import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useHomeLayoutContext } from '../pages/HomeLayout';

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useHomeLayoutContext();
	return (
		<Wrapper onClick={toggleDarkTheme}>
			{isDarkTheme ? (
				<BsFillSunFill className="toggle-icon" />
			) : (
				<BsFillMoonFill className="toggle-icon" />
			)}
		</Wrapper>
	);
};

export default ThemeToggle;
