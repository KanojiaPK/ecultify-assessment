import React, { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Community", href: "#community" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between w-full h-20 px-5 bg-white border">
      <img src="./figma.png" className="w-10 h-10 mr-2" alt="Logo" />

      <nav className="items-center justify-end flex-1 hidden space-x-6 md:flex">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <button className="hidden px-4 py-2 bg-gray-300 border rounded-lg hover:bg-gray-400 md:flex">
            Sign In
          </button>
          <button className="px-4 py-2 text-white bg-black border rounded-lg hover:text-black hover:bg-gray-200">
            Register
          </button>
        </div>
      </nav>

      {/* Toggleable Hamburger menu for smaller screens switching from menu to X */}
      <div className="flex items-center md:hidden">
        <img
          src={toggle ? closeIcon : menuIcon}
          alt="menu"
          className="object-contain w-8 h-8 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Dropdown menu for mobile with all the list and buttons */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl bg-gray-50 shadow-lg flex-col`}
      >
        <ul className="flex flex-col justify-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-black hover:text-gray-300"
                onClick={() => setToggle(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons below the navigation links */}
        <div className="flex flex-row gap-2 mt-6">
          <button className="px-4 py-2 bg-gray-300 border rounded-lg hover:bg-gray-400">
            Sign In
          </button>
          <button className="px-4 py-2 text-white bg-black border rounded-lg hover:bg-gray-200 hover:text-black">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
