import { IoIosPin } from 'react-icons/io';
import { MdOutlineDelete, MdPayment } from 'react-icons/md';
import { CiDeliveryTruck, CiCalendar } from 'react-icons/ci';
import { AiOutlineSafety } from 'react-icons/ai';
const links = [
	{ text: 'Postcode', path: '.', icon: <IoIosPin /> },
	{
		text: 'Waste Type',
		path: 'waste-type',
		icon: <MdOutlineDelete />,
	},
	{
		text: 'Select Skip',
		path: 'select-skip',
		icon: <CiDeliveryTruck />,
	},
	{
		text: 'Permit Check',
		path: 'permit-check',
		icon: <AiOutlineSafety />,
	},
	{ text: 'Choose Date', path: 'choose-date', icon: <CiCalendar /> },
	{ text: 'Payment', path: 'payment', icon: <MdPayment /> },
];

export default links;
