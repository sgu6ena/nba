import * as React from "react";
import "./styles.scss";

interface ICardProps {
  title: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ title }) => {
  return (
    <div className="card">
      <div className="card_image"></div>
      <div className="card_description"> {title}</div>
    </div>
  );
};

export default Card;
