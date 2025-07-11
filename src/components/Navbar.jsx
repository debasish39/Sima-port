import React, { useState, useEffect } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaFeatherAlt,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Serials', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 border-b border-white/10"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-wide"
        >
          <FaFeatherAlt className="text-white text-[22px] sm:text-[26px]" />
          <span
            className="text-2xl sm:text-3xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text"
            style={{ fontFamily: 'Lobster, cursive' }}
          >
            Simanchala
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileTap={{ scale: 0.94 }}
              className="text-sm sm:text-base text-stone-300 hover:text-white focus:text-white active:text-white transition duration-200"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex gap-3 text-xl">
            <motion.a
              href="https://facebook.com/simanchala.padhi.7/"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="text-stone-300 hover:text-white focus:text-white transition"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://instagram.com/parbatiputra_sima/"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="text-stone-300 hover:text-white focus:text-white transition"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://youtube.com/@Disgusting-pd4yp"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="text-stone-300 hover:text-white focus:text-white transition"
            >
              <FaYoutube />
            </motion.a>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 text-lg bg-[#050504]/95 py-6 px-4"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleClose}
                whileTap={{ scale: 0.94 }}
                className="text-stone-300 hover:text-white focus:text-white active:text-white transition duration-200"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-5 text-2xl pt-3">
              <motion.a
                href="https://facebook.com/simanchala.padhi.7/"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://instagram.com/parbatiputra_sima/"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://youtube.com/@Disgusting-pd4yp"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
