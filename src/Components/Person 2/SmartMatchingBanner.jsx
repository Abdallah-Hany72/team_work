import React from 'react';

const SmartMatchingBanner = () => {
  return (
    <div className="md:col-span-2 group relative rounded-xl overflow-hidden sunlight-shadow bg-tertiary-container/10 p-8 flex flex-col justify-center">
      <div className="relative z-10">
        <span
          className="material-symbols-outlined text-4xl text-primary mb-4"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          auto_awesome
        </span>
        <h4 className="text-on-surface font-headline-lg text-headline-lg mb-2">
          Personalized for you
        </h4>
        <p className="text-on-surface-variant text-body-md mb-6">
          Let Spotly suggest your next outing based on your saved vibes and previous visits.
        </p>
        <button className="bg-on-surface text-surface px-6 py-3 rounded-full font-label-md text-label-md inline-flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer">
          Enable Smart Matching{' '}
          <span className="material-symbols-outlined text-sm">bolt</span>
        </button>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[200px] rotate-12">map</span>
      </div>
    </div>
  );
};

export default SmartMatchingBanner;
