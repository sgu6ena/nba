import * as React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { playerSlice } from "../store/reducers/PlayerSlice";

import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
import { IPlayer } from "../models/IPlayer";
import { useAuth } from "../hooks/user-auth";
import ApiService from "../services/api";
import Spinner from "../ui/spinner/spinner";
import { fetchPlayers } from "../store/reducers/ActionCreators";

export interface IPlayerListProps {}

export function PlayerList(props: IPlayerListProps) {


  const dispatch = useAppDispatch();
  const { players, isLoading, error } = useAppSelector(
    (state) => state.playerReducer
  );

  React.useEffect(()=>{
    dispatch(fetchPlayers());
    console.log(isLoading);
    
  },[])
  // const token = useAuth().token;
  // const api = new ApiService();
  // const [players, setPlayers] = React.useState([]);

  // React.useEffect(() => {
  //   api
  //     .getTeams(token)
  //     .then((data) => data.data)
  //     .then((data) =>
  //       setPlayers(() =>
  //         data.map(
  //           (player:IPlayer) => (
  //             <Card
  //               title={player.name}
  //               subtitle={player.position}
  //               type="player"
  //               avatarUrl={player.avatarUrl}
  //               key={player.id}
  //               id={player.id}
  //             />
  //           )
  //         )
  //       )
  //     )
  //     .catch(console.log);
  // }, []);

  return (
    <LayerPage>
      {isLoading && <Spinner />}
      {error }
      <div></div>
      {console.log(players)}
      {JSON.stringify(players)}
      <Card
        id={1}
        title="Jaylen Adams"
        place="#10"
        subtitle="Portland trail blazers"
        type="player"
        avatarUrl="https://www.pngplay.com/wp-content/uploads/6/Michael-Jordan-Basketball-Player-Face-PNG.png"
      />
    </LayerPage>
  );
}
