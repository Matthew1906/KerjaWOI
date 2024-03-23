'use client'

const SelectInput = ({
  className,
  options,
  color,
  onChange,
  value = options[0],
  name,
  disabled
}) => {
  const select = (e) => onChange(e.target.value);
  return (
    <select
      className={`p-2 bg-${color} rounded-md drop-shadow ${className}`}
      value={value}
      onChange={select}
      name={name}
      disabled={disabled}
    >
      {options.map((option, key) => {
        return (
          <option key={key} value={option} disabled={option==='Admin'}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
