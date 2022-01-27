import * as React from "react";

import EditCard from "../components/edit-card/EditCard";
import LayerPage from "../components/LayerPage";
import Table from "../components/table/Table";

export interface ICommandProps {}

export function Command(props: ICommandProps) {
  return (
    <LayerPage>
      <EditCard
        title="Portland trail blazers"
        type="command"
        avatarUrl="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image28-1012x1024.png"
      />
      <Table />
    </LayerPage>
  );
}
