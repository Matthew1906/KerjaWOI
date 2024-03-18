'use client'

const Input = ({ type, name, id, placeholder, onChange }) => {
  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={valueChangeHandler}
      className="bg-dark-white py-2 px-3 rounded-md"
    />
  );
};

export default Input;
