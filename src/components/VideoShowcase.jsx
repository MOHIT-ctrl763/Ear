import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, RotateCw } from 'lucide-react';
import { defaultVideoClips } from '../data/videoClips';

/**
 * Full-width 3D Rotating Cards Ring for "Experience The Sound Reels".
 * Super-Admin ready: accepts `clips` prop and arranges them around a draggable 3D ring.
 */
const VideoCard = ({ clip, onExpand, wasDraggedRef }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const handleCardClick = () => {
    if (wasDraggedRef.current) return;
    onExpand(clip);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-zinc-500 bg-[#111113] shadow-[0_24px_55px_rgba(17,17,19,0.28)] cursor-pointer transition-colors"
    >
      <video
        ref={videoRef}
        src={clip.videoUrl}
        poster={clip.poster}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        draggable={false}
        className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 pointer-events-none" />

      {/* Top Controls */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
        <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white font-bold">
          {clip.tag}
        </span>

        <div className="flex items-center gap-1.5" onPointerDown={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause clip' : 'Play clip'}
            className="w-7 h-7 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute clip' : 'Mute clip'}
            className="w-7 h-7 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-[#e11d1d]" />}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExpand(clip);
            }}
            aria-label="Expand video"
            className="w-7 h-7 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Bottom Caption */}
      <div className="absolute bottom-3.5 left-4 right-4 text-left z-20 pointer-events-none">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[10px] font-mono text-[#e11d1d] font-bold tracking-widest uppercase">
            Clip 0{clip.order}
          </span>
          <span className="text-[10px] font-mono text-zinc-300">{clip.duration}</span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-white leading-snug truncate">
          {clip.title}
        </h3>
        <p className="text-[11px] text-zinc-300 mt-0.5 line-clamp-1">{clip.subtitle}</p>
      </div>
    </div>
  );
};

const VideoShowcase = ({ clips = defaultVideoClips }) => {
  const [activeClip, setActiveClip] = useState(null);
  const [angleY, setAngleY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const ringRef = useRef({
    dragging: false,
    hovering: false,
    lastX: 0,
    vel: 0,
    angle: 0,
    movedDist: 0,
  });
  const wasDraggedRef = useRef(false);

  // Build 8 slots around the full-width 3D ring so it forms a continuous, lush 360° carousel
  const baseClips = clips.slice(0, 4);
  const ringSlots = baseClips.length > 0
    ? Array.from({ length: 8 }, (_, idx) => ({
        ...baseClips[idx % baseClips.length],
        slotKey: `${baseClips[idx % baseClips.length].id}-slot-${idx}`,
      }))
    : [];

  const stepAngle = ringSlots.length ? 360 / ringSlots.length : 45;
  const ringRadius = 460; // Wide 3D radius to span across full screen width

  useEffect(() => {
    let rafId;
    const tick = () => {
      const r = ringRef.current;
      if (!r.dragging) {
        if (Math.abs(r.vel) > 0.02) {
          r.angle += r.vel;
          r.vel *= 0.94;
        } else if (autoRotate && !r.hovering) {
          r.angle -= 0.18;
        }
      }
      setAngleY(r.angle);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [autoRotate]);

  const handlePointerDown = useCallback((e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const r = ringRef.current;
    r.dragging = true;
    r.lastX = e.clientX;
    r.vel = 0;
    r.movedDist = 0;
    wasDraggedRef.current = false;
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const r = ringRef.current;
    if (!r.dragging) return;
    const dx = e.clientX - r.lastX;
    r.lastX = e.clientX;
    r.movedDist += Math.abs(dx);
    if (r.movedDist > 6) {
      wasDraggedRef.current = true;
    }
    r.vel = dx * 0.25;
    r.angle += dx * 0.32;
  }, []);

  const handlePointerUp = useCallback(() => {
    ringRef.current.dragging = false;
    setIsDragging(false);
    setTimeout(() => {
      wasDraggedRef.current = false;
    }, 60);
  }, []);

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-y border-zinc-200 relative overflow-hidden select-none">
      {/* Header */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e11d1d]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-500 uppercase">
              rocKo In Motion
            </span>
          </div>
          <h2 className="text-2xl sm:text-[34px] font-extrabold text-[#111113] font-display tracking-[-0.025em]">
            Experience The Sound Reels
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-md">
            Drag anywhere across the 3D ring to rotate through our curated acoustic video clips.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setAutoRotate((a) => !a)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6f6f7] border border-zinc-300 text-xs font-bold text-[#111113] hover:border-[#111113] transition-colors cursor-pointer"
        >
          <RotateCw className={`w-3.5 h-3.5 text-[#e11d1d] ${autoRotate ? 'animate-spin' : ''}`} />
          <span>{autoRotate ? 'Pause Ring' : 'Auto Rotate'}</span>
        </button>
      </div>

      {/* Full-Screen-Width Draggable 3D Rotating Cards Stage */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={() => { ringRef.current.hovering = true; }}
        onPointerLeave={() => {
          ringRef.current.hovering = false;
          ringRef.current.dragging = false;
          setIsDragging(false);
        }}
        className={`relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ perspective: '1500px' }}
      >
        <div
          className="relative w-[220px] sm:w-[265px] h-[290px] sm:h-[340px] flex items-center justify-center will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${ringRadius}px) rotateX(-4deg) rotateY(${angleY}deg)`,
          }}
        >
          {ringSlots.map((clip, idx) => {
            const cardAngle = idx * stepAngle;
            const rel = ((((cardAngle + angleY) % 360) + 540) % 360) - 180;
            const opacity = Math.max(0.28, 1 - Math.abs(rel) / 165);

            return (
              <div
                key={clip.slotKey}
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${ringRadius}px)`,
                  opacity,
                  backfaceVisibility: 'hidden',
                }}
                className="absolute inset-0"
              >
                <VideoCard
                  clip={clip}
                  onExpand={setActiveClip}
                  wasDraggedRef={wasDraggedRef}
                />
              </div>
            );
          })}
        </div>

        {/* Soft Left & Right Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-30" />
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeClip && (
        <div
          onClick={() => setActiveClip(null)}
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-[#111113] border border-zinc-800 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveClip(null)}
              aria-label="Close video"
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white hover:border-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <video
              src={activeClip.videoUrl}
              poster={activeClip.poster}
              controls
              autoPlay
              className="w-full max-h-[75vh] object-contain bg-black"
            />

            <div className="p-5 text-left border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e11d1d] font-bold">
                  {activeClip.tag}
                </span>
                <h3 className="text-lg font-bold text-white font-display">{activeClip.title}</h3>
                <p className="text-xs text-zinc-400">{activeClip.subtitle}</p>
              </div>
              <span className="text-xs font-mono text-zinc-300">{activeClip.duration}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;
