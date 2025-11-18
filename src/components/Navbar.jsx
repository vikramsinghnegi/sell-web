// import React, { useState } from "react";
// import { FaBook, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <FaBook size={28} />
//             <Link to="/" className="font-bold text-xl hover:text-gray-200 transition">
//               PDF Academy
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to="/" className="hover:underline hover:text-gray-200 transition">
//               Home
//             </Link>
//             <Link to="/notes" className="hover:underline hover:text-gray-200 transition">
//               Notes
//             </Link>
//             <Link to="/about" className="hover:underline hover:text-gray-200 transition">
//               About
//             </Link>
//             <Link to="/contact" className="hover:underline hover:text-gray-200 transition">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu}>
//               {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-4 space-y-3">
//           <Link to="/" className="block hover:underline hover:text-gray-200 transition">
//             Home
//           </Link>
//           <Link to="/notes" className="block hover:underline hover:text-gray-200 transition">
//             Notes
//           </Link>
//           <Link to="/about" className="block hover:underline hover:text-gray-200 transition">
//             About
//           </Link>
//           <Link to="/contact" className="block hover:underline hover:text-gray-200 transition">
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaBook, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaBook size={28} />
            <button
              onClick={() => scrollToSection("home")}
              className="font-bold text-xl hover:text-gray-200 transition"
            >
              PDF Academy
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection("home")} className="hover:underline hover:text-gray-200 transition">Home</button>
            <button onClick={() => scrollToSection("notes")} className="hover:underline hover:text-gray-200 transition">Our Notes</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:underline hover:text-gray-200 transition">Pricing</button>
            <button onClick={() => scrollToSection("contact")} className="hover:underline hover:text-gray-200 transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-4 space-y-3">
          <button onClick={() => scrollToSection("home")} className="block hover:underline hover:text-gray-200 transition">Home</button>
          <button onClick={() => scrollToSection("notes")} className="block hover:underline hover:text-gray-200 transition">Our Notes</button>
          <button onClick={() => scrollToSection("pricing")} className="block hover:underline hover:text-gray-200 transition">Pricing</button>
          <button onClick={() => scrollToSection("contact")} className="block hover:underline hover:text-gray-200 transition">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
