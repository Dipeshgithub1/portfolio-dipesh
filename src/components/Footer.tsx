import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-6 bg-card text-text dark:bg-dark-card dark:text-dark-text"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#about"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#services"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  Services
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#projects"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#skills"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#contact"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://x.com/Dipeshmehr"
                  target="_blank"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Dipeshgithub1"
                  target="_blank"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dipesh-kumar-701545226/"
                  target="_blank"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@your-medium-profile" // Replace with your actual Medium profile URL
                  target="_blank"
                  className="hover:text-primary dark:hover:text-dark-primary transition duration-300"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-0">
              © {new Date().getFullYear()} D!pesh. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
