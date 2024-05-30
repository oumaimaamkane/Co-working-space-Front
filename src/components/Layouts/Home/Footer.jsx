import logo from "../../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
  return (
    <footer className="bg-gray-900 py-16">
      <div className="flex flex-col items-center">
        <div className="pb-16">
          <img src={logo} alt="logo image" />
        </div>

        <div className=" w-full flex items-center pb-16">
          <ul className="mx-auto md:flex md:items-center md:justify-between md:pb-0 pb-12 w-full md:w-7/12 md:pl-0 pl-9 transition-all duration-500 ease-in">
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white font-semibold hover:text-[#55BBA4] duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-between items-center mb-8">
          <hr className="border-[#51657A] w-5/12" />
          <span className="text-white text-xl flex items-center space-x-4">
            <a
              href="https://plus.google.com"
              aria-label="Google Plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGooglePlus}
                className="hover:text-[#55BBA4] transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-[#55BBA4] transition-colors duration-300"
              />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:text-[#55BBA4] transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:text-[#55BBA4] transition-colors duration-300"
              />
            </a>
          </span>
          <hr className="border-[#51657A] w-5/12" />
        </div>

        <div className="flex items-center">
          <p className="text-white text-md font-semibold">
            Copyright © 2024 - Coworkshop
          </p>
        </div>
      </div>
    </footer>
  );
}
