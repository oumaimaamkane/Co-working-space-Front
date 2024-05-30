import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.png";
import Button from "../../components/Buttons/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative bg-cover bg-top h-[135vh] md:h-[120vh] w-full"
      style={{
        backgroundImage:
          "url('https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/leyer1.jpg')",
      }}
    >
      <header className="w-full flex items-center justify-between py-5 px-4 md:px-[70px] md:py-[40px] bg-slate-800 md:bg-transparent md:border-b border-[#8d9faf]">
        <div className="w-52">
          <img src={logo} alt="logo image" />
        </div>

        <div className="hidden md:block">
          <ul className="md:flex md:items-center md:justify-evenly transition-all duration-500 ease-in">
            {Links.map((link) => (
              <li key={link.name} className="md:ml-12 text-sm md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white font-semibold hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Button className="hidden md:block">Book A Seet</Button>

        <FontAwesomeIcon
          icon={faBars}
          className="md:hidden text-white text-2xl"
          onClick={() => toggleNav()}
        />

        {/* mobile navbar */}
        <div
          className={`md:hidden fixed inset-0 transition-transform duration-500 ease-in-out z-40 flex ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`fixed inset-0 bg-black transition-transition opacity-20 duration-100 ease-in-out`}
              
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
                    className="text-white font-semibold hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <Button className="ml-8 bg-black border-transparent">
              Book A Seet
            </Button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
