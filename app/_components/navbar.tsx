"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import { LuMoveUpRight } from "react-icons/lu";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Subject Selection", href: "/subject-selection" },
  { name: "About Us", href: "/about-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        if (currentScrollY > 50) {
          setVisible(false);
        }
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-[#7CEED0] to-[#F7D4E9] backdrop-blur-sm transition-all duration-300 ease-in-out z-50 ${
        visible ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold hover:text-[#5B46FF] transition-all duration-200"
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-gray-600 hover:text-blue-500 transition-all duration-200 group`}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-no-repeat bg-center border-b-2 border-[#5B46FF] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#5B46FF] text-white px-4 py-2 rounded-full hover:bg-[#4736C2] transition-all duration-200 hover:shadow-md cursor-pointer flex items-center gap-4">
              Get Started
              <LuMoveUpRight className="w-6 h-6 bg-white rounded-full p-1 text-[#5B46FF] hover:bg-[#4736C2] transition-all duration-200 hover:shadow-md" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative block px-3 py-2 text-gray-600 hover:text-blue-500 transition-all duration-200`}
                onClick={handleMobileMenuItemClick} // Close the menu on item click
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-no-repeat bg-center border-b-2 border-[#5B46FF] rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
