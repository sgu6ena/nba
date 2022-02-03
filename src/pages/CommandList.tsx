import * as React from "react";

import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchTeams } from "../store/reducers/ActionCreators";
import Spinner from "../ui/spinner/spinner";

export interface ICommandListProps {}

export function CommandList(props: ICommandListProps) {
  const dispatch = useAppDispatch();
  const { teams, isLoading, error } = useAppSelector(
    (state) => state.teamReducer
  );

  React.useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  return (
    <LayerPage search paginate>
      {isLoading && <Spinner />}
      {error}
      {teams.map((team: any) => (
        <Card
          title={team.name}
          subtitle={
            team.foundationYear  ? `Year of foundation: ${team.foundationYear}` :''
          }
          type="command"
          avatarUrl={team.imageUrl}
          key={team.id}
          id={team.id}
        />
      ))}
    </LayerPage>
  );
}
