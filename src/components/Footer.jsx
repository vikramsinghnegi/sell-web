import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link for routing

const Footer = () => {
  return (
    <footer  id="contact" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 PDF Academy. All rights reserved.</p>

        {/* Links to pages */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
          <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
        </div>

        {/* Social icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
