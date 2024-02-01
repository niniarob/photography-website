import React from "react";
// import component;
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";

// import link;
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-200 fixed w-full px-[30px] lg:px-[100px] z-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        {/* nav initially hidden show on desktop */}
        <nav className="hidden lg:flex">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
