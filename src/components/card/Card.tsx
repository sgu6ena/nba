import * as React from "react";
import Image from "../image/Image";
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
  
        <Image img={img} title={title} type={type} />
     
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
