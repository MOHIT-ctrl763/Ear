import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import podFront from '../assets/images/pod-3d-front.png';
import { products } from '../data/products';

const DECK_CARDS = [
  {
    id: products[2].id,
    name: products[2].name,
    edition: products[2].edition,
    price: `₹${products[2].price.toLocaleString()}`,
    tag: 'Pure Pearl',
    image: products[2].highResImage || products[2].image,
    link: `/product/${products[2].id}`,
  },
  {
    id: products[0].id,
    name: products[0].name,
    edition: products[0].edition,
    price: `₹${products[0].price.toLocaleString()}`,
    tag: 'Best Seller',
    image: products[0].highResImage || products[0].image,
    link: `/product/${products[0].id}`,
  },
  {
    id: 'rocko-signature',
    name: 'rocKo Signature',
    edition: 'Two-Tone Pearl & Obsidian',
    price: '₹2,799',
    tag: 'Flagship',
    image: podFront,
    link: '/products',
  },
  {
    id: products[1].id,
    name: products[1].name,
    edition: products[1].edition,
    price: `₹${products[1].price.toLocaleString()}`,
    tag: '-44dB ANC',
    image: products[1].highResImage || products[1].image,
    link: `/product/${products[1].id}`,
  },
  {
    id: products[3].id,
    name: products[3].name,
    edition: products[3].edition,
    price: `₹${products[3].price.toLocaleString()}`,
    tag: '24ms Esports',
    image: products[3].highResImage || products[3].image,
    link: `/product/${products[3].id}`,
  },
];

const CardSpread = () => {
  const [isSpread, setIsSpread] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const centerIndex = (DECK_CARDS.length - 1) / 2;

  return (
    <section className="py-16 sm:py-24 bg-[#f6f6f7] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e11d1d]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-500 uppercase">
                Collection Deck
              </span>
            </div>
            <h2 className="text-2xl sm:text-[36px] font-extrabold text-[#111113] tracking-[-0.025em] font-display">
              Explore <span className="text-[#e11d1d]">rocKo</span> Lineup
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg">
              Hover over the fanned deck to spread every rocKo edition open and inspect each model.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsSpread((s) => !s)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-300 text-xs font-bold text-[#111113] hover:border-[#111113] transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-[#e11d1d]" />
            <span>{isSpread ? 'Stack Deck' : 'Spread Deck'}</span>
          </button>
        </div>

        {/* Fanned Card Spread Stage */}
        <div
          onMouseEnter={() => setIsSpread(true)}
          onMouseLeave={() => {
            setIsSpread(false);
            setHoveredIdx(null);
          }}
          className="relative h-[400px] sm:h-[460px] rounded-3xl bg-white border border-zinc-200 flex items-center justify-center overflow-hidden shadow-sm px-4"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {DECK_CARDS.map((card, idx) => {
              const offset = idx - centerIndex;
              const isCardHovered = hoveredIdx === idx;

              const tx = isSpread ? offset * 155 : offset * 26;
              const ty = isSpread
                ? Math.abs(offset) * 16 + (isCardHovered ? -22 : 0)
                : Math.abs(offset) * 6;
              const rot = isSpread ? offset * 7.5 : offset * 4.5;
              const scale = isCardHovered ? 1.08 : isSpread ? 1 : 1 - Math.abs(offset) * 0.03;
              const zIndex = isCardHovered ? 40 : 20 - Math.abs(offset);

              return (
                <Link
                  key={card.id}
                  to={card.link}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${scale})`,
                    zIndex,
                    transition: 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms ease, box-shadow 300ms ease',
                  }}
                  className={`absolute w-[205px] sm:w-[240px] rounded-2xl p-3.5 bg-white border shadow-[0_16px_40px_rgba(17,17,19,0.12)] flex flex-col justify-between ${
                    isCardHovered
                      ? 'border-[#111113] shadow-[0_24px_50px_rgba(17,17,19,0.18)]'
                      : 'border-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[9.5px] font-mono uppercase tracking-wider text-zinc-700 font-bold">
                      {card.tag}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-[#111113]">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="relative h-[160px] sm:h-[190px] rounded-xl bg-[#121215] border border-zinc-200 overflow-hidden flex items-center justify-center p-3 mb-3">
                    <img
                      src={card.image}
                      alt={card.name}
                      draggable={false}
                      className="max-h-full max-w-full object-contain transition-transform duration-500"
                    />
                  </div>

                  <div className="text-left px-0.5">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#111113] leading-snug truncate">
                      {card.name}
                    </h3>
                    <p className="text-[11px] text-zinc-500 truncate mt-0.5">{card.edition}</p>
                    <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-[#111113]">{card.price}</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#e11d1d] font-bold">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSpread;
