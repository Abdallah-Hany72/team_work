import React from 'react';
import ReviewCard from '../reviews/ReviewCard';

const CommunityReviews = ({ reviews = [] }) => {
  return (
    <div>
      <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">
        What the community says
      </h3>
      <div className="space-y-4">
        {reviews.map((rev, i) => (
          <ReviewCard
            key={rev.id || i}
            {...rev}
            variant="simple"
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityReviews;
