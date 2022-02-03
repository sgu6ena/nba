
import { StyledUl, Value } from "./Info";
import Image from "../../image/Image";
import {ITeam} from "../../../../modules/teams/interfaces/ITeam";

const InfoTeam = (data: ITeam) => {
    return (
      <>
        <div className={`left command`}>
          <Image avatarUrl={data.imageUrl} type={"command"} />
        </div>
  
        <div className={`right player`}>
          <h2>
            {data.name} 
          </h2>
          <StyledUl>
            <li>
              Year of foundation
              <Value>
                {data.foundationYear ? data.foundationYear : "-"}
              </Value>
            </li>
            <li>
              Division
              <Value>{data.division ? data.division : "-"}</Value>
            </li>
            <li>
              Conference
              <Value>{data.conference ? data.conference : "-"}</Value>
            </li>
          </StyledUl>
        </div>
      </>
    );
  };

  export default InfoTeam;