import React, { useState, useEffect } from "react";
import axios from "axios";
// 1. استدعينا مكون الكرت
import ProductCard from "../components/ProductCard"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("صار خطأ بجلب البيانات:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-2xl font-bold mt-20 text-blue-600">جاري تحميل المنتجات... ⏳</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">منتجاتنا المميزة</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 2. اللفة صارت أنظف، بنستدعي الكرت وبنبعتله المنتج (product={product}) كـ Prop */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;