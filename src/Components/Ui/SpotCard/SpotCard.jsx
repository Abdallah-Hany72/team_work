import { MapPin, Star, Bookmark, FolderPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TagBadge from "../TagBadge/TagBadge";
import { useAuth } from "../../auth/AuthContext";
import React, { useState } from "react";
import AddToCollectionModal from "../AddToCollectionModal";
import EditSpotModal from "../EditSpotModal";

export default function SpotCard({ spot, variant = "default", tagVariant = "secondary", className = "" }) {
    const { isSpotSaved, toggleSaveSpot, user } = useAuth();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    if (!spot) return null;

    const {
        id,
        image,
        name,
        location,
        rating,
        price,
        category,
        tags = [],
    } = spot;

    const saved = isSpotSaved(id);
    const isLarge = variant === "featured";
    const isAdmin = user && user.role === "admin";

    return (
        <div
            onClick={() => {
                navigate(`/place/${id}`);
            }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-md ${isLarge ? "h-80" : "h-56"
                } ${className}`}
        >
            {/* Background Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/75 to-transparent" />

            {/* Tags — top left */}
            {tags.length > 0 && (
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {tags.slice(0, isLarge ? 3 : 2).map((tag) => (
                        <TagBadge key={tag} variant={tagVariant} size="sm">
                            {tag}
                        </TagBadge>
                    ))}
                </div>
            )}

            {/* Action buttons — top right */}
            <div className="absolute top-3 right-3 flex gap-1.5 z-20">
                {isAdmin && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsEditOpen(true);
                        }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors hover:bg-white/40 cursor-pointer border border-white/10"
                        aria-label="Edit spot"
                    >
                        <span className="material-symbols-outlined text-[15px] text-white flex items-center justify-center">edit</span>
                    </button>
                )}

                {saved && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsModalOpen(true);
                        }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors hover:bg-white/40 cursor-pointer"
                        aria-label="Add to collection"
                    >
                        <FolderPlus size={15} className="text-white" />
                    </button>
                )}

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveSpot(id);
                    }}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors hover:bg-white/40 cursor-pointer"
                    aria-label="Save spot"
                >
                    <Bookmark
                        size={15}
                        className={saved ? "fill-white text-white" : "text-white"}
                    />
                </button>
            </div>

            {/* Info — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                <h3 className="font-semibold text-white text-base leading-tight">{name}</h3>

                <div className="flex items-center justify-between">
                    {location && (
                        <div className="flex items-center gap-1 text-white/70">
                            <MapPin size={12} />
                            <span className="text-xs">{location}</span>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        {rating && (
                            <span className="bg-primary text-on-primary text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                                {rating}
                                <Star size={10} className="fill-on-primary" />
                            </span>
                        )}
                        {(price || category) && (
                            <span className="text-white/70 text-xs">
                                {price}{price && category ? " · " : ""}{category}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Add to Collection Modal */}
            <AddToCollectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                spot={spot}
            />

            {/* Edit Spot Modal */}
            <EditSpotModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                spot={spot}
            />
        </div>
    );
}