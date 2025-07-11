import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFeatherAlt } from 'react-icons/fa'; // or any icon you like

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Serials', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-transparent text-white z-50 shadow-md"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
<a href="/" className="flex items-center gap-2 text-stone-100 text-xl sm:text-2xl tracking-wide">
  <FaFeatherAlt className="text-white text-2xl" />
  <span
    className="text-3xl sm:text-4xl font-normal bg-gradient-to-r from-gray-400 via-gray-500 to-gray-500 text-transparent bg-clip-text"
    style={{ fontFamily: "Lobster, cursive" }} // missing single quotes can break it

  >
    Simanchala
  </span>
</a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-white transition"
              onClick={handleClose}
            >
              {link.name}
            </a>
          ))}
          {/* Social Icons */}
          <div className="flex gap-3 text-lg">
            <a href="https://facebook.com/simanchala.padhi.7/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="https://instagram.com/parbatiputra_sima/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="https://youtube.com/@Disgusting-pd4yp" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-2xl cursor-pointer" onClick={handleToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-transparent py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleClose}
              className="text-stone-300 text-lg hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 text-xl pt-2">
            <a href="https://facebook.com/simanchala.padhi.7/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/parbatiputra_sima/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@Disgusting-pd4yp" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
