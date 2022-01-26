import * as React from "react";
import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { playerSlice } from "../store/reducers/PlayerSlice";
export interface IPlayerListProps {}

export function PlayerList(props: IPlayerListProps) {


  const {} = useAppSelector(state=>state.playerReducer);
  const {playersFetching} = playerSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <LayerPage search paginate>
      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />

      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />
      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />

      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />
      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />
      <Card
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />
    </LayerPage>
  );
}
