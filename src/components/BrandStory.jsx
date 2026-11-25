import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/></svg>,
    title: 'Immersive\nSound Quality',
    color: 'text-primary',
  },
  {
    icon: <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>,
    title: 'Advanced\nBluetooth 5.4',
    color: 'text-blue-400',
  },
  {
    icon: <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"/></svg>,
    title: 'Long\nBattery Life',
    color: 'text-green-400',
  },
  {
    icon: <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg>,
    title: 'Ergonomic\nDesign',
    color: 'text-amber-400',
  },
]

const BrandStory = () => (
  <section id="about" className="py-10 md:py-16">
    <div className="max-w-[1280px] mx-auto px-5">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="brand-card"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Image */}
          <div className="lg:w-[42%] relative min-h-[320px] lg:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=700&fit=crop&crop=center&q=80"
              alt="Person with earbuds"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a14] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent lg:hidden" />
          </div>

          {/* Right Content */}
          <div className="lg:w-[58%] p-8 md:p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.25em] text-primary/60 uppercase font-medium mb-5">
              — rocKo SOUND EXPERIENCE —
            </span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-white leading-[1.15] mb-5">
              Designed for<br />a Smarter Tomorrow
            </h2>
            <p className="text-white/35 text-[14px] leading-relaxed mb-7 max-w-[420px]">
              At rocKo, we believe in more than just sound.
              We believe in innovation, style and a better listening
              experience — every day, everywhere.
            </p>
            <button className="group self-start flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/12 text-[13px] font-medium text-white/80 hover:border-primary/40 hover:text-primary transition-all mb-9">
              Know More
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </button>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div key={i} className="brand-feature-item flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center ${f.color} shrink-0`}>
                    {f.icon}
                  </div>
                  <span className="text-[13px] text-white/60 font-medium leading-tight whitespace-pre-line">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default BrandStory
