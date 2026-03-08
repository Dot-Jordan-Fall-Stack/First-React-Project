import React from 'react';
import { Link } from 'react-router-dom';
// 1. استدعينا الهوك تبع السلة
import { useCart } from '../Context/CartContext'; 

const Navbar = () => {
  // 2. سحبنا مصفوفة السلة بس (ما بدنا دالة الإضافة هون)
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full">
      
      <h1 className="text-2xl font-extrabold text-blue-600">
        <Link to="/">متجري 🛒</Link>
      </h1>

      <div className="flex gap-6 font-semibold items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          الرئيسية
        </Link>
        
        <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">
          المنتجات
        </Link>

        {/* 3. ضفنا زر للسلة، وبنعرض طول المصفوفة (عدد المنتجات) جواه */}
        <Link to="/cart" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          السلة ({cart.length})
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;