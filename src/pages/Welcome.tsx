import React from "react";

import { ReactComponent as BasketUp } from "../assets/images/Basket-up.svg";
import ImageBox from "../common/components/image-box/ImageBox";

import LayerPage from "../common/components/LayerPage";
import {api} from "../api/api";


const Welcome: React.FC = () => {

  const [version, setVersion] = React.useState("");
  api.getVersion().then((data) => setVersion(data));

  return (
    <LayerPage>
      <div style={{  margin: "auto" }}>
      <ImageBox title="Welcome" description={`version app is ${version}`}>
        <BasketUp height={200} width={300} />
      </ImageBox></div>
    </LayerPage>
  );
};

export default Welcome;
