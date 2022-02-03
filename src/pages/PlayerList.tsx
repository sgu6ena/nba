import * as React from "react";
import { useAppDispatch, useAppSelector } from "../core/redux/redux";
import { IPlayer } from "../modules/players/interfaces/IPlayer";
import Card from "../common/components/card/Card";
import LayerPage from "../common/components/LayerPage";
import Spinner from "../common/ui/spinner/spinner";
import ImageBox from "../common/components/image-box/ImageBox";
import { ReactComponent as BasketUp } from "../assets/images/Basket-up.svg";
import {fetchPlayers} from "../modules/players/actions";

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
    </LayerPage>
  );
}
