import * as React from "react";
import "./button.scss";

export interface IButtonProps {
  disabled?: boolean;
  secondary?: boolean;
  type?: "button" | "submit" | "reset" ;
}

const Button: React.FC<IButtonProps> = ({type, disabled, secondary, children }) => {
  return (
    <button
      disabled={disabled}
      className={secondary ? "secondary button" : "button"}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
