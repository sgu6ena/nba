import * as React from "react";

import ApiService from "../services/api";

import Card from "../components/card/Card";
import LayerPage from "../components/LayerPage";
import { useAuth } from "../hooks/user-auth";


export interface ICommandListProps {}


export function CommandList(props: ICommandListProps) {
  
  
const token = useAuth().token;
    const api = new ApiService();
    let teamsData = api.getTeams().then(data=>data.data).catch(console.log);

    
    let teams: any;
    // @ts-ignore
    teams = teamsData.data.map((team: { name: string; foundationYear: any; imageUrl: string; }) => (<Card
        title={team.name}
        subtitle={`Year of foundation: ${team.foundationYear}`}
        type="command"
        avatarUrl={team.imageUrl}
    />));

  return (
    <LayerPage search paginate>
        {teams}
          {/*<Card*/}
          {/*  title="Portland trail blazers"*/}
          {/*  subtitle="Year of foundation: 1970"*/}
          {/*  type="command"*/}
          {/*  avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"*/}
          {/*/>*/}

          {/*<Card*/}
          {/*  title="Portland trail blazers"*/}
          {/*  subtitle="Year of foundation: 1970"*/}
          {/*  type="command"*/}
          {/*  avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"*/}
          {/*/>*/}
          {/*<Card*/}
          {/*  title="Portland trail blazers"*/}
          {/*  subtitle="Year of foundation: 1970"*/}
          {/*  type="command"*/}
          {/*  avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"*/}
          {/*/>*/}
          {/*<Card*/}
          {/*  title="Portland trail blazers"*/}
          {/*  subtitle="Year of foundation: 1970"*/}
          {/*  type="command"*/}
          {/*  avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"*/}
          {/*/>*/}
          {/*<Card*/}
          {/*  title="Portland trail blazers"*/}
          {/*  subtitle="Year of foundation: 1970"*/}
          {/*  type="command"*/}
          {/*  avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"*/}
          {/*/>*/}
          {/*<Card*/}
          {/*  title="Portland trail blazers"*/}
          {/*  subtitle="Year of foundation: 1970"*/}
          {/*  type="command"*/}
          {/*  avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"*/}
          {/*/>*/}

    </LayerPage>
  );
}
