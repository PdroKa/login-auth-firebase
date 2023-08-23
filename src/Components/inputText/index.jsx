export function Input({ value, onChange, label, disabled = false, type }) {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
      />
    </>
  )
}
