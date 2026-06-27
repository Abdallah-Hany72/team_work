// src/pages/PlaceDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import SpotGallery from "../Components/Person 4/SpotGallery";
import SpotInfo from "../Components/Person 4/SpotInfo";
import SpotMetaData from "../Components/Person 4/SpotMetaData";
import ReservationSection from "../Components/Person 4/ReservationSection";
import CommunityReviews from "../Components/Person 4/CommunityReviews";
import SimilarCurations from "../Components/Person 4/SimilarCurations";
import Footer from "../Components/Ui/Footer/Footer";
import { useAuth } from "../Components/auth/AuthContext";
import AddToCollectionModal from "../Components/Ui/AddToCollectionModal";
import EditSpotModal from "../Components/Ui/EditSpotModal";

export default function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSpotSaved, toggleSaveSpot, spots, user } = useAuth();
  
  const [isOrganizeOpen, setIsOrganizeOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const spot = spots.find((s) => s.id === Number(id));

  // Redirect if deleted
  useEffect(() => {
    if (!spot) {
      navigate("/discover", { replace: true });
    }
  }, [spot, navigate]);

  if (!spot) return null;

  const isAdmin = user && user.role === "admin";

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Spot link copied to clipboard!");
  };

  const handleSave = () => {
    toggleSaveSpot(spot.id);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Gallery Header Section */}
          <SpotGallery images={spot.images} tags={spot.tags} />

          {/* Details & Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
            {/* Left Content (Spot Details + Reviews) */}
            <div className="lg:col-span-8 space-y-8">
              <SpotInfo
                title={spot.name}
                rating={spot.rating}
                reviewCount={spot.reviews?.length || 0}
                category={spot.category}
                description={spot.description}
                vibeMetrics={spot.vibeMetrics}
                vibeTags={spot.vibeTags}
                onShare={handleShare}
                onSave={handleSave}
                onOrganize={() => setIsOrganizeOpen(true)}
                saved={isSpotSaved(spot.id)}
                isAdmin={isAdmin}
                onEdit={() => setIsEditOpen(true)}
              />

              <hr className="border-outline-variant/20" />

              <CommunityReviews reviews={spot.reviews} />
            </div>

            {/* Right Sidebar (Metadata + Similar Curations) */}
            <div className="lg:col-span-4 space-y-6">
              <SpotMetaData
                address={spot.address}
                hours={spot.hours}
                contact={spot.contact}
                mapImage={spot.mapImage}
              >
                <ReservationSection
                  bookingUrl={spot.bookingUrl}
                />
              </SpotMetaData>

              <SimilarCurations currentSpot={spot} />
            </div>
          </div>
        </main>
      </div>

      <AddToCollectionModal 
        isOpen={isOrganizeOpen} 
        onClose={() => setIsOrganizeOpen(false)} 
        spot={spot} 
      />

      <EditSpotModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        spot={spot}
      />

      <Footer />
    </div>
  );
}
