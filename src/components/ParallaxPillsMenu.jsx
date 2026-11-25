import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';

/**
 * Parallax Pills mobile navigation menu for rocKo.
 * Renders bouncy labeled pills that drift smoothly with cursor / touch movement.
 */
const PILL_ITEMS = [
  { label: 'Home', path: '/', tag: '01', tilt: -2.5, depth: 0.9 },
  { label: 'All Earbuds', path: '/products', tag: 'Collection', tilt: 2, depth: 1.25 },
  { label: 'rocKo Buds Pro', path: '/product/rocko-buds-pro', tag: 'Flagship', tilt: -1.5, depth: 1.1 },
  { label: 'rocKo Air Pro', path: '/product/rocko-air-pro', tag: '-44dB ANC', tilt: 2.5, depth: 0.8 },
  { label: 'rocKo Neo', path: '/product/rocko-neo', tag: 'Compact', tilt: -2, depth: 1.35 },
  { label: 'rocKo GameX', path: '/product/rocko-gamex', tag: '24ms', tilt: 1.5, depth: 1.0 },
  { label: 'About', path: '/about', tag: 'Brand', tilt: -1, depth: 1.2 },
  { label: 'Support & Warranty', path: '/contact#warranty', tag: 'Care', tilt: 2, depth: 0.85 },
  { label: 'Contact', path: '/contact', tag: 'Help', tilt: -2.5, depth: 1.15 },
];

const ParallaxPillsMenu = ({ isOpen, onClose, cartCount }) => {
  const location = useLocation();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({ x: nx * 14, y: ny * 10 });
  };

  const resetPointer = () => setPointer({ x: 0, y: 0 });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="fixed inset-0 top-[62px] z-40 bg-[#f6f6f7]/98 backdrop-blur-2xl px-5 py-7 lg:hidden border-t border-zinc-200 flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Label */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e11d1d]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                  rocKo Menu
                </span>
              </div>
              <span className="text-[10.5px] font-mono text-zinc-400">
                Tap any pill
              </span>
            </div>

            {/* Bouncy Parallax Pills Grid */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 py-2">
              {PILL_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path + item.label}
                    initial={{ opacity: 0, scale: 0.65, y: 24 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: pointer.x * item.depth,
                      y: pointer.y * item.depth,
                      rotate: item.tilt,
                    }}
                    exit={{ opacity: 0, scale: 0.75, y: 12 }}
                    transition={{
                      type: 'spring',
                      stiffness: 360,
                      damping: 20,
                      delay: idx * 0.035,
                    }}
                    whileHover={{ scale: 1.07, rotate: 0 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-sm transition-colors ${
                        isActive
                          ? 'bg-[#111113] border-[#111113] text-white shadow-md'
                          : 'bg-white border-zinc-200/90 text-[#111113] hover:border-[#111113]'
                      }`}
                    >
                      <span
                        className={`text-[9.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                          isActive
                            ? 'bg-[#e11d1d] text-white'
                            : 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="text-sm font-bold tracking-tight whitespace-nowrap">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 ${
                          isActive ? 'text-[#e11d1d]' : 'text-zinc-400'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.2 }}
            className="pt-6 mt-6 border-t border-zinc-200 flex items-center justify-between gap-3"
          >
            <Link
              to="/cart"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-zinc-300 text-[#111113] text-xs font-bold uppercase tracking-wider"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#e11d1d]" />
              <span>Bag ({cartCount})</span>
            </Link>

            <Link
              to="/products"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e11d1d] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <span>Shop All Pods</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ParallaxPillsMenu;
