import React from 'react';
import { Star, Award, ShieldCheck, Sparkles } from 'lucide-react';

const accolades = [
  {
    quote: "The new titan of haute wireless acoustics. Delivers concert-hall fidelity in a flawless titanium form.",
    publication: "GQ LUXURY",
    author: "Global Tech Review",
    rating: 5
  },
  {
    quote: "rocKo sets an exhilarating benchmark for active silence and micro-harmonic vocal warmth.",
    publication: "WIRED",
    author: "Acoustic Gear of the Year",
    rating: 5
  },
  {
    quote: "Breathtaking acoustic speed. The 24ms gaming mode and LDAC 990kbps codec are unmatched.",
    publication: "FORBES",
    author: "Luxury Technology Column",
    rating: 5
  },
  {
    quote: "Audiophile-grade engineering that redefines what Bluetooth 5.4 can achieve.",
    publication: "SOUND & VISION",
    author: "Master Audio Certification",
    rating: 5
  }
];

const PressAccolades = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#09090b] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10.5px] font-bold tracking-[0.28em] text-[#e11d1d] uppercase flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d1d]" />
            GLOBAL CRITICAL ACCLAIM
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Praised by Audiophile Authorities
          </h2>
        </div>

        {/* 4 Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {accolades.map((item, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between text-left group"
            >
              <div>
                {/* 5 Stars in Gold */}
                <div className="flex items-center gap-1 text-[#e11d1d] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e11d1d]" />
                  ))}
                </div>

                <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs font-black tracking-[0.16em] uppercase text-white font-display">
                  {item.publication}
                </h4>
                <p className="text-[10.5px] text-[#e11d1d] mt-0.5">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PressAccolades;

