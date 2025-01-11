import React from "react";
import { logo_url } from "../utils/constant";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between min-h-[10vh] shadow-md bg-white px-10">
        <img className="w-[100px]" src={logo_url} alt="" />
        <ul className="flex items-center space-x-4 max-md:hidden">
          <li>Crypot Taxex</li>
          <li>Free tools</li>
          <li>Resources Center</li>
          <button className="bg-[#1d4ed9] text-white px-2 py-2 rounded-md ">
            Get Started
          </button>
        </ul>
        <FaBars className="hidden max-md:block" />
      </nav>
    </>
  );
};

export default Navbar;
