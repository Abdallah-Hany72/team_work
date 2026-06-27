import React from 'react';

const ProfileHeader = ({
  name,
  location,
  bio,
  avatarImage,
  coverImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBUA80G6sMez4-1Uk2S82tJunwnOem3smxykbdHmXQ8GDqVd9GyGNsGzRNpQdOEo48VieP2US-3pOMzc454reJVyzoO316Cs83rnxrTOxanK80wYciE42HI9Ixq1FebjmgMLzdOLbQnwEWFFpv9tkXVMOLfGWKNWEXLD7XTUxthoiHimUZKC_fDm0nCNfjrIlu9OUI5gRev5Ewji1oRTj_FU_WfHNlxE_sfh0kX7SHHnXtSYhduUznHh-ArEeKyedLC6nezEc5dkP0",
  onEdit = () => {},
  onShare = () => {},
}) => {
  return (
    <section className="mb-stack-lg">
      {/* Cover Image container */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-[-80px] z-0">
        <img
          className="w-full h-full object-cover"
          src={coverImage}
          alt="Profile cover banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
      </div>
      
      {/* Profile Info Overlay Row */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-stack-lg px-4 md:px-stack-lg">
        {/* Avatar */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-surface overflow-hidden shadow-2xl shrink-0">
          <img
            alt={`${name} Profile`}
            className="w-full h-full object-cover"
            src={avatarImage}
          />
        </div>
        
        {/* Info */}
        <div className="flex-1 pb-4 text-center md:text-left">
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-1">
            {name}
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-label-md mb-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>{location}</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {bio}
          </p>
        </div>

        {/* Actions */}
        <div className="pb-4 flex gap-stack-sm w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={onEdit}
            className="bg-primary text-on-primary px-stack-lg py-3 rounded-full font-label-md scale-up hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-primary/20 cursor-pointer"
          >
            Edit Profile
          </button>
          <button
            onClick={onShare}
            className="p-3 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
