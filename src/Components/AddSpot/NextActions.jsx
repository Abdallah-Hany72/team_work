export default function NextActions({ step = 1 }) {
  const steps = [
    {
      title: "Search",
      description: "Search for the place before adding it.",
    },
    {
      title: "Add Details",
      description: "Fill in the information about the spot.",
    },
    {
      title: "Upload Photos",
      description: "Add photos and vibe tags.",
    },
    {
      title: "Publish",
      description: "Review everything and publish.",
    },
  ];

  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">
        Next Steps
      </h3>

      <div className="space-y-5">
        {steps.map((item, index) => {
          const current = index + 1 === step;
          const completed = index + 1 < step;

          return (
            <div
              key={item.title}
              className="flex gap-4 items-start"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${
                  completed
                    ? "bg-green-500 text-white"
                    : current
                    ? "bg-primary text-white"
                    : "bg-surface border border-outline-variant"
                }`}
              >
                {completed ? "✓" : index + 1}
              </div>

              <div>
                <h4
                  className={`font-semibold ${
                    current ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                </h4>

                <p className="text-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}