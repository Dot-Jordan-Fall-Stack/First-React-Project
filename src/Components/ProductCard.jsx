import React from 'react';
import { Link } from 'react-router-dom';

// استقبلنا كلمة { product } بين الأقواس، هاي هي الـ Props!
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition flex flex-col items-center text-center">
      
      {/* صرنا نقرأ البيانات من الـ product اللي استلمناه */}
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
      
      <h2 className="text-lg font-bold text-gray-700 mb-2 line-clamp-2">
        {product.title}
      </h2>
      
      <p className="text-xl font-black text-green-600 mt-auto">
        ${product.price}
      </p>
      
      <Link 
        to={`/product/${product.id}`} 
        className="mt-4 block w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        عرض التفاصيل
      </Link>
      
    </div>
  );
};

export default ProductCard;