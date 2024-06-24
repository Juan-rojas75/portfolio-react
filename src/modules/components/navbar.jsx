
// Navbar.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ links }) => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href);
    const offset = isFixed ? 64 : 128; // Ajusta este valor según la altura del navbar
    const additionalOffset = 20; // Margen adicional para evitar que el contenido quede oculto
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset - additionalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

     // Cerrar el menú después de hacer clic en un enlace
     setIsMenuOpen(false);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${isFixed ? 'fixed top-0 bg-white' : 'block bg-transparent'} z-10 w-full py-6 px-8 shadow-md shadow-gray-200 transition-all duration-700`}>
    <div className="sm:mx-20 lg:mx-40 flex flex-row flex-wrap justify-between items-center">
      <a href="#" className="text-black text-xl font-bold font-rubik">
          JuanRC 
        </a>
        <div className="sm:hidden relative">
          <button 
            onClick={handleMenuToggle} 
            className="text-black hover:text-white hover:bg-red-500 rounded-lg px-2 py-1 transition-all duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M20 7H4"/><path d="M20 12H4" opacity=".5"/><path d="M20 17H4"/></g></svg>
          </button>
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full mt-2 right-0 bg-white border border-gray-100 shadow-lg rounded-lg py-2 w-40`}>
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={`#${link.href}`} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-bold block px-4 py-2 text-black hover:text-white hover:bg-red-500 rounded-lg transition-all duration-150"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="hidden sm:flex gap-4 space-x-2">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={`#${link.href}`} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-bold text-black hover:text-white hover:bg-red-500 rounded-xl px-2 py-1 transition-all duration-150"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
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
