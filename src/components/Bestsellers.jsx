import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowRight, ShoppingCart, Sparkles, Check } from 'lucide-react';

const Bestsellers = () => {
  const { addToCart } = useCart();

  return (
    <section id="bestsellers" className="py-16 sm:py-24 bg-[#f6f6f7] relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-12 text-center sm:text-left">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e11d1d]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-500 uppercase">
                Our Bestsellers
              </span>
            </div>

            <h2 className="text-2xl sm:text-[34px] font-extrabold text-[#111113] tracking-[-0.025em] font-display">
              Discover Our Earbuds
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-md">
              Precision-tuned wireless earbuds built for clarity, comfort, and daily reliability.
            </p>
          </div>

          <Link
            to="/products"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-300 text-[#111113] text-xs font-bold tracking-wider uppercase hover:border-[#111113] transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="luxury-card group relative rounded-2xl p-4 flex flex-col justify-between"
            >
              {product.badge && (
                <div className="absolute top-3 left-3 z-20">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide text-white shadow-sm ${product.badgeColor}`}>
                    <span>{product.badgeIcon}</span>
                    <span>{product.badge}</span>
                  </span>
                </div>
              )}

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-[#121215] border border-zinc-200/80 flex items-center justify-center p-3">
                <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="text-left px-1 mb-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[15px] font-bold text-[#111113] hover:text-[#e11d1d] transition-colors leading-snug">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-[12px] text-zinc-500 font-normal mt-0.5 mb-3">
                  {product.tagline}
                </p>

                <div className="flex items-baseline gap-2.5">
                  <span className="text-lg font-extrabold text-[#111113]">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => addToCart(product, 1)}
                className="w-full py-2.5 px-4 rounded-full bg-[#111113] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#27272a] flex items-center justify-center gap-2 transition-colors active:scale-95 cursor-pointer"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-white" />
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bestsellers;
