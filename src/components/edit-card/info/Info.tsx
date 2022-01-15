import * as React from "react";
import ImagePlayer from "../../image-player/ImagePlayer";
import ImageTeam from "../../image-team/ImageTeam";
import "./styles.scss";

export interface IInfoProps {
  img: string;
  title: string;
  type: "command" | "player";
  place?: string;
}

const Info: React.FC<IInfoProps> = ({ img, type, title, place }) => {
  return (
    <div className={`info ${type}`}>
      <div className="left">
        {type === "player" ? (
          <ImagePlayer img={img} />
        ) : (
          <ImageTeam img={img} />
        )}
      </div>

      <div className="right">
        <h2>
          {title} <span className="red"> {place}</span>{" "}
        </h2>
        <ul className="properties">
          <li className="child">Position
          <div className="value">Forvard</div>
          </li>
          <li className="child">Position
          <div className="value">Forvard</div>
          </li>
          <li className="child">Position
          <div className="value">Forvard</div>
          </li>
          <li className="child">Position
          <div className="value">Forvard</div>
          </li>
          <li className="child">Position
          <div className="value">Forvard</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
