import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'rocKo Buds Pro',
    tagline: 'Deep Bass. Clear Calls.',
    price: '₹1,999',
    originalPrice: '₹3,499',
    badge: 'Best Seller',
    badgeClass: 'badge-bestseller',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'rocKo Air Pro',
    tagline: 'Smart Sound. Smart You.',
    price: '₹2,499',
    originalPrice: '₹3,999',
    badge: null,
    image: 'https://images.unsplash.com/photo-1631176093617-63490a3d785a?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'rocKo Neo',
    tagline: 'Lightweight. Powerful.',
    price: '₹1,499',
    originalPrice: '₹2,499',
    badge: 'Premium',
    badgeClass: 'badge-premium',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'rocKo GameX',
    tagline: 'Low Latency. High Performance.',
    price: '₹2,999',
    originalPrice: '₹4,499',
    badge: 'Gaming',
    badgeClass: 'badge-gaming',
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&h=400&fit=crop&q=80',
  },
]

const Products = () => (
  <section id="products" className="py-16 md:py-24">
    <div className="max-w-[1280px] mx-auto px-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10"
      >
        <div>
          <span className="text-[11px] tracking-[0.25em] text-white/35 uppercase font-medium">— Our Bestsellers</span>
          <h2 className="mt-2 text-3xl md:text-[38px] font-bold text-white leading-tight">Discover Our Earbuds</h2>
        </div>
        <button className="mt-3 sm:mt-0 flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-[13px] text-white/60 hover:border-primary/40 hover:text-primary transition-all">
          View All Products
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
        </button>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="product-card shine-hover"
          >
            {/* Image */}
            <div className="product-img-wrap h-52 flex items-center justify-center p-4 relative">
              {p.badge && (
                <span className={`absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide text-white ${p.badgeClass}`}>
                  {p.badge}
                </span>
              )}
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="p-4 pt-3">
              <h3 className="text-[14px] font-bold text-white mb-0.5 leading-snug">{p.name}</h3>
              <p className="text-[11px] text-white/35 mb-3">{p.tagline}</p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-bold text-primary">{p.price}</span>
                <span className="text-xs text-white/25 line-through">{p.originalPrice}</span>
              </div>

              <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/8 text-[12px] font-medium text-white/70 hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"/></svg>
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Products
