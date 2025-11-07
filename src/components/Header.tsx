import React, { useState, useEffect } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link or theme toggle is clicked
  };

  return (
    <header className={`w-full py-4 fixed top-0 left-0 z-10 shadow-md transition-all duration-300 ${
      scrolled ? 'bg-card dark:bg-dark-card bg-opacity-90 backdrop-blur-sm' : 'bg-background dark:bg-dark-background'
    } text-text dark:text-dark-text`}>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo/Site Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary dark:text-dark-primary"
        >
          <a href="#">Dipesh.dev</a>
        </motion.div>

        {/* Toggle button */}
        <button
          className={`text-text dark:text-dark-text md:hidden ${
            menuOpen ? "absolute top-4 right-4" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:flex-grow md:justify-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li className="py-2 md:py-0">
              <a
                href="#"
                className="block py-2 hover:text-primary dark:hover:text-dark-primary transition duration-300"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#about"
                className="block py-2 hover:text-primary dark:hover:text-dark-primary transition duration-300"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#services"
                className="block py-2 hover:text-primary dark:hover:text-dark-primary transition duration-300"
                onClick={handleNavLinkClick}
              >
                Services
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#projects"
                className="block py-2 hover:text-primary dark:hover:text-dark-primary transition duration-300"
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#contact"
                className="block py-2 hover:text-primary dark:hover:text-dark-primary transition duration-300"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <div className="md:ml-auto">
          <div onClick={handleNavLinkClick}>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
