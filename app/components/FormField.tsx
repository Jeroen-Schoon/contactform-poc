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
  onChange,
  isTextArea = false,
  cols,
  rows,
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
        />
      ) : (
        <input
          className="border-1 border-[var(--primary)] p-1"
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
