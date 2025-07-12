import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-stone-300 px-4 sm:px-6 py-12 ">
      <hr className="mb-8 border-stone-100" />

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">Simanchala Padhi</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Passionate Odia serial actor bringing stories to life through performance and emotion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Serials</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-semibold mb-3 text-white">Follow Me</h4>
          <div className="flex gap-4 justify-center sm:justify-start flex-wrap">
            <a
              href="https://facebook.com/simanchala.padhi.7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/parbatiputra_sima/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Disgusting-pd4yp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/918895853497"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-stone-500 border-t border-stone-700 pt-4">
        © {new Date().getFullYear()} Simanchala Padhi. All rights reserved.
      </div>
    </footer>
  );
}
