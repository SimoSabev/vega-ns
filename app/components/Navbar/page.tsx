"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
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
    <div className="p-4 bg-transparent ml-10">
      <nav className="flex justify-between items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center flex-grow">
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
                <div className="absolute mt-2 w-72 rounded-md shadow-lg bg-indigo-950 ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link href="/pages/Operational" className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-900" role="menuitem">
                      Operational Support
                    </Link>
                    <Link href="/pages/Engineering" className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-900" role="menuitem">
                    Technical and Engineering Services
                    </Link>
                    <Link href="/pages/Sustainability" className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-900" role="menuitem">
                    Regulatory Compliance & Sustainability Upgrades
                    </Link>
                    <Link href="/pages/Financial" className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-900" role="menuitem">
                    Financial & Legal Support
                    </Link>
                    <Link href="/pages/ISM" className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-900" role="menuitem">
                    ISM Support & Maintenance Database Implementation
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/pages/References" className="text-gray-200 hover:text-gray-400 mt-8">
              References
            </Link>
            <a href="/" className="mt-6">
              <Image src={logo} width={140} height={140} alt="Logo" />
            </a>
            <Link href="/pages/EmergencyResponse" className="text-gray-200 hover:text-gray-400 mt-8">
              Emergency response
            </Link>
            <Link href="/pages/AboutUs" className="text-gray-200 hover:text-gray-400 mt-8">
              About us
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-indigo-950 rounded-3xl flex flex-col flex-wrap justify-center items-center">
          <div className="relative">
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
              <div className="bg-indigo-950 flex flex-col items-center mt-2">
                <Link href="#" className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2">
                  Subitem 1
                </Link>
                <Link href="#" className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2">
                  Subitem 2
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2">
            References
          </Link>
          <Link href="#" className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 py-2">
            About us
          </Link>
          <Link href="#" className="block min-w-full text-center text-gray-200 hover:text-gray-400 mt-2 mb-2 py-2">
            Contacts
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
