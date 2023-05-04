import React, { MouseEventHandler } from "react";

interface Props {
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ buttonText, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {buttonText}{" "}
    </button>
  );
};
