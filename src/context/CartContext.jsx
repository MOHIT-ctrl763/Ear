import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('rocko_cart');
      return saved ? JSON.parse(saved) : [
        // default 1 item for great immediate UX
      ];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('rocko_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product, quantity = 1, selectedColor = null) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.selectedColor === (selectedColor || product.color));
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, {
          ...product,
          quantity,
          selectedColor: selectedColor || product.color
        }];
      }
    });
    showToast(`Added ${product.name} to cart!`);
  };

  const updateQuantity = (id, color, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id && item.selectedColor === color) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (id, color) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedColor === color)));
    showToast('Item removed from cart');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartCount,
      cartSubtotal,
      toastMessage
    }}>
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12121d] border border-purple-500/40 text-white px-5 py-3 rounded-xl shadow-2xl shadow-purple-900/30 flex items-center gap-3 animate-fade-in backdrop-blur-xl">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
