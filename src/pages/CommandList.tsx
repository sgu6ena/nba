import * as React from "react";

import ApiService from "../services/api";

import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
import { useAuth } from "../hooks/user-auth";

export interface ICommandListProps {}

export function CommandList(props: ICommandListProps) {
  const token = useAuth().token;
  const api = new ApiService();
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    api
      .getTeams()
      .then((res) => res.data)
      .then((teams) => 
        setTeams(() =>
          teams.map(
            (team:any) => (
              <Card
                title={team.name}
                subtitle={team.foundationYear? `Year of foundation: ${team.foundationYear}` :''}
                type="command"
                avatarUrl={team.imageUrl}
                key={team.id}
                id={team.id}
              />
            )
          )
        )
      )
      .catch(console.log);
  }, []);

  return (
    <LayerPage search paginate>
      {teams}
    </LayerPage>
  );
}
