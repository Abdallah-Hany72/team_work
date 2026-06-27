// src/pages/AddSpotFlow.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import SpotForm from "../Components/AddSpot/SpotForm"; // Venue name, address, category
import NearbySuggestions from "../Components/AddSpot/NearbySuggestions";
import RecentSearches from "../Components/AddSpot/RecentSearches";
import ShareSpotSection from "../Components/AddSpot/ShareSpotSection";
import { ArrowLeft, X } from "lucide-react";
import Footer from "../Components/Ui/Footer/Footer";

export default function AddSpotFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 = Search/Find, 2 = Fill details form

  const [searchValue, setSearchValue] = useState("");



  const handleSearchSubmit = (value) => {
    const query = value || searchValue;

    if (query.trim()) {
      navigate(`/discover?q=${encodeURIComponent(query)}`);
    }
  };

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  category: "",
  address: "",
  phone: "",
  website: "",
  bookingUrl: "",
  description: "",
  vibes: [],
  images: [],
  hours: {},
});
  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Venue name is required.");
      return false;
    }

    if (!formData.category.trim()) {
      alert("Category is required.");
      return false;
    }

    if (!formData.address.trim()) {
      alert("Address is required.");
      return false;
    }

    if (formData.vibes.length === 0) {
      alert("Please select at least one vibe.");
      return false;
    }

    if (formData.images.length === 0) {
      alert("Please upload at least one image.");
      return false;
    }

    return true;
  };
  
 const submitSpot = async () => {
  if (!validateForm()) return;

  setSubmitting(true);

  try {
    console.log({
      status: "pending",
      ...formData,
    });

    await new Promise(resolve => setTimeout(resolve, 1200));

    navigate("/add-spot/success", {
  state: {
    spot: formData,
  },
});
  } catch (error) {
    console.error(error);
    alert("Failed to submit the spot.");
  } finally {
    setSubmitting(false);
  }
};
  
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        {/* Customized Navbar matching the reference design */}
        {step === 2 ? (
          <nav className="w-full h-16 border-b border-outline-variant/30 bg-surface-container-lowest px-6 md:px-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setStep(1)} className="hover:text-primary transition-colors cursor-pointer" aria-label="Close">
                <X size={20} />
              </button>
              <span className="font-display-lg text-headline-lg font-bold text-primary tracking-tight">Spotly</span>
            </div>
            <div className="flex items-center gap-6 font-label-md">
              <span className="text-primary border-b-2 border-primary font-bold py-1">Add a Spot</span>
              <Link to="/discover" className="text-on-surface-variant hover:text-primary transition-colors py-1">Explore</Link>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </nav>
        ) : (
          <Navbar />
        )}

        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* STEP 1: FIND PLACE SCREEN */}
          {step === 1 && (
            <div className="space-y-12">
              {/* Back to discover */}
              <Link to="/discover" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold">
                <ArrowLeft size={14} /> Back to Discover
              </Link>

              {/* Central Header & Search bar */}
              <ShareSpotSection
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                onSearchSubmit={handleSearchSubmit}
                onManualAdd={() => setStep(2)}
                onBack={() => navigate("/discover")}
                loading={loading}
              />

              {/* Suggestions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {/* Left: Suggestions */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-on-surface-variant/75 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                    Nearby Suggestions
                  </h3>
                  <NearbySuggestions />
                </div>
                {/* Right: Recent Searches & CTA */}
                <div className="space-y-6">

                  <RecentSearches
                    onSearch={(value) => handleSearchSubmit(value)}
                  />
                  <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-sm mb-1">Can't find a spot?</h4>
                      <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-4">
                        If the place is new or not listed yet, you can add all the details manually including photos and vibe tags.
                      </p>
                      <button
                        onClick={() => {
                          setStep(2);
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-2.5 rounded-full text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        Add Spot Manually
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: THE DETAILS FORM */}
          {step === 2 && (
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Form Stepper */}
              <div className="flex gap-4">
                <div className="flex-1 h-1.5 bg-primary rounded-full" />
                <div className="flex-1 h-1.5 bg-primary rounded-full" />
                <div className="flex-1 h-1.5 bg-outline-variant/20 rounded-full" />
                <div className="flex-1 h-1.5 bg-outline-variant/20 rounded-full" />
              </div>

              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">The Details</h1>
                <p className="text-on-surface-variant/80 text-sm mt-1">
                  Help others find their perfect vibe by sharing the essentials about this spot.
                </p>
              </div>

              {/* Form sections stacked vertically */}
              <div className="space-y-6">
                <SpotForm
                  formData={formData}
                  setFormData={setFormData}
                  onBack={() => {
                    setStep(1);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  onNext={submitSpot}
                   loading={submitting}
                  
                />
              </div>

            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
