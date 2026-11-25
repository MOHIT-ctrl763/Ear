import React, { useState } from 'react';
import { Mail, Phone, ShieldCheck, HelpCircle, CheckCircle2, Sparkles, Award } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    topic: 'Bespoke Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', orderId: '', topic: 'Bespoke Inquiry', message: '' });
    }, 4000);
  };

  const faqs = [
    {
      q: 'How does the 3-Year White-Glove Guarantee operate?',
      a: 'All purchases from rocKo Atelier register automatically. Should you experience any acoustic variance or driver degradation within 3 years, our private concierge will arrange doorstep collection and dispatch a certified replacement within 48 hours.'
    },
    {
      q: 'What is the 30-Day In-Home Audition policy?',
      a: 'Acoustics are deeply intimate. We invite you to experience rocKo in your personal environment for 30 days. If the acoustic staging does not exceed your expectations, our concierge will handle complimentary returns and provide a full refund.'
    },
    {
      q: 'Can I request bespoke laser engraving after placing an order?',
      a: 'Yes. If your creation has not entered laser calibration, contact our Concierge Desk within 2 hours of placing your order with your chosen initials or text.'
    },
    {
      q: 'Are rocKo drivers compatible with Apple, Android, Windows & macOS?',
      a: 'Yes, our Bluetooth 5.4 DSP supports LDAC, AAC, aptX, and SBC protocols with automatic low-latency handoff across iOS, Android, and macOS workstations.'
    }
  ];

  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-32 pb-24">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#e11d1d] uppercase flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d1d]" />
            rocKo CONCIERGE & CARE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111113] mt-1 mb-4 font-display">
            How May We Assist You?
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            Whether for custom acoustic consultations, bespoke engraving requests, or 3-year guarantee claims, our specialists are at your disposal.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="luxury-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 text-[#e11d1d] flex items-center justify-center mb-5">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111113] mb-1 font-display">Toll-Free Concierge</h3>
            <p className="text-xs text-zinc-500 mb-3">Monday – Saturday, 9AM to 9PM IST</p>
            <span className="text-sm font-mono text-[#111113] font-bold">1800-267-6621</span>
          </div>

          <div className="luxury-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 text-[#e11d1d] flex items-center justify-center mb-5">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111113] mb-1 font-display">Private Email Desk</h3>
            <p className="text-xs text-zinc-500 mb-3">Guaranteed response within 2 hours</p>
            <span className="text-sm font-mono text-[#111113] font-bold">concierge@rocko-audio.com</span>
          </div>

          <div className="luxury-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 text-[#e11d1d] flex items-center justify-center mb-5">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111113] mb-1 font-display">Bespoke Warranty Hub</h3>
            <p className="text-xs text-zinc-500 mb-3">Doorstep collection & swap</p>
            <span className="text-sm font-mono text-emerald-400 font-bold">3-Year Guarantee</span>
          </div>
        </div>

        {/* Contact Form & Warranty Center */}
        <div id="warranty" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20 text-left">
          
          <div className="lg:col-span-7 luxury-card p-6 sm:p-9 rounded-3xl">
            <h2 className="text-2xl font-black text-[#111113] mb-2 font-display">
              Dispatch a Concierge Message
            </h2>
            <p className="text-xs text-zinc-500 mb-6">
              Complete the inquiry below and an acoustic support specialist will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@domain.com"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Subject Matter</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  >
                    <option value="Bespoke Inquiry">Bespoke Inquiry</option>
                    <option value="3-Year Warranty Claim">3-Year Warranty Claim / Swap</option>
                    <option value="Bespoke Engraving">Bespoke Engraving Adjustment</option>
                    <option value="Acoustic Tuning Setup">Acoustic Tuning & EQ Advice</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Acquisition / Order ID (Optional)</label>
                  <input
                    type="text"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    placeholder="ROCKO-VIP-XXXXXX"
                    className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Message *</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How may our acoustic concierge assist you today?"
                  className="w-full bg-[#f6f6f7] border border-zinc-200 rounded-xl p-3.5 text-xs text-[#111113] focus:outline-none focus:border-[#e11d1d]"
                />
              </div>

              <button
                type="submit"
                className="btn-gold-sheen w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#e11d1d] to-[#b91c1c] hover:from-[#f5f4f0] hover:to-[#e11d1d] text-black text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#e11d1d]/25"
              >
                Submit Concierge Inquiry
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your message has reached our VIP Concierge Desk. A senior acoustic engineer will contact you within 2 hours.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right FAQs */}
          <div id="faq" className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-[#111113] mb-4 flex items-center gap-2 font-display">
              <HelpCircle className="w-5 h-5 text-[#e11d1d]" />
              <span>Atelier Concierge FAQs</span>
            </h3>

            {faqs.map((faq, idx) => (
              <div key={idx} className="luxury-card p-4 sm:p-5 rounded-2xl border border-zinc-200">
                <h4 className="text-xs font-bold text-[#111113] mb-2 leading-snug">{faq.q}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
