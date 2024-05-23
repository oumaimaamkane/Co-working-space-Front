import React, { useState } from "react";
import logo from "../../assets/img/logo_02.png";
import Button from "../../components/Buttons/Button";
import LayerIcon from "../../assets/img/layericon.png";
import LinkButton from "../Buttons/LinkButton";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div
      className="bg-red-600 bg-cover bg-top h-screen md:h-[120vh] w-full"
      style={{
        backgroundImage:
          "url('https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/leyer1.jpg')",
      }}
    >
      <header className="flex items-center justify-between md:px-[70px] md:py-[40px] border-b border-[#8d9faf]">
        <div className="w-52">
          <img src={logo} alt="logo image" />
        </div>
        <div>
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
        <Button>Book A Seet</Button>
      </header>

      <section className="hero text-center">
        <small className="text-white uppercase">
          Probably The Best Creative Space In The City
        </small>
        <h1 className="text-white text-5xl pt-3 pb-9 font-bold">
          Creative coworking startup take off here
        </h1>
        <LinkButton>Take A Tour</LinkButton>
      </section>

      <div className="flex text-white layer-section">
        <img src={LayerIcon} alt="layer icon" className="w-5 h-fit mr-3 mt-[6px]" />
        <p>
          Whether it's working for yourself, or<br/> remotly, it's great to be
          independent.
        </p>
      </div>
    </div>
  );
};

export default Nav;
