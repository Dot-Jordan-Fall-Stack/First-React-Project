import React from 'react';
// استدعينا الهوك عشان نقرأ مصفوفة السلة
import { useCart } from '../Context/CartContext'; 

const Cart = () => {
  const { cart } = useCart();

  // حسبة رياضية سريعة لجلب مجموع الأسعار
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // إذا السلة فاضية، بنعرض هاي الرسالة
  if (cart.length === 0) {
    return <div className="text-center mt-20 text-3xl font-bold text-gray-700">سلتك فارغة 🛒! روح تسوق وتعال.</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">سلة المشتريات</h1>
      
      <div className="flex flex-col gap-4">
        {/* بنلف على المنتجات وبنعرضها بشكل خطوط أفقية */}
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <h2 className="text-lg font-bold text-gray-700 line-clamp-1">{item.title}</h2>
            </div>
            <p className="text-xl font-black text-green-600">${item.price}</p>
          </div>
        ))}
      </div>

      {/* قسم الإجمالي والدفع */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md border text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          المجموع الكلي: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </h3>
        <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition">
          إتمام الطلب ✅
        </button>
      </div>

    </div>
  );
};

export default Cart;