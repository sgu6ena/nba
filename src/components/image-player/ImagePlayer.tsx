import * as React from "react";
import "./styles.scss";

export interface IImagePlayerProps {
  img: string;
  title?: string;
}

const ImagePlayer: React.FC<IImagePlayerProps> = ({ img, title }) => {
  return (
    <div className="image-wrapper-player">
      <img className="image-player" src={img} alt={title} />
    </div>
  );
};

export default ImagePlayer;
