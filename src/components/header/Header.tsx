import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Avatar from "../user-avatar/UserAvatar";
import styled from "styled-components";
import * as colors from "../../common/variables/colors";
import * as sizes from "../../common/variables/sizes";
import { useAuth } from "../../hooks/user-auth";

export interface IHeaderProps {}

const StylesHeader = styled.header`
  padding: 10px 30px;
  position: fixed;
  background-color: ${colors.$white};
  height: 80px;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  button{ 
    display: none;

    background: none;
    border: none;
    padding:10px;
  }
  @media screen and (max-width: ${sizes.$md}) {
   
    button{ 
    display: inline;
    }
    .UserAvatar {
      display: none;
    }
  }
`;

const Header: React.FC<IHeaderProps> = () => {
  const user = useAuth();
  const showSidenav = () =>{
    document.querySelector('.sidebar')?.classList.toggle('active');
  }
  return (
    <StylesHeader>
      <button onClick={showSidenav}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z" fill="black" fill-opacity="0.54"/>
</svg>
</button>
      <Link to="/">
        <img src={Logo} alt="logo" height="48" />
      </Link>
      <Avatar name={user.name} avatarUrl={user.avatarUrl} />
    </StylesHeader>
  );
};

export default Header;
