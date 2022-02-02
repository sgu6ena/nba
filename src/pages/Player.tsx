import * as React from "react";
import { useParams } from "react-router-dom";

import EditCard from "../components/edit-card/EditCard";
import LayerPage from "../components/LayerPage";
import { useAppSelector } from "../hooks/redux";
import { PageNotFound } from "./PageNotFound";

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
        <PageNotFound />
      )}
    </LayerPage>
  );
}
