import React from "react";
import classNames from 'classnames';
import { Link, useLocation } from "react-router-dom";
import { FcConferenceCall } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../../lib/consts/navigation";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-200 hover:no-underline active:bg-gray-200 rounded-md text-base transition-colors duration-200 text-gray-700 font-medium';

const Sidebar = () => {
    return (
        <aside className="bg-white w-64 p-4 flex flex-col shadow-lg">
            <div className="flex items-center gap-3 px-2 py-4 border-b border-gray-200">
                <FcConferenceCall fontSize={28} />
                <span className="text-lg font-bold text-gray-900">Co-Working</span>
            </div>
            <nav className="flex-1 overflow-y-auto" style={{ }}>
                <ul className="flex flex-col py-4 space-y-1">
                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLinks key={item.key} item={item} />
                    ))}
                </ul>
            </nav>
            <div className="border-t border-gray-200 pt-4">
                <ul className="flex flex-col space-y-1">
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                        <SidebarLinks key={item.key} item={item} />
                    ))}
                    <div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
                        <span className="text-xl"><HiOutlineLogout /></span>
                        Logout
                    </div>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

function SidebarLinks({ item }) {
    const { pathname } = useLocation();
    const active = pathname === item.path;

    return (
        <Link to={item.path} className={classNames(active ? 'text-gray-900 bg-gray-200' : '', linkClasses)}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    );
}