import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const navs = ["Home", "Services", "Associates", "ContactUs"];

const services = [
  "Website App Development",
  "Web Designing",
  "Events Photography",
  "Events Videography",
  "Theme Photobooth",
];

function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSetNav, setNav] = useState(false);
  const toggleMenu = () => {
    setNav(!isSetNav);
  };

  return (
    <>
      <div className="flex flex-col absolute w-full z-40">
        <nav className="flex bg-white flex-row w-full md:h-20 h-16 overflow-hidden">
          <div className="flex md:w-3/4 w-11/12 justify-between mx-auto">
            <div>
              <a href="#" className="flex h-full m-auto">
                <img src={Logo} alt="logo" className="md:h-16 h-12 m-auto" />
                <h1 className="my-auto md:text-3xl text-2xl font-bold text-gray-800">
                  Alpas
                </h1>
              </a>
            </div>

            <GiHamburgerMenu
              id="burger"
              onClick={toggleMenu}
              className="flex md:hidden visible my-auto text-3xl text-gray-700 cursor-pointer hover:text-gray-900 ease-in-out duration-300"
            />
            <div
              id="nav"
              className={`md:h-fit ${
                isSetNav ? "h-fit" : "h-0"
              } overflow-hidden md:relative absolute md:my-auto mt-16 md:bg-none md:bg-opacity-0 bg-gray-950 md:w-fit bg-opacity-95 w-full left-0 z-20 ease-in-out duration-300`}
            >
              <ul className="flex md:flex-row flex-col text-center md:text-base text-sm md:py-4 py-10 my-auto md:gap-6 gap-12 md:text-gray-900 text-white font-semibold">
                {navs.map((nav, index) => (
                  <li>
                    <Link
                      to={`/${nav}`}
                      className={
                        selectedIndex === index
                          ? "cursor-pointer md:border-none border-b md:px-0 py-3 px-16 md:text-blue-700 text-gray-500 ease-in-out duration-300"
                          : "cursor-pointer md:border-none border-b py-3 my-ease-in-out duration-300 md:hover:text-blue-700 hover:text-gray-500"
                      }
                      key={nav}
                      onClick={() => {
                        setSelectedIndex(index);
                      }}
                    >
                      {nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-fit shadow-md border-b border-gray-300 overflow-hidden">
          <div className="flex flex-row h-full justify-around md:w-1/2 w-full m-auto text-center md:text-base text-xs text-gray-100 font-semibold">
            {services.map((service) => (
              <a
                className="cursor-pointer transform ease-in-out duration-300 hover:text-teal-200 md:w-fit w-1/2 my-auto py-2"
                key={service}
              >
                {service}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
