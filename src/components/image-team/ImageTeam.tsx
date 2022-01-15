import * as React from "react";
import "./styles.scss";

export interface IImageTeamProps {
  img: string;
  title?: string;
}

const ImageTeam: React.FC<IImageTeamProps> = ({ img, title }) => {
  return (
    <div className="image-wrapper-team">
      <img className="image-team" src={img} alt={title} />
    </div>
  );
};

export default ImageTeam;
