import React from "react";
import Label from "@/app/components/label/page";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  required?: boolean;
}

const TextArea = ({
  className,
  name,
  label,
  cols,
  rows,
  placeholder,
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
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
