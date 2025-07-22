import React from "react";

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const Input = ({ type, name, label, placeholder, required }: Props) => {
  return (
    <>
      {name && label && <label htmlFor={name}>{label}</label>}
      <input
        className="border-1"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
