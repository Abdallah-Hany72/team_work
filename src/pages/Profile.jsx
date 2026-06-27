// src/pages/Profile.jsx
import React from "react";
import Navbar from "../Components/shared/Navbar";
import ProfileHeader from "../Components/Person 6/ProfileHeader";
import UserStats from "../Components/Person 6/UserStats";
import BadgesGrid from "../Components/Person 6/BadgesGrid";
import UserReviews from "../Components/Person 6/UserReviews";
import Footer from "../Components/Ui/Footer/Footer";
import { MOCK_USER } from "../constants/mockData";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/auth/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Cover & Avatar Header Section */}
          <ProfileHeader
            name={profile?.name || MOCK_USER.name}
            location={profile?.location || MOCK_USER.location}
            bio={profile?.bio || MOCK_USER.bio}
            avatarImage={profile?.avatar || MOCK_USER.avatar}
            coverImage={profile?.coverImage || MOCK_USER.coverImage}
            onEdit={() => navigate("/profile/edit")}
            onShare={() => alert("Profile link copied!")}
          />

          {/* Profile Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
            {/* Left Sidebar Column (Stats, Badges, Map) */}
            <div className="lg:col-span-4 space-y-6">
              <UserStats stats={MOCK_USER.stats} />
              
              <BadgesGrid />

              {/* Explore Map Callout */}
              <div className="relative rounded-2xl overflow-hidden shadow-md h-32 group border border-outline-variant/15">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ki9H8VfLtjXkSopI0Ss6WSlUsHy4-tkQOHtQDO2YELEJ_R15iKvkpZZyP6KvYH0F_Nz6-LFt_8Ut5-eaqZHKBj-bGp_ZMPbaMwo8IP20R2Sont6YUkKFPFggHkasvgqHGsPRtPVtoihqZ5Svo6YUqar3JlotUH9Y_uubC23R9cov806je27Cb7kJHCZUpUtFmE8nn7s_aY4bqeLYzumNGzVFTfSo9cELZYtqKXFNaaOpcxBWzpnHpuo492sjiR2qG9tTVHMkXaE"
                  alt="Explore Map Preview"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => alert("Opening explore map view...")}
                    className="bg-surface text-on-surface font-label-md px-5 py-2 rounded-full shadow-lg scale-up active:scale-95 transition-all text-xs cursor-pointer"
                  >
                    Explore Map
                  </button>
                </div>
              </div>
            </div>

            {/* Right Feed Column (User Reviews) */}
            <div className="lg:col-span-8">
              <UserReviews
                reviews={MOCK_USER.reviews}
                onLoadMore={() => alert("Loading more reviews...")}
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
