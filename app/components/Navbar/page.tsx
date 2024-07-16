"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon, XIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import logo from "../../../public/Vega-logo.png";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Poppins } from "next/font/google";

const small = Poppins({
  weight: "400",
  subsets: ["latin"],
});

// Define prop types for the components
interface NavbarProps {
  toggleServicesDropdown: () => void;
  servicesDropdownOpen: boolean;
}

interface SmallScreenNavbarProps extends NavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const LargeScreenNavbar: React.FC<NavbarProps> = ({ toggleServicesDropdown, servicesDropdownOpen }) => (
  <div className={`${small.className}`}>
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center justify-center flex-grow mt-10">
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
              <div className="absolute z-20 mt-6 w-72 rounded-md shadow-lg bg-[#1b1b1b] ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/pages/Operational" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                    Operational Support
                  </Link>
                  <Link href="/pages/Engineering" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                    Technical and Engineering Services
                  </Link>
                  <Link href="/pages/Sustainability" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                    Regulatory Compliance & Sustainability Upgrades
                  </Link>
                  <Link href="/pages/Financial" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                    Financial & Legal Support
                  </Link>
                  <Link href="/pages/ISM" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
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
  </div>
);

const SmallScreenNavbar: React.FC<SmallScreenNavbarProps> = ({ isOpen, toggleMenu, servicesDropdownOpen, toggleServicesDropdown }) => (
  <div className= {`bg-transparent ${small.className}`}>
    <nav className="flex justify-between w-full items-center">
      <div className="md:hidden mt-16 flex-1 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
          {isOpen ? <XIcon className="h-10 w-10 z-20 ml-6" /> : <MenuIcon className="h-10 w-10 ml-6" />}
        </button>
        <Link href="/" className="flex-1 flex justify-center mr-16">
          <Image src={logo} alt="logo" width="180" height="100" />
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex space-x-12">
          {/* Large screen menu items */}
        </div>
      </div>
    </nav>
    {isOpen && (
      <div className="md:hidden bg-[#1b1b1b]  rounded-3xl flex flex-col justify-center items-center mt-4 z-20">
        <div className="relative w-full text-center">
          <button onClick={toggleServicesDropdown} className="w-full text-center text-gray-200 hover:text-gray-400 py-2 flex items-center justify-center">
            Services
            {servicesDropdownOpen ? <ChevronUpIcon className="h-5 w-5 ml-1" /> : <ChevronDownIcon className="h-5 w-5 ml-1" />}
          </button>
          {servicesDropdownOpen && (
            <div className="bg-[#1b1b1b] w-full border-b-2 border-t-2 border-slate-200 flex flex-col items-center mt-2 z-20">
              <Link href="/pages/Operational" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                Operational Support
              </Link>
              <Link href="/pages/Engineering" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                Technical & Engineering Services
              </Link>
              <Link href="/pages/Sustainability" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                Regulatory Compliance
              </Link>
              <Link href="/pages/Financial" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                Financial & Legal Support
              </Link>
              <Link href="/pages/ISM" className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#414040]" role="menuitem">
                ISM Support & Maintenance
              </Link>
            </div>
          )}
        </div>
        <Link href="/pages/References" className="block w-full text-center text-gray-200 hover:text-gray-400 py-2">
          References
        </Link>
        <Link href="/pages/EmergencyResponse" className="block w-full text-center text-gray-200 hover:text-gray-400 py-2">
          Emergency Response
        </Link>
        <Link href="/pages/AboutUs" className="block w-full text-center text-gray-200 hover:text-gray-400 py-2">
          About us
        </Link>
      </div>
    )}
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents server-side rendering mismatch

  return (
    <>
      {isLargeScreen ? (
        <LargeScreenNavbar key="large" toggleServicesDropdown={toggleServicesDropdown} servicesDropdownOpen={servicesDropdownOpen} />
      ) : (
        <SmallScreenNavbar
          key="small"
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          servicesDropdownOpen={servicesDropdownOpen}
          toggleServicesDropdown={toggleServicesDropdown}
        />
      )}
    </>
  );
};

export default Navbar;
