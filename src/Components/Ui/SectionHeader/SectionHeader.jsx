import clsx from "clsx";

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  className = "",
  ...props
}) {
  return (
    <div
      className={clsx(
        "flex flex-col mb-6 w-full text-left",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      <h2 className="text-headline-lg font-bold text-on-surface leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-md text-on-surface-variant/80 mt-2 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
