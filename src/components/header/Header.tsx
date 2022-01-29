import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Avatar from "../user-avatar/UserAvatar";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";
import { useAuth } from "../../hooks/user-auth";

export interface IHeaderProps {}

const StylesHeader = styled.header`
padding: 10px 30px;
position: fixed;
background-color: ${vars.$white};
height:  80px;
top: 0;
left: 0;
width: 100vw;
display: flex;
align-items:center;
justify-content: space-between;
box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
`

const Header: React.FC<IHeaderProps> = () => {
  const user = useAuth();
  return (
    <StylesHeader>
      <Link to="/">
        <img src={Logo} alt="logo" height="48" />
      </Link>
      <Avatar name={user.name} avatarUrl={user.avatarUrl} />
    </StylesHeader>
  );
};

export default Header;
