import React, { useState } from 'react';

/**
 * Custom 3D Triptych Bending Marquee tailored for rocKo Haute Acoustics.
 * Renders a flat center stage flanked by 3D-folded side wings so scrolling
 * marquee bands appear to bend seamlessly around a curved architectural surface.
 */
const DEFAULT_ROWS = [
  {
    items: [
      'rocKo',
      'rocKo BUDS PRO',
      'rocKo AIR PRO',
      'rocKo NEO',
      'rocKo GAMEX',
      'rocKo — TECHNOLOGY. BEYOND SOUND.',
    ],
    separator: '✦',
    direction: 'left',
    duration: 28,
    bandBg: 'bg-gradient-to-r from-[#131317] via-[#12090d] to-[#131317] border-y border-[#e11d1d]/30',
    textColor: 'text-[#f5f4f0]',
    sepColor: 'text-[#e11d1d]',
  },
];

const MarqueeTrack = ({ row, paused, offsetClass = '' }) => {
  const repeated = [...row.items, ...row.items, ...row.items, ...row.items];
  const animName = row.direction === 'right' ? 'rocko-marquee-right' : 'rocko-marquee-left';

  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 sm:py-3.5 ${row.bandBg}`}>
      <div
        className={`inline-flex items-center gap-6 sm:gap-10 will-change-transform ${offsetClass}`}
        style={{
          animation: `${animName} ${row.duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {repeated.map((phrase, idx) => (
          <React.Fragment key={idx}>
            <span
              className={`text-sm sm:text-lg md:text-xl font-black tracking-[0.18em] uppercase font-display ${row.textColor}`}
            >
              {phrase}
            </span>
            <span
              className={`text-xs sm:text-sm inline-block transition-transform duration-500 ${row.sepColor}`}
              style={{ animation: 'rocko-sway 3.2s ease-in-out infinite' }}
            >
              {row.separator}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const BendingMarquee = ({ rows = DEFAULT_ROWS, bend = 36 }) => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative py-10 sm:py-14 bg-[#f6f6f7] overflow-hidden select-none">
      {/* Keyframes for smooth GPU-accelerated marquee & separator sway */}
      <style>{`
        @keyframes rocko-marquee-left {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes rocko-marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        @keyframes rocko-sway {
          0%, 100% { transform: rotate(-12deg) scale(1); }
          50% { transform: rotate(12deg) scale(1.15); }
        }
      `}</style>

      {/* Ambient crimson & champagne-gold depth glow behind the triptych */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[240px] bg-gradient-to-r from-[#e11d1d]/10 via-[#e11d1d]/10 to-[#e11d1d]/10 rounded-full blur-[130px]" />
      </div>

      {/* 3D Perspective Stage */}
      <div
        className="max-w-[1380px] mx-auto px-2 sm:px-6 relative z-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: '950px' }}
        >
          {/* Left Folded Wing */}
          <div
            className="hidden md:block w-[26%] shrink-0 overflow-hidden rounded-l-2xl shadow-[inset_-25px_0_40px_rgba(0,0,0,0.85)] opacity-85"
            style={{
              transform: `rotateY(${bend}deg) translateZ(-40px)`,
              transformOrigin: 'right center',
            }}
          >
            <div className="flex flex-col gap-3">
              {rows.map((row, i) => (
                <MarqueeTrack key={`l-${i}`} row={row} paused={paused} />
              ))}
            </div>
          </div>

          {/* Center Flat Stage */}
          <div
            className="w-full md:w-[48%] shrink-0 overflow-hidden rounded-2xl md:rounded-none border-x md:border-x-0 border-white/[0.06] shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-20"
            style={{ transform: 'translateZ(0px)' }}
          >
            <div className="flex flex-col gap-3">
              {rows.map((row, i) => (
                <MarqueeTrack key={`c-${i}`} row={row} paused={paused} />
              ))}
            </div>
          </div>

          {/* Right Folded Wing */}
          <div
            className="hidden md:block w-[26%] shrink-0 overflow-hidden rounded-r-2xl shadow-[inset_25px_0_40px_rgba(0,0,0,0.85)] opacity-85"
            style={{
              transform: `rotateY(-${bend}deg) translateZ(-40px)`,
              transformOrigin: 'left center',
            }}
          >
            <div className="flex flex-col gap-3">
              {rows.map((row, i) => (
                <MarqueeTrack key={`r-${i}`} row={row} paused={paused} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BendingMarquee;
