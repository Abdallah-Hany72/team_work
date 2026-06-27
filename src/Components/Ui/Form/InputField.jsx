import clsx from "clsx";

export default function InputField({
  label,
  id,
  type = "text",
  placeholder,
  icon,
  error,
  disabled = false,
  className = "",
  ...props
}) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx("flex flex-col w-full text-left", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-label-md font-medium text-on-surface-variant mb-1.5 block cursor-pointer select-none"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-4 text-on-surface-variant/60 flex items-center justify-center pointer-events-none">
            {typeof icon === "string" ? (
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
            ) : (
              icon
            )}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            "w-full px-4 py-3 rounded-xl border font-body-md transition-all duration-200 outline-none",
            "bg-surface-container text-on-surface placeholder:text-on-surface-variant/50",
            icon ? "pl-11" : "",
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
              : "border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20",
            disabled
              ? "opacity-50 cursor-not-allowed bg-surface-container-low border-outline-variant/30 text-on-surface-variant/50"
              : "hover:border-outline focus:bg-surface-container-lowest"
          )}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-error font-medium mt-1.5 flex items-center gap-1 animate-fadeIn">
          <span className="material-symbols-outlined text-[14px]">error</span>
          {error}
        </span>
      )}
    </div>
  );
}
