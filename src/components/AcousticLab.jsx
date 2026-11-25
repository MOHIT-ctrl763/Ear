import React, { useState } from 'react';
import { Volume2, Sliders, Sparkles, Activity, Layers, Radio, CheckCircle2 } from 'lucide-react';

const AcousticLab = () => {
  const [activePreset, setActivePreset] = useState('studio');
  const [ancLevel, setAncLevel] = useState(44);
  const [spatialMode, setSpatialMode] = useState(true);

  const presets = [
    {
      id: 'studio',
      name: 'Studio Reference',
      hz: '10Hz - 45kHz',
      eq: [60, 75, 85, 90, 80, 75, 88, 92, 85, 80],
      desc: 'Uncolored acoustic reproduction calibrated to mastering studio standards.'
    },
    {
      id: 'spatial',
      name: '3D Dolby Spatial Stage',
      hz: '360° Spherical Audio',
      eq: [85, 90, 75, 70, 85, 95, 90, 85, 92, 88],
      desc: 'Dynamic head-tracking simulation creating a panoramic soundstage.'
    },
    {
      id: 'bass',
      name: 'Bass Titan Diaphragm',
      hz: '15Hz Sub-Harmonics',
      eq: [98, 95, 90, 78, 70, 65, 72, 80, 85, 82],
      desc: 'Deep titanium acoustic resonance without masking delicate vocal frequencies.'
    },
    {
      id: 'silentium',
      name: 'Silentium Shield ANC',
      hz: '-44dB Real-Time Silence',
      eq: [40, 45, 50, 60, 65, 70, 75, 80, 85, 90],
      desc: 'Inverse phase wave generation cancelling jet, train, and urban noise.'
    }
  ];

  const current = presets.find(p => p.id === activePreset) || presets[0];

  return (
    <section className="py-16 sm:py-24 bg-[#0c0c10] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#e11d1d]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#e11d1d] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e11d1d]" />
              rocKo ACOUSTIC LABORATORY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
            The Architecture of Pure Sound
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Interact with our proprietary DSP acoustic profiles. Experience how our titanium drivers contour sound to human physiology.
          </p>
        </div>

        {/* Interactive Console */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Preset Selector */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                Select Acoustic Signature
              </span>

              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(preset.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all ${
                    activePreset === preset.id
                      ? 'bg-gradient-to-r from-[#161626] to-[#15151a] border-[#e11d1d] shadow-lg shadow-[#e11d1d]/15'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white tracking-wide">
                      {preset.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#e11d1d] font-bold px-2 py-0.5 rounded-full bg-[#e11d1d]/15">
                      {preset.hz}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {preset.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Right: Live Graphic Equalizer & Sound Visualizer */}
            <div className="lg:col-span-7 bg-[#07070D] rounded-2xl p-6 sm:p-8 border border-white/[0.06] flex flex-col justify-between">
              
              {/* Header Info */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e11d1d]/10 border border-[#e11d1d]/30 flex items-center justify-center text-[#e11d1d]">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {current.name} Visualizer
                    </h4>
                    <p className="text-xs text-gray-400">
                      Real-time DSP Frequency Response Curve (24-bit 96kHz)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-emerald-400">HI-RES LDAC</span>
                </div>
              </div>

              {/* Graphic Equalizer Bars */}
              <div className="py-8 sm:py-10">
                <div className="flex items-end justify-between gap-2 sm:gap-3 h-44 px-2 sm:px-6">
                  {current.eq.map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      {/* Bar */}
                      <div className="w-full relative rounded-t-lg overflow-hidden bg-white/[0.05] h-full flex items-end">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-purple-600 via-cyan-400 to-[#e11d1d] transition-all duration-500 shadow-[0_0_15px_rgba(225,29,29,0.4)]"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      {/* Frequency label */}
                      <span className="text-[9px] font-mono text-gray-500">
                        {['20', '60', '120', '250', '500', '1k', '2k', '4k', '8k', '16k'][i]}Hz
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls footer */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e11d1d]" />
                  <span className="text-xs text-gray-300 font-medium">Dual Feedforward Microphones Active</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">Active Silence:</span>
                  <span className="text-xs font-mono font-bold text-[#e11d1d]">-{ancLevel}dB</span>
                  <input
                    type="range"
                    min="20"
                    max="48"
                    value={ancLevel}
                    onChange={(e) => setAncLevel(Number(e.target.value))}
                    className="w-24 accent-[#e11d1d] cursor-pointer"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AcousticLab;

