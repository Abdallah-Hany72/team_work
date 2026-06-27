// src/Components/Ui/CreateCollectionModal.jsx
import React, { useState, useEffect } from "react";
import { X, Check, Image as ImageIcon, Sparkles } from "lucide-react";
import { useAuth } from "../auth/AuthContext";

const CURATED_COVERS = [
  { name: "Coffee Vibe", url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop&q=80" },
  { name: "City Lights", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=80" },
  { name: "Cozy Study", url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80" },
  { name: "Green Escape", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80" },
  { name: "Warm Sun", url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80" },
];

const CURATED_GRADIENTS = [
  { name: "Sunset", value: "linear-gradient(135deg, #ac3509 0%, #ff7043 100%)", class: "bg-gradient-to-br from-primary to-primary-container" },
  { name: "Forest", value: "linear-gradient(135deg, #006a63 0%, #8bf1e6 100%)", class: "bg-gradient-to-br from-secondary to-secondary-container" },
  { name: "Amber", value: "linear-gradient(135deg, #835500 0%, #ffddb4 100%)", class: "bg-gradient-to-br from-tertiary to-tertiary-fixed" },
  { name: "Twilight", value: "linear-gradient(135deg, #111d23 0%, #59413a 100%)", class: "bg-gradient-to-br from-on-background to-on-surface-variant" },
];

export default function CreateCollectionModal({ isOpen, onClose, collectionToEdit = null, onSuccess = () => {} }) {
  const { createCollection, updateCollection } = useAuth();
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coverType, setCoverType] = useState("gradient"); // 'gradient' | 'image' | 'url'
  const [selectedCover, setSelectedCover] = useState(CURATED_GRADIENTS[0].value);
  const [customUrl, setCustomUrl] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (collectionToEdit) {
      setName(collectionToEdit.name);
      setDescription(collectionToEdit.description || "");
      const isCustomUrl = collectionToEdit.coverImage && collectionToEdit.coverImage.startsWith("http") && !CURATED_COVERS.some(c => c.url === collectionToEdit.coverImage);
      const isCuratedImg = CURATED_COVERS.some(c => c.url === collectionToEdit.coverImage);

      if (isCustomUrl) {
        setCoverType("url");
        setCustomUrl(collectionToEdit.coverImage);
        setSelectedCover("");
      } else if (isCuratedImg) {
        setCoverType("image");
        setSelectedCover(collectionToEdit.coverImage);
      } else {
        setCoverType("gradient");
        setSelectedCover(collectionToEdit.coverImage || collectionToEdit.color || CURATED_GRADIENTS[0].value);
      }
    } else {
      setName("");
      setDescription("");
      setCoverType("gradient");
      setSelectedCover(CURATED_GRADIENTS[0].value);
      setCustomUrl("");
      setError("");
    }
  }, [collectionToEdit, isOpen]);

  if (!isOpen) return null;

  const activeCover = coverType === "url" ? customUrl : selectedCover;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Collection name is required.");
      return;
    }

    if (name.trim().toLowerCase() === "general") {
      setError("General is a reserved collection name.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      description: description.trim(),
      coverImage: coverType === "url" ? customUrl.trim() : (coverType === "image" ? selectedCover : ""),
      color: coverType === "gradient" ? selectedCover : "",
    };

    setTimeout(() => {
      let result;
      if (collectionToEdit && !collectionToEdit.isPrefill) {
        result = updateCollection(collectionToEdit.id, payload);
      } else {
        result = createCollection(payload);
      }

      if (result && !result.success) {
        setError(result.error);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        onSuccess(result?.collection || null);
        onClose();
      }
    }, 400); // smooth micro-loading simulation
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Form Editor */}
        <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
            <h2 className="font-display-lg text-headline-lg text-on-surface font-extrabold flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" />
              {collectionToEdit && !collectionToEdit.isPrefill ? "Edit Collection" : "Create New Collection"}
            </h2>
            <button 
              onClick={onClose} 
              className="text-on-surface-variant hover:text-primary hover:bg-surface-container p-2 rounded-full transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-error-container/20 text-error text-sm font-semibold p-3.5 rounded-xl border border-error/25">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="col-name" className="text-label-md text-on-surface-variant block font-bold">
                Collection Name *
              </label>
              <input
                id="col-name"
                type="text"
                placeholder="e.g. Study Cafés, Weekend Trips"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="col-desc" className="text-label-md text-on-surface-variant block font-bold">
                Description <span className="text-xs font-normal text-on-surface-variant/60">(Optional)</span>
              </label>
              <textarea
                id="col-desc"
                placeholder="What is this collection about?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                maxLength={180}
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors resize-none"
                disabled={isSubmitting}
              />
            </div>

            {/* Cover Type Selector */}
            <div className="space-y-3">
              <span className="text-label-md text-on-surface-variant block font-bold">Cover Style</span>
              <div className="flex gap-2 bg-surface-container border border-outline-variant/20 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => { setCoverType("gradient"); setSelectedCover(CURATED_GRADIENTS[0].value); }}
                  className={`flex-1 text-center py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${coverType === "gradient" ? "bg-surface-container-lowest shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Gradient
                </button>
                <button
                  type="button"
                  onClick={() => { setCoverType("image"); setSelectedCover(CURATED_COVERS[0].url); }}
                  className={`flex-1 text-center py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${coverType === "image" ? "bg-surface-container-lowest shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Cover Image
                </button>
                <button
                  type="button"
                  onClick={() => { setCoverType("url"); }}
                  className={`flex-1 text-center py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${coverType === "url" ? "bg-surface-container-lowest shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Custom URL
                </button>
              </div>

              {/* Cover Inputs depending on type */}
              {coverType === "gradient" && (
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {CURATED_GRADIENTS.map((g) => (
                    <button
                      key={g.name}
                      type="button"
                      onClick={() => setSelectedCover(g.value)}
                      className={`h-12 rounded-xl relative overflow-hidden flex items-center justify-center transition-all scale-up active:scale-95 cursor-pointer ${g.class}`}
                      title={g.name}
                    >
                      {selectedCover === g.value && (
                        <div className="bg-white/25 w-6 h-6 rounded-full flex items-center justify-center">
                          <Check className="text-white w-4 h-4" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {coverType === "image" && (
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {CURATED_COVERS.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCover(c.url)}
                      className="h-10 rounded-lg relative overflow-hidden flex items-center justify-center transition-all scale-up active:scale-95 cursor-pointer group"
                      title={c.name}
                    >
                      <img src={c.url} alt={c.name} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${selectedCover === c.url ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                        {selectedCover === c.url && <Check className="text-white w-4 h-4" />}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {coverType === "url" && (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <ImageIcon className="absolute left-3.5 top-3.5 text-on-surface-variant/40 w-4 h-4" />
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl pl-10 pr-4 py-3 text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors text-xs"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit & Cancel */}
            <div className="flex gap-3 pt-4 border-t border-outline-variant/20">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-bold px-6 py-3 rounded-full transition-colors active:scale-98 cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-3 rounded-full shadow-lg shadow-primary/10 transition-colors active:scale-98 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {collectionToEdit && !collectionToEdit.isPrefill ? "Save Changes" : "Create Collection"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Live Card Preview */}
        <div className="w-full md:w-80 bg-surface-container border-t md:border-t-0 md:border-l border-outline-variant/30 p-6 md:p-8 flex flex-col justify-center items-center space-y-4 select-none">
          <span className="text-[11px] font-bold text-on-surface-variant/60 tracking-wider uppercase">Live Card Preview</span>
          
          <div className="w-full max-w-[260px] aspect-[4/5] bg-surface-container-lowest border border-outline-variant/15 rounded-3xl overflow-hidden shadow-lg flex flex-col transition-all hover:scale-[1.02] duration-300">
            {/* Cover Image/Gradient Box */}
            <div className="relative flex-1 bg-surface-container-high overflow-hidden">
              {coverType === "gradient" && selectedCover ? (
                <div className="w-full h-full" style={{ background: selectedCover }} />
              ) : activeCover ? (
                <img 
                  src={activeCover} 
                  alt="Preview Cover" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-container/20 to-outline-variant/10 text-primary-container text-xs font-semibold p-4 text-center">
                  <ImageIcon size={28} className="text-primary/40 mb-2" />
                  <span>No cover selected</span>
                </div>
              )}
            </div>

            {/* Content Box */}
            <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/10 flex flex-col justify-between">
              <div>
                <h3 className="font-display-lg text-body-lg font-bold text-on-surface line-clamp-1">
                  {name.trim() || "My New Collection"}
                </h3>
                <p className="text-on-surface-variant/75 text-[11px] font-medium mt-1 line-clamp-2 min-h-[32px]">
                  {description.trim() || "Optional description text describing this custom list."}
                </p>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-outline-variant/10">
                <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  0 saved spots
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
