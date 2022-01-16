import * as React from "react";
import Image from "../image/Image";
import "./styles.scss";

interface ICardProps {
  title: string;
  place?: string;
  subtitle: string;
  avatarUrl: string;
  type: "command" | "player";
}

const Card: React.FunctionComponent<ICardProps> = ({
  title,
  subtitle,
  place,
  avatarUrl,
  type,
}) => {
  return (
    <div className="card">
  
        <Image avatarUrl={avatarUrl} title={title} type={type} />
     
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
