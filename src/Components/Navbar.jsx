import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // ضفنا w-full عشان ياخذ عرض الشاشة كامل
    <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full">
      
      <h1 className="text-2xl font-extrabold text-blue-600">
        <Link to="/">متجري 🛒</Link>
      </h1>

      <div className="flex gap-6 font-semibold">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          الرئيسية
        </Link>
        <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">
          المنتجات
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;