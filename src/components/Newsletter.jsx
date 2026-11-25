import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#f6f6f7] relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Clean Hardware Newsletter Card */}
        <div className="relative rounded-2xl bg-[#111113] border border-zinc-800 px-6 py-6 sm:px-9 sm:py-7 overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Envelope Icon + Text */}
            <div className="flex items-center gap-4 text-left w-full lg:w-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#1b1b20] border border-zinc-700/70 flex items-center justify-center text-white shrink-0">
                <Mail className="w-5 h-5 text-[#e11d1d]" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Join the rocKo Community
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-0.5">
                  Get early access to new drops, firmware updates, and exclusive offers.
                </p>
              </div>
            </div>

            {/* Right: Input & Subscribe Button */}
            <form onSubmit={handleSubmit} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="relative flex items-center bg-[#e5e7eb] rounded-full p-1 pl-4 shadow-inner">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-black placeholder:text-gray-500 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="btn-gold-sheen px-6 py-2.5 rounded-full bg-[#e11d1d] hover:bg-[#dc2626] text-white text-xs font-bold tracking-wider uppercase transition-colors shrink-0 shadow-md shadow-red-950/50"
                >
                  {subscribed ? 'Joined!' : 'Subscribe'}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1.5 pl-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Your VIP invitation has been dispatched. Welcome to rocKo Atelier.
                </p>
              )}
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
