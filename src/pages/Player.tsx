import * as React from "react";
import { useParams } from "react-router-dom";

import EditCard from "../common/components/edit-card/BigCard";
import LayerPage from "../common/components/LayerPage";
import { useAppSelector } from "../core/redux/redux";
import { PageNotFound } from "./PageNotFound";
import ImageBox from "../common/components/image-box/ImageBox";
import {ReactComponent as NotFound} from "../assets/images/NotFound.svg";

export interface IPlayerProps {}

export function Player(props: IPlayerProps) {
  const params = useParams();


  const { players } = useAppSelector(
    (state) => state.playerReducer
  );

  const thisPlayer = players.find((p) => p.id?.toString() === params.id);

  return (
    <LayerPage>
      {thisPlayer ? (
        <EditCard data={thisPlayer}
          type="player"
        />
      ) : (
          <div style={{  margin: "auto" }}>
            <ImageBox
                title="Player Not Found"
                description="Sorry, we can’t find this player"
            >
              <NotFound width="90%" />
            </ImageBox>
          </div>
      )}
    </LayerPage>
  );
}
