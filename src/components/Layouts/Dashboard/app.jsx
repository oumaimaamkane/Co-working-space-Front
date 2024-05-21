import React from "react";
import classNames from 'classnames'
import { Link , Outlet } from "react-router-dom";
import { FcConferenceCall } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../../lib/consts/navigation";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <aside className="bg-sky-100 w-60 p-3 flex flex-col">
                <div className="flex items-center gap-2 px-1 py-3">
                <FcConferenceCall fontSize={30} />
                <span>Co-Working</span>
                </div>
                <div className="flex-1 py-4 flex flex-col gap-0.5">
                    <ul>
                        {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
                            <SidebarLinks key={item.key}  item={item} />
                           ))}
                    </ul>
                </div>
                <div>
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map}
                </div>

            </aside>
            <header className="bg-teal-200">Header Content</header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Sidebar;

function SidebarLinks({ item }){
    
    return (
        <Link to={item.path} className={classNames( 'text-black' , linkClasses)}>
                        <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
