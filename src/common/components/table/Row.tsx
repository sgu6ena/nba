import React from "react";
import {ReactComponent as Avatar} from "../../../assets/icons/profile.svg";


interface IRowProps {
  name: string;
  position: string;
  number?: number;
  weight?: number;
  height?: number;
  birthday?: Date;
  avatarUrl?: string;
}

const age: (birthday: Date) => number = (birthday) => {
   const today = new Date();
   
  return today.getFullYear()-birthday.getFullYear();
};

const Row: React.FC<IRowProps> = ({
  number = "-",
  weight,
  height,
  birthday,
  name,
  avatarUrl,
  position,
}) => {
  return (
    <tr>
      <td className="number">{number}</td>
      <td>
        <div className="player">
          <div className="avatar">
              {avatarUrl? <img src={avatarUrl} alt={name} height="40" /> : <Avatar  width={48} height={48} />}
           
          </div>
          <div>
            <div className="name">{name}</div>
            <div className="position">{position}</div>
          </div>
        </div>
      </td>
      <td className="hidden-sm">{height?`${height} sm`:'-'}</td>
      <td className="hidden-sm">{weight?`${weight} kg`:'-'}</td>
      <td className="hidden-sm">{birthday?age(birthday):''}</td>
    </tr>
  );
};

export default Row;
