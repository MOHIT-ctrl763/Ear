import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CheckCircle2, CreditCard, QrCode, Truck, ArrowLeft, Sparkles, Award } from 'lucide-react';

const CheckoutPage = () => {
  const { cartItems, cartSubtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    engravingNotes: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newId = 'ROCKO-VIP-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newId);
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-[#e11d1d] mb-6 transition-colors uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Bag</span>
        </Link>

        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111113] font-display">
            White-Glove Concierge Checkout
          </h1>
          <span className="text-xs text-[#e11d1d] font-bold uppercase tracking-widest hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            256-Bit Encrypted Atelier Portal
          </span>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Delivery & Payment Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Customer & Shipping Address */}
            <div className="luxury-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-sm font-bold text-[#111113] mb-4 flex items-center gap-2 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#e11d1d] text-white text-xs font-black flex items-center justify-center">1</span>
                <span>Recipient & Delivery Address</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. Aryan"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Singhania"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Email for VIP Dispatch Updates *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="aryan@luxury.com"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Contact Number for Courier Handover *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Residence / Penthouse Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Villa / Suite No., Tower, Street"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Mumbai"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Postal PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="6-digit postal code"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="luxury-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-sm font-bold text-[#111113] mb-4 flex items-center gap-2 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-full bg-[#e11d1d] text-white text-xs font-black flex items-center justify-center">2</span>
                <span>Select Luxury Settlement Protocol</span>
              </h3>

              <div className="space-y-3">
                {/* UPI */}
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'bg-[#e11d1d]/10 border-[#e11d1d]' : 'bg-[#f6f6f7] border-zinc-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="accent-[#e11d1d]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#111113] block">Instant UPI & QR (PhonePe / GPay / Paytm)</span>
                      <span className="text-[11px] text-zinc-500">Zero surcharge, instant priority atelier dispatch</span>
                    </div>
                  </div>
                  <QrCode className="w-5 h-5 text-emerald-400" />
                </label>

                {/* Card */}
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'bg-[#e11d1d]/10 border-[#e11d1d]' : 'bg-[#f6f6f7] border-zinc-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-[#e11d1d]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#111113] block">Credit / Debit Card (Amex, Visa, Mastercard)</span>
                      <span className="text-[11px] text-zinc-500">Complimentary 0% Interest EMI available</span>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-[#e11d1d]" />
                </label>

                {/* COD */}
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'bg-[#e11d1d]/10 border-[#e11d1d]' : 'bg-[#f6f6f7] border-zinc-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-[#e11d1d]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#111113] block">Cash on White-Glove Handover</span>
                      <span className="text-[11px] text-zinc-500">Inspect presentation box upon courier arrival</span>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-zinc-600" />
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Review */}
          <div className="lg:col-span-5">
            <div className="luxury-card rounded-2xl p-6 sticky top-32">
              <h3 className="text-sm font-bold text-[#111113] mb-4 pb-4 border-b border-zinc-200 font-display uppercase tracking-wider">
                Order Review ({cartItems.length})
              </h3>

              <div className="max-h-60 overflow-y-auto space-y-3 mb-5 pr-1 divide-y divide-zinc-200">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="pt-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3 text-left">
                      <img src={item.highResImage || item.image} alt={item.name} className="w-11 h-11 object-contain rounded bg-[#f6f6f7] p-1 border border-zinc-200" />
                      <div>
                        <span className="font-bold text-[#111113] block">{item.name}</span>
                        <span className="text-[10px] text-zinc-500">Qty: {item.quantity} • {item.selectedColor}</span>
                      </div>
                    </div>
                    <span className="font-bold text-[#111113]">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="border-t border-zinc-200 pt-4 space-y-2.5 text-xs text-left">
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Subtotal</span>
                  <span className="text-[#111113] font-semibold">₹{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500">
                  <span>White-Glove Shipping</span>
                  <span className="text-[#e11d1d] font-bold">COMPLIMENTARY</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Bespoke Engraving & Box</span>
                  <span className="text-zinc-600 font-medium">INCLUDED</span>
                </div>
                <div className="flex items-center justify-between text-base font-black text-[#111113] pt-3 border-t border-zinc-200">
                  <span>Total Payable</span>
                  <span className="text-[#111113]">₹{cartSubtotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-gold-sheen w-full mt-6 py-4 px-6 rounded-full bg-gradient-to-r from-[#e11d1d] to-[#b91c1c] hover:from-[#f5f4f0] hover:to-[#e11d1d] text-black text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#e11d1d]/25"
              >
                Confirm Acquisition
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-[#e11d1d]" />
                <span>3-Year Warranty & Certificate Dispatched with Order</span>
              </div>
            </div>
          </div>

        </form>

        {/* Order Success Modal */}
        {orderPlaced && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-5">
            <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[#e11d1d]/50 text-center shadow-2xl animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#e11d1d]/20 text-[#e11d1d] flex items-center justify-center mx-auto mb-5 border border-[#e11d1d]/40">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#111113] mb-2 font-display">Bespoke Order Confirmed</h2>
              <p className="text-xs text-[#e11d1d] font-mono font-bold mb-4 tracking-widest">
                ACQUISITION ID: {orderId}
              </p>
              <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                Thank you for acquiring rocKo Atelier acoustics. Your serial-numbered creation is undergoing final acoustic testing and white-glove packaging. Dispatch confirmation sent to <span className="text-[#111113] font-semibold">{formData.email || 'your email'}</span>.
              </p>
              <button
                onClick={() => navigate('/')}
                className="btn-gold-sheen w-full py-3.5 px-6 rounded-full bg-[#111113] text-white text-xs font-extrabold tracking-wider uppercase hover:bg-[#27272a] transition-colors shadow-lg"
              >
                Return to Atelier
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutPage;
