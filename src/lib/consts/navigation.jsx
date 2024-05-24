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
        path: '/Admin/manage-categories',
        icon: <HiOutlineCube />
    },
    {
        key: 'equipments',
        label: 'Equipments',
        path: '/Admin/manage-equipements',
        icon: <HiOutlineDeviceTablet />
    },
    {
        key: 'espaces',
        label: 'Espaces',
        path: '/Admin/manage-espaces',
        icon: <HiOutlineOfficeBuilding />
    },
    {
        key: 'reservations',
        label: 'Reservations',
        path: '/Admin/manage-reservations',
        icon: <HiOutlineClipboardList />
    },
    {
        key: 'roles',
        label: 'Roles',
        path: '/Admin/manage-roles',
        icon: <HiOutlineKey />
    },
    {
        key: 'services',
        label: 'Services',
        path: '/Admin/manage-services',
        icon: <HiOutlineSupport />
    },
    {
        key: 'users',
        label: 'Users',
        path: '/Admin/manage-users',
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
