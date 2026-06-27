import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";

export default function SuccessBanner({
  spotName = "Your Spot",
  onAddAnother,
  onExplore,
}) {
  return (
    <div className="bg-surface rounded-3xl border border-outline-variant p-10 shadow-sm text-center">

      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-5xl text-green-600">
          check_circle
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-3">
        🎉 Thanks for helping Spotly grow!
      </h1>

      <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">
        <span className="font-semibold text-on-surface">
          {spotName}
        </span>{" "}
          Your spot has been submitted successfully and is now pending review. Our team will verify the information before publishing it.      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">

        <PrimaryButton
          onClick={onExplore}
        >
          Explore Spots
        </PrimaryButton>

        <PrimaryButton
          variant="outline"
          onClick={onAddAnother}
        >
          Add Another Spot
        </PrimaryButton>

      </div>

    </div>
  );
}