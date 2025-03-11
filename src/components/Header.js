import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg bg-red-500">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GlobalTrade India</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-200">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;