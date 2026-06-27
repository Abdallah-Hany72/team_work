import clsx from "clsx";

const variants = {
  primary:
    "bg-primary text-on-primary hover:bg-primary/90 shadow-lg shadow-primary/20",
  secondary:
    "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
  outline:
    "border-2 border-outline-variant text-on-surface-variant hover:bg-surface-container-low",
  ghost: "text-on-surface-variant hover:bg-surface-container-high/50",
};

const sizes = {
  sm: "px-4 py-2 text-label-md rounded-full",
  md: "px-6 py-3 text-label-md rounded-full",
  lg: "px-8 py-4 text-label-md rounded-full",
  xl: "px-12 py-4 text-headline-md rounded-xl",
};

export default function PrimaryButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  return (
    <button
      className={clsx(
        "font-label-md inline-flex items-center justify-center gap-2 transition-all duration-200",
        "hover:scale-[1.02] active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      )}
    </button>
  );
}
