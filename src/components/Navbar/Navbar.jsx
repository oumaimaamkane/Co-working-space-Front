import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCog,
  faSignOutAlt,
  faChevronDown,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { useAuth } from "../../hooks/useAuth";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "Packs", link: "/packs" },
    { name: "BLOG'S", link: "/blogs" },
    { name: "CONTACT", link: "/contact" },
  ];

  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isLoggedIn, user, logout, loading } = useAuth();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-teal-500"></div>
      </div>
    );
  }

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full absolute top-0 left-0 z-20 flex items-center justify-between py-5 px-4 md:px-12 2xl:px-24 md:py-[40px] bg-slate-800 lg:bg-transparent md:border-b border-[#8d9faf]">
      <div className="w-52 2xl:w-96">
        <img
          src={logo}
          className="w-[160px] md:w-auto 2xl:w-[300px]"
          alt="logo image"
        />
      </div>

      <div className="hidden lg:block">
        <ul className="md:flex md:items-center md:justify-evenly 2xl:gap-6 transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-12 text-sm 2xl:text-2xl md:my-0 my-7"
            >
              <Link
                to={link.link}
                className="text-white font-semibold uppercase hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isLoggedIn ? (
        <div className="hidden lg:block relative" ref={menuRef}>
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-gray-600" />
            </div>
            <span className="text-white text-sm">{user?.user.name}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-white transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link
                  to={"profile"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Profile
                </Link>

                {user?.user.role_id === 1 && (
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faDashboard} className="mr-2" />
                    Dashboard
                  </Link>
                )}

                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faCog} className="mr-2" />
                  Settings
                </Link>

                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Button className="hidden lg:block hover:bg-white hover:text-slate-800 transition duration-300">
          Book A Seat
        </Button>
      )}

      <FontAwesomeIcon
        icon={faBars}
        className="lg:hidden text-white text-2xl"
        onClick={() => toggleNav()}
      />

      {/* mobile navbar */}
      <div
        className={`lg:hidden fixed inset-0 transition-transform duration-500 ease-in-out z-40 flex ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-[#030303] transition-transition opacity-20 duration-100 ease-in-out`}
          onClick={toggleNav}
        />
        <nav
          className={`w-10/12 bg-slate-800 h-full flex-shrink-0 transform transition-transform ease-in-out duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="transition-all py-6 duration-500 ease-in">
            {Links.map((link) => (
              <li
                key={link.name}
                className="pl-8 text-sm border-b border-white py-5"
              >
                <a
                  href={link.link}
                  className="text-white font-semibold uppercase hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Button className="border-transparent duration-200 ml-8 bg-[#030303]">
            Book A Seet
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
