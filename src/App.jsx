import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Preloader variant="curtain" />
        <ScrollToTop />
        <div className="min-h-screen bg-[#f6f6f7] text-[#111113] flex flex-col font-sans selection:bg-[#e11d1d]/15 selection:text-[#111113]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
