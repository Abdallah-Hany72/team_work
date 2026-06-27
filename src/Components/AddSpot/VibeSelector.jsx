import { useState } from "react";

const DEFAULT_VIBES = [
  "Quiet",
  "Romantic",
  "Cozy",
  "Insta-worthy",
  "Study Friendly",
  "Outdoor",
  "Luxury",
  "Casual",
];

export default function VibeSelector({
  selected = [],
  onChange,
}) {
  const [customVibe, setCustomVibe] = useState("");

  const allVibes = [
    ...DEFAULT_VIBES,
    ...selected.filter((v) => !DEFAULT_VIBES.includes(v)),
  ];

  const toggleVibe = (vibe) => {
    if (selected.includes(vibe)) {
      onChange(selected.filter((v) => v !== vibe));
    } else {
      onChange([...selected, vibe]);
    }
  };

  const addCustomVibe = () => {
    const vibe = customVibe.trim();

    if (!vibe) return;

    if (!selected.includes(vibe)) {
      onChange([...selected, vibe]);
    }

    setCustomVibe("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Select Vibes
        </h3>

        <p className="text-sm text-on-surface-variant mt-1">
          Choose all that apply or create your own.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {allVibes.map((vibe) => (
          <button
            type="button"
            key={vibe}
            onClick={() => toggleVibe(vibe)}
            className={`px-4 py-2 rounded-full border transition-all ${
              selected.includes(vibe)
                ? "bg-primary text-white border-primary"
                : "bg-white border-outline-variant hover:border-primary"
            }`}
          >
            {vibe}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Add custom vibe..."
          value={customVibe}
          onChange={(e) => setCustomVibe(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCustomVibe();
            }
          }}
          className="flex-1 rounded-xl border border-outline-variant px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="button"
          onClick={addCustomVibe}
          className="px-5 rounded-xl bg-primary text-white hover:opacity-90"
        >
          Add
        </button>
      </div>
    </div>
  );
}