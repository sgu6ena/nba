import * as React from "react";
import Info from "./info/Info";
import Panel from "./panel/Panel";
import styled from "styled-components";
import { IPlayer } from "../../models/IPlayer";
import { ITeam } from "../../models/ITeam";

export interface IEditCardProps {
  data: IPlayer | ITeam;
  type: "command" | "player";
}

const StyledEditCard = styled.div`
  display: block;
  width: 100%;
  font-size: 24px;
`;

const EditCard: React.FC<IEditCardProps> = ({ data, type }) => {
  return (
    <StyledEditCard>
      <Panel type={type} title={data.name} />
      <Info type={type} data={data} />
    </StyledEditCard>
  );
};

export default EditCard;
