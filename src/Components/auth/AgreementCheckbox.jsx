// src/Components/auth/AgreementCheckbox.jsx
export default function AgreementCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/40 cursor-pointer"
      />
      <span className="text-sm text-on-surface-variant">
        I agree to the{" "}
        <a href="#" className="text-primary font-semibold hover:underline">Terms of Service</a>{" "}
        and{" "}
        <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
      </span>
    </label>
  );
}