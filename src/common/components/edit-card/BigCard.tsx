import * as React from "react";
import Info from "./info/Info";
import Panel from "./panel/Panel";
import styled from "styled-components";
import { IPlayer } from "../../../modules/players/interfaces/IPlayer";
import { ITeam } from "../../../modules/teams/interfaces/ITeam";

export interface IBigCardProps {
  data: IPlayer | ITeam;
  type: "command" | "player";
  onDelete?:React.FormEventHandler<HTMLButtonElement>;
}

const BigCard: React.FC<IBigCardProps> = ({ data, type , onDelete}) => {
  return (
    <StyledEditCard>
      <Panel type={type} title={data.name} onDelete={onDelete} />
      <Info type={type} data={data} />
    </StyledEditCard>
  );
};

export default BigCard;

const StyledEditCard = styled.div`
  display: block;
  width: 100%;
  font-size: 24px;
`;
