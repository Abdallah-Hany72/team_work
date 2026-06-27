// src/Components/Ui/AddToCollectionModal.jsx
import React, { useState, useEffect } from "react";
import { X, Check, FolderPlus, Plus, Lock } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import CreateCollectionModal from "./CreateCollectionModal";

export default function AddToCollectionModal({ isOpen, onClose, spot }) {
  const { collections, addSpotToCollections, getCollectionsForSpot } = useAuth();
  const [selectedIds, setSelectedIds] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    if (spot) {
      const current = getCollectionsForSpot(spot.id);
      setSelectedIds(current);
    }
  }, [spot, isOpen]);

  if (!isOpen || !spot) return null;

  const handleToggle = (id) => {
    if (id === "general") return; // cannot toggle general
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      addSpotToCollections(spot.id, selectedIds);
      setIsSaving(false);
      setShowSuccessToast(true);
      setTimeout(() => {
        setShowSuccessToast(false);
        onClose();
      }, 1000); // show success checkmark briefly before closing
    }, 400); // smooth save transition
  };

  const handleCreateSuccess = (newCol) => {
    if (newCol) {
      // Automatically select the newly created collection
      setSelectedIds((prev) => [...prev, newCol.id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-2xl overflow-hidden max-w-md w-full p-6 animate-scale-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4 mb-4">
          <div>
            <h2 className="font-display-lg text-headline-md text-on-surface font-extrabold flex items-center gap-2">
              <FolderPlus className="text-primary w-5 h-5" />
              Add to Collection
            </h2>
            <p className="text-on-surface-variant/80 text-xs mt-1">
              Organize <span className="font-bold text-on-surface">{spot.name}</span> by occasion.
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-on-surface-variant hover:text-primary hover:bg-surface-container p-2 rounded-full transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Collections List */}
        <div className="space-y-2.5 max-h-[45vh] overflow-y-auto pr-1 py-1">
          {/* General Collection (Static & Custom Layout) */}
          <div 
            onClick={() => handleToggle("general")}
            className="flex items-center justify-between p-3.5 rounded-2xl border bg-surface-container-low border-outline-variant/25 transition-all opacity-85 select-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary-container/60 flex items-center justify-center text-white text-base">
                ❤️
              </div>
              <div>
                <span className="font-bold text-on-surface text-sm block">General</span>
                <span className="text-[11px] text-on-surface-variant/75 block">Master bookmarks list</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={12} className="text-on-surface-variant/40" />
              <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-on-primary">
                <Check size={14} className="stroke-[3px]" />
              </div>
            </div>
          </div>

          {/* Custom Collections */}
          {collections.map((col) => {
            const isSelected = selectedIds.includes(col.id);
            const hasCover = col.coverImage;
            return (
              <div 
                key={col.id}
                onClick={() => handleToggle(col.id)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                  isSelected 
                    ? "bg-primary/5 border-primary/30" 
                    : "bg-surface-container-low hover:bg-surface-container-high border-outline-variant/15"
                }`}
              >
                <div className="flex items-center gap-3">
                  {col.coverImage ? (
                    <img src={col.coverImage} alt={col.name} className="w-10 h-10 rounded-xl object-cover" />
                  ) : (
                    <div 
                      className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center text-white" 
                      style={{ background: col.color || "linear-gradient(135deg, #006a63 0%, #8bf1e6 100%)" }}
                    />
                  )}
                  <div>
                    <span className="font-bold text-on-surface text-sm block">{col.name}</span>
                    {col.description && (
                      <span className="text-[11px] text-on-surface-variant/75 block line-clamp-1 max-w-[200px]">
                        {col.description}
                      </span>
                    )}
                  </div>
                </div>
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  isSelected 
                    ? "bg-primary border-primary text-on-primary" 
                    : "border-outline-variant/60"
                }`}>
                  {isSelected && <Check size={14} className="stroke-[3px]" />}
                </div>
              </div>
            );
          })}

          {collections.length === 0 && (
            <div className="py-4 text-center">
              <p className="text-xs text-on-surface-variant/60">No custom collections yet.</p>
            </div>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4 mt-4">
          <button
            type="button"
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-container transition-colors cursor-pointer"
          >
            <Plus size={14} className="stroke-[3px]" />
            Create New Collection
          </button>
          
          <button
            onClick={handleSave}
            disabled={isSaving || showSuccessToast}
            className="bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-2.5 rounded-full text-xs transition-colors shadow-md cursor-pointer flex items-center gap-1.5 min-w-[70px] justify-center"
          >
            {isSaving ? (
              <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
            ) : showSuccessToast ? (
              <Check size={14} className="stroke-[3px]" />
            ) : (
              "Done"
            )}
          </button>
        </div>

        {/* Embed Create Collection Modal inside Add to Collection */}
        <CreateCollectionModal 
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          onSuccess={handleCreateSuccess}
        />
      </div>
    </div>
  );
}
