import * as React from "react";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import "./styles.scss";

export interface IUserAvatarProps {
  name: string;
  avatarUrl?: string;
  type?: "left" | "right";
}

const UserAvatar: React.FC<IUserAvatarProps> = ({ avatarUrl, name, type }) => {
  return (
    <div
      className={`UserAvatar ${type}`}
      style={{
        flexDirection: type === "left" ? "row-reverse" : "row",
      }}
    >
      <div className="name">{name}</div>
      {avatarUrl ? (
        <img className="image" src={avatarUrl} alt={name} />
      ) : (
        <Profile  />
      )}
    </div>
  );
};

export default UserAvatar;
