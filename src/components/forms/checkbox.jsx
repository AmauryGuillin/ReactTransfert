export function Checkbox({ checked, onChange, label, id }) {
  console.log(checked === false ? "false" : "true");
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
          console.log(e.target.value);
        }}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}
