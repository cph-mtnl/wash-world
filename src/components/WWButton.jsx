export default function WWButton({
  backgroundColor,
  badgeText,
  disabled = false,
  buttonText,
  onClick,
  children,
}) {
  const styles = {
    backgroundColor,
  };

  return (
    <button
      className="ww--button"
      onClick={onClick}
      disabled={disabled}
      style={styles}
    >
      {badgeText && <span className="badge">{badgeText}</span>}
      {buttonText}
      {children}
    </button>
  );
}
