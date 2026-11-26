import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, Volume2 } from 'lucide-react';
import podFront from '../assets/images/pod-3d-front.png';
import podRight from '../assets/images/pod-3d-right.png';
import podBack from '../assets/images/pod-3d-back.png';
import podLeft from '../assets/images/pod-3d-left.png';
import podBottom from '../assets/images/pod-3d-bottom.png';

// Compute shortest angular distance in degrees [-180, 180]
const angDist = (a, b) => ((((a - b) % 360) + 540) % 360) - 180;

const Hero = () => {
  const [activeProfile, setActiveProfile] = useState('studio');
  const [rot, setRot] = useState({ x: 4, y: -10 });
  const [isDragging, setIsDragging] = useState(false);

  const physRef = useRef({
    dragging: false,
    hovering: false,
    lastX: 0,
    lastY: 0,
    velY: 0,
    velX: 0,
    angleY: -10,
    angleX: 4,
    snapY: null,
    snapX: null,
  });

  const soundProfiles = [
    { id: 'studio', label: 'Studio Neutral', desc: 'Flat 10Hz–45kHz frequency curve' },
    { id: 'spatial', label: '3D Spatial Stage', desc: '360° Dolby Atmos immersion' },
    { id: 'anc', label: 'Silentium ANC', desc: '-44dB dual-core active isolation' },
  ];

  // Smooth 3D turntable momentum + gentle idle showcase orbit
  useEffect(() => {
    let rafId;
    const tick = () => {
      const p = physRef.current;

      if (!p.dragging) {
        if (p.snapY !== null) {
          const dy = angDist(p.snapY, p.angleY);
          const dx = p.snapX - p.angleX;
          p.angleY += dy * 0.14;
          p.angleX += dx * 0.14;
          if (Math.abs(dy) < 0.25 && Math.abs(dx) < 0.25) {
            p.angleY = p.snapY;
            p.angleX = p.snapX;
            p.snapY = null;
            p.snapX = null;
          }
        } else if (Math.abs(p.velY) > 0.04 || Math.abs(p.velX) > 0.04) {
          p.angleY += p.velY;
          p.angleX = Math.max(-38, Math.min(28, p.angleX + p.velX));
          p.velY *= 0.94;
          p.velX *= 0.91;
        } else if (!p.hovering) {
          // Gentle continuous 360° turntable rotation
          p.angleY += 0.35;
          p.angleX += (4 - p.angleX) * 0.03;
        }
      }

      setRot({ x: p.angleX, y: p.angleY });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = useCallback((e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const p = physRef.current;
    p.dragging = true;
    p.snapY = null;
    p.snapX = null;
    p.lastX = e.clientX;
    p.lastY = e.clientY;
    p.velX = 0;
    p.velY = 0;
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const p = physRef.current;
    if (!p.dragging) return;
    const dx = e.clientX - p.lastX;
    const dy = e.clientY - p.lastY;
    p.lastX = e.clientX;
    p.lastY = e.clientY;
    p.velY = dx * 0.48;
    p.velX = -dy * 0.28;
    p.angleY += dx * 0.65;
    p.angleX = Math.max(-38, Math.min(28, p.angleX - dy * 0.35));
  }, []);

  const handlePointerUp = useCallback(() => {
    physRef.current.dragging = false;
    setIsDragging(false);
  }, []);

  const jumpToPreset = (preset) => {
    const p = physRef.current;
    p.velX = 0;
    p.velY = 0;
    p.snapY = preset.y;
    p.snapX = preset.x;
  };

  // Determine weights for each of the 5 real multi-angle photos
  const bottomWeight = rot.x < -14 ? Math.min(1, (-14 - rot.x) / 14) : 0;
  const sideViews = [
    { src: podFront, target: 0, alt: 'rocKo Pods Front View' },
    { src: podRight, target: 90, alt: 'rocKo Pods Right Side View' },
    { src: podBack, target: 180, alt: 'rocKo Pods Back View' },
    { src: podLeft, target: 270, alt: 'rocKo Pods Left Side View' },
  ];

  // Subtle 3D tilt around the nearest cardinal face so it feels truly dimensional without going edge-on
  const nearestCardinal = Math.round(rot.y / 90) * 90;
  const localTiltY = angDist(rot.y, nearestCardinal) * 0.35;
  const localTiltX = Math.max(-18, Math.min(18, rot.x * 0.55));
  const normalizedDeg = (((Math.round(rot.y) % 360) + 360) % 360);

  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 bg-[#f6f6f7] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[480px] sm:min-h-[540px]">
          {/* ── Left Column ── */}
          <div className="lg:col-span-6 text-left z-10 pt-2 lg:pt-0">
            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#e11d1d]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-500 uppercase">
                rocKo Wireless Audio
              </span>
            </div>

            <h1 className="text-[48px] sm:text-[62px] md:text-[70px] lg:text-[76px] font-bold leading-[1.02] tracking-[-0.02em] text-[#111113] mb-5 font-display">
              <span className="block">Feel Every</span>
              <span className="block text-[#e11d1d]">Beat.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-[17px] text-zinc-600 font-normal leading-relaxed mb-8 max-w-md">
              Engineered for pure clarity and all-day comfort. Precision 13.2mm drivers with active noise cancellation.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111113] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#27272a] transition-colors shadow-sm"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-zinc-300 text-[#111113] text-xs font-semibold tracking-wider uppercase hover:border-zinc-500 transition-colors"
              >
                <span>Explore More</span>
                <Play className="w-3 h-3 fill-current" />
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-200">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10.5px] uppercase font-bold tracking-[0.18em] text-zinc-500 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#e11d1d]" />
                  Sound Modes
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">
                  {soundProfiles.find((p) => p.id === activeProfile)?.desc}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {soundProfiles.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProfile(p.id)}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-colors cursor-pointer ${
                      activeProfile === p.id
                        ? 'bg-[#111113] text-white'
                        : 'bg-white text-zinc-600 hover:text-[#111113] border border-zinc-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Clean Studio 3D Turntable ── */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center lg:justify-end">
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerEnter={() => { physRef.current.hovering = true; }}
              onPointerLeave={() => {
                physRef.current.hovering = false;
                physRef.current.dragging = false;
                setIsDragging(false);
              }}
              className={`relative w-full max-w-[520px] h-[370px] sm:h-[440px] flex items-center justify-center select-none touch-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{ perspective: '1100px' }}
            >
              {/* Soft Studio Ground Shadow */}
              <div className="absolute bottom-9 w-[230px] sm:w-[280px] h-[26px] rounded-full bg-black/20 blur-xl pointer-events-none" />

              {/* Multi-Angle 3D Stack */}
              <div
                className="relative w-[320px] sm:w-[400px] h-[280px] sm:h-[340px] flex items-center justify-center will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${localTiltX}deg) rotateY(${localTiltY}deg) translateZ(24px)`,
                }}
              >
                {sideViews.map((view) => {
                  const d = Math.abs(angDist(rot.y, view.target));
                  const w = Math.max(0, 1 - d / 55) * (1 - bottomWeight);
                  return (
                    <img
                      key={view.alt}
                      src={view.src}
                      alt={view.alt}
                      draggable={false}
                      style={{ opacity: w }}
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_28px_45px_rgba(0,0,0,0.85)]"
                    />
                  );
                })}

                <img
                  src={podBottom}
                  alt="rocKo Pods USB-C Base View"
                  draggable={false}
                  style={{ opacity: bottomWeight }}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_28px_45px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
