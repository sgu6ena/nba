import * as React from "react";

import styled from "styled-components";
import * as vars from "../../../assets/variables/variables";
import { IPlayer } from "../../../models/IPlayer";
import { ITeam } from "../../../models/ITeam";
import InfoPlayer from "./InfoPlayer";
import InfoTeam from "./InfoTeam";

const StyledInfo = styled.div`
  display: flex;
  background: ${vars.$gradient};
  border-radius: 0px 0px 10px 10px;
  color: ${vars.$white};

  @media screen and (max-width: ${vars.$md}) {
    border-radius: 0;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 1.5em;
    span {
      color: ${vars.$red};
    }

    @media screen and (max-width: ${vars.$md}) {
      width: 100%;
      text-align: center;
    }
  }

  .command.left {
    width: 40%;
  }
  .command.right {
    padding: 2.5rem 0;
    width: 60%;
  }
  .player.left {
    width: 45%;
  }
  .player.right {
    padding: 2.5rem 0;
    width: 55%;
  }
`;

export const Value = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 2em;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding-left: 0;
  list-style-type: none;

  @media screen and (max-width: ${vars.$md}) {
    gap: 2rem;
  }

  li {
    display: block;
    width: 40%;
    font-style: normal;
    font-weight: 800;
    font-size: 1em;

    @media screen and (max-width: ${vars.$md}) {
      width: 100%;
      text-align: center;
    }
  }
`;
interface IInfoProps {
  data: IPlayer | ITeam;
  type: "command" | "player";
}

const Info: React.FC<IInfoProps> = ({ data, type }) => {
  return (
    <StyledInfo>
      {/* @ts-ignore */}
      {type === "player" ? InfoPlayer(data) : InfoTeam(data)}
    </StyledInfo>
  );
};




export default Info;
