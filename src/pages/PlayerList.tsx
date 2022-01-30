import * as React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPlayers } from "../store/reducers/ActionCreators";
import { IPlayer } from "../models/IPlayer";

import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
import Spinner from "../ui/spinner/spinner";
import { ReactComponent as BasketUp } from "../assets/images/Basket-up.svg";
import ImageBox from "../components/image-box/ImageBox";

export interface IPlayerListProps {}

export function PlayerList(props: IPlayerListProps) {
  const dispatch = useAppDispatch();
  const { players, isLoading, error } = useAppSelector(
    (state) => state.playerReducer
  );

  React.useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <LayerPage search paginate>
      {isLoading && <Spinner />}
      {error}
      {players.length ? (
        players.map((player: IPlayer) => (
          <Card
            title={player.name}
            subtitle={player.position}
            type="player"
            avatarUrl={player.avatarUrl}
            key={player.id}
            id={player.id}
          />
        ))
      ) : (
        <div style={{  margin: "auto" }}>
        <ImageBox
          title="Empty here"
          description="Add new teams to continue"
        >
          <BasketUp width="100%"  height="auto"/>
        </ImageBox></div>
      )}
      {/* <Card
        id={1}
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      /> */}
    </LayerPage>
  );
}
