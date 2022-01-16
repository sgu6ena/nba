import * as React from "react";
import Row from "./Row";
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
            <td className="number">#</td>
            <td>Player</td>
            <td>Heigth</td>
            <td>Weigth</td>
            <td>Age</td>
          </tr>

          <Row
            position="Forward"
            number={1}
            name="Jaylen Adams "
 
            height={162}
            weight={52}
            avatarUrl="https://s3-alpha-sig.figma.com/img/8c2a/ece8/b52911ba57321df8fb3fb2af84edafbd?Expires=1642982400&Signature=fud3OGGleiLeqcM7cx8S7IVkaDPVvEemGVK4LITk~8Pj5GcWeX0LdtdtTsJK-ptdCJR0I~G8u7QHJvj1VwM02RZGuNK82pbNpyuy2yLBE4jk4Ce-S~PNlzh9Ox1jQutX4BrxT1G0DAMXL2RceFk4a7ofuTssQxdjiPgil56er2fvmDAfq9U2XcqMlWKjlGyDmegQXCuy--KpBFzSr7Mlu8VwE2UWo8plc-Gti25QA12Ava9PRawq-xI~7j82bYbGa~hhxGJ~7dghQkLthRns6JfrdMAfMK97kivjxiA3UNZodNcvkZ8lj5irGBcDk5TkY1aESePQ43DjyTSHXYKG5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
          
          <Row
            position="Defender"
            number={14}
            name="Greg Whittington"
            birthday={new Date(2008,5,6)}
            height={178}
            weight={58}
            avatarUrl="https://s3-alpha-sig.figma.com/img/8a51/9920/774cfa701df2229d773590a5c03aa10e?Expires=1642982400&Signature=LzWsQ0h5gasJibi2qtIpdaBaBggrFfNp6K8x3rjn0ptEhW3FI5bnQIFU~yLLSfpLXVx-VvkTZJMIwC90G8CzORK0F2P-lydt9PsXV5udTMrVOVUd7veCuL9wIbUzwRzHxk7CfXK8xbeUV5CRgUP5r6RjJInrMV-ux~yLA3g-GGp67LVVNLu64mAmiAR8AEjNbTdKkdy2CqhfbtnWkOp1ghLl94IK~NLcF7KEVkFgV-gTPN8EMZf~fQTAXjY2jBqrmBohjXrG5goTe986K8WdkbiMFWaBMtvdFX6cBKEYqwHGDmJBGt8lVKVNG9urY53a6f~yl6u6px1~lJIyO30Yug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"      />
          
          <Row
            position="Forward"
          
            name="Gary Harris "
            birthday={new Date(2008,5,6)}
            height={163}
            weight={62}
            avatarUrl="https://s3-alpha-sig.figma.com/img/855b/7977/d0e3333a5d8e24fd407a71e45ef6e366?Expires=1642982400&Signature=gn2vCS~tuSFEkfR6k~B9SWCoMesNAhkHyAQqH0d0FbYaTKzEEbie0n5yO8TR7lPUyBnKw6yWh6nvgmCkHkjsiWwtraS3W4A~4FKAbilt945ZSGetJcRySzpFe6lcE1DwfN7tqF0qsbH1qtEvE5KEGs70~GCeVDC-6y9b2zJFHXdphnAvpQuAeHPeDhBogH7s~z4eUetvI7Pc15Wgh1h-w3lJHIR52~06w6WWIWR1BE0OZMgeYs7r6JA7tA2zEMvwwdb2aG0qUe61W~SqbQeX1sLFZB64L3xWaYdhkqYLmdCpPMspqQYXxBhJSeZqQ8E-NlhMRMu7akNIz5QYKvzPmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
            
            <Row
            position="Forward"
          
            name="Gary Harris "/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
