import React from "react";
import Label from "@/app/components/Label";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  className,
  name,
  label,
  cols,
  rows,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <>
      <div className={className}>
        {name && label && <Label text={label} htmlFor={name} />}
        <textarea
          className="border-1 border-[var(--primary)] p-1"
          name={name}
          placeholder={placeholder}
          cols={cols}
          rows={rows}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
