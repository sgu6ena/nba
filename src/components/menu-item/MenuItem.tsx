import * as React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

interface IMenuItemProps {
  to: string;
  title?: string;
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  to,
  title,
  children,
}) => {
  return (
    <div className="menu-item">
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
        <div className="title"> {title}</div>
      </NavLink>
    </div>
  );
};

export default MenuItem;
