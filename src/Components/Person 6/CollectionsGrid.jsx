import React from 'react';
import CollectionCard from './CollectionCard';

const CollectionsGrid = ({ collections = [], onCollectionClick = () => {} }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {collections.map((coll, index) => (
        <CollectionCard
          key={coll.id || index}
          title={coll.title}
          description={coll.description}
          mainImage={coll.mainImage}
          sideImage={coll.sideImage}
          extraCount={coll.extraCount}
          tag={coll.tag}
          updatedText={coll.updatedText}
          onClick={() => onCollectionClick(coll)}
        />
      ))}
    </div>
  );
};

export default CollectionsGrid;
