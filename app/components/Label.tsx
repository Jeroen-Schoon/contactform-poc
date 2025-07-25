import React from "react";

interface Props {
  text: string;
  htmlFor: string;
}

const Label = ({ text, htmlFor }: Props) => {
  return (
    <label className="font-bold" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
