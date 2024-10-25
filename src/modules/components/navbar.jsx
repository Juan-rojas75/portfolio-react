// Navbar.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

const Navbar = ({ links }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href);
    const offset = isFixed ? 64 : 138; // Ajusta este valor según la altura del navbar
    const additionalOffset = 100; // Margen adicional para evitar que el contenido quede oculto
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset - additionalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Cerrar el menú después de hacer clic en un enlace
    setIsMenuOpen(false);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>

    <nav
      className={`${
        isFixed ? "fixed top-0 bg-white dark:bg-gray-900" : "block bg-transparent"
      } text-lg z-10 w-full py-6 px-8 shadow-md shadow-pink-200 transition-all duration-700`}
    >
      <div className="sm:mx-20 lg:mx-40 flex flex-row flex-wrap justify-between items-center">
        <img
          width="80px"
          src={process.env.PUBLIC_URL + "/Logo_JMRC.png"}
          alt="Foto"
        />
        <div className="sm:hidden relative z-50">
          <button
            onClick={handleMenuToggle}
            className="text-black hover:text-white hover:bg-red-900 rounded-lg px-2 py-1 transition-all duration-700 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
              >
                <path d="M20 7H4" />
                <path d="M20 12H4" opacity=".5" />
                <path d="M20 17H4" />
              </g>
            </svg>
          </button>
        </div>
        
        <ul className="hidden sm:flex gap-4 space-x-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-bold text-black dark:text-white hover:text-white hover:bg-pink-900 rounded-3xl px-5 py-3 transition-all duration-700"
              >
                { language === 'en' ? link.text : link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    <ul
    className={`${
      isMenuOpen ? "block" : "hidden"
    } fixed top-24 z-10  bg-white  dark:text-white dark:bg-gray-900 shadow-lg rounded-lg py-2 w-screen px-1`}
  >
    {links.map((link, index) => (
      <li key={index} className="border-b border-x border-black dark:border-gray-100 ">
        <a
          href={`#${link.href}`}
          onClick={(e) => handleLinkClick(e, link.href)}
          className="font-bold block px-5 py-4 text-black dark:text-white hover:text-red-800 rounded-lg transition-all duration-100"
        >
          {link.text}
        </a>
      </li>
    ))}
  </ul>
    </div>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
