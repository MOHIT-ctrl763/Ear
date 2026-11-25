import React from 'react';
import rockoLogoLight from '../assets/images/rocko-logo.png';
import rockoLogoDark from '../assets/images/rocko-logo-dark.png';

const RockoLogo = ({ className = 'h-7 w-auto', variant = 'dark' }) => {
  const src = variant === 'light' ? rockoLogoLight : rockoLogoDark;
  return (
    <div className="inline-flex items-center group">
      <img
        src={src}
        alt="rocKo"
        className={`${className} object-contain select-none transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </div>
  );
};

export default RockoLogo;
