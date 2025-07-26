import React from "react";
import Label from "@/app/components/Label";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  type,
  name,
  label,
  placeholder,
  required,
  value,
  onChange,
}: Props) => {
  return (
    <div className={className}>
      {name && label && <Label text={label} htmlFor={name} />}
      <input
        className="border-1 border-[var(--primary)] p-1"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
