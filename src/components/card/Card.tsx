import * as React from "react";
import "./styles.scss";

interface ICardProps {
  title: string;
  place?: string;
  subtitle: string;
  img: string;
  type: "command" | "player";
}

const Card: React.FunctionComponent<ICardProps> = ({
  title,
  subtitle,
  place,
  img,
  type,
}) => {
  return (
    <div className="card">
      <div className={type}  >
        <img src={img} alt={title}  />
      </div>
      <div className="card_description">
        <div className="title">
          {title}
          <span className="red"> {place}</span>
        </div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default Card;
