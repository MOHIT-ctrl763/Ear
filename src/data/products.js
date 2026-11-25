import heroExact from '../assets/images/rocko-hero-case.png';
import cardBudsPro from '../assets/images/clean-buds-pro.png';
import cardAirPro from '../assets/images/clean-air-pro.png';
import cardNeo from '../assets/images/clean-neo.png';
import cardGamex from '../assets/images/clean-gamex.png';
import lifestyleExact from '../assets/images/lifestyle-exact-2x.png';

// Standalone high-res versions for Product Detail pages
import budsProHighRes from '../assets/images/buds-pro.jpg';
import airProHighRes from '../assets/images/air-pro.jpg';
import neoHighRes from '../assets/images/neo.jpg';
import gamexHighRes from '../assets/images/gamex.jpg';
import heroHighRes from '../assets/images/hero-earbuds.jpg';

export { 
  heroExact, 
  cardBudsPro, 
  cardAirPro, 
  cardNeo, 
  cardGamex, 
  lifestyleExact,
  budsProHighRes,
  airProHighRes,
  neoHighRes,
  gamexHighRes,
  heroHighRes,
  // Compatibility exports
  lifestyleExact as lifestyleImg,
  heroExact as heroEarbuds
};

export const products = [
  {
    id: 'rocko-buds-pro',
    name: 'rocKo Buds Pro',
    edition: 'Master Studio Edition',
    tagline: 'Deep Bass. Clear Calls.',
    price: 1999,
    originalPrice: 3499,
    discount: '43% OFF',
    rating: 4.9,
    reviewsCount: 3840,
    badge: 'Best Seller',
    badgeType: 'bestseller',
    badgeColor: 'bg-[#7c3aed]',
    badgeIcon: '★',
    image: cardBudsPro,
    highResImage: budsProHighRes,
    category: 'Master Series',
    finish: 'Glacier Ceramic White & Platinum',
    color: 'Glacier White',
    colors: ['#FFFFFF', '#141416', '#C5A059'],
    driver: '12.5mm Custom Titanium Diaphragm',
    battery: '48H Combined Playtime (Fast Warp Charging)',
    bluetooth: 'Bluetooth 5.4 Low-Energy High-Res',
    latency: '38ms Ultra-Low Latency',
    anc: '38dB Quad-Core Hybrid Active Noise Shield',
    waterproof: 'IPX5 Marine-Grade Resistance',
    materials: 'Aero-grade titanium alloy, ceramic shell, gold-plated contacts',
    description: 'The archetype of bespoke wireless acoustics. Designed for purists who demand concert-hall fidelity in an featherweight, ergonomically sculpted ceramic architecture.',
    features: [
      'Quad-Mic AI Environmental Acoustic Cancellation (ENC)',
      'Dual Dynamic Titanium Drivers with Neodymium N52 Magnets',
      'Warp Charge: 10 minutes charging delivers 3.5 hours playback',
      'rocKo Precision Sound Companion EQ with Studio Profiles',
      'Capacitive micro-touch controls with haptic audio feedback'
    ],
    inTheBox: [
      'rocKo Buds Pro with Wireless Charging Case',
      '3x Pairs of Medical-Grade Ergonomic Ear Tips (S/M/L)',
      'Bespoke Braided USB-C Charging Cable',
      'Certificate of Authenticity & 3-Year Concierge Warranty Card'
    ],
    specs: {
      'Driver Unit': '12.5mm Titanium Composite Driver',
      'Frequency Response': '15 Hz – 42,000 Hz',
      'Impedance': '32 Ohms ± 15%',
      'Battery Architecture': '10h buds + 38h case (48h total)',
      'Total Weight': '3.7g per acoustic unit'
    }
  },
  {
    id: 'rocko-air-pro',
    name: 'rocKo Air Pro',
    edition: 'Haute Obsidian Edition',
    tagline: 'Smart Sound. Smart You.',
    price: 2499,
    originalPrice: 3999,
    discount: '37% OFF',
    rating: 4.95,
    reviewsCount: 2610,
    badge: 'Premium',
    badgeType: 'premium',
    badgeColor: 'bg-[#2563eb]',
    badgeIcon: '💎',
    image: cardAirPro,
    highResImage: airProHighRes,
    category: 'Haute Luxe',
    finish: 'Midnight Obsidian & Matte Satin',
    color: 'Midnight Obsidian',
    colors: ['#0A0A0E', '#E2E8F0', '#C5A059'],
    driver: '13.2mm Bio-Cellulose Diaphragm',
    battery: '52H Marathon Battery with Wireless Qi',
    bluetooth: 'Bluetooth 5.4 with LDAC 990kbps Support',
    latency: '30ms Audiophile Response',
    anc: '44dB Dual-Feed Active Silence Shield',
    waterproof: 'IPX6 Sweat & Water Resistance',
    materials: 'Matte obsidian polycarbonate, satin aerospace rim, silicone seals',
    description: 'Precision sculpted for the discerning executive and globetrotter. Incorporates dual-feed feedforward and feedback microphones to erase jet engines and metropolitan clamor.',
    features: [
      'Real-Time 44dB Adaptive Acoustic Noise Cancellation',
      'Certified Hi-Res Wireless Audio with LDAC 24-bit 96kHz',
      'Seamless Multipoint Pairing (Laptop, Tablet & Smartphone)',
      'Optical in-ear sensors for frictionless auto-pause and resume',
      'Pressure-relieving acoustic vent architecture for zero fatigue'
    ],
    inTheBox: [
      'rocKo Air Pro & Qi Wireless Smart Case',
      'Handcrafted Protective Travel Sleeve',
      'Gold-plated Fast-Charge USB-C Cable',
      'VIP Concierge Lifetime Membership Invitation'
    ],
    specs: {
      'Driver Unit': '13.2mm High-Density Bio-Cellulose',
      'Frequency Range': '10 Hz – 45,000 Hz',
      'Bluetooth Codecs': 'LDAC, AAC, SBC, aptX Adaptive',
      'Battery Life': '12h continuous + 40h case (52h total)',
      'Weight': '3.5g featherweight architecture'
    }
  },
  {
    id: 'rocko-neo',
    name: 'rocKo Neo',
    edition: 'Pure Pearl Edition',
    tagline: 'Lightweight. Powerful.',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 4120,
    badge: null,
    badgeType: null,
    badgeColor: '',
    badgeIcon: '',
    image: cardNeo,
    highResImage: neoHighRes,
    category: 'Everyday',
    finish: 'Pure Pearl & Chrome Micro-Ring',
    color: 'Pure Pearl',
    colors: ['#F8FAFC', '#18181B'],
    driver: '10.5mm Neodymium BassBoost Driver',
    battery: '40H Continuous Playback Capacity',
    bluetooth: 'Bluetooth 5.3 QuickSync Instant Pair',
    latency: '45ms Responsive Sync',
    anc: 'Acoustic Passive Noise-Seal Isolation',
    waterproof: 'IPX4 Splash & Dust Proof',
    materials: 'Micro-pebble matte casing, hypoallergenic ear tips',
    description: 'Minimalist proportion meets maximalist acoustics. The pocket-sized pebble case slips imperceptibly into tailored pockets while projecting resonant, panoramic bass.',
    features: [
      'Ultra-compact 3.4g organic pebble ergonomic form',
      'Deep Dynamic Bass Reflex chamber for rich low-end presence',
      'Single-tap Siri & Google Assistant voice integration',
      'Quick Warp: 10 mins in case = 2.5 hours listening',
      'Dual master earbud design with independent single-bud mode'
    ],
    inTheBox: [
      'rocKo Neo Earbuds & Compact Charging Case',
      '3x Custom Fit Hypoallergenic Silicone Tips',
      'USB-C Fast Charging Cable',
      'Quick Start Guide & Warranty Guarantee'
    ],
    specs: {
      'Driver Unit': '10.5mm High-Flux Neodymium',
      'Frequency Response': '20 Hz – 20,000 Hz',
      'Battery Capacity': '8h buds + 32h case (40h total)',
      'Charging Port': 'USB Type-C Warp Interface',
      'Single Bud Weight': '3.4g featherweight'
    }
  },
  {
    id: 'rocko-gamex',
    name: 'rocKo GameX',
    edition: 'Chroma Esports Edition',
    tagline: 'Low Latency. High Performance.',
    price: 2999,
    originalPrice: 4499,
    discount: '33% OFF',
    rating: 4.95,
    reviewsCount: 5300,
    badge: 'Gaming',
    badgeType: 'gaming',
    badgeColor: 'bg-[#16a34a]',
    badgeIcon: '🎮',
    image: cardGamex,
    highResImage: gamexHighRes,
    category: 'Esports Pro',
    finish: 'Cyber Stealth Black with Chroma Prism LED',
    color: 'Cyber RGB Black',
    colors: ['#0c0c10', '#111827'],
    driver: '13mm Carbon Nanotube Diaphragm',
    battery: '46H Total Tournament Playtime',
    bluetooth: 'Bluetooth 5.4 UltraSpeed Gaming Protocol',
    latency: '24ms Extreme Tournament Low Latency',
    anc: 'Dual Environmental Noise Filter with Footstep Boost',
    waterproof: 'IPX5 Combat-Grade Sweat Resistance',
    materials: 'Reinforced tactical polymer, dynamic RGB light guides',
    description: 'Engineered for tournament champions. Dedicated 24ms HyperSync protocol eliminates audio delay entirely, giving you split-second spatial detection of enemy footsteps and reloads.',
    features: [
      'Dynamic Chroma 7-Color Prism Breathing LEDs on case & stems',
      'Dedicated Hardware Gaming Mode DSP with 24ms ultra-low latency',
      '360° Positional 3D Surround Sound for tactical FPS games',
      'MEMS HD Studio microphone with AI background noise cancellation',
      'Dual Gaming/Cinema/Studio acoustic presets with single-tap switch'
    ],
    inTheBox: [
      'rocKo GameX with Chroma RGB Charging Case',
      'Anti-Microbial Grip-Fit Gaming Ear Tips (S/M/L)',
      'Heavy-Duty Braided Fast USB-C Cable',
      'Esports VIP Club Pass & Official Guarantee'
    ],
    specs: {
      'Latency': '24ms Ultra-Low Tournament Speed',
      'Driver Unit': '13mm Carbon Nanotube Diaphragm',
      'Acoustic Range': '15 Hz – 24,000 Hz',
      'Battery System': '9h gaming buds + 37h RGB case (46h total)',
      'Weight': '3.9g balanced ergonomic stem'
    }
  }
];
