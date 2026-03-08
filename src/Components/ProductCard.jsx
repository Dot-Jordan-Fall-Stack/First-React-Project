import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        {product.description.substring(0, 100)}...
      </p>
      <p className="text-xl font-bold text-blue-600">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;