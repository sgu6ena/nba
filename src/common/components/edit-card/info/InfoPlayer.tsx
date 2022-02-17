import {StyledUl, Value} from "./Info";
import Image from "../../image/Image";
import {IPlayer} from "../../../../modules/players/interfaces/IPlayer";

const InfoPlayer = ({avatarUrl, birthday, height, name, number, position, team, weight}: IPlayer) => {
    const age = birthday ? Math.round((+new Date() - +new Date(birthday)) / (60 * 60 * 24 * 365 * 1000)) : '-';
    return (
        <>
            <div className={`left player`}>
                <Image avatarUrl={avatarUrl} type={"player"}/>
            </div>

            <div className={`right player`}>
                <h2>
                    {name} <span> {number ?? " #" + number}</span>
                </h2>
                <StyledUl>
                    <li>
                        Position
                        <Value>{position ? position : "-"}</Value>
                    </li>
                    <li>
                        Team
                        <Value>{team}</Value>
                    </li>
                    <li>
                        Weigth
                        <Value>{weight ? weight : "-"}</Value>
                    </li>

                    <li>
                        Heigth
                        <Value>{height ? height : "-"}</Value>
                    </li>
                    <li>
                        Age
                        <Value>{age}</Value>
                    </li>
                </StyledUl>
            </div>
        </>
    );
};

export default InfoPlayer;