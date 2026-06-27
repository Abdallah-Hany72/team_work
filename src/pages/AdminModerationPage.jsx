import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import StatCard from "../Components/admin/StatCard";
import ReviewModerationCard from "../Components/admin/ReviewModerationCard";
import { Clock, Flag, AlertTriangle, Sparkles } from "lucide-react";
import { MOCK_REVIEWS_QUEUE } from "../data/mockData";

export default function AdminModerationPage() {
  return (
    <AdminLayout>
      <AdminTopbar
        title="Review Moderation"
        subtitle="Review flagged content and maintain community standards."
        placeholder="Search venues or users..."
      />
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-4 gap-4">
          <StatCard icon={Clock} label="Pending Review" value="124" />
          <StatCard icon={Flag} label="Flagged Offensive" value="42" />
          <StatCard icon={AlertTriangle} label="Suspected Fake" value="18" />
          <StatCard
            icon={Sparkles}
            label="Cleaned Today"
            value="256"
            highlight
          />
        </div>
        <div className="space-y-4">
          {MOCK_REVIEWS_QUEUE.map((review) => (
            <ReviewModerationCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
