import React, { createContext, useState, useContext } from 'react';

// 1. إنشاء الـ Context
export const CartContext = createContext();

// 2. إنشاء الـ Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("تمت إضافة المنتج للسلة بنجاح! 🛒");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};