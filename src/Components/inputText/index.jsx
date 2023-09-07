export function Input({
  value,
  onChange,
  label,
  disabled = false,
  type,
  className,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
      />
    </>
  )
}
