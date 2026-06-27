export default function FormStepper() {
  const steps = [
    "Spot Info",
    "Photos",
    "Review",
  ];

  const currentStep = 2;

  return (
    <div className="flex items-center justify-center gap-4">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index + 1 <= currentStep
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>

            <span
              className={`text-sm ${
                index + 1 <= currentStep
                  ? "font-medium"
                  : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>

          {index !== steps.length - 1 && (
            <div className="w-10 h-[2px] bg-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}