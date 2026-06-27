import React from 'react';

const UserStats = ({ stats = {} }) => {
  const { spotsShared = 0, reviewsWritten = 0, followers = '0' } = stats;

  const statItems = [
    { value: spotsShared, label: 'Spots Shared' },
    { value: reviewsWritten, label: 'Reviews Written' },
    { value: followers, label: 'Followers' }
  ];

  return (
    <div className="bg-surface-container-low p-stack-lg rounded-xl shadow-sm border border-white/40">
      <h3 className="font-headline-md text-headline-md mb-stack-md text-on-surface">
        Profile Stats
      </h3>
      <div className="grid grid-cols-3 gap-stack-sm">
        {statItems.map((item, i) => (
          <div key={i} className="text-center">
            <div className="font-headline-lg text-primary text-[32px] font-bold">
              {item.value}
            </div>
            <div className="font-label-md text-on-surface-variant text-[12px]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStats;
