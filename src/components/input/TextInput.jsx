'use client'

import { useState } from "react";

const TextInput = ({
  placeholder,
  submit = () => {},
  onChange = () => {},
  className,
}) => {
  const [value, setValue] = useState(placeholder);
  const changeValue = (e) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };
  const submitValue = (e) => {
    e.preventDefault();
    submit(value);
  };
  return (
    <form onSubmit={submitValue} className="flex">
      <input
        type="text"
        value={value}
        onChange={changeValue}
        className={`grow outline-none p-2 rounded-md drop-shadow ${className}`}
      />
    </form>
  );
};

export default TextInput;
