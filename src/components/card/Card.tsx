import * as React from "react";
import ImagePlayer from "../image-player/ImagePlayer";
import ImageTeam from "../image-team/ImageTeam";
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
      {console.log(type === "player" )}
      
      {type === "player" ? (
        <ImagePlayer img={img} title={title} />
      ) : (
        <ImageTeam img={img} title={title}/>
      )}
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
