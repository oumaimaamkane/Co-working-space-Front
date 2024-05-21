import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineDeviceTablet,
    HiOutlineOfficeBuilding,
    HiOutlineClipboardList,
    HiOutlineKey,
    HiOutlineSupport,
    HiOutlineUserGroup,
    HiOutlineCog,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/Admin/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'categories',
        label: 'Categories',
        path: '/Admin/categories',
        icon: <HiOutlineCube />
    },
    {
        key: 'equipments',
        label: 'Equipments',
        path: '/Admin/equipements',
        icon: <HiOutlineDeviceTablet />
    },
    {
        key: 'espaces',
        label: 'Espaces',
        path: '/Admin/espaces',
        icon: <HiOutlineOfficeBuilding />
    },
    {
        key: 'reservations',
        label: 'Reservations',
        path: '/Admin/reservations',
        icon: <HiOutlineClipboardList />
    },
    {
        key: 'roles',
        label: 'Roles',
        path: '/Admin/roles',
        icon: <HiOutlineKey />
    },
    {
        key: 'services',
        label: 'Services',
        path: '/Admin/services',
        icon: <HiOutlineSupport />
    },
    {
        key: 'users',
        label: 'Users',
        path: '/Admin/users',
        icon: <HiOutlineUserGroup />
    },
    {
        key: 'users',
        label: 'skfvsdl',
        path: '/Admin/users',
        icon: <HiOutlineUserGroup />
    },
    {
        key: 'users',
        label: 'qfvhd',
        path: '/Admin/users',
        icon: <HiOutlineUserGroup />
    },
    {
        key: 'users',
        label: 'iersdifv',
        path: '/Admin/users',
        icon: <HiOutlineUserGroup />
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
];
