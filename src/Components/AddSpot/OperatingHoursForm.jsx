const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function OperatingHoursForm({
  value = {},
  onChange,
}) {
  const handleTimeChange = (day, field, time) => {
    onChange({
      ...value,
      [day]: {
        ...value[day],
        [field]: time,
      },
    });
  };

  const toggleClosed = (day) => {
    onChange({
      ...value,
      [day]: {
        ...value[day],
        closed: !value[day]?.closed,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Operating Hours
        </h3>

        <p className="text-sm text-on-surface-variant mt-1">
          Set the opening hours for each day.
        </p>
      </div>

      <div className="space-y-4">
        {DAYS.map((day) => {
          const current = value[day] || {};

          return (
            <div
              key={day}
              className="flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="w-28 font-medium">
                {day}
              </div>

              <input
                type="time"
                value={current.open || ""}
                disabled={current.closed}
                onChange={(e) =>
                  handleTimeChange(day, "open", e.target.value)
                }
                className="border border-outline-variant rounded-xl px-3 py-2"
              />

              <span>—</span>

              <input
                type="time"
                value={current.close || ""}
                disabled={current.closed}
                onChange={(e) =>
                  handleTimeChange(day, "close", e.target.value)
                }
                className="border border-outline-variant rounded-xl px-3 py-2"
              />

              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={current.closed || false}
                  onChange={() => toggleClosed(day)}
                />
                Closed
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}