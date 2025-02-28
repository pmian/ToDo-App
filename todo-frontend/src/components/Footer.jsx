import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 justify-center items-center py-12 bg-gray-800 border-t border-gray-700 text-white font-bold">
      <h3 className="text-xl md:text-2xl text-center">Contact Us</h3>

      {/* Social Media Links with Icons */}
      <div className="flex flex-wrap justify-center gap-6 text-lg">
        <a
          href="https://www.instagram.com/"
          className="hover:text-yellow-500 transition duration-300 flex items-center gap-2"
          aria-label="Instagram"
        >
          <FaInstagram className="text-2xl" /> Instagram
        </a>
        <a
          href="https://www.facebook.com/"
          className="hover:text-yellow-500 transition duration-300 flex items-center gap-2"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-2xl" /> Facebook
        </a>
        <a
          href="https://x.com/"
          className="hover:text-yellow-500 transition duration-300 flex items-center gap-2"
          aria-label="Twitter"
        >
          <FaTwitter className="text-2xl" /> Twitter
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-sm text-gray-400 text-center mt-4">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>

      {/* Privacy Policy & Terms Links */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mt-4">
        <Link to="/privacy-policy" className="hover:text-yellow-500 transition duration-300">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link to="/terms-and-conditions" className="hover:text-yellow-500 transition duration-300">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
