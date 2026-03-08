import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  // 1. تعريف State لحفظ المنتجات اللي رح تيجي من الـ API [cite: 178]
  const [products, setProducts] = useState([]);
  
  // State ثاني عشان نظهر رسالة "جاري التحميل" للمستخدم
  const [loading, setLoading] = useState(true);

  // 2. استخدام useEffect عشان نجيب البيانات أول ما الصفحة تفتح (مرة واحدة بس) [cite: 234-235, 240-242]
  useEffect(() => {
    // إرسال طلب GET للـ API [cite: 278-279]
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        // إذا نجح الطلب، بنحفظ البيانات جوا الـ State تبع المنتجات [cite: 280-281, 322]
        setProducts(response.data);
        setLoading(false); // بنوقف شاشة التحميل
      })
      .catch((err) => {
        // إذا صار خطأ بنطبعه بالكونسول [cite: 284-286, 323]
        console.error("صار خطأ بجلب البيانات:", err);
        setLoading(false);
      });
  }, []); // القوسين الفاضيات يعني نفذ الكود مرة وحدة بس [cite: 240-243]

  // إذا كانت البيانات لسا بتحمل، بنعرض هاي الشاشة
  if (loading) {
    return <div className="text-center text-2xl font-bold mt-20 text-blue-600">جاري تحميل المنتجات... ⏳</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">منتجاتنا المميزة</h1>
      
      {/* شبكة (Grid) لعرض المنتجات جنب بعض في الشاشات الكبيرة */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* 3. نلف على مصفوفة المنتجات باستخدام map ونعرض كل منتج جوا كرت [cite: 97-98, 248-249] */}
        {products.map((product) => (
          
          // ضروري جداً نعطي كل عنصر key فريد (زي الـ ID) عشان React يميزهم [cite: 99]
          <div key={product.id} className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition flex flex-col items-center text-center">
            
            {/* صورة المنتج */}
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            
            {/* اسم المنتج (بنقص الاسم الطويل عشان ما يخرب الشكل) */}
            <h2 className="text-lg font-bold text-gray-700 mb-2 line-clamp-2">{product.title}</h2>
            
            {/* سعر المنتج */}
            <p className="text-xl font-black text-green-600 mt-auto">${product.price}</p>
            
            {/* زر وهمي حالياً */}
            <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
              عرض التفاصيل
            </button>
            
          </div>
          
        ))}

      </div>
    </div>
  );
};

export default Products;