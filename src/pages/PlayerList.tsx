import * as React from "react";
import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
export interface IPlayerListProps {}

export function PlayerList(props: IPlayerListProps) {
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
