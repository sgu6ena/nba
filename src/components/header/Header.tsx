import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Avatar from "../user-avatar/UserAvatar";

import "./styles.scss";

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" height="48" />
      </Link>
      <Avatar name="John Smith" avatarUrl="https://cdn.vox-cdn.com/thumbor/N6-QGX2FaDUgPW3-RRqoM3dfpkQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg" />
    </div>
  );
};

export default Header;
