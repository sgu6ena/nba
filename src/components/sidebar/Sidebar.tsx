import * as React from "react";

import MenuItem from "../menu-item/MenuItem";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";

import { ReactComponent as GroupPerson } from "../../assets/icons/group-person.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Input } from "../../assets/icons/input.svg";

interface ISidebarProps {}

const Nav = styled.nav`
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
  @media screen and (max-width: ${vars.$md}) {
    display: none;
    transition: all 0.5s;
  }

`
const Sidebar: React.FunctionComponent<ISidebarProps> = () => (
  <Nav>
    <div>
      <MenuItem to="/commands" title="Teams">
        <GroupPerson />
      </MenuItem>
      <MenuItem to="/players" title="Players">
        <Person />
      </MenuItem>
      <MenuItem to="/commands/test" title="Team test">
        <GroupPerson />
      </MenuItem>
      <MenuItem to="/players/test" title="Player test">
        <Person />
      </MenuItem>
    </div>
   

    <MenuItem to="/singout" title="Exit">
        <Input />
      </MenuItem>
  </Nav>
);

export default Sidebar;
