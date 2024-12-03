import React, { useState } from 'react';
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // Icon hamburger

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-lg font-semibold">
            FOOD <span className="text-primary">EAT</span>
          </p>
        </div>

        {/* menu section */}
        <div className="flex items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border hover:border-b-4 border-primary uppercase">About</li>
          </ul>
        </div>

        {/* login section */}
        <div className="flex gap-4 items-center sm:ml-0">
          <img src={Profile} alt="" className="w-10 rounded-full" />
          <IoIosArrowDown />
          {/* Hamburger icon for mobile */}
          <div className="sm:hidden ml-auto">
            <FiMenu size={24} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-white shadow-md">
          <a href="#home" className="py-2 uppercase hover:text-primary">Home</a>
          <a href="#menu" className="py-2 uppercase hover:text-primary">Menu</a>
          <a href="#about" className="py-2 uppercase hover:text-primary">About</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
