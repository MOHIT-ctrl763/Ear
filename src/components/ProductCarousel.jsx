import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const current = products[activeIndex];

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#0c0c10] via-[#121216] to-[#0c0c10] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Section Header with Carousel Indicators */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.24em] text-purple-400 uppercase">
              INTERACTIVE 360° SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Explore The 4 rocKo Models
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <button
              onClick={prevSlide}
              aria-label="Previous Earbud"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] text-white flex items-center justify-center hover:bg-[#e11d1d] hover:border-purple-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-gray-400 font-medium">
              0{activeIndex + 1} / 0{products.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next Earbud"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] text-white flex items-center justify-center hover:bg-[#e11d1d] hover:border-purple-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Slide */}
        <div className="relative rounded-3xl bg-[#0D0D18] border border-white/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e11d1d]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Details */}
            <div className="lg:col-span-6 z-10 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wider uppercase border border-white/10 bg-white/5 text-purple-300">
                <span>{current.badgeIcon}</span>
                <span>{current.badge} Edition</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
                {current.name}
              </h3>
              <p className="text-sm font-medium text-purple-400 mb-4">
                {current.tagline}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-lg">
                {current.description}
              </p>

              {/* Quick Specs Pill */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-[11px] text-gray-400">Driver</span>
                  <span className="text-xs font-bold text-white">{current.driver}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-[11px] text-gray-400">Battery</span>
                  <span className="text-xs font-bold text-white">{current.battery}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-[11px] text-gray-400">Wireless Tech</span>
                  <span className="text-xs font-bold text-white">{current.bluetooth}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-[11px] text-gray-400">Noise Control</span>
                  <span className="text-xs font-bold text-white">{current.anc}</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center gap-5">
                <div>
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Special Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">₹{current.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">₹{current.originalPrice.toLocaleString()}</span>
                    <span className="text-xs font-bold text-emerald-400">{current.discount}</span>
                  </div>
                </div>

                <Link
                  to={`/product/${current.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e11d1d] hover:bg-purple-500 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-red-950/50"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Big Image Presentation */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-2xl bg-gradient-to-b from-[#111122] to-[#0a0a14] border border-white/10 p-6 flex items-center justify-center shadow-inner group">
                <img
                  src={current.image}
                  alt={current.name}
                  key={current.id}
                  className="max-h-[300px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-all duration-500 transform group-hover:scale-105"
                />

                {/* Thumbnail Dots selector */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                  {products.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === idx ? 'w-6 bg-purple-500' : 'w-2 bg-white/30'
                      }`}
                      aria-label={`Select ${p.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductCarousel;
