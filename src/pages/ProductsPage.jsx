import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star, ArrowUpDown, Sparkles, Check } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  const categories = ['All', 'Master Series', 'Haute Luxe', 'Everyday', 'Esports Pro'];

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search query filter
    if (searchFilter) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchFilter.toLowerCase()) ||
        p.category.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      list = list.filter(p => p.category === selectedCategory);
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [searchFilter, selectedCategory, sortBy]);

  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen pt-32 pb-24">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#e11d1d] uppercase flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d1d]" />
            THE ATELIER COLLECTION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111113] mt-1 mb-4 font-display">
            Haute Wireless Earbuds
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            Immerse yourself in precision acoustic engineering. Handcrafted in limited series with complimentary bespoke laser engraving.
          </p>
        </div>

        {/* Filters and Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-zinc-200 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#e11d1d] text-white shadow-md shadow-[#e11d1d]/20'
                    : 'bg-zinc-100 text-zinc-500 hover:text-[#111113] hover:bg-white/[0.08] border border-zinc-200'
                }`}
              >
                {cat === 'All' ? 'All Editions' : cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs text-zinc-500 flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#e11d1d]" /> Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#f6f6f7] border border-zinc-200 text-[#111113] text-xs rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#e11d1d]"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Acquisition: Low to High</option>
              <option value="price-high">Acquisition: High to Low</option>
              <option value="rating">Highest Critical Rating</option>
            </select>
          </div>

        </div>

        {/* Search Active Notification if any */}
        {searchFilter && (
          <div className="mb-6 flex items-center justify-between text-xs text-zinc-500">
            <span>Showing results matching "{searchFilter}"</span>
            <Link to="/products" className="text-[#e11d1d] underline hover:text-[#111113]">
              Clear search
            </Link>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200">
            <p className="text-zinc-500 text-sm mb-4">No creations found matching your criteria.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-6 py-2.5 rounded-full bg-[#e11d1d] text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="luxury-card group relative rounded-2xl p-4 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-[#f6f6f7] border border-white/[0.04]">
                  {product.badge && (
                    <div
                      className={`absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider shadow-md ${product.badgeColor}`}
                    >
                      <span>{product.badgeIcon}</span>
                      <span>{product.badge}</span>
                    </div>
                  )}

                  <Link to={`/product/${product.id}`} className="w-full h-full block">
                    <img
                      src={product.highResImage || product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* Details */}
                <div className="text-left px-1 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#e11d1d]">
                      {product.category}
                    </span>
                    <div className="flex items-center text-[#e11d1d] gap-1 text-xs font-bold">
                      <Star className="w-3 h-3 fill-[#e11d1d]" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-base font-bold text-[#111113] group-hover:text-[#e11d1d] transition-colors font-display">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-zinc-500 mb-3 line-clamp-1">
                    {product.tagline}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-black text-[#111113]">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {product.discount}
                    </span>
                  </div>

                  {/* Highlights mini specs */}
                  <div className="text-[11px] text-zinc-500 space-y-1 mb-4 border-t border-zinc-200 pt-3">
                    <div className="flex items-center justify-between">
                      <span>Reserve:</span>
                      <span className="text-zinc-800 font-medium font-mono">{product.battery.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Acoustics:</span>
                      <span className="text-zinc-800 font-medium font-mono">{product.driver.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="btn-gold-sheen flex-1 py-2.5 px-3 rounded-full bg-[#111113] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#27272a] flex items-center justify-center gap-1.5 transition-colors active:scale-95 shadow-md"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="py-2.5 px-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#111113] text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-200"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsPage;
