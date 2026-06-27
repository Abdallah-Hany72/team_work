// src/Components/discover/MoodFilter.jsx

export default function MoodFilter({
  moods = [],
  selected = [],
  onChange,
}) {
  const toggle = (mood) => {
    if (selected.includes(mood)) {
      onChange(selected.filter((m) => m !== mood));
    } else {
      onChange([...selected, mood]);
    }
  };

  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold text-on-surface">
        Mood
      </span>

      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => toggle(mood)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              selected.includes(mood)
                ? "bg-primary text-on-primary border-primary"
                : "bg-transparent text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}