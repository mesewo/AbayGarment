import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Abay <span className="text-yellow-500">Garment</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Abay Garment is dedicated to providing high-quality garments inspired by the beauty and flow of the Abay River.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white hover:bg-yellow-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white hover:bg-yellow-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white hover:bg-yellow-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-yellow-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-yellow-500 inline-block">
              Contact Us
            </h3>
            <div className="flex items-start mb-4">
              <FaMapMarkerAlt className="text-yellow-500 mr-3 mt-1" />
              <span className="text-gray-400">123 Abay Street, Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-start mb-4">
              <FaPhone className="text-yellow-500 mr-3 mt-1" />
              <span className="text-gray-400">+251 123 456 789</span>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-yellow-500 mr-3 mt-1" />
              <span className="text-gray-400">info@abaygarment.com</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-800 pt-4 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Abay Garment. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;