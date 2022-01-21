import * as React from "react";

import MenuItem from "../menu-item/MenuItem";
import "./styles.scss";

import { ReactComponent as GroupPerson } from "../../assets/icons/group-person.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Input } from "../../assets/icons/input.svg";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => (
  <nav>
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
  </nav>
);

export default Sidebar;
