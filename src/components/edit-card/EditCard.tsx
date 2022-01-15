import * as React from "react";
import Info from "./info/Info";
import Panel from "./panel/Panel";

export interface IEditCardProps {}

const EditCard: React.FC <IEditCardProps> = ({}) => {
  return (
    <div>
      <Panel />
      <Info />
    </div>
  );
};

export default EditCard;
