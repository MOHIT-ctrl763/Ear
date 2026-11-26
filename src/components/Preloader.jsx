import React, { useEffect, useState } from 'react';
import RockoLogo from './RockoLogo';

/**
 * Custom Eye-Blink Preloader inspired by the segmented angular LED eyes
 * on the uploaded earbuds case, styled for rocKo.
 */
const Preloader = ({ duration = 1850, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let rafId;

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setExiting(true);
        const timer = setTimeout(() => {
          setDone(true);
          if (onComplete) onComplete();
        }, 650);
        return () => clearTimeout(timer);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onComplete]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0b0b0d] flex flex-col items-center justify-center px-6 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        exiting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      {/* Keyframes for realistic segmented LED eye blink */}
      <style>{`
        @keyframes rocko-eye-blink {
          0%, 14%, 24%, 64%, 74%, 100% {
            transform: scaleY(1);
            opacity: 1;
          }
          19%, 69% {
            transform: scaleY(0.05);
            opacity: 0.7;
          }
        }
        @keyframes rocko-led-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(225, 29, 29, 0.75));
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(225, 29, 29, 1));
          }
        }
        .rocko-eye-lid {
          transform-box: fill-box;
          transform-origin: center;
          animation: rocko-eye-blink 1.85s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .rocko-eye-glow {
          animation: rocko-led-pulse 1.4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Segmented Angular Earbud LED Eyes */}
        <svg
          viewBox="0 0 260 90"
          className="w-56 sm:w-64 h-auto mb-6 rocko-eye-glow"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="left-eye-socket">
              <path d="M 14 14 L 106 30 L 98 74 L 22 64 Z" />
            </clipPath>
            <clipPath id="right-eye-socket">
              <path d="M 246 14 L 154 30 L 162 74 L 238 64 Z" />
            </clipPath>
          </defs>

          {/* Left Eye Socket */}
          <path
            d="M 14 14 L 106 30 L 98 74 L 22 64 Z"
            fill="#050507"
            stroke="#27272a"
            strokeWidth="2"
          />
          <g clipPath="url(#left-eye-socket)">
            <g className="rocko-eye-lid">
              {/* Outer segmented arc */}
              <circle
                cx="64"
                cy="34"
                r="24"
                fill="none"
                stroke="#e11d1d"
                strokeWidth="7"
                strokeDasharray="6 4"
              />
              {/* Inner segmented arc */}
              <circle
                cx="64"
                cy="34"
                r="13"
                fill="none"
                stroke="#f87171"
                strokeWidth="4.5"
                strokeDasharray="4 3"
              />
              {/* Core pupil */}
              <circle cx="64" cy="34" r="4" fill="#ffffff" />
            </g>
          </g>

          {/* Right Eye Socket */}
          <path
            d="M 246 14 L 154 30 L 162 74 L 238 64 Z"
            fill="#050507"
            stroke="#27272a"
            strokeWidth="2"
          />
          <g clipPath="url(#right-eye-socket)">
            <g className="rocko-eye-lid">
              {/* Outer segmented arc */}
              <circle
                cx="196"
                cy="34"
                r="24"
                fill="none"
                stroke="#e11d1d"
                strokeWidth="7"
                strokeDasharray="6 4"
              />
              {/* Inner segmented arc */}
              <circle
                cx="196"
                cy="34"
                r="13"
                fill="none"
                stroke="#f87171"
                strokeWidth="4.5"
                strokeDasharray="4 3"
              />
              {/* Core pupil */}
              <circle cx="196" cy="34" r="4" fill="#ffffff" />
            </g>
          </g>
        </svg>

        {/* Crisp Light-variant rocKo Logo (visible on dark preloader) */}
        <RockoLogo className="h-10 sm:h-12 w-auto" variant="light" />

        {/* Minimal Progress Bar */}
        <div className="mt-6 w-48 sm:w-56">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1.5">
            <span className="tracking-[0.22em] uppercase">Waking Audio</span>
            <span className="text-white font-bold tabular-nums">{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#e11d1d] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
