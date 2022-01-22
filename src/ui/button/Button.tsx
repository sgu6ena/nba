import * as React from "react";
import "./button.scss";

export interface IButtonProps {
  disabled?: boolean;
  secondary?: boolean;
}

const Button: React.FC<IButtonProps> = ({ disabled, secondary, children }) => {
  return (
    <button
      disabled={disabled}
      className={secondary ? "secondary button" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
