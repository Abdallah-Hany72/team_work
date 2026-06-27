import { useMemo, useState } from "react";
import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import StatCard from "../Components/admin/StatCard";
import ReviewModerationCard from "../Components/admin/ReviewModerationCard";
import Toast, { useToast } from "../Components/admin/Toast";
import { Clock, Flag, AlertTriangle, Sparkles } from "lucide-react";
import { MOCK_REVIEWS_QUEUE } from "../data/mockData";

export default function AdminModerationPage() {
  const [reviews, setReviews] = useState(MOCK_REVIEWS_QUEUE);
  const [cleanedToday, setCleanedToday] = useState(256);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, showToast] = useToast();

  const visibleReviews = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return reviews;
    return reviews.filter(
      (r) =>
        r.venue.toLowerCase().includes(q) ||
        r.user.toLowerCase().includes(q) ||
        r.text.toLowerCase().includes(q)
    );
  }, [reviews, searchQuery]);

  const offensiveCount = reviews.filter((r) => r.flagType === "offensive").length;
  const fakeCount = reviews.filter((r) => r.flagType === "fake").length;

  const handleDismiss = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    setCleanedToday((prev) => prev + 1);
    showToast("Flag dismissed — review stays live.");
  };

  const handleDelete = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    showToast("Review deleted.");
  };

  const handleArchive = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    setCleanedToday((prev) => prev + 1);
    showToast("Review archived.");
  };

  const handleFlag = (id) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, flagType: "offensive", flaggedBy: "Manually flagged by Admin" }
          : r
      )
    );
    showToast("Review flagged for moderation.");
  };

  return (
    <AdminLayout>
      <AdminTopbar
        title="Review Moderation"
        subtitle="Review flagged content and maintain community standards."
        placeholder="Search venues or users..."
        onSearch={setSearchQuery}
      />
      <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Clock} label="Pending Review" value={reviews.length} />
          <StatCard icon={Flag} label="Flagged Offensive" value={offensiveCount} />
          <StatCard
            icon={AlertTriangle}
            label="Suspected Fake"
            value={fakeCount}
          />
          <StatCard
            icon={Sparkles}
            label="Cleaned Today"
            value={cleanedToday}
            highlight
          />
        </div>
        <div className="space-y-4">
          {visibleReviews.length === 0 ? (
            <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-12 text-center text-on-surface-variant space-y-2">
              <span className="text-3xl block">☀️</span>
              <h4 className="font-bold text-on-surface">
                {reviews.length === 0 ? "Queue is clear" : "No matches found"}
              </h4>
              <p className="text-sm">
                {reviews.length === 0
                  ? "No flagged reviews require moderation right now."
                  : "Try a different venue or username."}
              </p>
            </div>
          ) : (
            visibleReviews.map((review) => (
              <ReviewModerationCard
                key={review.id}
                review={review}
                onDismiss={handleDismiss}
                onDelete={handleDelete}
                onArchive={handleArchive}
                onFlag={handleFlag}
              />
            ))
          )}
        </div>
      </div>
      <Toast toast={toast} />
    </AdminLayout>
  );
}