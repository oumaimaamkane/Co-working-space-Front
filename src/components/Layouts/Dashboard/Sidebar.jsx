import React, { useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/consts/navigation";


const linkClasses =
  "flex items-center gap-2 px-3 py-2 rounded-md text-base transition-colors duration-200 text-gray-700 dark:text-white font-medium";
const hoverClasses =
  "hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:no-underline active:bg-gray-200 dark:active:bg-neutral-800";
const activeLinkClasses =
  "text-zinc-50 dark:text-zinc-900 bg-zinc-900 dark:bg-zinc-50 hover:no-underline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <aside
        className={classNames(
          "bg-white dark:bg-neutral-700 transition-all duration-300 p-4 flex flex-col shadow-lg h-full",
          {
            "w-64": isOpen, 
            "w-20": !isOpen,
          }
        )}
      >
        <div className="flex items-center gap-3 px-2 py-4 border-b border-gray-400 dark:border-gray-300">
        <RiTeamFill fontSize={27} className="text-zinc-900 dark:text-zinc-50" /> 
          {isOpen && (
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Co-Working
            </span>
          )}
          {/* <img src="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/logo_02.png" className="text-black" alt="" /> */}
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-900">
          <ul className="flex flex-col py-4 space-y-1">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} isOpen={isOpen} />
            ))}
          </ul>
        </nav>
        <div className="border-t border-gray-400 dark:border-gray-300 pt-4">
          <ul className="flex flex-col space-y-1">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} isOpen={isOpen} />
            ))}
            <div
              className={classNames(
                "text-red-500 dark:text-red-600 cursor-pointer",
                linkClasses,
                hoverClasses
              )}
            >
              <span className="text-xl">
                <HiOutlineLogout />
              </span>
              {isOpen && "Logout"}
            </div>
          </ul>
        </div>
      </aside>
      <button
        onClick={toggleSidebar}
        className={classNames(
          "absolute top-14 right-1 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full focus:outline-none shadow-sm transition-all duration-300",
          "w-10 h-10" // Always maintain this size
        )}
      >
        {isOpen ? (
          <FaChevronCircleLeft className="text-xl" />
        ) : (
          <FaChevronCircleRight className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item, isOpen }) {
  const { pathname } = useLocation();
  const isActive = pathname === item.path;

  return (
    <Link
      to={item.path}
      className={classNames(linkClasses, {
        [activeLinkClasses]: isActive,
        [hoverClasses]: !isActive,
      })}
    >
      <span className="text-xl">{item.icon}</span>
      {isOpen && item.label}
    </Link>
  );
}
