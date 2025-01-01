import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Upper Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Section: Contact Us */}
        <div className="bg-gray-700 text-white p-6">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Email: support@example.com</p>
          <p className="mb-2">Phone: +123-456-7890</p>
          <p>Address: 123, Main Street, City, Country</p>
        </div>

        {/* Right Section: Follow Us */}
        <div className="bg-black text-white p-6">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
