import * as React from "react";
import "./styles.scss";

export interface IPanelProps {
  title: string;
  type: string;
}

const Panel: React.FC<IPanelProps> = ({ type, title }) => {
  return (
    <div className="panel">
      <div>
        <span className="path">{type === "command" ? "Teams" : "Players"}</span>{" "}
        / <span className="path"> {title}</span>
      </div>
      <div>
        <button className="btn pensil" title="edit"></button>
        <button className="btn trash" title="delete"></button>
      </div>
    </div>
  );
};

export default Panel;
