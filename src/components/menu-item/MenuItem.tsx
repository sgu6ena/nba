import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";

interface IMenuItemProps {
  to: string;
  title?: string;
}

const StyledMenuItem = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  padding: 16px;
  color: ${vars.$lightGrey};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${vars.$md}) { padding: 16px 5px;}
  a {
    color: inherit;
    margin-top: 4px;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;

    @media screen and (max-width: ${vars.$md}) {
  
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      svg {
        height: 36px;
        width: 36px;
        margin-right: 20px;
      }
    }
  }

  &:hover {
    transition: all 0.2s;
    color: ${vars.$lightestRed};
  }
  a.active {
    color: ${vars.$red};
  }
  svg {
    height: 24px;
    width: 24px;
  }
  @media screen and (max-width: ${vars.$md}) {
    align-items: start;
  }
`;

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  to,
  title,
  children,
}) => {
  return (
    <StyledMenuItem>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
        <div className="title"> {title}</div>
      </NavLink>
    </StyledMenuItem>
  );
};

export default MenuItem;
