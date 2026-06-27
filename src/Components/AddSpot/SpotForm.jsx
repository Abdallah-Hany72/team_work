import InputField from "../Ui/Form/InputField";
import SectionHeader from "../Ui/SectionHeader/SectionHeader";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";

import VibeSelector from "./VibeSelector";
import PhotoUploader from "./PhotoUploader";
import OperatingHoursForm from "./OperatingHoursForm";

export default function SpotForm({
  formData,
  setFormData,
  onNext,
  onBack,
  loading = false,
}) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <SectionHeader
        title="The Details"
        subtitle="Help others discover this place by sharing accurate information."
      />

      {/* General Information */}
      <div className="bg-surface-container rounded-2xl p-6 space-y-5">

        <h3 className="font-semibold text-xl">
          General Information
        </h3>

        <InputField
          label="Venue Name"
          placeholder="The Golden Bean"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <InputField
          label="Category"
          placeholder="Cafe"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
        />

        <InputField
          label="Address"
          placeholder="Start typing address..."
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />

        <InputField
          label="Phone Number"
          placeholder="+20..."
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <InputField
          label="Website"
          placeholder="https://example.com"
          value={formData.website}
          onChange={(e) => handleChange("website", e.target.value)}
        />

        <InputField
          label="Booking Link"
          placeholder="https://..."
          value={formData.bookingUrl}
          onChange={(e) => handleChange("bookingUrl", e.target.value)}
        />

        <div className="space-y-2">
          <label className="font-medium text-on-surface">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Describe the atmosphere, food, drinks, seating, and anything visitors should know..."
            value={formData.description}
            onChange={(e) =>
              handleChange("description", e.target.value)
            }
            className="w-full rounded-xl border border-outline-variant bg-background px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

      </div>

      {/* Vibes */}

      <div className="bg-surface-container rounded-2xl p-6">

        <VibeSelector
          selected={formData.vibes}
          onChange={(vibes) => handleChange("vibes", vibes)}
        />

      </div>

      {/* Photos */}

      <div className="bg-surface-container rounded-2xl p-6">

        <PhotoUploader
          images={formData.images}
          onChange={(images) =>
            handleChange("images", images)
          }
        />

      </div>

      {/* Operating Hours */}

      <div className="bg-surface-container rounded-2xl p-6">

        <OperatingHoursForm
          value={formData.hours}
          onChange={(hours) => handleChange("hours", hours)}
        />

      </div>

      {/* Actions */}

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">

        
        

        <div className="flex gap-3 justify-end">

          <PrimaryButton
            variant="secondary"
            onClick={onBack}
          >
            Back
          </PrimaryButton>

          <PrimaryButton
            onClick={onNext}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Spot"}
          </PrimaryButton>

        </div>

      </div>

    </div>
  );
}