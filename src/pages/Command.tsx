import * as React from "react";
import { useParams } from "react-router-dom";

import EditCard from "../common/components/edit-card/BigCard";
import LayerPage from "../common/components/LayerPage";
import Table from "../common/components/table/Table";
import { useAppSelector } from "../core/redux/redux";
import { PageNotFound } from "./PageNotFound";

export interface ICommandProps {}

export function Command(props: ICommandProps) {
  const params = useParams();

  const { teams } = useAppSelector((state) => state.teamReducer);

  const thisteam = teams.find((t) => t.id?.toString() === params.id);

  return (
    <LayerPage>
      {thisteam ? (
        <EditCard data={thisteam} type="command" />
      ) : (
        <PageNotFound />
      )}
      <Table />
    </LayerPage>
  );
}
