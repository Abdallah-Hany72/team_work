import clsx from "clsx";

export default function Form({
  title,
  icon,
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={clsx("bg-white rounded-xl p-6 shadow-sm", className)}
      {...props}
    >
      <div className="flex gap-3 mb-6">
        {icon && (
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">
              {icon}
            </span>
          </div>
        )}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}
