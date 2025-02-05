import React from "react";
import Nike from "/img/nike.png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Navbar Below Superheader */}
      <header className="fixed top-[36px] left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={Nike.src}
              alt="Nike Logo"
              className="h-8 cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-black font-medium helvetica-neue">
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">New & Featured</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Men</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Women</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Kids</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Sale</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">SNKRS</a>
          </nav>

          {/* Right Side (Search Bar & Icons) */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative flex items-center bg-gray-300 rounded-full px-3 py-2 w-64">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none w-full text-black placeholder-gray-700 helvetica-neue"
              />
              <HiMiniMagnifyingGlass className="text-black size-6 cursor-pointer hover:text-gray-600 transition-colors duration-200" />
            </div>

            {/* Icons */}
            <FiHeart className="text-black size-6 cursor-pointer hover:text-gray-600 transition-colors duration-200" />
            <Link href="/cart">
              <IoBagOutline className="text-black size-6 cursor-pointer hover:text-gray-600 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </header>

      {/* Push Content Down (Superheader + Navbar height) */}
      <div className="pt-[116px]"></div>
    </>
  );
};

export default Navbar;
