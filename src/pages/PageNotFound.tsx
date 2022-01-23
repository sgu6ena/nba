import * as React from "react";
import { ReactComponent as NotFound } from "../assets/images/NotFound.svg";
import ImageBox from "../components/image-box/ImageBox";
import LayerPage from "../components/LayerPage";

export interface IPageNotFoundProps {}

export function PageNotFound(props: IPageNotFoundProps) {
  return (
    <LayerPage>
    <div style={{  margin: "auto" }}>
      <ImageBox
        title="Page Not Found"
        description="Sorry, we can’t find what you’re looking for"
      >
        <NotFound width="90%" />
      </ImageBox>
    </div>
    </LayerPage>
  );
}
