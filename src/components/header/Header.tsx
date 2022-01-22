import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Avatar from "../user-avatar/UserAvatar";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";

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
  return (
    <StylesHeader>
      <Link to="/">
        <img src={Logo} alt="logo" height="48" />
      </Link>
      <Avatar name="John Smith" avatarUrl="https://cdn.vox-cdn.com/thumbor/N6-QGX2FaDUgPW3-RRqoM3dfpkQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg" />
    </StylesHeader>
  );
};

export default Header;
