import { IPlayer } from "../../../models/IPlayer";
import { StyledUl, Value } from "./Info";
import Image from "../../image/Image";

const InfoPlayer = (data: IPlayer) => {
    return (
      <>
        <div className={`left player`}>
          <Image avatarUrl={data.avatarUrl} type={"player"} />
        </div>
  
        <div className={`right player`}>
          <h2>
            {data.name} <span> {data.number && " #" + data.number}</span>
          </h2>
          <StyledUl>
            <li>
              Position
              <Value>{data.position ? data.position : "-"}</Value>
            </li>
            <li>
              Team
              <Value>{data.team}</Value>
            </li>
            <li>
              Weigth
              <Value>{data.weight ? data.weight : "-"}</Value>
            </li>
  
            <li>
              Heigth
              <Value>{data.height ? data.height : "-"}</Value>
            </li>
            <li>
              Age
              <Value></Value>
            </li>
          </StyledUl>
        </div>
      </>
    );
  };

  export default InfoPlayer;