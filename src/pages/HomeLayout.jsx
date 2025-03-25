import { createContext, useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { checkDefaultTheme } from '../App';

// assets
import Wrapper from '../assets/wrappers/Home';

//components
import { BigSidebar, SmallSidebar, Navbar } from '../components';

const HomeLayoutContext = createContext();
const HomeLayout = () => {
	const navigate = useNavigate();
	const [showSidebar, setShowSidebar] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);
		document.body.classList.toggle('dark-theme', newDarkTheme);
		localStorage.setItem('darkTheme', newDarkTheme);
	};

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<HomeLayoutContext.Provider
			value={{ showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar }}
		>
			<Wrapper>
				<main className="homelayout">
					<SmallSidebar />
					<BigSidebar />
					<div>
						<Navbar />
						<div className="homelayout-page">
							<Outlet />
						</div>
					</div>
				</main>
			</Wrapper>
		</HomeLayoutContext.Provider>
	);
};
export const useHomeLayoutContext = () => useContext(HomeLayoutContext);
export default HomeLayout;
