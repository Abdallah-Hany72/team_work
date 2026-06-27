export default function ManualAddPrompt() {
  return (
    <div className="border border-outline-variant rounded-2xl p-6 bg-white">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          ✨
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg">
            Can't find a spot?
          </h3>

          <p className="text-on-surface-variant mt-2">
            If the place is new or not listed yet, you can add all
            the details manually including photos and vibe tags.
          </p>

          <button className="mt-4 px-5 py-3 bg-primary text-white rounded-full">
            Add Spot Manually
          </button>
        </div>
      </div>
    </div>
  );
}