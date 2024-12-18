"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu and close
import Logo from "./components/Logo";

const NavBar = () => {
  const currentPath = usePathname();

  // State for toggling the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Order Now", href: "/order" },
    { label: "Offers", href: "/offers" },
    { label: "Contact", href: "/#contact" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <nav className="flex items-center justify-between border-0 shadow-sm mt-5 mx-4 rounded-full px-6 h-16 bg-[#D9B382]">
      {/* Left Side - Logo */}
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Right Side - Links and Menu Toggle */}
      <div className="flex items-center">
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-bold ${
                  link.href === currentPath ? "text-[#8B4513]" : "text-gray-50"
                } hover:text-[#6A4C3B] transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Icon for Tablet and Mobile */}
        <button
          className="md:hidden text-[#8B4513] text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile and Tablet Links (Collapsible Menu) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full shadow-md md:hidden">
          <div className="mx-5 bg-[#D9B382] overflow-hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-lg font-bold ${
                      link.href === currentPath
                        ? "text-[#8B4513]"
                        : "text-gray-50"
                    } hover:text-[#6A4C3B] transition-colors`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
