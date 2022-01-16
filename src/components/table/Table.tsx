import * as React from "react";
import "./style.scss";

export interface ITableProps {}

const Table: React.FC<ITableProps> = (props: ITableProps) => {
  return (
    <div className="table_wrapper">
      <table>
        <thead>
          <tr>
            <th colSpan={5}>заголовок</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>Player</td>
            <td>Heigth</td>
            <td>Weigth</td>
            <td>Age</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Player</td>
            <td>Heigth</td>
            <td>Weigth</td>
            <td>Age</td>
          </tr> <tr>
            <td>#</td>
            <td>Player</td>
            <td>Heigth</td>
            <td>Weigth</td>
            <td>Age</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
