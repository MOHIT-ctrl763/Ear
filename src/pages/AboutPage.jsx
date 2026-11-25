import React from 'react';
import { Link } from 'react-router-dom';
import { lifestyleExact, heroExact } from '../data/products';
import { Award, Zap, Shield, Cpu, Volume2, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-32 pb-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Banner Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#e11d1d] uppercase flex items-center justify-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d1d]" />
            THE rocKo ATELIER HERITAGE
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111113] mt-2 mb-6 font-display">
            Haute Acoustics. Beyond Sound.
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            rocKo Atelier was established to bridge the chasm between bespoke high-end horlogerie craftsmanship and wireless acoustic engineering. We forge pure auditory instruments using aerospace titanium, bio-cellulose diaphragms, and bespoke Bluetooth 5.4 DSP architectures.
          </p>
        </div>

        {/* Dual Visual Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="luxury-card relative rounded-3xl overflow-hidden border border-zinc-200 aspect-video lg:aspect-auto lg:h-[460px] p-2">
            <img
              src={lifestyleExact}
              alt="rocKo Atelier Craftsmanship"
              className="w-full h-full object-cover rounded-2xl filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <span className="text-xs font-bold text-[#e11d1d] uppercase tracking-widest block mb-1">
                Acoustic Science & Ergonomics
              </span>
              <h3 className="text-xl font-bold text-[#111113] font-display">
                Hand-Calibrated for Zero Acoustic Fatigue
              </h3>
            </div>
          </div>

          <div className="space-y-6 text-left lg:pl-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e11d1d]">The Titanium Difference</span>
              <div className="w-8 h-[1px] bg-[#e11d1d]" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] font-display leading-tight">
              Calibrated to the subtleties of human auditory perception.
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Inside our acoustic research chambers, each model undergoes over 2,000 hours of precision frequency sweeps. Unlike mass-manufactured plastic earbuds that rely on software bass boosts, our proprietary titanium composite drivers project physical sub-bass resonance down to 10Hz without muddying velvety vocal frequencies.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-zinc-200">
                <span className="text-2xl sm:text-3xl font-black text-[#e11d1d] font-display">500K+</span>
                <span className="block text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Connoisseurs Worldwide</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-zinc-200">
                <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-display">-44dB</span>
                <span className="block text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Adaptive Silence Shield</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Luxury Audio */}
        <div className="border-t border-zinc-200 pt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111113] font-display">
              Our 4 Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="luxury-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 flex items-center justify-center text-[#e11d1d] mb-5">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#111113] mb-2 font-display">High-Res LDAC</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Certified 990kbps 24-bit/96kHz wireless streaming that captures the micro-nuance of acoustic recordings.
              </p>
            </div>

            <div className="luxury-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 flex items-center justify-center text-cyan-400 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#111113] mb-2 font-display">Warp Induction</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Solid-state battery cells that charge to 3.5 hours of continuous playback in merely 10 minutes in the case.
              </p>
            </div>

            <div className="luxury-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 flex items-center justify-center text-emerald-400 mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#111113] mb-2 font-display">3-Year Guarantee</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Every unit is backed by our white-glove doorstep concierge guarantee with instant hardware replacement.
              </p>
            </div>

            <div className="luxury-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#f6f6f7] border border-[#e11d1d]/30 flex items-center justify-center text-purple-400 mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#111113] mb-2 font-display">Audition Guarantee</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Test in the comfort of your residence for 30 days. Complete satisfaction or full return without questions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="luxury-card text-center p-10 sm:p-14 rounded-3xl border border-[#e11d1d]/30">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111113] mb-3 font-display">
            Ready to experience acoustic transcendence?
          </h2>
          <p className="text-sm text-zinc-600 mb-8 max-w-md mx-auto">
            Acquire your pair with complimentary bespoke laser engraving and white-glove shipping.
          </p>
          <Link
            to="/products"
            className="btn-gold-sheen inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#e11d1d] to-[#b91c1c] text-black text-xs font-black tracking-widest uppercase shadow-xl shadow-[#e11d1d]/25 hover:shadow-[0_0_30px_rgba(225,29,29,0.5)] transition-all"
          >
            Explore The Master Collection
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
