import clsx from "clsx";

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    default: "bg-primary/10 text-primary",
    secondary: "bg-secondary-container text-on-secondary-container",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
