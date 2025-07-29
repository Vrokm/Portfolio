import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`bg-gray-200 dark:bg-gray-800 text-center py-6 ${className}`}>
      <div className="container mx-auto px-6">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Your Name. All rights reserved.
        </p>
        {/* Optional: Add social media links here */}
        {/* <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">GH</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">LI</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;