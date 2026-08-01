export function PhotoPlaceholder({
  label,
  caption,
  compact = false,
}: {
  label: string;
  caption: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`photo-placeholder${compact ? " photo-placeholder--compact" : ""}`}
      role="img"
      aria-label={label}
    >
      <span className="photo-placeholder__icon" aria-hidden="true">
        ◇
      </span>
      <strong>{label}</strong>
      <small>{caption}</small>
    </div>
  );
}
