
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 border-t border-green-500/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Sina Toprak Güleç | Creative Portfolio for Sina Toprak Güleç
        </p>
      </div>
    </footer>
  );
};

export default Footer;
