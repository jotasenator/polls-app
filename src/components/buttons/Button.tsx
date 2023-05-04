import React from "react";

interface Props {
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<Props> = ({ buttonText, type }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <button type={type}>{buttonText} </button>;
};
