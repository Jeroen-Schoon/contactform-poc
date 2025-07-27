import React from "react";
import Label from "@/app/components/Label";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  type?: string;
  isTextArea?: boolean;
  cols?: number;
  rows?: number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormField = ({
  className,
  name,
  label,
  placeholder,
  required,
  value,
  type = "text",
  isTextArea = false,
  cols,
  rows,
  onChange,
}: Props) => {
  return (
    <div className={className}>
      {name && label && <Label text={label} htmlFor={name} />}
      {isTextArea ? (
        <textarea
          className="border-1 border-[var(--primary)] p-1"
          name={name}
          placeholder={placeholder}
          cols={cols}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          className="border-1 border-[var(--primary)] p-1"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
