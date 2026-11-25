import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, Sparkles } from 'lucide-react';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartSubtotal } = useCart();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const applyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.trim().toUpperCase() === 'ROCKO20') {
      setDiscountPercent(0.20);
      setPromoSuccess('Promo code ROCKO20 applied! 20% Privilege Discount');
    } else if (promoCode.trim().toUpperCase() === 'VIP500') {
      setDiscountPercent(0.15);
      setPromoSuccess('VIP Privilege applied! 15% OFF');
    } else {
      setPromoError('Invalid coupon code. Try ROCKO20');
    }
  };

  const discountAmount = Math.round(cartSubtotal * discountPercent);
  const shipping = 0; // Always complimentary white glove delivery
  const grandTotal = Math.max(0, cartSubtotal - discountAmount + shipping);

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-36 pb-20">
        <div className="max-w-[700px] mx-auto px-5 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 flex items-center justify-center mx-auto mb-6 text-[#e11d1d] shadow-xl">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-[#111113] mb-3 font-display">
            Your Atelier Bag is Empty
          </h1>
          <p className="text-sm text-zinc-500 mb-8 max-w-sm mx-auto">
            Discover our hand-tuned titanium and bio-cellulose earbuds collection, featuring complimentary white-glove concierge shipping.
          </p>
          <Link
            to="/products"
            className="btn-gold-sheen inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111113] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#27272a] transition-colors shadow-lg"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-32 pb-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
          <h1 className="text-2xl sm:text-4xl font-black text-[#111113] font-display">
            Atelier Shopping Bag ({cartItems.length} {cartItems.length === 1 ? 'Creation' : 'Creations'})
          </h1>
          <span className="text-xs text-[#e11d1d] uppercase font-bold tracking-widest hidden sm:inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            White-Glove Delivery Included
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}`}
                className="luxury-card p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-5 transition-all"
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#f6f6f7] border border-zinc-200 p-2 flex items-center justify-center shrink-0">
                  <img
                    src={item.highResImage || item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[10px] font-mono text-[#e11d1d] uppercase tracking-wider block mb-0.5">
                    {item.edition || item.category}
                  </span>
                  <Link to={`/product/${item.id}`} className="hover:text-[#e11d1d] transition-colors">
                    <h3 className="text-base font-bold text-[#111113] mb-1">{item.name}</h3>
                  </Link>
                  <p className="text-xs text-zinc-500 mb-2">{item.tagline}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.05] text-zinc-600 border border-zinc-200">
                      Finish: {item.selectedColor}
                    </span>
                    <span className="text-[11px] text-[#e11d1d] font-medium">
                      ✓ Complimentary Atelier Box
                    </span>
                  </div>
                </div>

                {/* Price & Quantity Controls */}
                <div className="flex items-center gap-6 sm:gap-8">
                  {/* Quantity */}
                  <div className="flex items-center border border-white/20 bg-zinc-100 rounded-full px-2.5 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, -1)}
                      className="text-zinc-500 hover:text-[#111113] px-1.5 text-sm font-bold"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold px-2.5 text-[#111113]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedColor, 1)}
                      className="text-zinc-500 hover:text-[#111113] px-1.5 text-sm font-bold"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Total line price */}
                  <div className="text-right min-w-[85px]">
                    <span className="block text-base font-black text-[#111113]">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <span className="text-[11px] text-zinc-400 line-through">
                      ₹{(item.originalPrice * item.quantity).toLocaleString()}
                    </span>
                  </div>

                  {/* Remove item */}
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedColor)}
                    className="text-zinc-400 hover:text-red-400 p-2 transition-colors"
                    aria-label="Remove creation"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Cart helper trust note */}
            <div className="p-4 rounded-2xl bg-white border border-[#e11d1d]/25 flex items-center gap-3 text-xs text-zinc-600">
              <ShieldCheck className="w-5 h-5 text-[#e11d1d] shrink-0" />
              <span>All acquisitions qualify for 3-Year Concierge Guarantee, Free Engraving, and 30-Day In-Home Acoustic Trial.</span>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <div className="luxury-card rounded-2xl p-6 sticky top-32">
              <h3 className="text-base font-bold text-[#111113] mb-4 pb-4 border-b border-zinc-200 font-display">
                Acquisition Summary
              </h3>

              {/* Promo Form */}
              <form onSubmit={applyPromo} className="mb-5">
                <span className="text-[11px] text-[#e11d1d] uppercase tracking-wider block mb-1.5 font-bold">
                  Privilege Code (Use: ROCKO20)
                </span>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Privilege Code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl py-2 pl-9 pr-3 text-xs text-[#111113] uppercase focus:outline-none focus:border-[#e11d1d]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-[#111113] text-xs font-semibold"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-red-400 mt-1.5">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-400 mt-1.5">{promoSuccess}</p>}
              </form>

              {/* Cost breakdown */}
              <div className="space-y-2.5 text-xs text-zinc-600 pb-5 border-b border-zinc-200">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#111113] font-semibold">₹{cartSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex items-center justify-between text-emerald-400 font-semibold">
                    <span>Privilege Discount</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span>White-Glove Shipping</span>
                  <span className="text-[#e11d1d] font-bold">COMPLIMENTARY</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Bespoke Presentation Box</span>
                  <span className="text-zinc-600 font-medium">INCLUDED</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="flex items-center justify-between py-4 mb-5">
                <span className="text-sm font-bold text-[#111113]">Total Payable</span>
                <span className="text-2xl font-black text-[#111113]">₹{grandTotal.toLocaleString()}</span>
              </div>

              {/* Proceed to Checkout button */}
              <button
                onClick={() => navigate('/checkout')}
                className="btn-gold-sheen w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#e11d1d] to-[#b91c1c] hover:from-[#f5f4f0] hover:to-[#e11d1d] text-black text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#e11d1d]/25 flex items-center justify-center gap-2"
              >
                <span>Proceed to Concierge Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/products"
                className="block text-center text-xs text-zinc-500 hover:text-[#111113] mt-4 underline"
              >
                Continue Exploring Collection
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CartPage;
