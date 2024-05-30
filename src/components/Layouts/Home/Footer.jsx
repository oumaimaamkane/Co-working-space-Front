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
      { name: "Plans", link: "/" },
    ];
  return (
    <footer className="bg-gray-900 py-10 md:py-16">
      <div className="flex flex-col items-center">
        <div className="">
          <img src={logo} alt="logo image" className="w-[160px] md:w-auto" />
        </div>

        <div className="w-full flex items-center justify-center px-4 py-14 md:py-16">
          <ul className="w-full items-center grid grid-cols-3 md:grid-cols-6 gap-4 md:w-10/12 md:pl-0 transition-all duration-500 ease-in justify-items-center">
            {Links.map((link) => (
              <li
                key={link.name}
                className="text-sm text-center w-full md:text-lg"
              >
                <a
                  href={link.link}
                  className="text-white font-[500] uppercase md:font-semibold hover:text-[#55BBA4] duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-between items-center mb-8">
          <hr className="border-[#51657A] w-5/12" />
          <span className="text-white text-xl flex items-center space-x-4 md:space-x-8">
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
          <p className="text-white text-sm md:text-base md:font-semibold">
            Copyright © 2024 - Coworkshop
          </p>
        </div>
      </div>
    </footer>
  );
}
