import * as React from "react";
import Info from "./info/Info";
import Panel from "./panel/Panel";
import "./styles.scss";

export interface IEditCardProps {
  title: string;
  place?: string;
  avatarUrl: string;
  type: "command" | "player";
}

const EditCard: React.FC<IEditCardProps> = ({
  title,
  place,
  avatarUrl,
  type,
}) => {
  return (
    <div className="edit-card">
      <Panel type={type} title={title} />
      <Info avatarUrl={avatarUrl} type={type} title={title}   place={place} />
    </div>
  );
};

export default EditCard;
