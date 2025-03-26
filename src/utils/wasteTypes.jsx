import { FaHouse, FaTree } from 'react-icons/fa6';
import { BsBuilding } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
const wasteTypes = [
	{
		id: 1,
		title: 'Household Waste',
		description: 'General household items and furniture',
		services: [
			{ id: 1, value: 'Furniture' },
			{ id: 2, value: 'Garden waste' },
			{ id: 3, value: 'Appliances' },
			{ id: 4, value: 'General household items' },
		],
		icon: <FaHouse size="2rem" />,
	},
	{
		id: 2,
		title: 'Construction Waste',
		description: 'Building materials and renovation debris',
		services: [
			{ id: 1, value: 'Bricks' },
			{ id: 2, value: 'Timber' },
			{ id: 3, value: 'Concrete' },
			{ id: 4, value: 'Plasterboard' },
		],
		icon: <BsBuilding size="2rem" />,
	},
	{
		id: 3,
		title: 'Garden Waste',
		description: 'Green waste and landscaping materials',
		services: [
			{ id: 1, value: 'Soil' },
			{ id: 2, value: 'Branches' },
			{ id: 3, value: 'Plants' },
			{ id: 4, value: 'Grass cuttings' },
		],
		icon: <FaTree size="2rem" />,
	},
	{
		id: 4,
		title: 'Commercial Waste',
		description: 'Business and office clearance',
		services: [
			{ id: 1, value: 'Office furniture' },
			{ id: 2, value: 'Shop fittings' },
			{ id: 3, value: 'Equipment' },
			{ id: 4, value: 'Commercial debris' },
		],
		icon: <FaRegBuilding size="2rem" />,
	},
];
export default wasteTypes;
