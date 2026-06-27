// src/Components/auth/PasswordField.jsx
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function PasswordField({
  label = "Password",
  placeholder = "••••••••",
  value,
  onChange,
  error,
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && <label className="text-sm font-semibold text-on-surface block">{label}</label>}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
          <Lock size={16} />
        </span>
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-surface-container border rounded-xl pl-10 pr-10 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${
            error ? "border-red-400" : "border-outline-variant focus:border-primary"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
        >
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}