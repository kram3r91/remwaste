import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	HomeLayout,
	SelectSkip,
	PermitCheck,
	ChooseDate,
	Payment,
	Postcode,
	WasteType,
} from './pages';

export const checkDefaultTheme = () => {
	const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
	document.body.classList.toggle('dark-theme', isDarkTheme);
	return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <SelectSkip />,
			},
			{
				path: 'permit-check',
				element: <PermitCheck />,
			},
			{
				path: 'choose-date',
				element: <ChooseDate />,
			},
			{
				path: 'payment',
				element: <Payment />,
			},
			{
				path: 'postcode',
				element: <Postcode />,
			},
			{
				path: 'waste-type',
				element: <WasteType />,
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
