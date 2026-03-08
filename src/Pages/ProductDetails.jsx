import React, { useState, useEffect } from 'react';
// استدعينا الهوك اللي بيقرأ الرابط [cite: 539]
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const ProductDetails = () => {
  // 1. استخراج الـ ID من الرابط [cite: 557-558]
  const { id } = useParams(); 
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. ليش حطينا الـ id جوا مصفوفة الـ useEffect؟
  // عشان نحكي لـ React: "لو المستخدم كان جوا منتج رقم 1، وضغط على منتج رقم 2، ارجع نفذ الكود وجيب بيانات المنتج الجديد" [cite: 229]
  useEffect(() => {
    // لاحظ كيف دمجنا الـ ID بالرابط تبع الـ API
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-20 text-2xl font-bold">جاري تحميل التفاصيل... ⏳</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-md">
        
        {/* صورة المنتج */}
        <div className="w-full md:w-1/3">
          <img src={product.image} alt={product.title} className="w-full h-80 object-contain" />
        </div>
        
        {/* تفاصيل المنتج */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <span className="text-2xl font-black text-green-600 mb-6">${product.price}</span>
          
          <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition w-full md:w-auto">
            إضافة إلى السلة 🛒
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;