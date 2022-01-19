import * as React from 'react';
import { Link } from 'react-router-dom';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/"> тест </Link>
      </li>
      <li>
        <Link to="/commands"> commands </Link>
      </li>
      <li><Link to="dsd">404</Link></li>
    </ul>
  </nav>
  );
};

export default Sidebar;
