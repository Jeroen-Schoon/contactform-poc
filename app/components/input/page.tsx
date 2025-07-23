import React from "react";
import Label from "@/app/components/label/page";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const Input = ({
  className,
  type,
  name,
  label,
  placeholder,
  required,
}: Props) => {
  return (
    <>
      <div className={className}>
        {name && label && <Label text={label} htmlFor={name} />}
        <input
          className="border-1 border-[var(--primary)] p-1"
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </>
  );
};

export default Input;
