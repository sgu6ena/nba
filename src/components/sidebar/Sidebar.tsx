import * as React from "react";

import MenuItem from "../menu-item/MenuItem";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";

import { ReactComponent as GroupPerson } from "../../assets/icons/group-person.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Input } from "../../assets/icons/input.svg";
import { RouteNames } from "../../router";
import Avatar from "../user-avatar/UserAvatar";
import { useAuth } from "../../hooks/user-auth";

interface ISidebarProps {}

const Nav = styled.nav`
  z-index: 20;
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 3s;
  .menu-wrapper {
    width: 100%;
  }
  .UserAvatar {
    display: none;
  }
  @media screen and (max-width: ${vars.$md}) {
    background-color: white;
    position: fixed;
    top: 81px;
    left: -200px;
    display: none;
    transition: all 3s;
    width: 200px;
    height: calc(100% - 80px);
    &.active {
      transition: all 3s;
      left: 0px;
      display: flex;
    }
    .UserAvatar {
      padding: 10px 4px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid ${vars.$lightestGrey};
      svg{ 
        width: 40px;
        height: 40px;
      }
    }
  }
`;
const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const user = useAuth();
  return (
    <Nav className="sidebar ">
      <div className="menu-wrapper">
        <Avatar name={user.name} avatarUrl={user.avatarUrl} type="left" />

        <MenuItem to={RouteNames.TEAMS} title="Teams">
          <GroupPerson />
        </MenuItem>
        <MenuItem to={RouteNames.PLAYERS} title="Players">
          <Person />
        </MenuItem>
      </div>

      <MenuItem to="/singout" title="Exit">
        <Input />
      </MenuItem>
    </Nav>
  );
};

export default Sidebar;
