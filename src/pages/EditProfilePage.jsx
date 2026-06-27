import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Check, X } from "lucide-react";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/Ui/Footer/Footer";
import InputField from "../Components/Ui/Form/InputField";
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";
import { useAuth } from "../Components/auth/AuthContext";

const SPOT_CATEGORIES = [
  "Restaurants",
  "Cafes",
  "Beaches",
  "Parks",
  "Museums",
  "Shopping",
  "Nightlife",
  "Entertainment",
  "Hidden gems"
];

const ATMOSPHERES = ["Quiet", "Romantic", "Family friendly", "Luxury", "Casual"];
const PRICE_RANGES = ["Budget", "Medium", "Premium"];

export default function EditProfilePage() {
  const navigate = useNavigate();
  const { profile, updateProfile } = useAuth();

  const [name, setName] = useState(profile?.name || "");
  const [location, setLocation] = useState(profile?.location || "");
  const [bio, setBio] = useState(profile?.bio || "");
  const [avatar, setAvatar] = useState(profile?.avatar || "");
  const [coverImage, setCoverImage] = useState(profile?.coverImage || "");
  const [favoriteSpots, setFavoriteSpots] = useState(profile?.favoriteSpots || []);
  const [favoriteAtmosphere, setFavoriteAtmosphere] = useState(profile?.favoriteAtmosphere || []);
  const [preferredPriceRange, setPreferredPriceRange] = useState(profile?.preferredPriceRange || "Medium");

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be smaller than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "avatar") {
          setAvatar(reader.result);
        } else if (type === "cover") {
          setCoverImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleCategory = (category) => {
    setFavoriteSpots((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleAtmosphere = (atmosphere) => {
    setFavoriteAtmosphere((prev) =>
      prev.includes(atmosphere)
        ? prev.filter((item) => item !== atmosphere)
        : [...prev, atmosphere]
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    updateProfile({
      name,
      location,
      bio,
      avatar,
      coverImage,
      favoriteSpots,
      favoriteAtmosphere,
      preferredPriceRange,
    });

    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Navigate back to profile page after 1.5 seconds so they can see the success toast
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/profile");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Success toast notification */}
        {showSuccess && (
          <div className="fixed top-20 right-6 z-50 bg-green-500 text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-fadeIn border border-green-600">
            <span className="bg-white/20 p-1 rounded-full">
              <Check size={16} />
            </span>
            <span className="font-semibold text-xs tracking-wide">Changes saved successfully!</span>
          </div>
        )}

        <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-8">
          {/* Back link and Header */}
          <div className="space-y-4">
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold"
            >
              <ArrowLeft size={14} /> Back to Profile
            </Link>

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Edit Profile</h1>
              <p className="text-sm text-on-surface-variant mt-1">
                Customize your public profile, spot preferences, and search default filters.
              </p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-8">
            {error && (
              <div className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-xl p-3 text-center font-medium">
                {error}
              </div>
            )}

            {/* Banner & Avatar Card */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl overflow-hidden shadow-sm">
              {/* Cover Banner */}
              <div className="relative h-48 bg-surface-container">
                <img
                  src={coverImage || "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000"}
                  alt="Profile Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => coverInputRef.current.click()}
                    className="bg-white/90 hover:bg-white text-on-surface font-semibold text-xs px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <Camera size={14} />
                    Change Cover
                  </button>
                  <input
                    type="file"
                    ref={coverInputRef}
                    onChange={(e) => handleImageUpload(e, "cover")}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Avatar position overlap */}
              <div className="px-6 pb-6 relative pt-12">
                <div className="absolute -top-16 left-6 w-28 h-28 rounded-full border-4 border-white/90 overflow-hidden shadow-lg bg-surface-container relative group">
                  <img
                    src={avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <button
                      type="button"
                      onClick={() => avatarInputRef.current.click()}
                      className="text-white p-2 rounded-full hover:scale-110 transition-transform"
                      aria-label="Upload Avatar"
                    >
                      <Camera size={18} />
                    </button>
                    <input
                      type="file"
                      ref={avatarInputRef}
                      onChange={(e) => handleImageUpload(e, "avatar")}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="font-bold text-lg text-on-surface">Avatar & Banner Picture</h3>
                  <p className="text-xs text-on-surface-variant">Recommended size: Square for avatar, wide aspect ratio for cover.</p>
                </div>
              </div>
            </div>

            {/* Personal Info Card */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <h2 className="text-lg font-bold text-on-surface border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary">person</span>
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Display Name"
                  placeholder="Elena Rodriguez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <InputField
                  label="City / Location"
                  placeholder="New York, NY"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="flex flex-col w-full text-left">
                <label className="text-label-md font-medium text-on-surface-variant mb-1.5 block">
                  Short Bio / Description
                </label>
                <textarea
                  placeholder="Tell us about yourself..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border font-body-md transition-all duration-200 outline-none bg-surface-container text-on-surface placeholder:text-on-surface-variant/50 border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-outline focus:bg-surface-container-lowest resize-none h-28"
                />
              </div>
            </div>

            {/* Your Favorite Spots preference Card */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <h2 className="text-lg font-bold text-on-surface border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary">favorite</span>
                Your Favorite Spots
              </h2>
              
              <div className="space-y-2">
                <p className="text-xs text-on-surface-variant/80">Select categories you enjoy visiting. We will prioritize these in recommendations.</p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {SPOT_CATEGORIES.map((category) => {
                    const active = favoriteSpots.includes(category);
                    return (
                      <button
                        type="button"
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`text-xs font-semibold px-4 py-2.5 rounded-full border transition-all duration-200 active:scale-95 cursor-pointer ${
                          active
                            ? "bg-primary border-primary text-on-primary shadow-sm shadow-primary/10"
                            : "bg-surface-container hover:bg-surface-container-high border-outline-variant/20 text-on-surface-variant"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Profile Preferences Card */}
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-on-surface border-b border-outline-variant/10 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">tune</span>
                  Vibe Preferences
                </h2>

                <div className="space-y-3">
                  <span className="text-sm font-bold text-on-surface block text-left">Favorite Atmosphere</span>
                  <div className="flex flex-wrap gap-2.5">
                    {ATMOSPHERES.map((atm) => {
                      const active = favoriteAtmosphere.includes(atm);
                      return (
                        <button
                          type="button"
                          key={atm}
                          onClick={() => toggleAtmosphere(atm)}
                          className={`text-xs font-semibold px-4 py-2.5 rounded-full border transition-all duration-200 active:scale-95 cursor-pointer ${
                            active
                              ? "bg-primary border-primary text-on-primary shadow-sm shadow-primary/10"
                              : "bg-surface-container hover:bg-surface-container-high border-outline-variant/20 text-on-surface-variant"
                          }`}
                        >
                          {atm}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t border-outline-variant/10 pt-6">
                <span className="text-sm font-bold text-on-surface block text-left">Preferred Price Range</span>
                <div className="flex gap-3 max-w-md">
                  {PRICE_RANGES.map((priceVal) => {
                    const active = preferredPriceRange === priceVal;
                    return (
                      <button
                        type="button"
                        key={priceVal}
                        onClick={() => setPreferredPriceRange(priceVal)}
                        className={`flex-1 text-xs font-semibold py-3 rounded-xl border text-center transition-all duration-200 active:scale-95 cursor-pointer ${
                          active
                            ? "bg-primary border-primary text-on-primary shadow-sm shadow-primary/10"
                            : "bg-surface-container hover:bg-surface-container-high border-outline-variant/20 text-on-surface-variant"
                        }`}
                      >
                        {priceVal}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Actions Form Footer */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-outline-variant/15">
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="font-label-md px-6 py-3 rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              
              <PrimaryButton
                type="submit"
                size="md"
                icon="check"
                iconPosition="left"
              >
                Save Changes
              </PrimaryButton>
            </div>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
}
