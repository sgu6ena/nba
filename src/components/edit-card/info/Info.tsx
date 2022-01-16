import * as React from "react";
import Image from "../../image/Image";
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
      <div className={`left ${type}`}>
        <Image img={img} type={type} />
      </div>

      <div className="right">
        <h2>
          {title} <span className="red"> {place}</span>
        </h2>
        <ul>
          <li>
            Position
            <div className="value">Forvard</div>
          </li>
          <li>
            Position
            <div className="value">Forvard</div>
          </li>
          <li>
            Position
            <div className="value">Forvard</div>
          </li>
          <li>
            Position
            <div className="value">Forvard</div>
          </li>
          <li>
            Position
            <div className="value">Forvard</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
