import * as React from "react";

import Card from "../common/components/card/Card";
import LayerPage from "../common/components/LayerPage";
import { useAppDispatch, useAppSelector } from "../core/redux/redux";

import Spinner from "../common/ui/spinner/spinner";
import {fetchTeams} from "../modules/teams/action";

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
