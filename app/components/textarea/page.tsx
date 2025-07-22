import React from "react";

interface Props {
  name?: string;
  label?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  required?: boolean;
}

const TextArea = ({ name, label, cols, rows, placeholder }: Props) => {
  return (
    <>
      {name && label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
      ></textarea>
    </>
  );
};

export default TextArea;
