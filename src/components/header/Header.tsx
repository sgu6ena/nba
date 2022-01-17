import * as React from "react";
import Logo from "../../assets/images/logo.png";

import "./styles.scss";

export interface IHeaderProps {
 
}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className="header" >
     <img src={Logo} alt="logo" height="48" />
    </div>
  );
};

export default Header;
