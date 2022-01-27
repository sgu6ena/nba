import * as React from "react";
import "./button.scss";

export interface IButtonProps {
  disabled?: boolean;
  secondary?: boolean;
  type?: "button" | "submit" | "reset" ;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({type, disabled, secondary, children, onClick , ...props }) => {
  return (
    <button
      disabled={disabled}
      className={secondary ? "secondary button" : "button"}
      type={type}
      onClick={onClick}
     { ...props}
    >
      {children}
    </button>
  );
};

export default Button;
