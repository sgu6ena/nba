import * as React from "react";
import "./styles.scss";
import styled from "styled-components";
import * as vars from "../../assets/variables/variables";

export interface IImageProps {
  avatarUrl: string;
  title?: string;
  type: "command" | "player";
}

const Image: React.FC<IImageProps> = ({ avatarUrl, title, type }) => {
  return (
    <div className={`image-wrapper ${type}`}>
      <img className="image" src={avatarUrl} alt={title} />
    </div>
  );
};

export default Image;
