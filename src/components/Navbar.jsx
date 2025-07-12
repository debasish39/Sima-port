import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaFeatherAlt,
} from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY <= lastScrollY || currentY < 60);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Serials', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-black/70 backdrop-blur-md border-b border-white/10 text-white`}
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2 text-xl font-semibold">
          <FaFeatherAlt className="text-white" />
          <span className="text-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text" style={{ fontFamily: 'Lobster, cursive' }}>
            Simanchala
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-white transition duration-200"
              data-aos="fade-down"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-3 text-xl">
            <a href="https://facebook.com/simanchala.padhi.7/" target="_blank" className="text-stone-300 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/parbatiputra_sima/" target="_blank" className="text-stone-300 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@Disgusting-pd4yp" target="_blank" className="text-stone-300 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (basic fade-in via Tailwind) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-[#050504]/95 py-6 px-4 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-5 text-2xl pt-3">
            <a href="https://facebook.com/simanchala.padhi.7/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/parbatiputra_sima/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@Disgusting-pd4yp" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
