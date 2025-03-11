import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GlobalTrade India. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;