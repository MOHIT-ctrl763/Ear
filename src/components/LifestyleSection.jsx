import React from 'react';
import { Link } from 'react-router-dom';
import { lifestyleExact } from '../data/products';
import { ArrowRight, Sparkles, Cpu, Feather } from 'lucide-react';

const LifestyleSection = () => {
  const soundFeatures = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#e11d1d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 10v4M8 6v12M12 3v18M16 8v8M20 11v2" />
        </svg>
      ),
      title: 'Immersive Sound Quality',
      subtitle: 'Titanium Bi-Directional Drivers'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#e11d1d]" strokeWidth={1.8} />,
      title: 'Advanced Bluetooth 5.4',
      subtitle: 'Zero Dropouts • 990kbps LDAC'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#e11d1d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="7" width="16" height="10" rx="2" />
          <line x1="22" y1="11" x2="22" y2="13" />
          <line x1="6" y1="10" x2="6" y2="14" />
          <line x1="10" y1="10" x2="10" y2="14" />
        </svg>
      ),
      title: 'Long Battery Life',
      subtitle: '52-Hour Continuous Reserve'
    },
    {
      icon: <Feather className="w-5 h-5 text-[#e11d1d]" strokeWidth={1.8} />,
      title: 'Ergonomic Design',
      subtitle: '3.4g Featherweight Shell'
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f6f6f7] relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Clean Editorial Hardware Card */}
        <div className="luxury-card rounded-3xl overflow-hidden border border-zinc-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Photo */}
            <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] lg:h-[460px] bg-black overflow-hidden">
              <img
                src={lifestyleExact}
                alt="rocKo Sound Experience"
                className="w-full h-full object-cover object-center filter contrast-[1.04]"
              />
            </div>

            {/* Middle: Editorial Text and Button */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d1d]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-500 uppercase">
                  rocKo Sound Experience
                </span>
              </div>

              <h2 className="text-2xl sm:text-[34px] font-extrabold text-[#111113] leading-[1.08] tracking-[-0.025em] mb-4 font-display">
                Designed for
                <br />
                a Smarter Tomorrow
              </h2>

              <p className="text-xs sm:text-[14px] text-zinc-600 leading-relaxed mb-8 max-w-sm font-normal">
                At rocKo, we believe in more than just sound. We believe in innovation, style and a better listening experience — every day, everywhere.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#111113] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#27272a] transition-colors"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right: 4 Column Features List */}
            <div className="lg:col-span-3 p-6 sm:p-8 space-y-6 lg:border-l lg:border-zinc-200">
              {soundFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group text-left">
                  <div className="w-9 h-9 rounded-xl bg-[#f6f6f7] border border-zinc-200 flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#111113] tracking-wide">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      {feat.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LifestyleSection;
