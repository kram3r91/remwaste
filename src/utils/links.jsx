import { IoIosPin } from 'react-icons/io';
import { MdOutlineDelete, MdPayment } from 'react-icons/md';
import { CiDeliveryTruck, CiCalendar } from 'react-icons/ci';
import { AiOutlineSafety } from 'react-icons/ai';
const links = [
	{ id: 1, text: 'Postcode', path: 'postcode', icon: <IoIosPin /> },
	{
		id: 2,
		text: 'Waste Type',
		path: 'waste-type',
		icon: <MdOutlineDelete />,
	},
	{
		id: 3,
		text: 'Select Skip',
		path: '.',
		icon: <CiDeliveryTruck />,
	},
	{
		id: 4,
		text: 'Permit Check',
		path: 'permit-check',
		icon: <AiOutlineSafety />,
	},
	{ id: 5, text: 'Choose Date', path: 'choose-date', icon: <CiCalendar /> },
	{ id: 6, text: 'Payment', path: 'payment', icon: <MdPayment /> },
];

export default links;
