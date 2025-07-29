// // src/components/Navbar.tsx

// import React, { useState } from 'react';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // --- Add the Blog link to this array ---
//   const navLinks = [
//     { href: '#about', label: 'About' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#skills', label: 'Skills' },
//     { href: '/blog', label: 'Blog' }, // <-- Added Blog link here
//     { href: '#contact', label: 'Contact' },
//   ];
//   // --- End modification ---

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-20 top-0"> {/* Increased z-index to be above particles */}
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//         <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
//           Your Name
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               // Optional: Add logic here if you need different styling/behavior for internal vs external links
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//             >
//               {link.label}
//             </a>
//           ))}
//           {/* Optional: Add a theme toggle button here */}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             type="button"
//             className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300"
//             aria-label="toggle menu"
//           >
//             {/* Hamburger Icon */}
//             <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//               <path
//                 fillRule="evenodd"
//                 d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:hidden bg-white dark:bg-gray-800 px-6 pb-3 absolute w-full shadow-md border-t border-gray-200 dark:border-gray-700`} // Added absolute positioning and styling for dropdown
//       >
//         {navLinks.map((link) => (
//            <a
//              key={link.href}
//              href={link.href}
//              onClick={() => setIsOpen(false)} // Close menu on click
//              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
//            >
//              {link.label}
//            </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/#about', label: 'About', isHashLink: true },
    { href: '/#projects', label: 'Projects', isHashLink: true },
    { href: '/#skills', label: 'Skills', isHashLink: true },
    { href: '/blog', label: 'Blog', isHashLink: false },
    { href: '/#contact', label: 'Contact', isHashLink: true },
  ];

  const handleNavClick = (href: string, isHashLink: boolean) => {
    setIsOpen(false);

    if (isHashLink && location.pathname === '/') {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-20 top-0">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Your Name
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => {
                if (link.isHashLink && location.pathname === '/') {
                  e.preventDefault();
                }
                handleNavClick(link.href, link.isHashLink);
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white dark:bg-gray-800 px-6 pb-3 absolute w-full shadow-md border-t border-gray-200 dark:border-gray-700`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={(e) => {
              if (link.isHashLink && location.pathname === '/') {
                e.preventDefault();
              }
              handleNavClick(link.href, link.isHashLink);
            }}
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;