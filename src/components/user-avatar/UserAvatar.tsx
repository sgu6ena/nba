import * as React from "react";
import Avatar from "../../assets/svg/avatar";


export interface IUserAvatarProps {
  name: string;
  avatarUrl?: string;
  type?: "left" | "right";
}

const UserAvatar: React.FC<IUserAvatarProps> = ({ avatarUrl, name, type }) => {
  return (
    <div className={`UserAvatar ${type}`} style={{display:"flex", alignItems: "center"}} >
        <div className="name">{name}</div>
        {avatarUrl? <img className="image" src={avatarUrl} alt={name} /> :  <Avatar width={40}/>}
     
    </div>
  );
};

export default UserAvatar;
