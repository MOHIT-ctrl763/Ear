import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCw, Sparkles, Compass, Play, Pause, RotateCcw } from 'lucide-react';
import { heroExact, products } from '../data/products';

const PINNED_NOTES = [
  {
    id: 'band',
    label: 'rocKo Signature Band',
    detail: 'Precision-milled matte obsidian center band with magnetic hall-sensor hinge.',
    x: 50,
    y: 44,
    targetAngle: 0,
  },
  {
    id: 'shell',
    label: 'Ceramic Pearl Shell',
    detail: 'Aerospace-grade dual-coat satin finish engineered for zero-slip pocket ergonomics.',
    x: 28,
    y: 28,
    targetAngle: -28,
  },
  {
    id: 'led',
    label: 'Precision LED Telemetry',
    detail: 'Micro-etched status bar displaying instant battery reserve & fast-warp charging.',
    x: 50,
    y: 71,
    targetAngle: 14,
  },
  {
    id: 'driver',
    label: '13.2mm Titanium Core',
    detail: 'Hand-calibrated acoustic chamber delivering -44dB active silence and deep sub-bass.',
    x: 73,
    y: 34,
    targetAngle: 32,
  },
];

const POD_MODELS = [
  {
    id: 'rocko-signature',
    name: 'rocKo Signature',
    subtitle: 'Flagship Two-Tone Case',
    image: heroExact,
    isHeroCutout: true,
  },
  ...products.map((p) => ({
    id: p.id,
    name: p.name,
    subtitle: p.edition,
    image: p.highResImage || p.image,
    isHeroCutout: false,
  })),
];

const SpinViewer = () => {
  const [selectedPod, setSelectedPod] = useState(POD_MODELS[0]);
  const [angleY, setAngleY] = useState(-12);
  const [angleX, setAngleX] = useState(4);
  const [autoSpin, setAutoSpin] = useState(true);
  const [activePin, setActivePin] = useState('band');
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({
    dragging: false,
    lastX: 0,
    lastY: 0,
    velX: 0,
    velY: 0,
  });

  // Momentum + optional gentle auto-orbit animation loop
  useEffect(() => {
    let rafId;
    const tick = () => {
      const d = dragRef.current;
      if (!d.dragging) {
        if (Math.abs(d.velX) > 0.02 || Math.abs(d.velY) > 0.02) {
          setAngleY((prev) => prev + d.velX);
          setAngleX((prev) => Math.max(-22, Math.min(22, prev + d.velY)));
          d.velX *= 0.93;
          d.velY *= 0.9;
        } else if (autoSpin) {
          setAngleY((prev) => prev + 0.28);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [autoSpin]);

  const handlePointerDown = useCallback((e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current.dragging = true;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    dragRef.current.velX = 0;
    dragRef.current.velY = 0;
    setIsDragging(true);
    setAutoSpin(false);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.lastX;
    const dy = e.clientY - d.lastY;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    d.velX = dx * 0.45;
    d.velY = -dy * 0.2;
    setAngleY((prev) => prev + dx * 0.55);
    setAngleX((prev) => Math.max(-22, Math.min(22, prev - dy * 0.25)));
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current.dragging = false;
    setIsDragging(false);
  }, []);

  const focusPin = (pin) => {
    setActivePin(pin.id);
    setAutoSpin(false);
    dragRef.current.velX = 0;
    dragRef.current.velY = 0;
    setAngleY(pin.targetAngle);
    setAngleX(4);
  };

  const resetView = () => {
    dragRef.current.velX = 0;
    dragRef.current.velY = 0;
    setAngleY(-12);
    setAngleX(4);
    setAutoSpin(true);
  };

  const normalizedDeg = (((Math.round(angleY) % 360) + 360) % 360);
  const currentNote = PINNED_NOTES.find((p) => p.id === activePin) || PINNED_NOTES[0];

  return (
    <section className="py-16 sm:py-24 bg-[#09090b] relative overflow-hidden">
      {/* Subtle radial obsidian & crimson-gold spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] bg-gradient-to-r from-[#e11d1d]/10 via-[#e11d1d]/10 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-bold tracking-[0.26em] text-[#e11d1d] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#e11d1d]" />
                3D INTERACTIVE INSPECTION
              </span>
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#e11d1d]/60 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-[36px] font-black text-white tracking-tight font-display">
              Spin Your <span className="text-[#e11d1d]">rocKo</span> Pods
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">
              Drag to rotate with real-time momentum physics, or tap any pinned engineering note to inspect the architecture.
            </p>
          </div>

          {/* Model Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {POD_MODELS.map((pod) => (
              <button
                key={pod.id}
                onClick={() => setSelectedPod(pod)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all cursor-pointer ${
                  selectedPod.id === pod.id
                    ? 'bg-gradient-to-r from-[#e11d1d] to-[#b91c1c] text-black shadow-lg shadow-[#e11d1d]/20'
                    : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                {pod.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main 3D Spin Stage */}
        <div className="luxury-card rounded-3xl border border-white/[0.08] p-5 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left / Center: Interactive 3D Drag Canvas */}
            <div className="lg:col-span-8 relative">
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className={`relative h-[340px] sm:h-[430px] rounded-2xl bg-[#0c0c10] border border-white/[0.06] flex items-center justify-center overflow-hidden select-none touch-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                style={{ perspective: '1100px' }}
              >
                {/* 3D Orbital Base Ring */}
                <div
                  className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full border border-[#e11d1d]/20 pointer-events-none"
                  style={{
                    transform: `rotateX(74deg) rotateZ(${angleY}deg) translateZ(-90px)`,
                  }}
                />
                <div
                  className="absolute w-[220px] sm:w-[290px] h-[220px] sm:h-[290px] rounded-full border border-dashed border-[#e11d1d]/30 pointer-events-none"
                  style={{
                    transform: `rotateX(74deg) rotateZ(${-angleY * 0.6}deg) translateZ(-90px)`,
                  }}
                />

                {/* 3D Rotatable Pod Object + Pinned Notes */}
                <div
                  className="relative w-[260px] sm:w-[360px] h-[220px] sm:h-[290px] flex items-center justify-center transition-transform duration-75 ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${angleX}deg) rotateY(${angleY}deg)`,
                  }}
                >
                  <img
                    src={selectedPod.image}
                    alt={selectedPod.name}
                    draggable={false}
                    className={`max-h-full max-w-full object-contain pointer-events-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] ${
                      selectedPod.isHeroCutout ? '' : 'rounded-2xl border border-white/10'
                    }`}
                  />

                  {/* Pinned Hotspots */}
                  {PINNED_NOTES.map((pin) => {
                    const isActive = activePin === pin.id;
                    return (
                      <button
                        key={pin.id}
                        type="button"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={() => focusPin(pin)}
                        style={{
                          left: `${pin.x}%`,
                          top: `${pin.y}%`,
                          transform: 'translate(-50%, -50%) translateZ(36px)',
                        }}
                        className="absolute group/pin z-30 cursor-pointer"
                        aria-label={pin.label}
                      >
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300 ${
                            isActive
                              ? 'bg-[#e11d1d] border-white scale-110 shadow-[0_0_20px_rgba(225,29,29,0.75)]'
                              : 'bg-[#15151a]/90 border-[#e11d1d] hover:scale-110'
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-white" />
                        </span>
                        <span
                          className={`hidden sm:inline-block absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border transition-all ${
                            isActive
                              ? 'bg-[#15151a]/95 text-[#f5f4f0] border-[#e11d1d]/60 opacity-100'
                              : 'bg-black/80 text-gray-300 border-white/10 opacity-0 group-hover/pin:opacity-100'
                          }`}
                        >
                          {pin.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Top-left Live Telemetry Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[10.5px] font-mono text-gray-300">
                  <Compass className="w-3.5 h-3.5 text-[#e11d1d]" />
                  <span>{normalizedDeg}°</span>
                  <span className="text-white/20">|</span>
                  <span className="text-[#f5f4f0]">{selectedPod.name}</span>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
                    <RotateCw className="w-3 h-3 text-[#e11d1d]" />
                    Drag to Spin 360°
                  </span>

                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => setAutoSpin((s) => !s)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-white/15 text-[10.5px] font-bold text-white hover:border-[#e11d1d] transition-colors cursor-pointer"
                    >
                      {autoSpin ? <Pause className="w-3 h-3 text-[#e11d1d]" /> : <Play className="w-3 h-3 text-[#e11d1d]" />}
                      <span>{autoSpin ? 'Pause' : 'Auto Spin'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetView}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/80 border border-white/15 text-[10.5px] font-bold text-gray-300 hover:text-white hover:border-[#e11d1d] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pinned Note Inspector */}
            <div className="lg:col-span-4 text-left space-y-4">
              <div className="p-5 rounded-2xl bg-[#121216] border border-[#e11d1d]/30 shadow-xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#e11d1d] font-bold">
                  Pinned Engineering Note
                </span>
                <h3 className="text-lg font-black text-white mt-1 font-display">
                  {currentNote.label}
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed mt-2">
                  {currentNote.detail}
                </p>
              </div>

              <div className="space-y-2">
                {PINNED_NOTES.map((pin) => {
                  const isActive = activePin === pin.id;
                  return (
                    <button
                      key={pin.id}
                      type="button"
                      onClick={() => focusPin(pin)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-white/[0.06] border-[#e11d1d]/60 text-white'
                          : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="text-xs font-bold tracking-wide">{pin.label}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive ? 'bg-[#e11d1d] shadow-[0_0_10px_#e11d1d]' : 'bg-gray-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpinViewer;
