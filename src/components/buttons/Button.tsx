import React, { CSSProperties, MouseEventHandler } from "react";

interface Props {
  buttonText: string | JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: CSSProperties;
}

export const Button: React.FC<Props> = ({
  buttonText,
  type,
  onClick,
  disabled,
  style,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style}>
      {buttonText}{" "}
    </button>
  );
};
