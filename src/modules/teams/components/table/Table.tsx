import * as React from "react";
import Row from "./Row";
import * as colors from "../../../../common/variables/colors";
import * as sizes from '../../../../common/variables/sizes';
import styled from "styled-components";

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../../api/api";
import {IPlayer} from "../../../players/interfaces/IPlayer";
import {IPlayerResult} from "../../../players/interfaces/IPlayerResult";



const Table: React.FC = () => {

    const params = useParams();

    const [isLoadingTable, setIsLoadingTable] = useState(false);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setIsLoadingTable(true);

        api.getPlayersByTeamId(params?.id)   // @ts-ignore
            .then((data: IPlayerResult) => setPlayers(data.data))
            .finally(() => setIsLoadingTable(false))
    }, [params.id])


    return (<>
            {isLoadingTable ? <h3>Loading players...</h3> :

            players.length?
            <StyledTable>
                    <thead>
                    <tr>
                        <th colSpan={5}>Roster</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="number">#</td>
                        <td>Player</td>
                        <td className="hidden-sm">Heigth</td>
                        <td className="hidden-sm">Weigth</td>
                        <td className="hidden-sm">Age</td>
                    </tr>

                    {players.map((player: IPlayer) => <Row
                        name={player.name}
                        position={player.position}
                        number={player.number}
                        height={player.height}
                        weight={player.weight}
                        avatarUrl={player.avatarUrl ?? player.avatarUrl}
                        birthday={player.birthday}
                        id={player.id}
                    />)}

                    </tbody>
                </StyledTable>
                :
                <h3>No players detected for this team</h3>}
        </>
    );
};

export default Table;

const StyledTable = styled.table`
  background-color: ${colors.$white};
  border-spacing: 0;
  width: 100%;
  border: 1px solid ${colors.$lightGrey};
  border-radius: 10px 10px 0px 0px;
  color: ${colors.$grey};

  @media screen and (max-width: ${sizes.$sm}) {
    margin: 0;
    border: 0;

    .hidden-sm {
      display: none;
    }
  }

  thead {
    tr {
      th {
        padding: 14px 32px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: ${colors.$grey};
        text-align: left;
      }
    }
  }

  tbody {
    tr {
      .number {
        width: 40px;
        text-align: center;
      }

      td {
        transition: all 0.2s;
        text-align: left;
        padding: 7px 32px;
        border-spacing: 0;
        border: none;
        border-top: 1px solid ${colors.$lightGrey};
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        a {
          color: ${colors.$grey}
        }

        .player {
          display: flex;
          align-items: end;

          .avatar {
            height: 48px;
            width: 48px;
            margin-left: -5px;
            display: flex;
            justify-content: center;

            overflow: hidden;
            border-radius: 50%;
            margin-right: 15px;

            img {
              height: 100%;
            }
          }

          .name {
            font-size: 1em;
          }

          .position {
            color: ${colors.$lightGrey};
            font-size: 0.87em;
          }
        }
      }
    }

    tr:hover {
      transition: all 0.3s;
      background-color: ${colors.$lightestGrey1};
      color: ${colors.$darkGrey};

      .position {
        color: ${colors.$darkGrey};
      }
    }
  }
`;
