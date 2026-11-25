import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronUp, ChevronDown, ArrowRight, Disc3 } from 'lucide-react';
import { heroExact, lifestyleExact, products } from '../data/products';

const RING_ITEMS = [
  {
    id: 'rocko-signature',
    name: 'rocKo Signature',
    edition: 'Two-Tone Pearl & Obsidian',
    price: '₹2,799',
    spec: '13.2mm Titanium • -44dB ANC',
    image: heroExact,
    link: '/products',
  },
  {
    id: products[0].id,
    name: products[0].name,
    edition: products[0].edition,
    price: `₹${products[0].price.toLocaleString()}`,
    spec: products[0].driver,
    image: products[0].highResImage || products[0].image,
    link: `/product/${products[0].id}`,
  },
  {
    id: products[1].id,
    name: products[1].name,
    edition: products[1].edition,
    price: `₹${products[1].price.toLocaleString()}`,
    spec: products[1].anc,
    image: products[1].highResImage || products[1].image,
    link: `/product/${products[1].id}`,
  },
  {
    id: products[2].id,
    name: products[2].name,
    edition: products[2].edition,
    price: `₹${products[2].price.toLocaleString()}`,
    spec: products[2].battery,
    image: products[2].highResImage || products[2].image,
    link: `/product/${products[2].id}`,
  },
  {
    id: products[3].id,
    name: products[3].name,
    edition: products[3].edition,
    price: `₹${products[3].price.toLocaleString()}`,
    spec: products[3].latency,
    image: products[3].highResImage || products[3].image,
    link: `/product/${products[3].id}`,
  },
  {
    id: 'rocko-atelier',
    name: 'rocKo Sound Experience',
    edition: 'Atelier Acoustic Philosophy',
    price: 'Limited Batch',
    spec: 'Bluetooth 5.4 • LDAC Hi-Res',
    image: lifestyleExact,
    link: '/about',
  },
];

const STEP_ANGLE = 360 / RING_ITEMS.length; // 60deg per slot
const RING_RADIUS = 235;

const MomentumRing = () => {
  const [angle, setAngle] = useState(0);
  const [motionBlur, setMotionBlur] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const stateRef = useRef({
    angle: 0,
    velocity: 0,
    dragging: false,
    lastY: 0,
    targetSnap: null,
  });

  // Momentum + blur + magnetic click-into-place physics loop
  useEffect(() => {
    let rafId;
    const tick = () => {
      const s = stateRef.current;

      if (!s.dragging) {
        if (Math.abs(s.velocity) > 0.35) {
          s.angle += s.velocity;
          s.velocity *= 0.92;
          s.targetSnap = null;
        } else {
          // Click into nearest slot
          if (s.targetSnap === null) {
            s.targetSnap = Math.round(s.angle / STEP_ANGLE) * STEP_ANGLE;
          }
          const diff = s.targetSnap - s.angle;
          s.angle += diff * 0.16;
          s.velocity *= 0.6;
          if (Math.abs(diff) < 0.05) {
            s.angle = s.targetSnap;
          }
        }
      }

      const speedBlur = Math.min(7, Math.abs(s.velocity) * 0.42);
      setAngle(s.angle);
      setMotionBlur(speedBlur);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = useCallback((e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const s = stateRef.current;
    s.dragging = true;
    s.lastY = e.clientY;
    s.velocity = 0;
    s.targetSnap = null;
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    const dy = e.clientY - s.lastY;
    s.lastY = e.clientY;
    const deltaAngle = -dy * 0.45;
    s.angle += deltaAngle;
    s.velocity = deltaAngle * 0.85;
  }, []);

  const handlePointerUp = useCallback(() => {
    stateRef.current.dragging = false;
    setIsDragging(false);
  }, []);

  const handleWheel = (e) => {
    const s = stateRef.current;
    s.targetSnap = null;
    s.velocity += Math.max(-14, Math.min(14, e.deltaY * 0.09));
  };

  const stepSlot = (dir) => {
    const s = stateRef.current;
    const currentSnap = Math.round(s.angle / STEP_ANGLE) * STEP_ANGLE;
    s.velocity = dir * 8.5;
    s.targetSnap = currentSnap + dir * STEP_ANGLE;
  };

  // Determine which item is currently clicked into the front slot
  const activeIdx =
    ((Math.round(-angle / STEP_ANGLE) % RING_ITEMS.length) + RING_ITEMS.length) %
    RING_ITEMS.length;
  const activeItem = RING_ITEMS[activeIdx];

  return (
    <section className="py-16 sm:py-24 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.26em] text-[#e11d1d] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#e11d1d]" />
                MOMENTUM REEL
              </span>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#e11d1d]/60 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-[36px] font-black text-white tracking-tight font-display">
              <span className="text-[#e11d1d]">rocKo</span> Precision Ring
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">
              Flick or scroll the vertical reel — it blurs with momentum and clicks into place on every rocKo creation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => stepSlot(-1)}
              aria-label="Previous pod"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-white hover:border-[#e11d1d] transition-colors cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => stepSlot(1)}
              aria-label="Next pod"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center text-white hover:border-[#e11d1d] transition-colors cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Momentum Ring Card */}
        <div className="luxury-card rounded-3xl border border-white/[0.08] p-5 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 3D Vertical Ring */}
            <div className="lg:col-span-7">
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onWheel={handleWheel}
                className={`relative h-[380px] sm:h-[440px] rounded-2xl bg-[#0c0c10] border border-white/[0.06] flex items-center justify-center overflow-hidden select-none touch-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                style={{ perspective: '1050px' }}
              >
                {/* Center target reticle lines */}
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-[196px] rounded-2xl border border-[#e11d1d]/25 pointer-events-none" />

                {/* 3D Rotating Drum */}
                <div
                  className="relative w-[240px] sm:w-[310px] h-[170px] sm:h-[190px] flex items-center justify-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${angle}deg)`,
                    filter: motionBlur > 0.2 ? `blur(${motionBlur.toFixed(1)}px)` : 'none',
                  }}
                >
                  {RING_ITEMS.map((item, idx) => {
                    const itemAngle = idx * STEP_ANGLE;
                    // Angular distance to front (0 deg mod 360)
                    const rel = ((((itemAngle + angle) % 360) + 540) % 360) - 180;
                    const isFront = Math.abs(rel) < STEP_ANGLE / 2;
                    const opacity = Math.max(0.15, 1 - Math.abs(rel) / 135);

                    return (
                      <div
                        key={item.id}
                        style={{
                          transform: `rotateX(${itemAngle}deg) translateZ(${RING_RADIUS}px)`,
                          opacity,
                          backfaceVisibility: 'hidden',
                        }}
                        className={`absolute inset-0 rounded-2xl p-3 flex items-center justify-center border transition-colors ${
                          isFront
                            ? 'bg-[#0b0b14]/95 border-[#e11d1d]/70 shadow-[0_0_35px_rgba(225,29,29,0.2)]'
                            : 'bg-[#07070d]/85 border-white/10'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          draggable={false}
                          className="max-h-full max-w-full object-contain pointer-events-none"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Speed / Snap Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 border border-white/10 text-[10.5px] font-mono text-gray-300">
                  <Disc3 className={`w-3.5 h-3.5 text-[#e11d1d] ${motionBlur > 0.4 ? 'animate-spin' : ''}`} />
                  <span>{motionBlur > 0.4 ? 'SPINNING' : 'LOCKED'}</span>
                </div>
              </div>
            </div>

            {/* Right: Active Clicked-In Pod Info */}
            <div className="lg:col-span-5 text-left space-y-5">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#e11d1d] font-bold">
                  Active Reel Selection • 0{activeIdx + 1} / 0{RING_ITEMS.length}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-display">
                  {activeItem.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{activeItem.edition}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#111115] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 block">
                    Acoustic Highlight
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#f5f4f0]">
                    {activeItem.spec}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 block">
                    Atelier Price
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">
                    {activeItem.price}
                  </span>
                </div>
              </div>

              {/* Slot Dots */}
              <div className="flex items-center gap-2">
                {RING_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      const s = stateRef.current;
                      s.velocity = 0;
                      s.targetSnap = -idx * STEP_ANGLE;
                    }}
                    aria-label={`Select ${item.name}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === activeIdx ? 'w-8 bg-[#e11d1d]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Link
                to={activeItem.link}
                className="btn-gold-sheen inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-xs font-extrabold tracking-wider uppercase hover:bg-gray-200 transition-all shadow-lg"
              >
                <span>Explore {activeItem.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumRing;
