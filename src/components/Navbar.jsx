import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaFeatherAlt,
  FaHome,
  FaUser,
  FaFilm,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#hero", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Serials", href: "#projects", icon: <FaFilm /> },
    { name: "Gallery", href: "#gallery", icon: <FaImages /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-black/70 backdrop-blur-md border-b border-white/10 text-white`}
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <FaFeatherAlt className="text-white" />
            <span
              className="text-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Simanchala
            </span>
          </a>

          <div className="flex items-center gap-8">
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
              <a
                href="https://facebook.com/simanchala.padhi.7/"
                target="_blank"
                className="text-stone-300 hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/parbatiputra_sima/"
                target="_blank"
                className="text-stone-300 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@Disgusting-pd4yp"
                target="_blank"
                className="text-stone-300 hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="flex pt-3 items-center justify-between gap-6 md:hidden p-3 bg-black/60 backdrop-blur-md border-t border-white/10 ">
         <a
            href="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <FaFeatherAlt className="text-white" />
            <span
              className="text-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Simanchala
            </span>
          </a>
 <div className="flex gap-3 text-xl">
              <a
                href="https://facebook.com/simanchala.padhi.7/"
                target="_blank"
                className="text-stone-300 hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/parbatiputra_sima/"
                target="_blank"
                className="text-stone-300 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@Disgusting-pd4yp"
                target="_blank"
                className="text-stone-300 hover:text-white"
              >
                <FaYoutube />
              </a>
            </div></div>
      <div className={ `fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-around items-center py-2 md:hidden z-50 transition-transform duration-500 ${showNavbar?'translate-y-0':'translate-y-full'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-stone-300 hover:text-white text-xs flex flex-col items-center"
          >
            <span className="text-lg">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}
