"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import logo from "../../../public/Vega-logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <div className=" bg-transparent  ">
      <nav className="flex justify-between items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <div className="flex justify-start items-center w-screen ml-10 mt-3">
                <XIcon className="pt-12 h-20 w-10 z-20" />
              </div>
            ) : (
              <div className="flex justify-start items-center w-screen ml-10 mt-10">
                <MenuIcon className=" h-20 w-10 " />
                <Link className="bg-red-600 ml-11" href="/">
                  <Image
                    className=" "
                    src={logo}
                    alt="logo"
                    width="180"
                    height="100"
                  />
                </Link>
              </div>
            )}
          </button>
        </div>
        <div className="flex items-center justify-center flex-grow mt-10 " >
          <div className="hidden md:flex space-x-12">
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="text-gray-200 hover:text-gray-400 mt-8 flex items-center"
              >
                Services
                {servicesDropdownOpen ? (
                  <ChevronUpIcon className="h-5 w-5 ml-1" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 ml-1" />
                )}
              </button>
              {servicesDropdownOpen && (
                <div className="absolute z-10 mt-6 w-72 rounded-md shadow-lg bg-[#1b1b1b] ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/pages/Operational"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]"
                      role="menuitem"
                    >
                      Operational Support
                    </Link>
                    <Link
                      href="/pages/Engineering"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]"
                      role="menuitem"
                    >
                      Technical and Engineering Services
                    </Link>
                    <Link
                      href="/pages/Sustainability"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]"
                      role="menuitem"
                    >
                      Regulatory Compliance & Sustainability Upgrades
                    </Link>
                    <Link
                      href="/pages/Financial"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]"
                      role="menuitem"
                    >
                      Financial & Legal Support
                    </Link>
                    <Link
                      href="/pages/ISM"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]"
                      role="menuitem"
                    >
                      ISM Support & Maintenance Database Implementation
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/pages/References"
              className="text-gray-200 hover:text-gray-400 mt-8"
            >
              References
            </Link>
            <a href="/" className="mt-6">
              <Image src={logo} width={140} height={140} alt="Logo" />
            </a>
            <Link
              href="/pages/EmergencyResponse"
              className="text-gray-200 hover:text-gray-400 mt-8"
            >
              Emergency response
            </Link>
            <Link
              href="/pages/AboutUs"
              className="text-gray-200 hover:text-gray-400 mt-8"
            >
              About us
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-[#1b1b1b] z-10 rounded-3xl flex flex-col flex-wrap justify-center items-center relative bottom-16">
          <div className="relative ">
            <button
              onClick={toggleServicesDropdown}
              className="min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2 flex items-center justify-center"
            >
              Services
              {servicesDropdownOpen ? (
                <ChevronUpIcon className="h-5 w-5 ml-1" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 ml-1" />
              )}
            </button>
            {servicesDropdownOpen && (
              <div className="bg-[#1b1b1b]   flex flex-col items-center justify-center mt-2 mr-5">
                <Link
                  href="/pages/Operational"
                  className="block px-4 py-2 text-sm border-2 w-full border-slate-200 text-gray-200 hover:bg-[#414040]"
                  role="menuitem"
                >
                  Operational Support
                </Link>
                <Link
                  href="/pages/Engineering"
                  className="block px-4 py-2 text-sm border-2 border-t-0 w-full border-slate-200 text-gray-200 hover:bg-[#414040]"
                  role="menuitem"
                >
                  Technical and Engineering Services
                </Link>
                <Link
                  href="/pages/Sustainability"
                  className="block px-4 py-2 text-sm border-2 border-t-0 w-full border-slate-200 text-gray-200 hover:bg-[#414040]"
                  role="menuitem"
                >
                  Regulatory Compliance & Sustainability Upgrades
                </Link>
                <Link
                  href="/pages/Financial"
                  className="block px-4 py-2 text-sm border-2 border-t-0 w-full border-slate-200 text-gray-200 hover:bg-[#414040]"
                  role="menuitem"
                >
                  Financial & Legal Support
                </Link>
                <Link
                  href="/pages/ISM"
                  className=" flex justify-center items-center px-4 py-2 text-sm border-2 border-t-0 w-full border-slate-200 text-gray-200 hover:bg-[#414040]"
                  role="menuitem"
                >
                  ISM Support & Maintenance Database Implementation
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/pages/References"
            className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2"
          >
            References
          </Link>
          <Link
            href="/pages/EmergencyResponse"
            className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2"
          >
            Emergency Response
          </Link>
          <Link
            href="/pages/AboutUs"
            className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 mb-2 py-2"
          >
            About us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
