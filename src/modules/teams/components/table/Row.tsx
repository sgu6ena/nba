import React from "react";
import {ReactComponent as Avatar} from "../../../../assets/icons/profile.svg";
import {Link} from "react-router-dom";
import {RouteNames} from "../../../../common/variables/RouteNames";


interface IRowProps {
    id?:number;
    name: string;
    position: string;
    number?: number;
    weight?: number;
    height?: number;
    birthday?: string;
    avatarUrl?: string | null;
}

const age: (birthday: string) => number = (birthday) => {

    return Math.round((+new Date() - +new Date(birthday))/(60*60*24*365*1000));
};

const Row: React.FC<IRowProps> = ({
                                      number = "-",
                                      weight,
                                      height,
                                      birthday,
                                      name,
                                      avatarUrl,
                                      position,
    id

                                  }) => {

    return (


        <tr>
            <td className="number">{number ? number : '-'}</td>
            <td><Link to={RouteNames.PLAYERS+'/'+id?.toString()}>
                <div className="player">
                    <div className="avatar">
                        {
                            avatarUrl
                                ?
                                <img src={avatarUrl} alt={name} height="40"/>
                                :
                                <Avatar width={48} height={48}/>
                        }
                    </div>
                    <div>
                        <div className="name">{name}</div>
                        <div className="position">{position}</div>
                    </div>
                </div>
            </Link>
            </td>
            <td className="hidden-sm">{height ? `${height} sm` : '-'}</td>
            <td className="hidden-sm">{weight ? `${weight} kg` : '-'}</td>
            <td className="hidden-sm">{birthday && age(birthday) > 0 ? age(birthday) : '-'}</td>
        </tr>


    );
};

export default Row;
