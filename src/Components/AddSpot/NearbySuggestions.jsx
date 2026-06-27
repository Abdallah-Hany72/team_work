import SectionHeader from "../Ui/SectionHeader/SectionHeader";
import TagBadge from "../Ui/TagBadge/TagBadge";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";

const suggestions = [
  {
    id: 1,
    name: "The Gilded Bean",
    address: "242 Wythe Ave, Brooklyn",
    tags: ["Quiet", "Insta-worthy"],
  },
  {
    id: 2,
    name: "Kinfolk",
    address: "90 Wythe Ave, Brooklyn",
    tags: ["Study", "Cozy"],
  },
  {
    id: 3,
    name: "Blue Bottle Coffee",
    address: "76 N 4th St, Brooklyn",
    tags: ["Coffee", "Friends"],
  },
];

export default function NearbySuggestions() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Nearby Suggestions"
        subtitle="Places near your location that match the Spotly vibe."
      />

      <div className="grid gap-4">
        {suggestions.map((spot) => (
          <div
            key={spot.id}
            className="p-5 rounded-2xl border border-outline-variant bg-surface shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-on-surface">
                  {spot.name}
                </h3>

                <p className="text-sm text-on-surface-variant mt-1">
                  {spot.address}
                </p>
              </div>

              <PrimaryButton variant="outline">
                Select
              </PrimaryButton>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {spot.tags.map((tag) => (
                <TagBadge key={tag}>
                  {tag}
                </TagBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}