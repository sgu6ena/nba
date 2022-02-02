import * as React from "react";
import { useParams } from "react-router-dom";

import EditCard from "../components/edit-card/EditCard";
import LayerPage from "../components/LayerPage";
import Table from "../components/table/Table";
import { useAppSelector } from "../hooks/redux";
import { PageNotFound } from "./PageNotFound";

export interface ICommandProps {}

export function Command(props: ICommandProps) {
  const params = useParams();


  const { teams, isLoading, error } = useAppSelector(
    (state) => state.teamReducer
  );

  const thisteam = teams.find((t) => t.id?.toString() === params.id);
  return (
    <LayerPage>
       {thisteam ? (
      <EditCard
        // title="Portland trail blazers"
        data={thisteam}
        type="command"
        // avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"
      />):(
        <PageNotFound/>
      )}
      <Table />
    </LayerPage>
  );
}
