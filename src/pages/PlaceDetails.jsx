// src/pages/PlaceDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import SpotGallery from "../Components/Person 4/SpotGallery";
import SpotInfo from "../Components/Person 4/SpotInfo";
import SpotMetaData from "../Components/Person 4/SpotMetaData";
import ReservationSection from "../Components/Person 4/ReservationSection";
import CommunityReviews from "../Components/Person 4/CommunityReviews";
import SimilarCurations from "../Components/Person 4/SimilarCurations";
import Footer from "../Components/Ui/Footer/Footer";
import { MOCK_SPOTS } from "../data/mockData";

export default function PlaceDetails() {
  const { id } = useParams();

  // Find the requested spot, fallback to Spot 1 (The Glass Pavilion) for a high-fidelity demonstration
  const spot =
    MOCK_SPOTS.find((s) => s.id === Number(id)) || MOCK_SPOTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Spot link copied to clipboard!");
  };

  const handleSave = () => {

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

      <Footer />
    </div>
  );
}
