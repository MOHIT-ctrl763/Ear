import React, { useEffect, useState } from 'react';
import RockoLogo from './RockoLogo';

/**
 * Luxury 5-style Preloader tailored for rocKo Haute Acoustics.
 * Supports variants: 'curtain' | 'counter' | 'split' | 'pulse' | 'shutter'.
 */
const Preloader = ({
  variant = 'curtain',
  duration = 1450,
  subtitle = 'Haute Acoustics • Calibration',
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let rafId;

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // Ease-out cubic for natural luxury deceleration
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setExiting(true);
        const timer = setTimeout(() => {
          setDone(true);
          if (onComplete) onComplete();
        }, 700);
        return () => clearTimeout(timer);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onComplete]);

  if (done) return null;

  const formattedCount = String(progress).padStart(3, '0');

  // Variant 3: Split horizontal doors
  if (variant === 'split') {
    return (
      <div className="fixed inset-0 z-[9999] pointer-events-none">
        <div
          className={`absolute top-0 left-0 right-0 h-1/2 bg-[#09090b] border-b border-[#e11d1d]/25 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            exiting ? '-translate-y-full' : 'translate-y-0'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#09090b] border-t border-[#e11d1d]/25 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            exiting ? 'translate-y-full' : 'translate-y-0'
          }`}
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400 ${
            exiting ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <RockoLogo className="h-11 sm:h-14 w-auto" variant="light" />
          <span className="mt-4 text-[10px] font-mono tracking-[0.35em] text-[#e11d1d] uppercase">
            {formattedCount}%
          </span>
        </div>
      </div>
    );
  }

  // Variant 5: 5-column vertical architectural shutter blinds
  if (variant === 'shutter') {
    return (
      <div className="fixed inset-0 z-[9999] flex pointer-events-none">
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={col}
            style={{ transitionDelay: exiting ? `${col * 65}ms` : '0ms' }}
            className={`flex-1 h-full bg-[#09090b] border-r border-white/[0.04] transition-transform duration-600 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              exiting ? '-translate-y-full' : 'translate-y-0'
            }`}
          />
        ))}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
            exiting ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <RockoLogo className="h-11 sm:h-14 w-auto" variant="light" />
          <div className="mt-5 w-44 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#e11d1d] via-[#e11d1d] to-[#f5f4f0]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Variants: 'curtain' (default), 'counter', 'pulse'
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#09090b] flex flex-col items-center justify-center px-6 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        variant === 'pulse'
          ? exiting
            ? 'opacity-0 scale-105 pointer-events-none'
            : 'opacity-100 scale-100'
          : exiting
          ? '-translate-y-full pointer-events-none'
          : 'translate-y-0'
      }`}
    >
      {/* Ambient luxury glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[460px] h-[460px] bg-gradient-to-tr from-[#e11d1d]/12 via-[#e11d1d]/10 to-cyan-500/10 rounded-full blur-[130px]" />
      </div>

      {/* Pulse variant concentric acoustic rings */}
      {variant === 'pulse' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-[#e11d1d]/30 animate-ping" />
          <div className="absolute w-72 h-72 rounded-full border border-[#e11d1d]/25 animate-pulse" />
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        <RockoLogo className="h-12 sm:h-14 w-auto" />

        <p className="mt-4 text-[10px] sm:text-[11px] font-mono tracking-[0.32em] text-[#e11d1d] uppercase">
          {subtitle}
        </p>

        {variant === 'counter' ? (
          <div className="mt-6 text-5xl sm:text-7xl font-black font-display tracking-tighter text-white tabular-nums">
            {formattedCount}
            <span className="text-[#e11d1d] text-2xl sm:text-3xl ml-1">%</span>
          </div>
        ) : (
          <div className="mt-7 w-52 sm:w-64">
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
              <span className="tracking-[0.22em] uppercase">Acoustic Stage</span>
              <span className="text-[#f5f4f0] font-bold tabular-nums">{progress}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#e11d1d] via-[#e11d1d] to-[#f5f4f0] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
