import * as React from "react";
import "./styles.scss";

export interface IImageProps {
  img: string;
  title?: string;
  type: "command" | "player";
}

const Image: React.FC<IImageProps> = ({ img, title, type }) => {
  return (
    <div className={`image-wrapper ${type}`}>
      <img className="image" src={img} alt={title} />
    </div>
  );
};

export default Image;
