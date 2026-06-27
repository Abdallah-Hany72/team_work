import React from 'react';
import ReviewCard from '../reviews/ReviewCard';

const UserReviews = ({ reviews = [], onLoadMore = () => {} }) => {
  return (
    <div>
      <div className="flex justify-between items-end mb-stack-md">
        <h3 className="font-headline-lg text-headline-lg text-on-surface">Recent Reviews</h3>
        <button className="text-primary font-label-md hover:underline cursor-pointer">
          View all {reviews.length}
        </button>
      </div>
      
      <div className="space-y-stack-md">
        {reviews.map((rev, i) => (
          <ReviewCard
            key={rev.id || i}
            spotTitle={rev.spotTitle}
            spotImage={rev.spotImage}
            rating={rev.rating}
            date={rev.date}
            text={rev.text}
            tags={rev.tags}
            variant="profile"
          />
        ))}
      </div>
      
      <button
        onClick={onLoadMore}
        className="w-full mt-stack-lg py-4 rounded-xl border-2 border-dashed border-outline-variant text-on-surface-variant font-label-md hover:bg-surface-container-low transition-colors cursor-pointer"
      >
        Load More Reviews
      </button>
    </div>
  );
};

export default UserReviews;
