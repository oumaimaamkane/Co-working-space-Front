import React from "react";
import { HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { CiSettings , CiLogout } from "react-icons/ci";
import {
  Menu,
  Transition,
  MenuItem,
  MenuButton,
  MenuItems,
} from "@headlessui/react";

const Header = () => {
  return (
    <header className="bg-white h-16 px-10 mt-5 mx-5 mb-7 pb-2 flex justify-between items-center rounded-lg shadow-md">
      <div className="flex items-center">
        <HiOutlineSearch fontSize={20} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="text-sm outline-none h-10 w-[18rem] px-3"
        />
      </div>
      <div className="flex items-center gap-4">
        <MdNotificationsNone fontSize={20} />
        <HiOutlineSun fontSize={21} />

        {/* Profile Menu */}
        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <MenuButton className="focus:outline-none">
                <BsPersonCircle fontSize={22} />
              </MenuButton>
              <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <MenuItems
                  static
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-10"
                >
                  <MenuItem>
                    {({ active }) => (
                        
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } flex items-center gap-3 px-4 py-2 text-sm text-gray-700 w-full text-left`}
                        onClick={() => console.log("Profile clicked")}  
                      ><RxPerson fontSize={16} />
                        Profile
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } flex items-center gap-3 px-4 py-2 text-sm text-gray-700 w-full text-left`}
                        onClick={() => console.log("Settings clicked")}
                      ><CiSettings fontSize={19}/>
                        Settings
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100" : ""
                        } flex items-center gap-3 px-4 py-2 text-sm text-gray-700 w-full text-left`}
                        onClick={() => console.log("Logout clicked")}
                      ><CiLogout fontSize={18} />
                        Logout
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default Header;
