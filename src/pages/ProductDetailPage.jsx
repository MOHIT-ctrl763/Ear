import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { 
  Star, ShoppingBag, ShieldCheck, Zap, 
  Check, ArrowLeft, Truck, RefreshCw, Award, Sparkles, Box 
} from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id) || products[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [engravingText, setEngravingText] = useState('');
  const [wantsEngraving, setWantsEngraving] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    navigate('/checkout');
  };

  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-28 pb-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-[#e11d1d] mb-8 transition-colors uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Collection</span>
        </Link>

        {/* Product Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
          
          {/* Left Column: Image Showcase Box */}
          <div className="lg:col-span-6">
            <div className="sticky top-32">
              <div className="luxury-card relative aspect-square rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-zinc-200 shadow-2xl">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-radial-gradient from-[#e11d1d]/[0.05] to-transparent pointer-events-none" />

                {product.badge && (
                  <div
                    className={`absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg ${product.badgeColor}`}
                  >
                    <span>{product.badgeIcon}</span>
                    <span>{product.badge}</span>
                  </div>
                )}

                <img
                  src={product.highResImage || product.image}
                  alt={product.name}
                  className="max-h-[380px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Luxury Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 text-center">
                  <Truck className="w-4 h-4 text-[#e11d1d] mx-auto mb-1.5" />
                  <span className="text-[11px] text-zinc-800 block font-bold">White-Glove Delivery</span>
                  <span className="text-[10px] text-zinc-500">Complimentary 48H</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 text-center">
                  <RefreshCw className="w-4 h-4 text-[#e11d1d] mx-auto mb-1.5" />
                  <span className="text-[11px] text-zinc-800 block font-bold">In-Home Audition</span>
                  <span className="text-[10px] text-zinc-500">30 Days Risk-Free</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 text-center">
                  <Award className="w-4 h-4 text-[#e11d1d] mx-auto mb-1.5" />
                  <span className="text-[11px] text-zinc-800 block font-bold">3-Year Guarantee</span>
                  <span className="text-[10px] text-zinc-500">Concierge Swap</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs & Custom Engraving */}
          <div className="lg:col-span-6 text-left">
            
            {/* Category / Series Label */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.24em] text-[#e11d1d] uppercase">
                {product.category}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-xs text-zinc-500 font-mono">
                {product.edition}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#111113] mt-1 mb-2 font-display">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 mb-4 leading-relaxed font-normal">
              {product.tagline}
            </p>

            {/* Rating & Availability */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-200">
              <div className="flex items-center gap-1.5 bg-[#e11d1d]/15 border border-[#e11d1d]/30 px-3 py-1 rounded-full text-[#111113] text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-[#e11d1d] text-[#e11d1d]" />
                <span>{product.rating}</span>
              </div>
              <span className="text-xs text-zinc-500">
                {product.reviewsCount.toLocaleString()} Verified Atelier Auditions
              </span>
              <span className="text-xs text-emerald-400 font-bold ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                In Stock & Hand-Inspected
              </span>
            </div>

            {/* Price Box */}
            <div className="luxury-card rounded-2xl p-6 mb-6 border border-zinc-200">
              <span className="text-[10.5px] font-bold text-[#e11d1d] uppercase tracking-wider block mb-1">
                Atelier Launch Acquisition
              </span>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-[#111113]">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-base text-zinc-400 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()} ({product.discount})
                </span>
              </div>
              <p className="text-xs text-zinc-500">
                Includes Bespoke Leather Travel Sleeve & 24K Gold-Pin Cable. 0% EMI from ₹{(product.price / 3).toFixed(0)}/mo.
              </p>
            </div>

            {/* Color Swatch Selector */}
            <div className="mb-6">
              <span className="text-xs font-bold text-zinc-600 block mb-2.5 uppercase tracking-wider">
                Bespoke Finish: <span className="text-[#111113] font-bold">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i === 0 ? product.color : `Finish Variant ${i + 1}`)}
                    className="w-8 h-8 rounded-full border-2 border-white/30 hover:border-[#e11d1d] transition-all flex items-center justify-center shadow-md"
                    style={{ backgroundColor: c }}
                  >
                    {selectedColor.includes(i === 0 ? product.color : `${i + 1}`) && (
                      <Check className="w-3.5 h-3.5 text-[#e11d1d] stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Laser Engraving (Luxury Feature) */}
            <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-zinc-200">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wantsEngraving}
                    onChange={(e) => setWantsEngraving(e.target.checked)}
                    className="accent-[#e11d1d] rounded"
                  />
                  <span className="text-xs font-bold text-[#111113] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#e11d1d]" />
                    Add Complimentary Bespoke Engraving
                  </span>
                </label>
                <span className="text-[10px] font-mono text-[#e11d1d] font-bold">FREE</span>
              </div>
              {wantsEngraving && (
                <input
                  type="text"
                  maxLength={16}
                  placeholder="Enter initials or name (up to 16 chars)"
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  className="w-full mt-2 bg-[#f6f6f7] border border-zinc-300 rounded-xl px-3 py-2 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                />
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-4">
                {/* Quantity adjuster */}
                <div className="flex items-center border border-white/20 bg-zinc-100 rounded-full px-3.5 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-zinc-500 hover:text-[#111113] px-2 text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold px-3 text-[#111113]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-zinc-500 hover:text-[#111113] px-2 text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="btn-gold-sheen flex-1 py-3.5 px-6 rounded-full bg-[#111113] text-white text-xs font-extrabold tracking-wider uppercase hover:bg-[#27272a] transition-colors shadow-lg active:scale-98 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              </div>

              {/* Direct Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="btn-gold-sheen w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#e11d1d] to-[#b91c1c] hover:from-[#f5f4f0] hover:to-[#e11d1d] text-black text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#e11d1d]/25 active:scale-98"
              >
                Instant Concierge Acquisition
              </button>
            </div>

            {/* Key Acoustic Features */}
            <div className="border-t border-zinc-200 pt-6 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e11d1d] mb-4">
                Acoustic Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600">
                    <Check className="w-4 h-4 text-[#e11d1d] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In The Box Bespoke Presentation */}
            {product.inTheBox && (
              <div className="border-t border-zinc-200 pt-6 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#111113] mb-3 flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#e11d1d]" />
                  <span>Atelier Presentation Box Contents</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-500">
                  {product.inTheBox.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#e11d1d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specifications Table */}
            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111113] mb-3">
                Laboratory Specifications
              </h4>
              <div className="divide-y divide-zinc-200 rounded-2xl bg-white border border-zinc-200 overflow-hidden text-xs">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3.5">
                    <span className="text-zinc-500">{key}</span>
                    <span className="font-semibold text-[#111113] font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
