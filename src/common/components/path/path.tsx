import * as React from "react";
import styled from "styled-components";
import * as colors from "../../variables/colors";


export interface IPanelProps {
  title: string;
  type: string;
}

const StyledPath = styled.div`
  .path {
    color: ${colors.$red};
    text-decoration: none;
  }
`;

const Path: React.FC<IPanelProps> = ({ type, title }) => {
  return (
    <StyledPath>
      <span className="path">{type === "command" ? "Teams" : "Players"}</span>
      {` / `}
      <span className="path"> {title}</span>
    </StyledPath>
  );
};

export default Path;
