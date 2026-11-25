import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Play, Pause, ArrowUpRight, MoveVertical } from 'lucide-react';
import { heroExact, lifestyleExact, products } from '../data/products';

const GALLERY_FRAMES = [
  {
    id: 'rocko-signature',
    title: 'rocKo Signature Case',
    subtitle: 'Two-Tone Pearl & Matte Obsidian',
    tag: 'Flagship Hardware',
    image: heroExact,
    link: '/products',
    side: 'left',
  },
  {
    id: products[0].id,
    title: products[0].name,
    subtitle: products[0].edition,
    tag: '₹1,999 • Titanium 12.5mm',
    image: products[0].highResImage || products[0].image,
    link: `/product/${products[0].id}`,
    side: 'right',
  },
  {
    id: products[1].id,
    title: products[1].name,
    subtitle: products[1].edition,
    tag: '₹2,499 • -44dB Silence',
    image: products[1].highResImage || products[1].image,
    link: `/product/${products[1].id}`,
    side: 'left',
  },
  {
    id: products[2].id,
    title: products[2].name,
    subtitle: products[2].edition,
    tag: '₹1,499 • 3.4g Featherweight',
    image: products[2].highResImage || products[2].image,
    link: `/product/${products[2].id}`,
    side: 'right',
  },
  {
    id: products[3].id,
    title: products[3].name,
    subtitle: products[3].edition,
    tag: '₹2,999 • 24ms Esports',
    image: products[3].highResImage || products[3].image,
    link: `/product/${products[3].id}`,
    side: 'left',
  },
  {
    id: 'rocko-atelier',
    title: 'rocKo Sound Experience',
    subtitle: 'Designed for a Smarter Tomorrow',
    tag: 'Haute Acoustics',
    image: lifestyleExact,
    link: '/about',
    side: 'right',
  },
];

const TUNNEL_SPAN = 1800; // Total Z-depth loop distance

const PassageGallery = () => {
  const [depth, setDepth] = useState(0);
  const [autoGlide, setAutoGlide] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const targetDepthRef = useRef(0);

  // Smooth RAF glide loop
  useEffect(() => {
    let rafId;
    const tick = () => {
      if (autoGlide) {
        targetDepthRef.current = (targetDepthRef.current + 1.9) % TUNNEL_SPAN;
      }
      setDepth((prev) => {
        let diff = targetDepthRef.current - prev;
        if (Math.abs(diff) > TUNNEL_SPAN / 2) {
          return targetDepthRef.current;
        }
        return prev + diff * 0.12;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [autoGlide]);

  const handleWheel = (e) => {
    setAutoGlide(false);
    targetDepthRef.current =
      (((targetDepthRef.current + e.deltaY * 0.85) % TUNNEL_SPAN) + TUNNEL_SPAN) % TUNNEL_SPAN;
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: -ny * 5, y: nx * 7 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.26em] text-[#e11d1d] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#e11d1d]" />
                PASSAGE GALLERY
              </span>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#e11d1d]/60 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-[36px] font-black text-white tracking-tight font-display">
              Glide Through <span className="text-[#e11d1d]">rocKo</span> Pods
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">
              Move your cursor or scroll inside the tunnel to glide through the complete rocKo acoustic collection.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setAutoGlide((g) => !g)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold text-white hover:border-[#e11d1d] transition-colors cursor-pointer"
            >
              {autoGlide ? <Pause className="w-3.5 h-3.5 text-[#e11d1d]" /> : <Play className="w-3.5 h-3.5 text-[#e11d1d]" />}
              <span>{autoGlide ? 'Pause Glide' : 'Auto Glide'}</span>
            </button>
          </div>
        </div>

        {/* 3D Tunnel Viewport */}
        <div
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[430px] sm:h-[520px] rounded-3xl bg-[#040408] border border-white/[0.08] overflow-hidden shadow-2xl"
          style={{ perspective: '950px' }}
        >
          {/* Tunnel vanishing-point glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#e11d1d]/15 via-[#e11d1d]/12 to-cyan-500/15 blur-[90px]" />
          </div>

          {/* 3D World Container */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Architectural Tunnel Depth Rings */}
            {[0, 1, 2, 3, 4, 5].map((ringIdx) => {
              const spacing = TUNNEL_SPAN / 6;
              const z = ((ringIdx * spacing + depth) % TUNNEL_SPAN) - TUNNEL_SPAN + 320;
              const opacity = Math.max(0, Math.min(0.45, 1 - Math.abs(z + 450) / 1100));
              return (
                <div
                  key={`ring-${ringIdx}`}
                  className="absolute w-[680px] sm:w-[920px] h-[380px] sm:h-[460px] rounded-3xl border border-[#e11d1d]/20 pointer-events-none"
                  style={{
                    transform: `translateZ(${z}px)`,
                    opacity,
                  }}
                />
              );
            })}

            {/* Gliding Pod Frames */}
            {GALLERY_FRAMES.map((frame, idx) => {
              const spacing = TUNNEL_SPAN / GALLERY_FRAMES.length;
              const rawZ = (idx * spacing + depth) % TUNNEL_SPAN;
              // Map rawZ into [-1450, +350] so cards emerge from far background and pass camera
              const z = rawZ - (TUNNEL_SPAN - 350);
              const xOffset = frame.side === 'left' ? -235 : 235;
              const yOffset = idx % 2 === 0 ? -12 : 16;

              // Fade smoothly at far end and right before passing camera
              let opacity = 1;
              if (z < -1100) opacity = Math.max(0, (z + 1450) / 350);
              else if (z > 140) opacity = Math.max(0, 1 - (z - 140) / 210);

              const scale = Math.max(0.5, 1 + z / 1800);

              return (
                <Link
                  key={frame.id}
                  to={frame.link}
                  style={{
                    transform: `translate3d(${xOffset}px, ${yOffset}px, ${z}px) scale(${scale})`,
                    opacity,
                    pointerEvents: opacity > 0.25 ? 'auto' : 'none',
                  }}
                  className="group absolute w-[220px] sm:w-[270px] rounded-2xl bg-[#131317]/90 border border-white/15 hover:border-[#e11d1d]/70 p-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors"
                >
                  <div className="relative h-[145px] sm:h-[175px] rounded-xl bg-[#0c0c10] overflow-hidden flex items-center justify-center p-2 mb-3 border border-white/[0.05]">
                    <img
                      src={frame.image}
                      alt={frame.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-[#e11d1d] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="text-left px-1">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#e11d1d] font-bold">
                      {frame.tag}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#f5f4f0] transition-colors truncate">
                      {frame.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 truncate">{frame.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Scrubber & Hint */}
          <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between gap-4 px-4 py-2.5 rounded-2xl bg-black/75 border border-white/10 backdrop-blur-md">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-wider text-gray-400 shrink-0">
              <MoveVertical className="w-3.5 h-3.5 text-[#e11d1d]" />
              Scroll or Scrub Tunnel
            </span>
            <input
              type="range"
              min={0}
              max={TUNNEL_SPAN - 1}
              value={Math.round(depth)}
              onChange={(e) => {
                setAutoGlide(false);
                targetDepthRef.current = Number(e.target.value);
              }}
              aria-label="Tunnel depth scrubber"
              className="w-full accent-[#e11d1d] cursor-pointer"
            />
            <span className="text-[10.5px] font-mono text-[#f5f4f0] shrink-0 tabular-nums">
              {Math.round((depth / TUNNEL_SPAN) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassageGallery;
