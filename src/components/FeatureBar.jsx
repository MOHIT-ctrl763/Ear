import React from 'react';
import { BatteryCharging, Zap, Feather, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#e11d1d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 10v4M8 6v12M12 3v18M16 8v8M20 11v2" />
      </svg>
    ),
    title: 'Hi-Fi Sound',
    desc: 'Crystal Clear Audio',
    detail: 'Certified 990kbps LDAC'
  },
  {
    icon: <BatteryCharging className="w-5 h-5 text-[#e11d1d]" />,
    title: 'Up to 48H Playtime',
    desc: 'Music Non-Stop',
    detail: 'Continuous Acoustic Flow'
  },
  {
    icon: <Zap className="w-5 h-5 text-[#e11d1d]" />,
    title: 'Fast Charging',
    desc: '10 Min = 3H',
    detail: 'Warp Induction Cells'
  },
  {
    icon: <Feather className="w-5 h-5 text-[#e11d1d]" />,
    title: 'Ultra Light',
    desc: 'All-Day Comfort',
    detail: '3.4g Featherweight Shell'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#e11d1d]" />,
    title: '1 Year Warranty',
    desc: 'Buy Worry-Free',
    detail: 'White-Glove Replacement'
  },
];

const FeatureBar = () => {
  return (
    <section className="relative border-y border-zinc-200 bg-white py-6 sm:py-7 z-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 items-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 px-3 group transition-transform duration-300 hover:translate-y-[-2px] ${
                idx !== features.length - 1 ? 'lg:border-r lg:border-zinc-200' : ''
              }`}
            >
              {/* Icon Frame */}
              <div className="w-10 h-10 rounded-xl bg-[#f6f6f7] border border-zinc-200 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="text-left">
                <h4 className="text-[13px] font-bold text-[#111113] tracking-wide leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[11.5px] text-zinc-500 leading-tight mt-0.5">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;
