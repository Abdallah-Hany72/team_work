// src/Components/Ui/EditSpotModal.jsx
import React, { useState, useEffect } from "react";
import { X, Trash2, ArrowLeft, ArrowRight, Star, Upload, Link, Check, AlertTriangle } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import Toast, { useToast } from "../admin/Toast";

// Curated high-res catalog for Egypt/Spotly vibes
const CURATED_CATALOG = [
  { id: "c1", url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80", label: "Cozy Café Interior" },
  { id: "c2", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80", label: "Specialty Coffee Bar" },
  { id: "c3", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80", label: "Bright Modern Bistro" },
  { id: "c4", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80", label: "Fine Dining Plate" },
  { id: "c5", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80", label: "Gourmet Dish Detail" },
  { id: "c6", url: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&auto=format&fit=crop&q=80", label: "Italian Trattoria Vibe" },
  { id: "c7", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80", label: "Modern Coworking Space" },
  { id: "c8", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80", label: "Laptop Study Desk" },
  { id: "c9", url: "https://images.unsplash.com/photo-1531535934027-667f6db8a8ae?w=800&auto=format&fit=crop&q=80", label: "Tech Work Bench" },
  { id: "c10", url: "https://images.unsplash.com/photo-1563918073571-a58536653526?w=800&auto=format&fit=crop&q=80", label: "Mediterranean Sea Fortress" },
  { id: "c11", url: "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80", label: "Ocean Bridge Sunset" },
  { id: "c12", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80", label: "Turquoise Beach Shore" }
];

const CATEGORIES = ["Cafés", "Restaurants", "Breakfast", "Dessert", "Coworking Spaces", "Libraries", "Study Places", "Parks", "Beaches", "Museums", "Shopping", "Entertainment"];
const CITIES = ["Alexandria, Egypt", "Cairo, Egypt", "Giza, Egypt", "North Coast, Egypt", "El Gouna, Egypt"];
const PRICES = ["$", "$$", "$$$", "$$$$"];
const ALL_TAGS = ["Quiet", "Cozy", "Romantic", "Outdoor", "Indoor", "Family Friendly", "WorkFriendly", "Study Place", "Pet Friendly", "Luxury", "Budget", "Hidden Gem", "Scenic", "Lively", "Historic"];

export default function EditSpotModal({ isOpen, onClose, spot }) {
  const { updateSpot, deleteSpot } = useAuth();
  const [toast, showToast] = useToast();

  const [activeTab, setActiveTab] = useState("basic");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("$$");
  const [rating, setRating] = useState(4.5);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Alexandria, Egypt");
  const [contact, setContact] = useState("");
  const [hours, setHours] = useState("Daily: 9:00 AM - 11:30 PM");
  const [bookingUrl, setBookingUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  // Populate state on load
  useEffect(() => {
    if (spot) {
      setName(spot.name || "");
      setCategory(spot.category || "");
      setPrice(spot.price || "$$");
      setRating(spot.rating || 4.5);
      setDescription(spot.description || "");
      setAddress(spot.address || "");
      setCity(spot.location || "Alexandria, Egypt");
      setContact(spot.contact || "");
      setHours(spot.hours?.[0] || "Daily: 9:00 AM - 11:30 PM");
      setBookingUrl(spot.bookingUrl || "");
      setTags(spot.tags || []);
      setImages(spot.images || []);
      setCoverImage(spot.image || spot.images?.[0] || "");
      setActiveTab("basic");
      setShowDeleteConfirm(false);
    }
  }, [spot, isOpen]);

  if (!isOpen || !spot) return null;

  const handleToggleTag = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Image Manager Operations
  const handleSetCover = (imgUrl) => {
    setCoverImage(imgUrl);
    showToast("Cover image set successfully.");
  };

  const handleRemoveImage = (imgUrl) => {
    if (images.length <= 1) {
      showToast("A spot must contain at least 1 image.");
      return;
    }
    setImages((prev) => prev.filter((url) => url !== imgUrl));
    if (coverImage === imgUrl) {
      const remaining = images.filter((url) => url !== imgUrl);
      setCoverImage(remaining[0] || "");
    }
    showToast("Image removed from gallery.");
  };

  const handleMoveImage = (idx, direction) => {
    const newIdx = direction === "left" ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= images.length) return;

    const updated = [...images];
    const temp = updated[idx];
    updated[idx] = updated[newIdx];
    updated[newIdx] = temp;
    setImages(updated);
  };

  const handleAddUrlImage = () => {
    if (!newImageUrl.trim()) return;
    if (images.includes(newImageUrl.trim())) {
      showToast("This image URL is already in the gallery.");
      return;
    }
    setImages((prev) => [...prev, newImageUrl.trim()]);
    setNewImageUrl("");
    showToast("Image added via URL.");
  };

  const handleCuratedSelect = (url) => {
    if (images.includes(url)) {
      showToast("This image is already in the gallery.");
      return;
    }
    if (images.length >= 12) {
      showToast("Maximum limit of 12 images reached.");
      return;
    }
    setImages((prev) => [...prev, url]);
    showToast("Added curated catalog photo.");
  };

  const handleLocalUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (images.includes(reader.result)) return;
        setImages((prev) => [...prev, reader.result]);
        showToast("Local file uploaded successfully.");
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSave = () => {
    if (!name.trim()) {
      showToast("Spot Name is required.");
      return;
    }
    if (!address.trim()) {
      showToast("Address is required.");
      return;
    }
    if (images.length === 0) {
      showToast("At least 1 image is required.");
      return;
    }

    setIsSaving(true);

    setTimeout(() => {
      const updatedFields = {
        name,
        category,
        price,
        rating: Number(rating),
        description,
        address,
        location: city,
        contact,
        hours: [hours],
        bookingUrl: bookingUrl || null,
        tags,
        images,
        image: coverImage || images[0]
      };

      updateSpot(spot.id, updatedFields);
      setIsSaving(false);
      showToast("Spot saved successfully!");
      setTimeout(() => {
        onClose();
      }, 1000);
    }, 1200); // 1.2s realistic saving transition
  };

  const handleDelete = () => {
    deleteSpot(spot.id);
    showToast("Spot deleted permanently.");
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4 overflow-y-auto animate-fade-in select-none">
      <div className="bg-surface border border-outline-variant/15 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between bg-surface-container-low">
          <div>
            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">edit_square</span>
              Edit Spot: {spot.name}
            </h2>
            <p className="text-xs text-on-surface-variant/80 mt-0.5">Admin CMS Dashboard</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-container-high transition-colors cursor-pointer text-on-surface-variant"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selectors */}
        <div className="flex border-b border-outline-variant/10 px-6 bg-surface-container-low/50 overflow-x-auto gap-2">
          {[
            { id: "basic", label: "Basic Info", icon: "info" },
            { id: "location", label: "Location & Contact", icon: "map" },
            { id: "vibes", label: "Vibes & Hours", icon: "auto_awesome" },
            { id: "images", label: "Image Manager", icon: "photo_library" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-on-surface-variant/70 hover:text-on-surface hover:border-outline-variant/40"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tab 1: Basic Info */}
          {activeTab === "basic" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Spot Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Trianon Café"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Price Level</label>
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                  >
                    {PRICES.map((pr) => (
                      <option key={pr} value={pr}>{pr} ({pr.length === 1 ? "Budget" : pr.length === 2 ? "Medium" : pr.length === 3 ? "Premium" : "Luxury"})</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Rating (1.0 - 5.0)</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      min="1.0"
                      max="5.0"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full bg-surface-container border border-outline-variant/20 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                    />
                    <Star size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-amber-500 fill-amber-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Short Description / Vibe</label>
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide a short atmospheric description..."
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* Tab 2: Location & Contact */}
          {activeTab === "location" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">City / Region</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Phone Contact</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. +20 120 001 4455"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Address *</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Qaitbay St, Bahary, Alexandria"
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Google Maps Link / Coordinates</label>
                  <input
                    type="text"
                    value={bookingUrl}
                    onChange={(e) => setBookingUrl(e.target.value)}
                    placeholder="https://maps.google.com/..."
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Website URL</label>
                  <input
                    type="text"
                    placeholder="https://example.com"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold opacity-50 cursor-not-allowed"
                    disabled
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Vibes & Hours */}
          {activeTab === "vibes" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Opening Hours</label>
                <input
                  type="text"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="e.g. Daily: 9:00 AM - 11:30 PM"
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Atmosphere & Vibe Tags</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 bg-surface-container-low p-4.5 rounded-2xl border border-outline-variant/10 max-h-[220px] overflow-y-auto">
                  {ALL_TAGS.map((tag) => {
                    const isSelected = tags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleToggleTag(tag)}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-surface border-outline-variant/15 text-on-surface-variant hover:border-outline-variant/40"
                        }`}
                      >
                        {tag}
                        {isSelected && <Check size={14} className="text-primary flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Image Manager */}
          {activeTab === "images" && (
            <div className="space-y-5">
              {/* Cover Info */}
              <div className="flex items-center gap-3 bg-surface-container-low border border-outline-variant/15 p-4 rounded-xl">
                <span className="material-symbols-outlined text-secondary text-[26px]">photo_camera</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Gallery Management</h4>
                  <p className="text-xs text-on-surface-variant">Drag & drop uploaded photos or change the Cover Image. Order matters (first is default cover).</p>
                </div>
              </div>

              {/* Upload controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Catalog Select */}
                <div className="border border-dashed border-outline-variant/20 p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">Catalog Selections</h5>
                    <p className="text-[11px] text-on-surface-variant/80 mb-3">Pick high-resolution Egypt-themed placeholders.</p>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
                    {CURATED_CATALOG.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCuratedSelect(cat.url)}
                        title={cat.label}
                        className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-outline-variant/20 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                      >
                        <img src={cat.url} alt={cat.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload Local File & URL input */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="flex-1 bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 rounded-xl px-4 py-3 text-xs font-bold text-center cursor-pointer transition flex items-center justify-center gap-2 text-on-surface-variant">
                      <Upload size={14} />
                      Upload Local Images
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleLocalUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Or paste image URL here..."
                      className="flex-1 bg-surface-container border border-outline-variant/20 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary text-on-surface font-semibold"
                    />
                    <button
                      onClick={handleAddUrlImage}
                      className="bg-primary text-on-primary text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Add URL
                    </button>
                  </div>
                </div>
              </div>

              {/* Photo list */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((url, idx) => {
                  const isCover = coverImage === url;
                  return (
                    <div
                      key={idx}
                      className={`relative aspect-[16/11] rounded-xl overflow-hidden border-2 transition-all flex flex-col justify-between group shadow bg-surface-container-low ${
                        isCover ? "border-primary ring-2 ring-primary/20 shadow-md" : "border-outline-variant/15"
                      }`}
                    >
                      <img src={url} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />

                      {/* Cover Badge overlay */}
                      {isCover && (
                        <div className="absolute top-2 left-2 bg-primary text-on-primary text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full select-none shadow">
                          Cover
                        </div>
                      )}

                      {/* Tool overlay */}
                      <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-center w-full">
                          <button
                            onClick={() => handleSetCover(url)}
                            disabled={isCover}
                            className={`p-1.5 rounded-lg border text-[10px] font-bold cursor-pointer transition ${
                              isCover
                                ? "bg-primary/25 border-primary text-white"
                                : "bg-white/20 border-white/20 text-white hover:bg-white/30"
                            }`}
                          >
                            Set Cover
                          </button>
                          <button
                            onClick={() => handleRemoveImage(url)}
                            className="bg-red-500/80 hover:bg-red-600 p-1.5 rounded-lg text-white cursor-pointer transition"
                            title="Remove image"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>

                        {/* Order controls */}
                        <div className="flex justify-center gap-2 items-center w-full">
                          <button
                            onClick={() => handleMoveImage(idx, "left")}
                            disabled={idx === 0}
                            className="bg-white/25 hover:bg-white/40 p-1 rounded-full text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition"
                            title="Move left"
                          >
                            <ArrowLeft size={12} />
                          </button>
                          <span className="text-[10px] text-white font-bold select-none">{idx + 1}</span>
                          <button
                            onClick={() => handleMoveImage(idx, "right")}
                            disabled={idx === images.length - 1}
                            className="bg-white/25 hover:bg-white/40 p-1 rounded-full text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition"
                            title="Move right"
                          >
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Delete Warning overlay */}
        {showDeleteConfirm && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[210] flex items-center justify-center p-6 animate-fade-in">
            <div className="bg-surface-container-high border border-outline-variant/30 rounded-2xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle size={28} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-on-surface">Delete Spot?</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Are you sure you want to delete <strong>{name}</strong>? This action cannot be undone and will clean up all bookmarks.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 bg-surface-container-lowest hover:bg-surface-container-high transition border border-outline-variant/20 py-2.5 rounded-xl text-xs font-bold cursor-pointer text-on-surface"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 bg-red-500 hover:bg-red-600 transition py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer shadow-lg shadow-red-500/10"
                >
                  Delete Spot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between bg-surface-container-low">
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 text-xs font-bold cursor-pointer hover:bg-red-500/5 px-4 py-2.5 rounded-xl border border-red-500/10 hover:border-red-500/20 transition-all"
          >
            <Trash2 size={13} />
            Delete Spot
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              disabled={isSaving}
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition cursor-pointer text-on-surface disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-primary hover:bg-primary-container text-on-primary text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
            >
              {isSaving ? (
                <>
                  <div className="w-3 h-3 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Global Portal Toast */}
      <Toast toast={toast} />
    </div>
  );
}
