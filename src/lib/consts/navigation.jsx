import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/sidebar/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'categories',
		label: 'Categories',
		path: '/sidebar/categories',
		icon: <HiOutlineCube />
	},
	{
		key: 'equipements',
		label: 'Equipements',
		path: '/sidebar/equipements',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'espaces',
		label: 'Espaces',
		path: '/sidebar/espaces',
		icon: <HiOutlineUsers />
	},
	{
		key: 'reservations',
		label: 'Reservations',
		path: '/sidebar/reservations',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'roles',
		label: 'Roles',
		path: '/sidebar/roles',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'services',
		label: 'Services',
		path: '/sidebar/services',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/sidebar/users',
		icon: <HiOutlineAnnotation />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]