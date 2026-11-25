import React from 'react';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import Bestsellers from '../components/Bestsellers';
import BendingMarquee from '../components/BendingMarquee';
import LifestyleSection from '../components/LifestyleSection';
import CardSpread from '../components/CardSpread';
import VideoShowcase from '../components/VideoShowcase';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div className="bg-[#f6f6f7] text-[#111113] min-h-screen">
      {/* 1. Haute Acoustics Hero Banner */}
      <Hero />

      {/* 2. 5-Pillar Luxury Feature Bar */}
      <FeatureBar />

      {/* 3. The Master Bestsellers 4-Card Grid */}
      <Bestsellers />

      {/* 3.5. 3D Bending Marquee Showcase */}
      <BendingMarquee />

      {/* 5. Lifestyle "Designed for a Smarter Tomorrow" Atelier Section */}
      <LifestyleSection />

      {/* 5.5. Fanned Card Spread of rocKo Pods */}
      <CardSpread />

      {/* 6. 4-Clip Video Reels Showcase (Super Admin ready) */}
      <VideoShowcase />

      {/* 7. Private Salon VIP Newsletter Banner */}
      <Newsletter />
    </div>
  );
};

export default HomePage;
