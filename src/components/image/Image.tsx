import * as React from "react";
import "./styles.scss";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as PersonList } from "../../assets/icons/group-person.svg";

export interface IImageProps {
  avatarUrl: string | undefined | null;
  title?: string;
  type: "command" | "player";
}

const Image: React.FC<IImageProps> = ({ avatarUrl, title, type }) => {
  return (
    <div className={`image-wrapper ${type}`}>
      {avatarUrl ? (
        <img className="image" src={avatarUrl} alt={title} />
      ) : type === "player" ? (
        <Person width="100" height="100" />
      ) : (
        <PersonList  width="100" height="100"  />
      )}
    </div>
  );
};

export default Image;
